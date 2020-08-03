module.exports = {
  'My first test case'(browser) {
    browser
      .url('https://devmountain-qa.github.io/Automation-Basics/build/')
      .waitForElementVisible('.evenOddInput')
      .assert.containsText(".evenOddInput", Number);
  }
}