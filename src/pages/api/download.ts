export const prerender = false;

import type { APIRoute } from 'astro';
import { verifyAuthToken } from '../../lib/auth';

export const GET: APIRoute = async ({ locals, cookies }) => {
  const env = locals.runtime.env;
  const authToken = cookies.get('hippos_auth')?.value;

  if (!authToken || !await verifyAuthToken(authToken, env.COOKIE_SECRET)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(
    JSON.stringify({ url: env.DOWNLOAD_URL, uploadedAt: env.DOWNLOAD_UPLOADED_AT ?? null }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
};
