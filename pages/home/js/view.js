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
    showBmiInfoBox(situation, text) {
        document.querySelector(".bmi-info-box").classList.add("column", "is-12", "box", "bmi-info-box");
        document.querySelector(".bmi-info-box").innerHTML = this.returnBmiInfoBoxTemplate(situation, text);
    },
    bmiInfo: {
        possiblesSituations: {
            AbaixoDoPeso: {
                title: "Abaixo do peso",
                text: "Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico."
            },
            Normal: {
                title: "Normal",
                text: "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais."
            },
            Sobrepeso: {
                title: "Sobrepeso",
                text: "Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico."

            },
            ObesidadeGrau1: {
                title: "Obesidade Grau I",
                text: "Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você."
            },
            ObesidadeGrau2: {
                title: "Obesidade Grau II",
                text: "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo."
            },
            ObesidadeGrau3: {
                title: "Obesidade Grau III",
                text: "Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo."
            },
        },

    },
    returnBmiInfoBoxTemplate(situation, text) {
        return `
        
        <p class="title is-3">${situation}</p></p>

        <p>
            ${text}
        </p>
        <br>
        
        <br>

        <p>
            <span class="has-text-info title is-5" id="know-more">Mais informação</span>
        </p>
    
`
    },
}