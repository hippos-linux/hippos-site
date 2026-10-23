// Display names for emulator package ids in the update manifest. Variant
// packages share a name so they appear once; ids missing here show as-is.
const EMULATOR_NAMES: Record<string, string> = {
	amiberry: "Amiberry",
	applewin: "AppleWin",
	ares: "ares",
	azahar: "Azahar",
	bigpemu: "BigPEmu",
	cemu: "Cemu",
	"citron-neo": "Citron Neo",
	clk: "Clock Signal",
	demul: "Demul",
	"dolphin-emu": "Dolphin",
	"dosbox-staging": "DOSBox Staging",
	"dosbox-x": "DOSBox-X",
	duckstation: "DuckStation",
	easyrpg: "EasyRPG",
	eden: "Eden",
	eka2l1: "EKA2L1",
	flycast: "Flycast",
	fsuae: "FS-UAE",
	gsplus: "GSplus",
	hatari: "Hatari",
	"hypseus-singe": "Hypseus Singe",
	ikemen: "Ikemen GO",
	lightspark: "Lightspark",
	"lindbergh-loader": "Lindbergh Loader",
	mame: "MAME",
	melonds: "melonDS",
	model2emu: "Model 2 Emulator",
	mupen64plus: "Mupen64Plus",
	openbor: "OpenBOR",
	openmsx: "openMSX",
	pcsx2: "PCSX2",
	play: "Play!",
	ppsspp: "PPSSPP",
	"python-pygame2": "Pygame",
	"python-pyxel": "Pyxel",
	redream: "Redream",
	retroarch: "RetroArch",
	rpcs3: "RPCS3",
	ruffle: "Ruffle",
	ryujinx: "Ryujinx",
	samcoupe: "SimCoupé",
	scummvm: "ScummVM",
	shadps4: "shadPS4",
	"shadps4-qtlauncher": "shadPS4",
	snes9x: "Snes9x",
	"solarus-engine": "Solarus",
	sugarbox: "Sugarbox",
	supermodel: "Supermodel",
	"supermodel-es": "Supermodel",
	"supermodel-legacy": "Supermodel",
	thextech: "TheXTech",
	tic80: "TIC-80",
	tsugaru: "Tsugaru",
	vice: "VICE",
	vita3k: "Vita3K",
	vpinball: "Visual Pinball",
	x16emu: "Commander X16",
	xemu: "xemu",
	xenia: "Xenia",
	"xenia-canary": "Xenia",
	"xenia-edge": "Xenia",
	xroar: "XRoar",
	ymir: "Ymir",
};

const FEATURED = new Set([
	"RPCS3",
	"PCSX2",
	"Dolphin",
	"Cemu",
	"Eden",
	"DuckStation",
	"shadPS4",
	"xemu",
	"Xenia",
	"RetroArch",
]);

export interface EmulatorEntry {
	name: string;
	featured: boolean;
}

export function emulatorsFromManifest(packageIds: string[]): EmulatorEntry[] {
	const names = [...new Set(packageIds.map((id) => EMULATOR_NAMES[id] ?? id))];
	return names
		.map((name) => ({ name, featured: FEATURED.has(name) }))
		.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
}
