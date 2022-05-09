const massInput = document.getElementById('mass-input');
const heightInput = document.getElementById('height-input');

function onCalculateBMIButtonClick() {

    const bmiValue = model.calculateBMI(massInput.value, heightInput.value);

    view.print(model.returnBaseText(bmiValue.toFixed(2)));
}

function init() {
    const calculateBMIButton = document.getElementById('calculateBMI-button');



    calculateBMIButton.onclick = onCalculateBMIButtonClick;
}

window.onload = init;