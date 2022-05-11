const view = {
    bmiText: document.getElementById('bmi-text'),
    massErrorText: "O peso tem que ser > 0 e <= 500",
    heightErrorText: "A altura tem que ser > 0 e <= 350",
    print(text) {
        this.bmiText.classList.toggle("fade");
        this.bmiText.classList.remove("hide");
        this.bmiText.textContent = text;
    },
    printError(message, id) {
        document.getElementById(id).textContent = message;
    },
    showBmiInfoBox() {
        document.querySelector(".bmi-info-box").classList.remove("display-none");
    },
}