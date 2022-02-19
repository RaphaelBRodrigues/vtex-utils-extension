
function getDeeplyProp(object: Object, path: string) {
	try {
		const propArray = path.match(/(?<={)(\w|\.|\d)+(?=})/g);

		const prop = propArray?.reduce((obj: Object, key) => {
			return obj?.[key as keyof Object];
		}, object);

		return [prop, propArray?.at(-1)];

	} catch (err) {
		console.error(err);
		return [false, false]
	}
}

export default getDeeplyProp;