'use strict'

var fs = require('fs')
var webdriver = require('selenium-webdriver')
const until = webdriver.until
const WAIT_FOR_ELEMENT_TIMEOUT = 10 * 1000
var driver

var World = function World () {
  var defaultTimeout = 20000
  var screenshotPath = 'screenshots'

  this.webdriver = webdriver
  this.driver = driver

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath)
  }

  this.waitFor = function (cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout
    return driver.wait(function () {
      return driver.isElementPresent({ css: cssLocator })
    }, waitTimeout)
  }

  this.getElement = function (locator, timeout) {
    return driver.wait(until.elementLocated(locator),
      timeout * 1000 || WAIT_FOR_ELEMENT_TIMEOUT
      )
  }
}
module.exports.World = World
