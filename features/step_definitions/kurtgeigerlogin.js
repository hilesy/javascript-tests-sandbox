'use strict'

var expect = require('chai').expect
var generalHelperMethods = require('../pages/general-helper-methods.js')

module.exports = function () {
  this.Given(/^I am on the Kurt Geiger home page$/, () => {
    return generalHelperMethods.getElement('//*[@id="logo"]')
  })
  this.When(/^I click "Login"$/, () => {
    return generalHelperMethods.clickElement('//*[@id="ss17-wrapLinksSearch"]/ul/li[7]/a')
  }) 
  this.When(/^I enter my email address and password and continue$/, () => {
    return generalHelperMethods.getElement('//*[@id="email"]').then(() => {
      return generalHelperMethods.inputFieldValue('//*[@id="email"]', 'lizzie.hiles@hotmail.co.uk').then(() => {
       // return generalHelperMethods.getElement()
      })
    })
  })
}





