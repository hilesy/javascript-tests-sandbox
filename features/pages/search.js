'use strict'

const driver = require('../support/driver-builder.js').getDriver()
var webdriver = require('selenium-webdriver')
var expect = require('chai').expect
var logger = require('winston');


module.exports = {
  clickSearchBar: () => {
    driver.sleep(1000)
    driver.wait(webdriver.until.elementLocated(webdriver.By.css('a.search-link')), 10000)
    driver.findElement({css: 'a.search-link'})
      .click()
  },

  enterSearchTerm: () => {
    driver.sleep(1000)
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
  },

  clickRandomProduct: () => {
    driver.sleep(10000)
    driver.findElements(webdriver.By.element('//*[@id="top"]/body/div[6]/div[2]/div[2]/div/div/div[3]/ul')).then(function(elems){
    logger.info("links count: " + elems.length);
    var rnd = Math.round(Math.random() * (elems.length+1));
    logger.info("rnd number: " + rnd);

    elems[rnd].getText().then(function(textValue){
        logger.info("link name: " + textValue);
    });

    elems[rnd].then(function (elem) {
        elem.click();
    });
});

 }
}