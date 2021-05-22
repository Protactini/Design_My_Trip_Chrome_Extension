// Function of added Button
const showinfo = function () {
  console.log(this);

  const folder =
    this.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes;
  const answerNode = folder[folder.length - 1].childNodes;
  const allNodes = folder[folder.length - 2].firstChild.childNodes;
  const name =
    this.parentNode.parentNode.parentNode.firstChild.firstChild.childNodes[1]
      .firstChild.firstChild.firstChild.firstChild.firstChild.textContent;
  const livingArea =
    this.parentNode.parentNode.parentNode.parentNode.childNodes[1].querySelectorAll(
      "span"
    );
  let csvString = "data:application/csv,";

  //Get name
  console.log(`Name: ${name}`);
  csvString += `Name: ${name},`;

  //Get living area
  for (const item of livingArea) {
    if (item.textContent.includes("Lives in")) {
      console.log(`Lives in: ${item.childNodes[1].textContent}`);
      csvString += `${item.childNodes[1].textContent},`;
    }
    // console.log(item.textContent);
  }

  for (let i = 0; i < allNodes.length; i++) {
    const answerBlock = allNodes[i].childNodes;

    console.log(
      `Answer ${i + 1}: ${answerBlock[answerBlock.length - 1].textContent}`
    );

    csvString += `${answerBlock[answerBlock.length - 1].textContent},`;
  }

  console.log(
    `Answer ${allNodes.length + 1}: ${
      answerNode[answerNode.length - 1].firstChild.textContent
    }`
  );

  csvString += `${answerNode[answerNode.length - 1].firstChild.textContent},`;

  const link = document.createElement("a");
  link.setAttribute("href", csvString);
  const date = new Date().getTime();
  const filename = new Date(date).toLocaleDateString();
  link.setAttribute("download", filename + ".csv");
  link.click();
};

const addGetInfoButton = () => {
  const allButton = document.querySelectorAll('[aria-label="Approve"]');
  const styleEl = document.createElement("style");

  // Add rules to .css file
  document.styleSheets[0].addRule(
    ".getInfoButton",
    "display: inline-block;" +
      "background-color: #e67e22;" +
      "border: 1px solid #e67e22;" +
      "text-align: center;" +
      "border-radius: 7px;" +
      "height:36px;" +
      "weight:200px;" +
      "color: #fff;" +
      "font-weight: 500;" +
      "font-size: 125%;" +
      "margin-top: 6px;" +
      "text-align: center;" +
      "padding: 0px 35px;" +
      "transition: background-color 0.2s, board 0.2s, color 0.2s;"
  );

  document.styleSheets[0].addRule(
    ".getInfoButton:hover,.getInfoButton:active",
    "display: inline-block;" +
      "background-color: #cf6d17;" +
      "border: 1px solid #cf6d17;" +
      "text-align: center;" +
      "color: #000;"
  );

  //Add button ans change text
  for (let i = 0; i < allButton.length; i++) {
    const getInfoButton = document.createElement("button");
    getInfoButton.id = `getinfo_${i}`;
    getInfoButton.className = "getInfoButton";
    getInfoButton.textContent = "Get Info";
    //   "Get Info and Approve";
    allButton[i].parentNode.parentNode.prepend(getInfoButton);

    // getInfoButton.showinfo();
    getInfoButton.addEventListener("click", showinfo);
  }
};

const addAuthorizeButton = () => {
  const mainPage = document.querySelector(
    '[aria-label="Area showing all of the information from a selected tool"]'
  );

  document.styleSheets[0].addRule(
    ".authorize_button",
    "position: fixed; bottom: 150px; right: 10px;"
  );

  const signInButton = document.createElement("button");
  signInButton.id = "authorize_button";
  signInButton.className = "authorize_button";
  signInButton.textContent = "Authorize";
  mainPage.prepend(signInButton);
};

const addSignOutButton = () => {
  const mainPage = document.querySelector(
    '[aria-label="Area showing all of the information from a selected tool"]'
  );

  document.styleSheets[0].addRule(
    ".signout_button",
    "position: fixed; bottom: 100px; right: 10px;"
  );

  const signOutButton = document.createElement("button");
  const textPage = document.createElement("pre");

  signOutButton.id = "signout_button";
  signOutButton.className = "signout_button";
  signOutButton.textContent = "Sign Out";
  mainPage.prepend(signOutButton);

  textPage.id = "content";
  mainPage.prepend(textPage);
};

const findTheApproveButton = function () {
  if (document.querySelector('[aria-label="Approve"]')) {
    addGetInfoButton();

    addAuthorizeButton();

    addSignOutButton();

    // handleClientLoad();

    // getInfoButton.addEventListener("click");
  }
  //Didn't found Button
  else {
    console.log("Not Found");
    //Loop this function every 5ms
    setTimeout(findTheApproveButton, 5);
  }
};

// function loadscript(url) {
//   var script = document.createElement("script");
//   script.src = url;
//   script.async = true;
//   script.defer = true;
//   script.onload = function () {
//     console.log("API loaded");
//     this.onload = function () {};
//   };
//   script.onreadystatechange = function () {
//     if (this.readyState === "complete") this.onload();
//   };
//   // document.body.appendChild(script);
//   document.getElementsByTagName("head")[0].appendChild(script);
// }

// loadscript("https://apis.google.com/js/api.js");

window.onload = () => {
  console.log(document.readyState);

  console.log(document.querySelector('[aria-label="Approve"]'));

  findTheApproveButton();
};

// window.onreadystatechange = () => {
//   if (this.readyState === "complete") this.onload();
//   console.log(`No.1 ${document.readyState}`);
// };
