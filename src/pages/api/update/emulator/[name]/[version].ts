export const prerender = false;

import type { APIRoute } from 'astro';
import { verifyAuthToken } from '../../../../../lib/auth';

export const GET: APIRoute = async ({ params, locals, cookies }) => {
  const env = locals.runtime.env;
  const authToken = cookies.get('hippos_auth')?.value;
  if (!authToken || !await verifyAuthToken(authToken, env.COOKIE_SECRET)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, version } = params;
  if (!name || !version) {
    return new Response('Bad Request', { status: 400 });
  }

  const bucket = (locals.runtime.env as any).HIPPOS_IMAGES as R2Bucket | undefined;
  if (!bucket) {
    return new Response('Service unavailable', { status: 503 });
  }

  const key = `update/emulators/hippos-emulator-${name}-${version}.tar.zst`;
  const obj = await bucket.get(key);
  if (!obj) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(obj.body, {
    status: 200,
    headers: {
      'Content-Type': 'application/zstd',
      'Content-Disposition': `attachment; filename="hippos-emulator-${name}-${version}.tar.zst"`,
      'Content-Length': String(obj.size),
    },
  });
};
