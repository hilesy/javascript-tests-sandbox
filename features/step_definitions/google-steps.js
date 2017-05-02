'use strict'

var expect = require('chai').expect
var generalHelperMethods = require('../pages/general-helper-methods')

module.exports = function () {
  this.World = require('../support/world.js').World

  this.When(/^I search Argos for "batteries"$/, function (searchQuery) {
    this.driver.get('http://www.argos.co.uk').then(function () {
      return generalHelperMethods.getElement('//*[@id="searchTerm"]').then(function () {
        return generalHelperMethods.inputFieldValue('//*[@id="searchTerm"]', 'batteries').then(function () {
          return generalHelperMethods.clickElement('//*[@id="app"]/div/div[2]/header[2]/div/div/div/form/button')
        })
      })
    })
  })

  this.Then(/^I should see some results$/, function () {
   // this.waitFor('div.g')
    return this.driver.findElements({ xpath: '//*[@id="app"]' })
      .then(function (elements) {
        expect(elements.length).to.not.equal(0)
      })
  })
}
