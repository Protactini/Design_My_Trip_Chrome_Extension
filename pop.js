/* Client ID and API key from the Developer Console */
const CLIENT_ID =
  "939130624803-r4scqn2sgkfbb7crqmqboit5i8g1kq70.apps.googleusercontent.com";
const API_KEY = "AIzaSyBMjfK9ySfJV6aEOa2xi0Svxm5mBRDjFvc";

/* Array of API discovery doc URLs for APIs used by the quickstart */
const DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

/* Authorization scopes required by the API; multiple scopes can be
included, separated by spaces. */
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

const authorizeButton = document.getElementById("authorize_button");
const signoutButton = document.getElementById("signout_button");
/* const contentForm = document.getElementById("content");
authorizeButton.setAttribute("style", "display: none");
authorizeButton.display = "none";
contentForm.setAttribute("style", "white-space: pre-wrap");
 */

/**
 *  On load, called to load the auth2 library and API client library.
 */
<<<<<<< HEAD
function handleClientLoad() {
  console.log("Called");
  gapi.load("client:auth2", initClient);
}
=======
const handleClientLoad = function () {
  console.log("Called");
  gapi.load("client:auth2", initClient);
};
>>>>>>> main

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
<<<<<<< HEAD
function initClient() {
=======
const initClient = function () {
>>>>>>> main
  console.log("Inital");
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(
      function () {
        console.log("Second");
        /* Listen for sign-in state changes. */
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        /* Handle the initial sign-in state. */
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.addEventListener("click", handleAuthClick);
        signoutButton.addEventListener("click", handleSignoutClick);
      },
      function (error) {
        appendPre(JSON.stringify(error, null, 2));
      }
    );
<<<<<<< HEAD
}
=======
};
>>>>>>> main

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    listMajors();
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  console.log("SignIn Clicked");
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  console.log("SignOut Clicked");
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  const pre = document.getElementById("content");
  const textContent = document.createTextNode(message + "\n");
  pre.appendChild(textContent);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
      range: "Class Data!A2:E",
    })
    .then(
      function (response) {
        const range = response.result;
        if (range.values.length > 0) {
          appendPre("Name, Major:");
          for (i = 0; i < range.values.length; i++) {
            const row = range.values[i];
            /* Print columns A and E, which correspond to indices 0 and 4. */
            appendPre(row[0] + ", " + row[4]);
          }
        } else {
          appendPre("No data found.");
        }
      },
      function (response) {
        appendPre("Error: " + response.result.error.message);
      }
    );
}
