'use strict'

const driver = require('../support/driver-builder.js').getDriver()

module.exports = {
  clickSearch: () => {
    driver.findElement({xpath: '//*[@id="top"]/body/div[4]/div[2]/header/div/ul/li[1]/a'})
      .click()
  }
}










