chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed');
});

// Function to get Google OAuth2 token
function getGoogleAuthToken(callback) {
  chrome.identity.getAuthToken({ interactive: true }, function (token) {
    if (chrome.runtime.lastError) {
      console.error('Error obtaining auth token:', chrome.runtime.lastError);
      return;
    }
    console.log('Auth Token:', token);
    callback(token);
  });
}

// Listen for login request from popup or content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'getAuthToken') {
    getGoogleAuthToken((token) => {
      sendResponse({ token });
    });
    return true; // Indicate we're sending a response asynchronously
  }
});