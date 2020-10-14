'use strict'
const { I } = inject();

class YoutubeHomePage {
    constructor() {
        this.searchInputBox = '#search-input';
        this.videoTile = '.style-scope.ytd-video-renderer';
        this.playPauseButton = { css: '.ytp-play-button.ytp-button' };
        this.signInText = 'Sign in';
    }

    searchForVideo(searchInput) {
        I.click(this.searchInputBox);
        I.fillField(this.searchInputBox, searchInput);
        I.pressKey('Enter');
    }

    clickVideo() {
        I.click(this.videoTile);
    }

    clickPlayPauseButton() {
        I.click(this.playPauseButton);
    }

    clickSignInButton() {
        I.click(this.signInText);
    }
    
}

module.exports = new YoutubeHomePage();
module.exports.YoutubeHomePage = YoutubeHomePage;
//module.exports.YoutubeHomePage = new YoutubeHomePage();