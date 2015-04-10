chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab){
  removeData();
});

function removeData(){
  var time = new Date().getTime();
  var milliSecondsPerDay = 1000 * 60 * 60 * 24;
  var twentyYearsAgo = time - (milliSecondsPerDay * 365 * 20);
  chrome.browsingData.remove({
    "since": twentyYearsAgo
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
