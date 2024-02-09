type Mods = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mods: Mods = {},
	additional?: Array<string | undefined>
): string {
	const additionalClassNames =
		additional != undefined ? additional.filter(Boolean) : [];
	return [
		cls,
		...additionalClassNames,
		...Object.entries(mods)
			.filter(([, value]) => Boolean(value))
			.map(([className]) => className),
	].join(" ");
}
