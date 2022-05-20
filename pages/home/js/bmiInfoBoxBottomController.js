function bmiInfoBoxBottomController() {
    const bmiInfoBoxBottom = document.getElementById('bmiInfoBoxBottom');

    if (model.bmiWasCalculated) {
        bmiInfoBoxBottom.classList.toggle('display-none');
    }
}