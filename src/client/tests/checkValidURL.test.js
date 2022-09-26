const { isValidURL } = require('../js/checkValidURL')

test('Test input URL validity', () => {
    expect(isValidURL('https://www.news.com.au/breaking-news/booker-prize-winner-hilary-mantel-dies-aged-70-publisher/news-story/55fbc7eb1a131fa3440dc7fd2488d3b7')).toBeTruthy();
  })