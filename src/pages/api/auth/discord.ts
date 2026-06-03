export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals, redirect, cookies }) => {
  const env = locals.runtime.env;
  const state = crypto.randomUUID();

  cookies.set('discord_state', state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 600,
    path: '/',
  });

  const params = new URLSearchParams({
    client_id: env.DISCORD_CLIENT_ID,
    redirect_uri: env.DISCORD_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify guilds.members.read',
    state,
  });

  return redirect(`https://discord.com/oauth2/authorize?${params}`, 302);
};
