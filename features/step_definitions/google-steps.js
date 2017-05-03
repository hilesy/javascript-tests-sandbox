'use strict'

var expect = require('chai').expect
var generalHelperMethods = require('../pages/general-helper-methods.js')

module.exports = function () {
  this.When(/^I search Argos for "batteries"$/, function () {
    return generalHelperMethods.getElement('//*[@id="searchTerm"]').then(function () {
      return generalHelperMethods.inputFieldValue('//*[@id="searchTerm"]', 'batteries').then(function () {
        return generalHelperMethods.clickElement('//*[@id="app"]/div/div[2]/header[1]/nav/div[1]/div[3]/div/form/button')
      })
    })
  })

  this.Then(/^I should see some results$/, function () {
    return generalHelperMethods.findElements({ xpath: '//*[@id="app"]' })
      .then(function (elements) {
        expect(elements.length).to.not.equal(0)
      })
  })
}
