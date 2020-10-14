const { homePage, youtubePage, googleSignInPage } = inject();

Feature('Test Youtube');

Scenario('Test play button functionality', async ({ I }) => {
    I.amOnPage('https://www.youtube.com/');
    youtubePage.searchForVideo('doctor song');
    youtubePage.clickVideo();
    I.wait(3);
    youtubePage.clickPlayPauseButton();
    
    youtubePage.clickSignInButton();
    googleSignInPage.VerifyEmailOrPhoneTextVisible();
    //pause();


    
//     I.click("#search-input")
//     I.fillField("#search-input",'doctor song')
//     I.wait(3);
//     I.pressKey('Enter')
    
//     I.click('.style-scope.ytd-video-renderer');

//     let numOfElements = await I.grabNumberOfVisibleElements('.ytp-ad-skip-button.ytp-button');
//     if(numOfElements > 1) {
//         I.click('.ytp-ad-skip-button.ytp-button');
//     }

//     I.waitForVisible('.ytp-play-button.ytp-button');
//     I.wait(3);
//     I.click('.ytp-play-button.ytp-button');

    
//     let currentTime = await I.grabTextFrom('.ytp-time-current')
//     console.log(('current time', currentTime));

//     I.click('Sign in')
//     I.see('Email or phone')
//     // I.selectOption('dummy')
//    // I.fillField('dummy',"#search-input")
//    //I.selectOption()
//     pause();
});