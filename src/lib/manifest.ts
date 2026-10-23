export const STABLE_MANIFEST_KEY = 'update/manifest-amd64.json';

export interface UpdateManifest {
	version: string;
	payloads: {
		emulators: Record<string, { version: string }>;
	};
}

export async function readStableManifest(bucket: R2Bucket | undefined): Promise<UpdateManifest | null> {
	const obj = await bucket?.get(STABLE_MANIFEST_KEY);
	return obj ? obj.json<UpdateManifest>() : null;
}
