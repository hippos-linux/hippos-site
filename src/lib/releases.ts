import { getCollection, type CollectionEntry } from 'astro:content';
import type { Arch } from './manifest';

type Release = CollectionEntry<'releases'>;

function compareVersions(a: string, b: string): number {
	const left = a.split('.').map(Number);
	const right = b.split('.').map(Number);
	for (let i = 0; i < Math.max(left.length, right.length); i++) {
		const difference = (left[i] ?? 0) - (right[i] ?? 0);
		if (difference !== 0) return difference;
	}
	return 0;
}

export async function releasesNewestFirst(): Promise<Release[]> {
	return (await getCollection('releases')).sort((a, b) => compareVersions(b.data.version, a.data.version));
}

export async function releasesNewestFirstFor(arch: Arch): Promise<Release[]> {
	return (await releasesNewestFirst()).filter((release) => release.data.arch === arch);
}

export function releaseAnchor(release: Release): string {
	return `v${release.data.version}-${release.data.arch}`;
}
