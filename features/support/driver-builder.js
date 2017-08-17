'use strict'

var webdriver = require('selenium-webdriver'),
    platform = process.env.PLATFORM || 'SAUCELABS',
    username = "lizziehiles2110",
    accessKey = "a355568e-fd7a-4a9f-b776-fd3453caf9ca"

var buildSauceLabsDriver = function () {
  return new webdriver.Builder().usingServer("http://" + username + ":" + accessKey +
              "@ondemand.saucelabs.com").withCapabilities({
    browserName: 'Firefox',
    platform: 'Windows 10',
    version: '54.0',
    username: username,
    accessKey: accessKey
  }).build();
}

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
  case 'SAUCELABS':
    var driver = buildSauceLabsDriver()
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
