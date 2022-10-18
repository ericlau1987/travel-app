const { getApiUsername } = require('../index')

test('test api values', () => {
    
    expect(getApiUsername()).toBe('ericlau1987');
  })