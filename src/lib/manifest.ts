export const ARCHES = ['amd64', 'arm64'] as const;
export type Arch = (typeof ARCHES)[number];

export function isArch(value: string): value is Arch {
	return (ARCHES as readonly string[]).includes(value);
}

export const UPDATE_TARGETS = ['amd64-generic', 'arm64-rpi', 'arm64-rk3326'] as const;
export type UpdateTarget = (typeof UPDATE_TARGETS)[number];

export function isUpdateTarget(value: string): value is UpdateTarget {
	return (UPDATE_TARGETS as readonly string[]).includes(value);
}

export const DEFAULT_TARGETS: Record<Arch, UpdateTarget> = {
	amd64: 'amd64-generic',
	arm64: 'arm64-rpi',
};

const LEGACY_MANIFEST_NAMES: Partial<Record<UpdateTarget, Arch>> = {
	'amd64-generic': 'amd64',
	'arm64-rpi': 'arm64',
};

export interface StoredManifest {
	object: R2ObjectBody;
	name: string;
}

export async function getStoredManifest(
	bucket: R2Bucket,
	prefix: string,
	target: UpdateTarget,
): Promise<StoredManifest | null> {
	for (const name of [target, LEGACY_MANIFEST_NAMES[target]]) {
		if (name === undefined) {
			continue;
		}
		const object = await bucket.get(`${prefix}/manifest-${name}.json`);
		if (object) {
			return { object, name };
		}
	}
	return null;
}

export interface UpdateManifest {
	version: string;
	payloads: {
		emulators: Record<string, { version: string }>;
	};
}

export async function readStableManifest(bucket: R2Bucket | undefined): Promise<UpdateManifest | null> {
	const stored = bucket ? await getStoredManifest(bucket, 'update', DEFAULT_TARGETS.amd64) : null;
	return stored ? stored.object.json<UpdateManifest>() : null;
}
