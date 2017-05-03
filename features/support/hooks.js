'use strict'

var fs = require('fs')
var path = require('path')
var sanitize = require('sanitize-filename')
var driver = require('./driver-builder.js').getDriver()

var myHooks = function () {
  // Before Feature Hook
  this.Before('BeforeFeature', function (event, callback) {
    driver.get('http://www.argos.co.uk').then(callback, function (reason) {
      throw new Error(reason)
    })
  })

  // After Scenario Hook
  this.After(function (scenario) {
    if (scenario.isFailed()) {
      driver.takeScreenshot().then(function (data) {
        var base64Data = data.replace(/^data:image\/png;base64,/, '')
        fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + '.png').replace(/ /g, '_')), base64Data, 'base64', function (err) {
          if (err) console.log(err)
        })
      })
    }
    return driver.manage().deleteAllCookies()
  })

  this.registerHandler('AfterFeatures', function (event) {
    return driver.quit()
  })
}

module.exports = myHooks
