/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type youtubePage = typeof import('./pages/youtubePage.js');
type googleSignInPage = typeof import('./pages/googleSignInPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, youtubePage: youtubePage, googleSignInPage: googleSignInPage }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
