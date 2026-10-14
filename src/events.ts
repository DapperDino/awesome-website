export const EVENT_TYPES = [
	{
		collection: 'exhibitions',
		path: '/exhibitions',
		label: 'Exhibitions',
		blurb: 'Where my work has been on show.',
	},
	{
		collection: 'residencies',
		path: '/residencies',
		label: 'Residencies',
		blurb: 'Time spent making work in other places.',
	},
	{
		collection: 'workshops',
		path: '/workshops',
		label: 'Workshops',
		blurb: 'Come and make something with me.',
	},
] as const;

export type EventType = (typeof EVENT_TYPES)[number];

const fmt = (d: Date) =>
	d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export function formatDateRange(start: Date, end?: Date) {
	if (!end || end.getTime() === start.getTime()) return fmt(start);
	return `${fmt(start)} – ${fmt(end)}`;
}
