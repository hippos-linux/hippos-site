async function computeHmac(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function createAuthToken(secret: string): Promise<string> {
  const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const data = `1:${expiry}`;
  const sig = await computeHmac(data, secret);
  return `${data}:${sig}`;
}

export async function verifyAuthToken(token: string, secret: string): Promise<boolean> {
  const parts = token.split(':');
  if (parts.length !== 3) return false;
  const [status, expiry, sig] = parts;
  if (status !== '1') return false;
  if (Date.now() > parseInt(expiry, 10)) return false;
  const expectedSig = await computeHmac(`${status}:${expiry}`, secret);
  return expectedSig === sig;
}
