export type MusicProject = {
	title: string;
	slug: string;
	icon: string;
	date: string;
	colour: string;
	description: string[];
	links: Link[];
};

export type Link = {
	name: string;
	to: string;
};

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
