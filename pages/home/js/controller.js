function onCalculateBMIButtonClick() {

    const heightValue = parseFloat(heightInput.value / 100); // Kilograms
    const massValue = parseFloat(massInput.value); // Centimeter
    //The mass was in centimeters, but was converted to meters


    const bmiValue = model.calculateBMI(massValue, heightValue);

    view.print(model.returnBaseText(bmiValue));
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
}