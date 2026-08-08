export const prerender = false;

import type { APIRoute } from 'astro';
import { validateDevToken, extractBearerToken } from '../../../lib/betaAuth';

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env as any;
  const bucket = env.HIPPOS_IMAGES as R2Bucket | undefined;
  if (!bucket) {
    return new Response(JSON.stringify({ error: 'not_configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = extractBearerToken(request);
  const kv = env.BETA_TOKENS as KVNamespace | undefined;
  if (!token || !kv || !await validateDevToken(token, kv)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const obj = await bucket.get('update/dev/manifest-amd64.json');
  if (!obj) {
    return new Response(JSON.stringify({ error: 'not_found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(await obj.text(), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  });
};
