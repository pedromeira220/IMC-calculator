const calculateBMIButton = document.getElementById('calculateBMI-button');



const controller = {
    massInput: document.getElementById('mass-input'),
    heightInput: document.getElementById('height-input'),
    onCalculateBMIButtonClick() {

        console.log(this.massInput);
        console.log(this.heightInput);
        this.bmiValue = model.calculateBMI(this.massInput.value, this.heightInput.value);
        view.print(model.returnBaseText(this.bmiValue));
    },

}
const view = {
    bmiText: document.getElementById('bmi-text'),
    print(text) {
        this.bmiText.textContent = text;
    },
}

const model = {
    baseText: "Seu IMC é: ",
    returnBaseText(bmi) {
        return this.baseText + bmi;
    },
    calculateBMI(mass, height) {
        return (mass) / (height * height);
    },
}
const myFunction = () => {
    const massInput = document.getElementById('mass-input');
    const heightInput = document.getElementById('height-input');

    view.print(model.returnBaseText(model.calculateBMI(massInput.value, heightInput.value)));
};

calculateBMIButton.onclick = myFunction;