import type { UpdateTarget } from '../lib/manifest';

export interface ImageInfo {
	target: UpdateTarget;
	title: string;
	summary: string;
	media: string;
	illustration: string;
	experimental?: boolean;
}

export const IMAGES: ImageInfo[] = [
	{
		target: 'amd64-generic',
		title: 'PCs and x86 handhelds',
		summary:
			'For 64-bit x86 PCs, mini PCs and handhelds such as the Steam Deck, ROG Ally and Legion Go that boot in UEFI mode.',
		media: 'A USB drive or external SSD of 32 GB or more. About 7 GB to download, 12 GB once written.',
		illustration: '/downloads/pc.svg',
	},
	{
		target: 'arm64-rpi',
		title: 'Raspberry Pi 4 and 5',
		summary: 'One image for the Raspberry Pi 4 and Raspberry Pi 5.',
		media: 'A microSD card or USB drive of 32 GB or more. About 5 GB to download, 11 GB once written.',
		illustration: '/downloads/raspberry-pi.svg',
	},
	{
		target: 'arm64-rk3326',
		title: 'R36S and RK3326 handhelds',
		summary:
			'For the R36S. Copy the .dtb from the handheld\'s original card into the stock folder on the boot partition before the first boot, so HippOS can set up its screen. Other RK3326 handhelds: see devices/README.txt on the boot partition.',
		media: 'A microSD card of 16 GB or more. About 4 GB to download, 10 GB once written.',
		illustration: '/downloads/r36s.svg',
		experimental: true,
	},
];
