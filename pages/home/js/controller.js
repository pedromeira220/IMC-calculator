const validateInputs = {
    heightInput(heightValue) {
        if (heightValue > 0 && heightValue <= 350) {
            return true;
        } else {
            return false;
        }
    },
    massInput(massValue) {
        if (massValue > 0 && massValue <= 500) {
            return true;
        } else {
            return false;
        }
    },
}

function onCalculateBMIButtonClick() {

    const heightValue = parseFloat(heightInput.value / 100); // Kilograms
    const massValue = parseFloat(massInput.value); // Centimeters
    //The mass was in centimeters, but was converted to meters
    let canCalculateBMI = true;

    if (validateInputs.massInput(massValue) != true) {
        view.printError(view.massErrorText, model.massErrorId);
        canCalculateBMI = false;

    } else {
        view.printError("", model.massErrorId);
    }

    if (validateInputs.heightInput(heightValue) != true) {
        view.printError(view.heightErrorText, model.heightErrorId);
        canCalculateBMI = false;

    } else {
        view.printError("", model.heightErrorId);
    }

    if (canCalculateBMI) {
        const bmiValue = model.calculateBMI(massValue, heightValue);

        view.print(model.returnBaseText(bmiValue));
        view.showBmiInfoBox();
    }


}

function handleOnEnterPress(event) {
    const calculateBMIButton = document.getElementById('calculateBMI-button');


    if (event.keyCode === 13) {
        calculateBMIButton.click();
        return false;
    }
}

function init() {
    const calculateBMIButton = document.getElementById('calculateBMI-button');
    calculateBMIButton.onclick = onCalculateBMIButtonClick;

    const bmiInputs = document.getElementsByClassName("bmiInput");
    [...bmiInputs].forEach(element => {
        element.onkeypress = handleOnEnterPress;
    });

    bmiInputs[0].focus();


    const knowMoreButton = document.getElementById("know-more");
    knowMoreButton.onclick = function() {
        const bmiInfoBoxBottomTopPosition = document.getElementById('bmiInfoBoxBottom').offsetTop;
        console.log(bmiInfoBoxBottomTopPosition);
        scrollToPosition(bmiInfoBoxBottomTopPosition);
    }
}

function scrollToPosition(position) {
    window.scroll({
        top: position,
        behavior: "smooth",
    });
}