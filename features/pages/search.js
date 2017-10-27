'use strict'

const driver = require('../support/driver-builder.js').getDriver()
var webdriver = require('selenium-webdriver')
var expect = require('chai').expect

module.exports = {
  clickSearchBar: () => {
  	driver.sleep(10000)
  	driver.wait(webdriver.until.elementLocated(webdriver.By.css('a.search-link')), 10000)
    driver.findElement({css: 'a.search-link'})
      .click()
  },

  enterSearchTerm: () => {
  	driver.wait(webdriver.until.elementLocated(webdriver.By.id('search-box')), 10000)
  	driver.findElement({id: 'search-box'})
  		.sendKeys('boots')
  },

  clickSearchProducts: () => {
  	driver.findElement({id: 'search-btn'})
  		.click()
  },

  getProductList: () => {
  	var productList = driver.wait(webdriver.until.elementLocated(webdriver.By.className('products-grid grid')), 10000)
  	expect(productList).to.exist
  }
}