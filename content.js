const findTheApproveButton = function () {
  if (document.querySelector('[aria-label="Approve"]')) {
    //Find all Approve button
    const allButton = document.querySelectorAll('[aria-label="Approve"]');

    //Add New .CSS
    const styleEl = document.createElement("style");
    const styleSheet = styleEl.sheet;

    //Function of added Button
    const showinfo = function () {
      const folder = this.parentNode.parentNode.parentNode.parentNode
        .childNodes[1].childNodes;
      const answerNode = folder[folder.length - 1].childNodes;
      const allNodes = folder[folder.length - 2].firstChild.childNodes;

      for (let i = 0; i < allNodes.length; i++) {
        const answerBlock = allNodes[i].childNodes;

        console.log(
          `Answer ${i + 1}: ${answerBlock[answerBlock.length - 1].textContent}`
        );
      }

      console.log(
        `Answer ${allNodes.length + 1}: ${
          answerNode[answerNode.length - 1].firstChild.textContent
        }`
      );
    };

    // Add rules to .css file
    document.styleSheets[0].addRule(
      ".getInfoButton",
      "display: inline-block;" +
        "background-color: #e67e22;" +
        "border: 1px solid #e67e22;" +
        "text-align: center;" +
        "border-radius: 10px;" +
        "height:37px;" +
        "weight:200px;" +
        "color: #fff;" +
        "font-weight: 400;" +
        "font-size: 125%;" +
        "margin-top: 6px;" +
        "text-align: center;" +
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
      // getInfoButton.style.cssText =
      //   "display: inline-block;" +
      //   "background-color: #e67e22;" +
      //   "border: 1px solid #e67e22;" +
      //   "text-align: center;" +
      //   "border-radius: 10px;" +
      //   "height:37px;" +
      //   "weight:200px;" +
      //   "color: #fff;" +
      //   "font-weight: 400;" +
      //   "font-size: 125%;" +
      //   "margin-top: 6px;" +
      //   "text-align: right;";

      allButton[i].querySelector('[dir="auto"]').textContent =
        "Get Info and Approve";
      document
        .querySelector('[aria-label="Approve"]')
        .parentNode.parentNode.prepend(getInfoButton);

      getInfoButton.addEventListener("click", showinfo);
    }

    // getInfoButton.addEventListener("click");
  }
  //Didn't found Button
  else {
    console.log("Not Found");
    //Loop this function every 5ms
    setTimeout(findTheApproveButton, 5);
  }
};

window.onload = () => {
  console.log(document.readyState);

  console.log(document.querySelector('[aria-label="Approve"]'));

  findTheApproveButton();
};
