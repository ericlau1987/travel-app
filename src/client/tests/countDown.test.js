const { dateDiff } = require("../js/countDown")
// const fetch = require('node-fetch')

test('Test longtitude of Bayswater', () => {
  const startdate = new Date('2022-11-01');
  const enddate = new Date('2022-11-05');
  expect(dateDiff(startdate, enddate)).toBe(4);
  
  })