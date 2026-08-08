export const prerender = false;

import type { APIRoute } from 'astro';
import { validateDevToken, extractBearerToken } from '../../../../../lib/betaAuth';

export const GET: APIRoute = async ({ request, params, locals }) => {
  const { arch, version } = params;
  if (!arch || !version) {
    return new Response('Bad Request', { status: 400 });
  }

  const env = locals.runtime.env as any;
  const kv = env.BETA_TOKENS as KVNamespace | undefined;
  const token = extractBearerToken(request);
  if (!token || !kv || !await validateDevToken(token, kv)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
  if (!bucket) {
    return new Response('Service unavailable', { status: 503 });
  }

  const key = `update/dev/kernel/linux-image-${version}_${arch}.deb`;
  const obj = await bucket.get(key);
  if (!obj) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(obj.body, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.debian.binary-package',
      'Content-Disposition': `attachment; filename="linux-image-${version}_${arch}.deb"`,
      'Content-Length': String(obj.size),
    },
  });
};
