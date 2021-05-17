export function hotjarConfigInit() {
  let t = 'https://static.hotjar.com/c/hotjar-';
  let j = '.js?sv=';
  window.hj = window.hj || function () { (window.hj.q = window.hj.q || []).push(arguments) };
  window._hjSettings = { hjid: 2405301, hjsv: 6 };
  let a = document.getElementsByTagName('head')[0];
  let r = document.createElement('script'); r.async = 1;
  r.src = t + window._hjSettings.hjid + j + window._hjSettings.hjsv;
  a.appendChild(r);
};