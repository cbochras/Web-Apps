document.addEventListener('DOMContentLoaded', function() {
  var scrollUpButton = document.getElementById('scrollUpButton');
  scrollUpButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'scrollUp' });
    });
  });

  var scrollDownButton = document.getElementById('scrollDownButton');
  scrollDownButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'scrollDown' });
    });
  });
});
