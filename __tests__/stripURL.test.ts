import { stripURL } from '../src/js/utils/';

describe('Strip URL', () => {
	it('should return an object', () => {
		const stripedURL = stripURL('https://raphaelbr.dev/endpoint?query=true');

		expect(stripedURL).toBeInstanceOf(Object);
	});

	it('should return the protocol', () => {
		const { protocol } = stripURL('https://raphaelbr.dev?protocol=false');

		expect(protocol).toBe('https');
		expect(typeof protocol).toBe('string');
	});

	it('should return the domain', () => {
		const { domain } = stripURL('https://raphaelbr.dev/test');

		expect(domain).toBe('raphaelbr.dev');
		expect(typeof domain).toBe('string');
	});

	it('should return the query params', () => {
		const { query } = stripURL(
			'https://www.exemple.com.br/api/catalog_system/pub/products/search?fq=skuId:1939&test=true',
		);

		expect(query).toBe('?fq=skuId:1939&test=true');
		expect(typeof query).toBe('string');
	});

	it('should return a empty object', () => {
		const stripedURL = stripURL('justatest');

		const { length } = Object.entries(stripedURL);

		expect(length).toBe(0);
	});

	it('should return a object with all keys filled correct', () => {
		const {
			domain,
			params,
			protocol,
			query
		} = stripURL('https://raphaeldev--bighiper.myvtex.com/banana-prata-aprox-150g-7568200000006/p?utm_source=test');

		const expectedResults = {
			domain: 'raphaeldev--bighiper.myvtex.com',
			params: '/banana-prata-aprox-150g-7568200000006/p',
			protocol: 'https',
			query: '?utm_source=test',
		}

		expect(domain).toBe(expectedResults['domain']);
		expect(params).toBe(expectedResults['params']);
		expect(protocol).toBe(expectedResults['protocol']);
		expect(query).toBe(expectedResults['query']);
		
	});
});
