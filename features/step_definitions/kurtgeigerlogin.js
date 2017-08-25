'use strict'
var expect = require('chai').expect
const driver = require('../support/driver-builder.js').getDriver()
var generalHelperMethods = require('../pages/general-helper-methods.js')

module.exports = function () {
  this.Given(/^I am on the Kurt Geiger home page$/, () => {
      return generalHelperMethods.getElement('ss17_logo ss17_logo--header')
  })
this.When(/^I click "Login"$/, () => {
    return generalHelperMethods.clickElement('skiplinks_icon menu-icon').then(() => {
      return driver.sleep(1000).then(() => {
        return generalHelperMethods.clickElement('resp-only parent sign-in')
    })
  })
}) 
  this.When(/^I enter my email address and password and continue$/, () => {
    return generalHelperMethods.getElement('input-text required-entry validate-email').then(() => {
      return generalHelperMethods.inputFieldValue('input-text required-entry validate-email', 'lizzie.hiles@hotmail.co.uk').then(() => {
       return generalHelperMethods.getElement('input-text required-entry validate-email').then((text) => {
        expect(text).to.equal('lizzie.hiles@hotmail.co.uk');
       })
      })
    })
  })
}





