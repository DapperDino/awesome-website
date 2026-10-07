const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Prefix a site-relative path with the configured `base` (e.g. for GitHub Pages).
export function withBase(path: string) {
	return base + (path.startsWith('/') ? path : `/${path}`);
}
