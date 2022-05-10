const view = {
    bmiText: document.getElementById('bmi-text'),
    print(text) {
        this.bmiText.textContent = text;
    },
}