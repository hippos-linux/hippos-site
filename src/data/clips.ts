export interface Clip {
	id: string;
	title: string;
	caption: string;
}

// To add a clip, put <id>.webm, <id>.mp4 and a poster <id>.webp in public/videos and list it here. List first the clip the hero should start with.
export const CLIPS: Clip[] = [
	{ id: 'carousel', title: 'System carousel', caption: 'Every system has its own world. Scroll through your library from the couch.' },
	{ id: 'game-list', title: 'Game lists', caption: 'Art, videos, descriptions and ratings for every game.' },
	{ id: 'lobby', title: 'Netplay lobby', caption: 'Join an online game or host your own, with chat.' },
	{ id: 'command-center', title: 'Command center', caption: 'Save states, keyboard and settings in any game.' },
];

export const clipSources = (id: string) => ({
	webm: `/videos/${id}.webm`,
	mp4: `/videos/${id}.mp4`,
	poster: `/videos/${id}.webp`,
});
