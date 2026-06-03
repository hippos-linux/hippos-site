export const prerender = false;

import type { APIRoute } from 'astro';
import { createAuthToken } from '../../../lib/auth';

export const GET: APIRoute = async ({ url, locals, redirect, cookies }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const savedState = cookies.get('discord_state')?.value;

  cookies.delete('discord_state', { path: '/' });

  if (!code || !state || state !== savedState) {
    return redirect('/?auth=error', 302);
  }

  const env = locals.runtime.env;

  const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: env.DISCORD_REDIRECT_URI,
    }),
  });

  if (!tokenRes.ok) return redirect('/?auth=error', 302);
  const { access_token } = await tokenRes.json() as { access_token: string };

  const memberRes = await fetch(
    `https://discord.com/api/users/@me/guilds/${env.DISCORD_GUILD_ID}/member`,
    { headers: { Authorization: `Bearer ${access_token}` } },
  );

  if (!memberRes.ok) return redirect('/?auth=no_access', 302);
  const member = await memberRes.json() as { roles?: string[] };

  if (!member.roles?.includes(env.DISCORD_REQUIRED_ROLE_ID)) {
    return redirect('/?auth=no_access', 302);
  }

  const token = await createAuthToken(env.COOKIE_SECRET);
  cookies.set('hippos_auth', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
  });

  return redirect('/', 302);
};
