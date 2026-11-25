export type Status = 'working' | 'tested' | 'experimental' | 'unreported';

export interface Device {
	name: string;
	status: Status;
	note?: string;
}

export interface DeviceGroup {
	title: string;
	image: string;
	note?: string;
	devices: Device[];
}

// Set a device's status only from tester reports or our own testing; use 'unreported' when nobody has tried it.
export const STATUS_LABELS: Record<Status, string> = {
	working: 'Works (tester reports)',
	tested: 'Works (tested by us)',
	experimental: 'Experimental',
	unreported: 'No reports yet',
};

export const DEVICE_GROUPS: DeviceGroup[] = [
	{
		title: 'PC handhelds',
		image: 'PC image',
		note: 'Built-in controls moved to InputPlumber recently and have not been rechecked on every model yet.',
		devices: [
			{ name: 'Steam Deck', status: 'working', note: 'The trackpads are inverted while Steam runs in desktop mode.' },
			{ name: 'ROG Ally / Ally X', status: 'working' },
			{ name: 'MSI Claw A1M', status: 'working' },
			{ name: 'AYANEO 2021', status: 'working' },
			{ name: 'OneXPlayer Mini', status: 'working' },
			{ name: 'Legion Go', status: 'unreported' },
		],
	},
	{
		title: 'Mini PCs and desktops',
		image: 'PC image',
		devices: [
			{ name: 'Beelink SER9, Mini S12 Pro, SEi8', status: 'working' },
			{ name: 'Minisforum HX90', status: 'working' },
			{ name: 'Intel NUC6', status: 'working' },
			{ name: 'Desktop PCs with AMD, Intel or NVIDIA graphics', status: 'working', note: 'Older NVIDIA cards get a legacy driver.' },
		],
	},
	{
		title: 'Raspberry Pi',
		image: 'Raspberry Pi image',
		devices: [
			{ name: 'Raspberry Pi 5', status: 'tested' },
			{ name: 'Raspberry Pi 4', status: 'tested', note: 'Fewer systems run at full speed than on a Pi 5.' },
		],
	},
	{
		title: 'RK3326 handhelds',
		image: 'RK3326 image',
		devices: [
			{ name: 'R36S', status: 'experimental', note: 'Needs a file from its original card for the screen.' },
			{ name: 'R36S clones, RG351M/V, Odroid Go, RGB10 and others', status: 'unreported', note: 'Clone screens differ from unit to unit.' },
		],
	},
];
