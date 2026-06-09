export const prerender = false;

import type { APIRoute } from 'astro';
import { verifyAuthToken } from '../../lib/auth';

export const GET: APIRoute = async ({ locals, cookies }) => {
  const env = locals.runtime.env as any;
  const authToken = cookies.get('hippos_auth')?.value;

  if (!authToken || !await verifyAuthToken(authToken, env.COOKIE_SECRET)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
  if (!bucket) {
    return new Response(JSON.stringify({ error: 'not_configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const obj = await bucket.get('update/manifest.json');
  if (!obj) {
    return new Response(JSON.stringify({ error: 'manifest_not_found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const manifest = await obj.json<{ version: string }>();
  const base = (env.DOWNLOAD_BASE_URL as string).replace(/\/$/, '');
  const url = `${base}/hippos-amd64-${manifest.version}.img.zst`;

  return new Response(
    JSON.stringify({ url }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
};
