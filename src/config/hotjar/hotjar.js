import { HOTJAR_ID, HOTJAR_SNIPPET_VERSION } from '../config';

export function hotjarConfigInit() {
  let hotjarId = HOTJAR_ID;
  let hotjarSnippetVersion = HOTJAR_SNIPPET_VERSION;

  if (!hotjarId || !hotjarSnippetVersion) {
    console.error('HotJar Info!!');
    console.error('Cannot configure HotJar');
    return;
  }

  let t = 'https://static.hotjar.com/c/hotjar-';
  let j = '.js?sv=';
  window.hj = window.hj || function () { (window.hj.q = window.hj.q || []).push(arguments) };
  window._hjSettings = { hjid: hotjarId, hjsv: hotjarSnippetVersion };
  let a = document.getElementsByTagName('head')[0];
  let r = document.createElement('script'); r.async = 1;
  r.src = t + window._hjSettings.hjid + j + window._hjSettings.hjsv;
  a.appendChild(r);
};