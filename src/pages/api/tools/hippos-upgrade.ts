export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const env = locals.runtime.env as any;
  const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
  if (!bucket) {
    return new Response('Service unavailable', { status: 503 });
  }

  const obj = await bucket.get('tools/hippos-upgrade');
  if (!obj) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(obj.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="hippos-upgrade"',
    },
  });
};
