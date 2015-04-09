var time = new Date().getTime();
var milliSecondsPerDay = 1000 * 60 * 60 * 24;
var oneWeekAgo = time - (millisecondsPerDay * 7);
var oneMonthAgo = (time - (millisecondsPerDay * 31);
var oneYearAgo = (time - (millisecondsPerDay * 365);

var removeData = function(){
  chrome.browsingData.remove({
    "since": oneYearAgo
  }, {
    "appcache": true,
    "cache": true,
    "cookies": true,
    "downloads": true,
    "fileSystems": true,
    "formData": true,
    "history": true,
    "indexedDB": true,
    "localStorage": true,
    "pluginData": true,
    "passwords": true,
    "webSQL": true
  });
}
