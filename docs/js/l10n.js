/* browser locale detection */
var language = navigator.language || navigator.browserLanguage; // for IE
if (language.toLowerCase().indexOf('zh-tw') > -1) {
  if (document.location.href.indexOf('zh-tw') < 0) {
    document.location.href = '/zh-tw/?' + window.location.search.substring(1);
  }
}
