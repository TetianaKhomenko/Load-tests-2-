Feature ('Login Page 114 @Sd2cdf4bc');

const email = 'lamin.jaymar@acelap.com';
const password = 'qwerty'

Scenario ('Login page 114 @Tcae5fa37', async ({ I }) => {
  I.say('I will go to login page now');
  I.amOnPage('https://beta.testomat.io');
  I.say('I fulfilled field a password and email');
  I.fillField('#user_email', email);
  I.fillField('#user_password', password);
  I.pressKey('Enter');
  I.say('I am logged in now');
  I.waitForElement('#company_id', 30);
  I.saveScreenshot('login-page.png')
})
  