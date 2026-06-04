export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, locals }) => {
  const version = params.version;
  if (!version) {
    return new Response('Bad Request', { status: 400 });
  }

  const bucket = (locals.runtime.env as any).HIPPOS_IMAGES as R2Bucket | undefined;
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
