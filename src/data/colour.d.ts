declare module "colorthief" {
	export type GrabbedColour = [number, number, number];

	export function getColor(img: string, quality?: number) {
		return Promise<[number, number, number]>();
	}
	export function getPalette(img: string, colorCount?: number, quality?: number) {
		return Promise<[number, number, number][]>();
	}
}
