'use strict'

const driver = require('../support/driver-builder.js').getDriver()
var webdriver = require('selenium-webdriver')

module.exports = {
  inputUserName: () => {
    driver.wait(webdriver.until.elementLocated(webdriver.By.id('username')), 10000)
    driver.findElement({id: 'username'})
      .sendKeys('branch.555')
  },

  inputPassword: () => {
    driver.findElement({id: 'login'})
      .sendKeys('password555')
  },

  clickSignIn: () => {
    driver.findElement({xpath: '//*[@id="loginForm"]/div/div[2]/button'})
      .click()
    },

  selectUser: () => {
    driver.wait(webdriver.until.elementLocated(webdriver.By.linkText("orlagh")), 10000)
    driver.findElement(webdriver.By.linkText("orlagh"))
      .click()
    }
}



