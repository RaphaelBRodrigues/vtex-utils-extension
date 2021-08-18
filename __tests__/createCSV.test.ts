import createCSV from '../src/js/utils/createCSV';

describe('Testing csv creation', () => {
	it('should return a empty string', () => {
		const obj = {};

		const csv = createCSV([obj]);

		expect(csv.trim()).toBe('');
	});

	it('should return a csv with header and one row', () => {
		const content = [{
			name: 'Raphael',
			age: 19,
			role: 'Developer'
		}];

		const csv = createCSV(content);

		expect(csv.match(/\n/g)?.length).toStrictEqual(1);

		expect(csv.split('\n')[0] === Object.keys(content[0]).join(','))
			.toBeTruthy();

		expect(csv.split('\n')[1].replace(/"/g, '') === `${Object.values(content[0]).join(',')}`)
			.toBeTruthy();
 	});

	it('should return a csv with header and two row', () => {
		const content = [
			{
				language: 'PHP',
				test: 9,
			},
			{
				language: 'Javascript',
				test: 2,
			}
		];

		const csv = createCSV(content);

		expect(csv.match(/,/g)?.length).toStrictEqual(3);
		expect(csv.match(/\n/g)?.length).toStrictEqual(2);

		expect(csv.split('\n')[2].includes('Javascript')).toBeTruthy();


	});

	it('should merge two different objects and create the csv with blank columns', () => {
		const content = [
			{
				id: 1,
				response: 'it works'
			},
			{
				id: 2,
				hello: 'hello',
				status: 'OK'
			},
			{
				id: 3,
				hello: 'hello'
			},
			{},
			{
				id: 4,
				response: 'Everything ok',
				hello: 'hi',
				status: 'alright'
			},
		];

		const csv = createCSV(content);
		const splitedCSV = csv.split('\n');

		expect(splitedCSV[4].match(/NULL/gi)?.length).toStrictEqual(4);

		expect(splitedCSV.length).toStrictEqual(6);

		expect(splitedCSV[1] === Object.keys(content[0]).join(',')).toBeFalsy();
	});

	it('should parse sub objects and arrays to json', () => {
		const content = [{
			id: 1,
			data: {
				name: 'first object',
				creationTime: new Date().toLocaleTimeString(),
				permissions: ['read', {
					type: 'write',
					restriction: 'only on public tables'
				}]
			},
			private: true
		}, {
			id: 2,
			data: {
				name: 'second object',
				creationTime: new Date().toLocaleTimeString(),
				permissions: ['read', 'write']
			}
		}];


		const csv = createCSV(content);
		expect(csv.match(/\n/g)?.length).toStrictEqual(2);
		expect(csv.split('\n')[0].match(/,/g)?.length).toStrictEqual(2);
	});
});