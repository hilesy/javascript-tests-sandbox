'use strict'

var webdriver = require('selenium-webdriver'),
    platform = process.env.PLATFORM || 'SAFARIMOBILE'

  var getDriver = function () {
    return driver
}

var buildSafariMobileDriver = function () {
  return new webdriver.Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities({
    platformName: 'iOS',
    platformVersion: '10.2.1',
    deviceName: "Lizzie's iPhone",
    browserName: 'Safari',
    udid: '3b7c61b30d8424d4fce9d74370fb2f8952709aa4',
    automationName: 'XCUITest',
    xcodeOrgId: 'PN9EQHB9KD',
    xcodeSigningId: 'Lizzie Hiles',
  }).build()
}

var buildIphoneSimulator = function () {
  return new webdriver.Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities({
    platformName: 'iOS',
    platformVersion: '10.3.1',
    deviceName: 'iPhone 6',
    browserName: 'Safari',
    udid: '25CA6CA9-7D93-4020-B20F-9B8846F81670',
  }).build()
} 

var buildAndroidMobileDriver = function () {
  return new webdriver.Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities({
    platformName: '',
    platformVersion: '',
    deviceName: '',
    browserName: '',
    udid: '',
  }).build()
} 


var buildChromeDriver = function () {
  return new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
}

var buildFirefoxDriver = function () {
  return new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build()
}

var buildSafariDriver = function () {
  return new webdriver.Builder().withCapabilities(webdriver.Capabilities.safari()).build()
}

switch (platform) {
  case 'IPHONESIMULATOR':
    var driver = buildIphoneSimulator()
    break
  case 'SAFARIMOBILE':
    var driver = buildSafariMobileDriver()
    break
  case 'FIREFOX':
    var driver = buildFirefoxDriver()
    break
  case 'SAFARI':
    var driver = buildSafariDriver()
    break
  case 'ANDROID':
    var driver = buildAndroidMobileDriver()
    break
  default:
    var driver = buildChromeDriver()
}

module.exports.getDriver = getDriver



// This needs to be added for saucelabs
// Saucelabs credentials
// username = "lizziehiles2110",
// accessKey = "a355568e-fd7a-4a9f-b776-fd3453caf9ca",
//    driver;

// driver = new webdriver.Builder().
//   withCapabilities({
//     'browserName': 'chrome',
//     'platform': 'Windows XP',
//     'version': '43.0',
//     'username': username,
//     'accessKey': accessKey
//   }).
//   usingServer("http://" + username + ":" + accessKey +
//               "@ondemand.saucelabs.com:80/wd/hub").
//   build();
