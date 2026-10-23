export const prerender = false;

import type { APIRoute } from 'astro';

// The devlog was retired in favour of the changelog; keep old links working.
export const GET: APIRoute = ({ redirect }) => redirect('/changelog/', 301);
