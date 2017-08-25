'use strict'

const driver = require('../support/driver-builder.js').getDriver()

module.exports = {
  clickElement: function (className) {
    const path = className
    return driver.findElement({className: path}).then((webElement) => {
      webElement.click()
    })
  },

  inputFieldValue: function (className, value) {
    const path = className
    return driver.findElement({className: path}).then(function (webElement) {
      return webElement.clear().then(function () {
        return webElement.sendKeys(value)
      })
    })
  },

  getElement: function (className) {
    const path = className
    return driver.findElement(({className: path}), 10 * 1000)
  },
}
