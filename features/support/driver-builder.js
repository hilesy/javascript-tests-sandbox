'use strict'

var webdriver = require('selenium-webdriver')
var platform = process.env.PLATFORM || 'FIREFOX'

var buildAndroidDriver = function () {
  return new webdriver.Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities({
    platformName: 'Android',
    platformVersion: '5.0',
    deviceName: 'Android Emulator',
    browserName: 'Chrome'
  }).build()
}

var getDriver = function () {
  return driver
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

module.exports.getDriver = getDriver