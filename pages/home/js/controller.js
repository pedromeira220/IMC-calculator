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
        model.bmiValue = bmiValue;
        view.print(model.returnBaseText(bmiValue));

        const bmiInfo = returnBmiInformation();
        model.bmiSituation = bmiInfo.situation;
        model.bmiText = bmiInfo.text;

        view.showBmiInfoBox(model.bmiSituation, model.bmiText);

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


    /* const knowMoreButton = document.getElementById("know-more");
    knowMoreButton.onclick = function() {
        //Go to a page with more information about BMI
    } */
}

function scrollToPosition(position) {
    window.scroll({
        top: position,
        behavior: "smooth",
    });
}

function returnBmiInformation() {
    const bmiInfo = {
        situation: "",
        text: "",
    }

    if (model.bmiValue < 18.5) {
        bmiInfo.situation = view.bmiInfo.possiblesSituations.AbaixoDoPeso.title;
        bmiInfo.text = view.bmiInfo.possiblesSituations.AbaixoDoPeso.text;
    } else if (model.bmiValue >= 18.5 && model.bmiValue <= 24.9) {
        bmiInfo.situation = view.bmiInfo.possiblesSituations.Normal.title;
        bmiInfo.text = view.bmiInfo.possiblesSituations.Normal.text;
    } else if (model.bmiValue >= 25 && model.bmiValue <= 29.9) {
        bmiInfo.situation = view.bmiInfo.possiblesSituations.Sobrepeso.title;
        bmiInfo.text = view.bmiInfo.possiblesSituations.Sobrepeso.text;
    } else if (model.bmiValue >= 30 && model.bmiValue <= 34.9) {
        bmiInfo.situation = view.bmiInfo.possiblesSituations.ObesidadeGrau1.title;
        bmiInfo.text = view.bmiInfo.possiblesSituations.ObesidadeGrau1.text;
    } else if (model.bmiValue >= 35 && model.bmiValue <= 39.9) {
        bmiInfo.situation = view.bmiInfo.possiblesSituations.ObesidadeGrau2.title;
        bmiInfo.text = view.bmiInfo.possiblesSituations.ObesidadeGrau2.text;
    } else if (model.bmiValue >= 40) {
        bmiInfo.situation = view.bmiInfo.possiblesSituations.ObesidadeGrau3.title;
        bmiInfo.text = view.bmiInfo.possiblesSituations.ObesidadeGrau3.text;
    }

    return bmiInfo;
}