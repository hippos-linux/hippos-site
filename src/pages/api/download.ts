export const prerender = false;

import type { APIRoute } from 'astro';
import { verifyAuthToken } from '../../lib/auth';
import { DEFAULT_TARGETS, getStoredManifest, isArch, isUpdateTarget } from '../../lib/manifest';

export const GET: APIRoute = async ({ locals, cookies, url: requestUrl }) => {
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

  const requested = requestUrl.searchParams.get('arch') ?? 'amd64';
  const target = isArch(requested) ? DEFAULT_TARGETS[requested] : requested;
  if (!isUpdateTarget(target)) {
    return new Response(JSON.stringify({ error: 'unknown_arch' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stored = await getStoredManifest(bucket, 'update', target);
  if (!stored) {
    return new Response(JSON.stringify({ error: 'manifest_not_found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const manifest = await stored.object.json<{ version: string }>();
  const base = (env.DOWNLOAD_BASE_URL as string).replace(/\/$/, '');
  const url = `${base}/hippos-${stored.name}-${manifest.version}.img.zst`;

  return new Response(
    JSON.stringify({ url }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
};
