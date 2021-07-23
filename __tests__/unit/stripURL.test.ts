import stripURL from '../../src/js/utils/stripURL';

describe('Strip URL', () => {
  it('should return an object', () => {
    const stripedURL = stripURL('https://raphaelbr.dev/endpoint?query=true');

    expect(stripedURL).toBeInstanceOf(Object);
  });

  it('the value of the protocol should be https', () => {
    const { protocol } = stripURL('https://raphaelbr.dev?protocol=false');

    expect(protocol).toBe('https');
  });

  it('the value of the domain should be raphaelbr.dev', () => {
    const { domain } = stripURL('https://raphaelbr.dev/test');

    expect(domain).toBe('raphaelbr.dev');
  });

  it('the value of the query should be ?test=true', () => {
    const { query } = stripURL('https://raphaelbr.dev?test=true');

    expect(query).toBe('?test=true');
  });
});
