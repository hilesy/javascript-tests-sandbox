'use strict'

var fs = require('fs')
var webdriver = require('selenium-webdriver')
var platform = process.env.PLATFORM || 'FIREFOX'
const until = webdriver.until
const WAIT_FOR_ELEMENT_TIMEOUT = 10 * 1000

var buildAndroidDriver = function () {
  return new webdriver.Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities({
    platformName: 'Android',
    platformVersion: '5.0',
    deviceName: 'Android Emulator',
    browserName: 'Chrome'
  }).build()
}

var buildChromeDriver = function () {
  return new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
}

var buildFirefoxDriver = function () {
  return new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build()
}

switch (platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver()
    break
  case 'FIREFOX':
    var driver = buildFirefoxDriver()
    break
  default:
    var driver = buildChromeDriver()
}

var getDriver = function () {
  return driver
}

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
    return driver
        .wait(
          until.elementLocated(locator),
          timeout * 1000 || WAIT_FOR_ELEMENT_TIMEOUT
        )
  }
}

module.exports.World = World
module.exports.getDriver = getDriver
