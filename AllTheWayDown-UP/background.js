chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'scrollToTop') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: 'window.scrollTo({ top: 0, behavior: "smooth" });' });
    });
  }
});
