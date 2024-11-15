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


// extension/src/background.ts

// import { browser } from "webextension-polyfill";

// // Initialize Google Sign-In
// const googleSignIn = new google.accounts.id.Client({
//   client_id: "YOUR_CLIENT_ID",
//   callback: handleSignInResponse,
// });

// function handleSignIn() {
//   googleSignIn.signIn();
// }

// function handleSignInResponse(response) {
//   if (response.credential) {
//     // Send the JWT to your server
//     fetch("https://your-server.com/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id_token: response.credential }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // Handle server response (e.g., store login status)
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error sending JWT to server:", error);
//       });
//   } else {
//     // Handle sign-in error
//     console.error("Sign-in error:", response);
//   }
// }

// // Register the sign-in button
// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === "signIn") {
//     handleSignIn();
//   }
// });

