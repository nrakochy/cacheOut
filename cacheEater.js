var time = new Date().getTime();
var milliSecondsPerDay = 1000 * 60 * 60 * 24;
var oneWeekAgo = (time - (millisecondsPerDay * 7);
var oneMonthAgo = (time - (millisecondsPerDay * 7 * 31);
var oneYearAgo = (time - (millisecondsPerDay * 7 * 365);

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
