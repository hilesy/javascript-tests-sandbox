'use strict'
var expect = require('chai').expect
const driver = require('../support/driver-builder.js').getDriver()
var generalHelperMethods = require('../pages/general-helper-methods.js')

module.exports = function () {
  this.Given(/^I am on the Kurt Geiger home page$/, () => {
    generalHelperMethods.getElement('ss17_logo ss17_logo--header')
  })
this.When(/^I click "Login"$/, () => {
    generalHelperMethods.clickElement('skiplinks_icon menu-icon')
    driver.sleep(1000)
    generalHelperMethods.clickElement('resp-only parent sign-in')
}) 
  this.When(/^I enter my email address and password and continue$/, () => {
    generalHelperMethods.getElement('input-text required-entry validate-email')
    generalHelperMethods.inputFieldValue('input-text required-entry validate-email', 'lizzie.hiles@hotmail.co.uk')
    })
}





