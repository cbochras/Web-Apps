document.addEventListener('DOMContentLoaded', function() {
  var scrollUpButton = document.getElementById('scrollUpButton');
  scrollUpButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: 'window.scrollTo({ top: 0, behavior: "smooth" });' });
    });
  });

  var scrollDownButton = document.getElementById('scrollDownButton');
  scrollDownButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: 'window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });' });
    });
  });
});
