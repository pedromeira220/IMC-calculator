const model = {
    bmiWasCalculated: false,
    massErrorId: "massError",
    heightErrorId: "heightError",
    baseText: "Seu IMC é: ",
    returnBaseText(bmi) {
        return this.baseText + bmi.toFixed(2) + " kg/m²";
    },
    calculateBMI(mass, height) {
        //The mass is in kilograms and the height is in meters
        return (mass) / (height * height);
    },

}