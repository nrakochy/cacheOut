function clearBrowsingData(timeframe){
  chrome.browsingData.remove(
    {"since": timeframe},
    {
      "appcache": true,
      "cache": true,
      "cookies": true,
      "downloads": true,
      "fileSystems": true,
      "formData": true,
      "history": true,
      "indexedDB": true,
      "localStorage": true,
      "serverBoundCertificates": true,
      "pluginData": true,
      "passwords": true,
      "webSQL": true
    }
  )}
