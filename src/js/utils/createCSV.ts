
function createCSV(content: Object[]) {
	const objectKeys = [...new Set(content.map((item) => {
		return Object.keys(item);
	}).flat(1))];

	const csvHeader = objectKeys.join(',');

	const	csvBody = content.map((item: Object) => {
		return objectKeys.map((key) => {
			const column = item[key as keyof Object] ??  '__NULL__';

			return  ['array', 'object']
				.includes(typeof column)
				? JSON.stringify(column)
				: column;
		})
			.join(',');
	})
		.join('\n');

 	return `${csvHeader}\n${csvBody}`;
}

export default createCSV;
