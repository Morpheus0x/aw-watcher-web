"use strict";

function consentListeners() {
  let consent_refused = document.getElementById('consent-refused');
  let consent_given = document.getElementById('consent-given');
  consent_refused.addEventListener("click", (obj) => {
    browser.management.uninstallSelf()
    window.close()
  });
  consent_given.addEventListener("click", (obj) => {
    chrome.runtime.sendMessage({enabled: true}, function(response) {});
    chrome.storage.local.set({"noConsentGiven": false});
    window.close()
  })
}

document.addEventListener('DOMContentLoaded', function() {
  consentListeners();
})
