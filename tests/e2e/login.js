module.exports = {
  tags: ['login'],
  'Localhost Check:login': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .verify.value('input[type=email]', '')
      .verify.elementNotPresent('.error')
      .end()
  },
  'Localhost Check:validate': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .verify.value('input[type=email]', '')
      .setValue('input[type=email]', 'info')
      .pause(500)
      .verify.elementPresent('.ng-invalid-email')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#email')
      .setValue('input[type=email]', 'info@')
      .pause(500)
      .verify.elementPresent('.ng-invalid-email')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#email')
      .setValue('input[type=email]', 'info@greenpioneersolutions.')
      .pause(500)
      .verify.elementPresent('.ng-invalid-email')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#email')
      .setValue('input[type=email]', 'info@greenpioneersolutions.com')
      .pause(500)
      .verify.elementPresent('.ng-valid-email')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .setValue('input[type=password]', 'true')
      .pause(500)
      .verify.elementPresent('.ng-invalid-minlength')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#password')
      .setValue('input[type=password]', '!1')
      .pause(500)
      .verify.elementPresent('.ng-invalid-minlength')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#password')
      .setValue('input[type=password]', 'truetr')
      .pause(500)
      .verify.elementPresent('.ng-invalid-pattern')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#password')
      .setValue('input[type=password]', 'truetrue')
      .pause(500)
      .verify.elementPresent('.ng-invalid-pattern')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#password')
      .setValue('input[type=password]', 'truetrue1')
      .pause(500)
      .verify.elementPresent('.ng-invalid-pattern')
      .assert.attributeContains('.btn-primary', 'disabled', true)
      .clearValue('#password')
      .setValue('input[type=password]', '1!1!1!1!')
      .pause(500)
      .verify.elementPresent('.ng-invalid-pattern')
      .clearValue('#password')
      .setValue('input[type=password]', 'truetrue1!')
      .pause(500)
      .verify.elementPresent('.ng-valid-minlength')
      .verify.elementPresent('.ng-valid-pattern')
      .end()
  },
  'Localhost Check:validate & submit': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .setValue('input[type=email]', 'fake@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetrue1!')
      .waitForElementVisible('button[type=submit]', 3000)
      .click('button[type=submit]')
      .pause(2000)
      .waitForElementVisible('#toast-container', 2000)
      .assert.containsText('#toast-container', 'Email fake@greenpioneersolutions.com not found')
      .pause(2000)
      .clearValue('#password')
      .clearValue('#email')
      .setValue('input[type=email]', 'jason@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetr1!')
      .click('button[type=submit]')
      .pause(1000)
      .waitForElementVisible('#toast-container', 2000)
      .assert.containsText('#toast-container', 'Invalid email or password')
      .end()
  },
  'Localhost Action:signup': function (browser) {
    browser
      .url(browser.launch_url + 'signup')
      .waitForElementVisible('body', 3000)
      .verify.visible('#name')
      .verify.visible('#email')
      .verify.visible('#password')
      .verify.visible('#confirmPassword')
      .setValue('#name', 'info greenpioneer')
      .setValue('#email', 'info@greenpioneersolutions.com')
      // .assert.containsText('#signup-form', 'Password must contain a letter, a number, and a symbol')
      // .assert.containsText('#signup-form', 'Password must be at least 6 characters long')
      // .assert.containsText('#signup-form', 'Passwords must match')
      .setValue('#password', 'truetrue1!')
      .setValue('#confirmPassword', 'truetrue1!')
      .pause(2000)
      .click('button[type=submit]')
      .end()
  },
  'Localhost Action:login & update(Seeded Account)': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .setValue('input[type=email]', 'jason@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetrue1!')
      .waitForElementVisible('button[type=submit]', 3000)
      .pause(2000)
      .click('button[type=submit]')
      .pause(2000)
      .assert.containsText('#simple-dropdown', 'jason greenpioneer')
      .click('#simple-dropdown')
      .click('#account')
      .pause(2000)
      .click('input[name="gender"]')
      .setValue('#location', 'Texas')
      .setValue('#website', 'http://greenpioneersolutions.com/')
      .pause(2000)
      .click('button[type=submit]')
      .waitForElementVisible('#toast-container', 2000)
      .assert.containsText('#toast-container', 'jason greenpioneer your profile has be saved')
      .end()
  },
  'Localhost Check:logout(Seeded Account)': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .setValue('input[type=email]', 'jason@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetrue1!')
      .waitForElementVisible('button[type=submit]', 3000)
      .click('button[type=submit]')
      .pause(2000)
      .click('#simple-dropdown')
      .click('#signout')
      .pause(2000)
      .verify.visible('#signin')
      .verify.visible('#signup')
      .end()
  },
  'Localhost Action:login & update(Signed Up Account)': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .setValue('input[type=email]', 'info@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetrue1!')
      .waitForElementVisible('button[type=submit]', 3000)
      .pause(2000)
      .click('button[type=submit]')
      .pause(2000)
      .assert.containsText('#simple-dropdown', 'info greenpioneer')
      .click('#simple-dropdown')
      .click('#account')
      .pause(2000)
      .click('input[name="gender"]')
      .setValue('#location', 'Texas')
      .setValue('#website', 'http://greenpioneersolutions.com/')
      .pause(2000)
      .click('button[type=submit]')
      .waitForElementVisible('#toast-container', 3000)
      .assert.containsText('#toast-container', 'info greenpioneer your profile has be saved')
      .end()
  },
  'Localhost Check:logout(Signed Up Account)': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .setValue('input[type=email]', 'info@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetrue1!')
      .waitForElementVisible('button[type=submit]', 3000)
      .click('button[type=submit]')
      .pause(2000)
      .click('#simple-dropdown')
      .click('#signout')
      .pause(2000)
      .verify.visible('#signin')
      .verify.visible('#signup')
      .end()
  },
  'Localhost Check:verify(Signed Up Account)': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 3000)
      .verify.visible('#email')
      .verify.visible('#password')
      .setValue('input[type=email]', 'info@greenpioneersolutions.com')
      .setValue('input[type=password]', 'truetrue1!')
      .pause(2000)
      .waitForElementVisible('button[type=submit]', 3000)
      .click('button[type=submit]')
      .pause(2000)
      .click('#simple-dropdown')
      .click('#account')
      .pause(2000)
      .assert.valueContains('#email', 'info@greenpioneersolutions.com')
      .assert.valueContains('#name', 'info greenpioneer')
      .assert.valueContains('#location', 'Texas')
      .assert.valueContains('#website', 'http://greenpioneersolutions.com/')
      .pause(2000)
      .click('#simple-dropdown')
      .click('#signout')
      .pause(2000)
      .verify.visible('#signin')
      .verify.visible('#signup')
      .end()
  }
}
