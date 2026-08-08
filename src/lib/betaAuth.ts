export async function validateBetaToken(token: string, kv: KVNamespace): Promise<boolean> {
  if (!token) return false;
  const val = await kv.get(token);
  return val !== null;
}

// Dev-channel access requires the token's KV value to be exactly 'dev' —
// ordinary beta tokens (any other value) don't qualify, even though they
// pass validateBetaToken.
export async function validateDevToken(token: string, kv: KVNamespace): Promise<boolean> {
  if (!token) return false;
  const val = await kv.get(token);
  return val === 'dev';
}

export function extractBearerToken(request: Request): string | null {
  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  return auth.slice(7).trim() || null;
}
