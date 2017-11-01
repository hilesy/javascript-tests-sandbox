'use strict'

var fs = require('fs')
var path = require('path')
var sanitize = require('sanitize-filename')
var driver = require('./driver-builder.js').getDriver()



var myHooks = function () {
  // Before Feature Hook to open webpage
  this.Before('BeforeFeature', function (event, callback) {
    driver.manage().deleteAllCookies()
    driver.get('https://demo-multichannel-core.multichannel.kg/')
    driver.sleep(10000).then(callback, function (reason) {
      throw new Error(reason)
      })
  })

  // After Scenario Hook to take a screenshot if the scenario has failed
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

  // After Feature Hook to quit the browser
  this.registerHandler('AfterFeatures', function (event) {
  driver.quit()
  })
}

module.exports = myHooks
