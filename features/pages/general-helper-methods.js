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

  scroll : function () {
    return driver.execute('mobile: scroll', {direction: 'down'})
  },

  getElement: function (className) {
    const path = className
    return driver.findElement(({className: path}), 10 * 1000)
  },

  findElements: function (xpath) {
    const path = xpath
    return driver.findElements(({xpath: path}), 10 * 1000)
  }
}
