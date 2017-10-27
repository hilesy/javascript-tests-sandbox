'use strict'
var expect = require('chai').expect
var loginPage = require('../pages/loginPage.js')
var search = require('../pages/search.js')
const driver = require('../support/driver-builder.js').getDriver()

module.exports = function () {
this.Given(/^I log in to the multi channel app$/, () => {
  loginPage.inputUserName()
  loginPage.inputPassword()
  loginPage.clickSignIn()
  loginPage.selectUser()
})

this.When(/^I search for boots$/, () => {
	driver.sleep(1000)
	search.clickSearchBar()
	search.enterSearchTerm()
	search.clickSearchProducts()
}) 

this.When(/^I should see a list of items$/, () => {
	search.getProductList()
})
}
