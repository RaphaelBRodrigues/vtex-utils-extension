
function getDeeplyProp(object: Object, path: string) {


	const propArray = path.match(/(?<={)(\w|\.|\d)+(?=})/g);

	const prop = propArray?.reduce((obj: Object, key) => {
		return obj?.[key as keyof Object];
	}, object);

	return [prop, propArray?.slice(1)];
}

export default getDeeplyProp;