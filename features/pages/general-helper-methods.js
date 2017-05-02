'use strict'

const driver = require('../support/world.js').world

module.exports = {
  clickElement: function (xpath) {
    const path = xpath
    return driver.click({xpath: path})
  },

  inputFieldValue: function (xpath, value) {
    const path = xpath
    return driver.sendKeys({xpath: path, value})
  },

  getElement: function (xpath) {
    const path = xpath
    return driver.getElement({xpath: path})
  }
}
