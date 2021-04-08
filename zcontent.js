//const buttonPoinyer = document.querySelector('[aria-label="Approve"]');

// Use setTimeout to loop this function untill the whole page loaded
const findTheApproveButton = function () {
    if (document.querySelector('[aria-label="Approve"]')) {
        //Find all Approve button
        const allButton = document.querySelectorAll('[aria-label="Approve"]');
        //Creat Button
        const getInfoButton = document.createElement('button');
        getInfoButton.id = 'getinfo';
        getInfoButton.textContent = 'Get Info';

        for (let i = 0; i < allButton.length; i++) {
            allButton[i].querySelector('[dir="auto"]').textContent =
                'Get Info and Approve';
            document
                .querySelector('[aria-label="Approve"]')
                .parentNode.parentNode.prepend(getInfoButton);
        }
    }
    //Didn't found Button
    else {
        console.log('Not Found');
        //Loop this function every 5ms
        setTimeout(findTheApproveButton, 5);
    }
};

window.onload = () => {
    console.log(document.readyState);

    console.log(document.querySelector('[aria-label="Approve"]'));

    findTheApproveButton();

    // document.querySelector('[aria-label="Approve"]').querySelector('[dir="auto"]').textContent = "get info and approve";
    // const getInfoButton = document.createElement('button');
    // getInfoButton.id = "getinfo"
    // getInfoButton.textContent = "Get Info"

    // document.querySelector('[aria-label="Approve"]').parentNode.parentNode.parentNode.prepend(getInfoButton);
};

// if (document.readyState === "complete")
// {
//     myMain();
// }
// else
// {
// window['onload'] = myMain();
// }

// // window.addEventListener ("load", myMain, false);

// function myMain (evt) {
//     // DO YOUR STUFF HERE.
//     console.log(document.querySelector('[aria-label="Approve"]'));
// }
