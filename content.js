const findTheApproveButton = function () {
  if (document.querySelector('[aria-label="Approve"]')) {
    //Find all Approve button
    const allButton = document.querySelectorAll('[aria-label="Approve"]');

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

      //   console.log(folder);
      //   console.log(answerNodeName);
      //   console.log(answerNode.length);
    };

    //Add button ans change text
    for (let i = 0; i < allButton.length; i++) {
      const getInfoButton = document.createElement("button");
      getInfoButton.id = `getinfo_${i}`;
      getInfoButton.textContent = "Get Info";

      allButton[i].querySelector('[dir="auto"]').textContent =
        "Get Info and Approve";
      document
        .querySelector('[aria-label="Approve"]')
        .parentNode.parentNode.prepend(getInfoButton);

      getInfoButton.addEventListener("click", showinfo);

      //   console.log();
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
