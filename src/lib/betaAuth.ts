export async function validateBetaToken(token: string, kv: KVNamespace): Promise<boolean> {
  if (!token) return false;
  const val = await kv.get(token);
  return val !== null;
}

export function extractBearerToken(request: Request): string | null {
  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  return auth.slice(7).trim() || null;
}
