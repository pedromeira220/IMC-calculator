const model = {
    baseText: "Seu IMC é: ",
    returnBaseText(bmi) {
        return this.baseText + bmi;
    },
    calculateBMI(mass, height) {
        return (mass) / (height * height);
    },
}