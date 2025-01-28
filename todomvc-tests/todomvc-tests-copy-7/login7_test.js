Feature ('Login Page 66 @Sadd83d1f');

const email = 'lamin.jaymar@acelap.com';
const password = 'qwerty'

Scenario ('Login page 66 @T58bb9c99', async ({ I }) => {
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
  