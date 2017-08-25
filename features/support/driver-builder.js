'use strict'

var webdriver = require('selenium-webdriver'),
   platform = process.env.PLATFORM || 'ANDROID'
    // username = "lizziehiles2110",
    // accessKey = "a355568e-fd7a-4a9f-b776-fd3453caf9ca",
    // driver;
 
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

var buildAndroidDriver = function () {
  return new webdriver.Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities({
    platformName: 'iOS',
    platformVersion: '10.3',
    deviceName: 'iPhone 6',
    browserName: 'Safari'
   // udid: '3b7c61b30d8424d4fce9d74370fb2f8952709aa4'
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
