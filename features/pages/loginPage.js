'use strict'

const driver = require('../support/driver-builder.js').getDriver()
var By = require('selenium-webdriver').By

module.exports = {
  inputUserName: () => {
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
    driver.sleep(10000)
    driver.findElement(By.partialLinkText("orlagh"))
      .click()
    console.log("clicked")
    }
}



