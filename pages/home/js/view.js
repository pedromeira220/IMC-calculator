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
    bmiInfo: {
        situation: {
            "Normal": {
                text: "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais."
            },
            "Sobrepeso": {
                text: "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico."

            },
            "Obesidade grau I": {
                text: "Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você."
            },
            "Obesidade grau II": {
                text: "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo."
            },
            "Obesidade grau III": {
                text: "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo."
            }
        }
    }
}