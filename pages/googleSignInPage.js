'use strict';

const { I } = inject();

class GoogleSignInPage {

    constructor() {
        this.emailOrPhoneText = 'Email or phone';
    }

    VerifyEmailOrPhoneTextVisible() {
        I.see(this.emailOrPhoneText);
    }
}

module.exports = new GoogleSignInPage();
module.exports.GoogleSignInPage = GoogleSignInPage;