import type { AstroCookies } from 'astro';
import { verifyAuthToken } from './auth';

export async function hasDownloadAccess(env: { COOKIE_SECRET?: string } | undefined, cookies: AstroCookies): Promise<boolean> {
	const authToken = cookies.get('hippos_auth')?.value;
	return env?.COOKIE_SECRET && authToken ? verifyAuthToken(authToken, env.COOKIE_SECRET) : false;
}
