Feature('Form test feature');

Scenario('Testing the form html buttons', async ({ I }) => {

I.amOnPage('https://demoqa.com/automation-practice-form/');
I.see('Practice Form', '.main-header');
I.say('Test Passed');
let expectedText = await I.grabTextFrom('.main-header');
console.log('Text displayed is', expectedText);
I.fillField({ css: '#firstName'}, 'Prabhakaran')
I.clearField({ css: '#firstName' })
I.checkOption('Male');
I.seeCheckboxIsChecked('Male')
I.click('#dateOfBirthInput')
I.click('.react-datepicker__month-select')
I.selectOption('.react-datepicker__month-select','March')
I.selectOption('.react-datepicker__month-select','2')
I.click('14')
I.click(locate({ css: '.react-datepicker__day'}).withText('14'));

});