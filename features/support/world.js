'use strict'

var fs = require('fs')
var webdriver = require('selenium-webdriver')
var driver

var World = function World () {
  var screenshotPath = 'screenshots'

  this.webdriver = webdriver
  this.driver = driver

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath)
  }
}
module.exports.World = World
