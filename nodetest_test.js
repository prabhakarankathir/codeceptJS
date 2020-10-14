Feature('Test');

Scenario('Testing nodejs homepage', ({ I }) => {
    I.amOnPage('https://nodejs.org/en/');
    I.click(locate('.home-downloadbutton').withText('12.19.0 LTS'));
    I.wait(2000);
    I.selectOption()
});