const model = {
    baseText: "Seu IMC é: ",
    returnBaseText(bmi) {
        return this.baseText + bmi + "kg/m²";
    },
    calculateBMI(mass, height) {
        //The mass is in kilograms and the height is in meters
        return (mass) / (height * height);
    },
}