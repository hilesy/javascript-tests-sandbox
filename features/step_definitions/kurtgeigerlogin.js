'use strict'
var expect = require('chai').expect
var loginPage = require('../pages/loginPage.js')
var search = require('../pages/search.js')

module.exports = function () {
this.Given(/^I log in to the multi channel app$/, () => {
  loginPage.inputUserName()
  loginPage.inputPassword()
  loginPage.clickSignIn()
  loginPage.selectUser()
})

this.When(/^I search for a random product$/, () => {
	search.clickSearch()
}) 

this.When(/^I should see a list of items$/, () => {
})
}
