export const prerender = false;

import type { APIRoute } from 'astro';
import { validateBetaToken, extractBearerToken } from '../../../../lib/betaAuth';

export const GET: APIRoute = async ({ request, params, locals }) => {
  const version = params.version;
  if (!version) {
    return new Response('Bad Request', { status: 400 });
  }

  const env = locals.runtime.env as any;
  const kv = env.BETA_TOKENS as KVNamespace | undefined;
  const token = extractBearerToken(request);
  if (!token || !kv || !await validateBetaToken(token, kv)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
  if (!bucket) {
    return new Response('Service unavailable', { status: 503 });
  }

  const key = `update/hippos-rootfs-${version}.tar.zst`;
  const obj = await bucket.get(key);
  if (!obj) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(obj.body, {
    status: 200,
    headers: {
      'Content-Type': 'application/zstd',
      'Content-Disposition': `attachment; filename="hippos-rootfs-${version}.tar.zst"`,
      'Content-Length': String(obj.size),
    },
  });
};
