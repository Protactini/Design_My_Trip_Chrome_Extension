const googleSheetLoader = document.createElement("script");
googleSheetLoader.type = "text/javascript";
googleSheetLoader.src =
  "https://raw.githubusercontent.com/Protactini/Design_My_Trip_Chrome_Extension/main/pop.js";
document.getElementsByTagName("body")[0].append(googleSheetLoader);
googleSheetLoader.onload = function () {
  console.log("Pop.js loaded!");
  addGoogleApiHandle();
  handleClientLoad();
};

const addGoogleApiHandle = function () {
  const googleApi = document.createElement("script");
  //Firefox, Opera, Chrome, Safari 3+
  googleApi.onload = function () {
    console.log("googleApi loaded!");
    this.onload = function () {};
    // handleClientLoad();
  };
  googleApi.async = true;
  googleApi.defer = true;

  googleApi.onreadystatechange = function () {
    if (this.readyState === "complete") this.onload();
  };

  googleApi.src = "https://apis.google.com/js/api.js";

  /* const addApiToWeb = function () {
  if (document.getElementsByTagName("body")[0]) {
    document.getElementsByTagName("body")[0].append(googleApi);
  }
  //Didn't found Button
  else {
    //Loop this function every 5ms
    setTimeout(addApiToWeb, 2);
  }
};

addApiToWeb(); */

  document.getElementsByTagName("body")[0].append(googleApi);
};
