'use strict'

const driver = require('../support/driver-builder.js').getDriver()

module.exports = {
  clickElement: function (className) {
    const path = className
    driver.findElement({className: path}).click()
  },

  inputFieldValue: function (className, value) {
    const path = className
    driver.findElement({className: path}).clear()
    driver.findElement({className: path}).sendKeys(value)
  },
  getElement: function (className) {
    const path = className
    driver.findElement(({className: path}), 10 * 1000)
  },
}
