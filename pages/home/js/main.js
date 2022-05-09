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