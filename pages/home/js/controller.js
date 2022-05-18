function onCalculateBMIButtonClick() {

    const heightValue = parseFloat(heightInput.value); // Centimeters
    const massValue = parseFloat(massInput.value); // Kilograms

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
        const bmiValue = model.calculateBMI(massValue, heightValue / 100);

        view.print(model.returnBaseText(bmiValue));
        // view.showBmiInfoBox();
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
}


const validateInputs = {
    heightInput(heightValue) {
        if (heightValue > 0 && heightValue <= 300) {
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