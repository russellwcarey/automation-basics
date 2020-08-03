var google = {}
module.exports = {
  beforeEach: browser => {
    google = browser.page.googlePage()
    google
      .navigate()
  },
  after: browser => {
    google
      .end()
  },
  'Your test here': browser => {
    google
      .setValue('@searchBar', ['Kittens', browser.Keys.ENTER])
      .verify.containsText('@results', 'Kittens')
  }
}