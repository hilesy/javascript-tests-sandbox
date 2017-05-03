'use strict'

const driver = require('../support/driver-builder.js').getDriver()

module.exports = {
  clickElement: function (xpath) {
    const path = xpath
    return driver.findElement({xpath: path}).then(function (webElement) {
      webElement.click()
    })
  },

  inputFieldValue: function (xpath, value) {
    const path = xpath
    return driver.findElement({xpath: path}).then(function (webElement) {
      return webElement.clear().then(function () {
        return webElement.sendKeys(value)
      })
    })
  },

  getElement: function (xpath) {
    const path = xpath
    return driver.findElement(({xpath: path}), 10 * 1000).then(function () {
    })
  }
}
