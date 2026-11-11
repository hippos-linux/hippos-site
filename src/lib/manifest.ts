export const ARCHES = ['amd64', 'arm64'] as const;
export type Arch = (typeof ARCHES)[number];

export const ARCH_LABELS: Record<Arch, string> = {
	amd64: 'PC and handhelds (x86-64)',
	arm64: 'Raspberry Pi 4 and 5',
};

export function isArch(value: string): value is Arch {
	return (ARCHES as readonly string[]).includes(value);
}

export function stableManifestKey(arch: Arch): string {
	return `update/manifest-${arch}.json`;
}

export interface UpdateManifest {
	version: string;
	payloads: {
		emulators: Record<string, { version: string }>;
	};
}

export async function readStableManifest(bucket: R2Bucket | undefined): Promise<UpdateManifest | null> {
	const obj = await bucket?.get(stableManifestKey('amd64'));
	return obj ? obj.json<UpdateManifest>() : null;
}
