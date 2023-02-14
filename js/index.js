function formatImc(value){
    value = Math.ceil(value * 100) /100;
    value = value.toFixed(2) // Fixar o valor decimal em duas casas
    return value 
}

function tabelaIMC (value) {
    if (value < 18.5) {
        return 'Abaixo do peso normal'
    } else if (value <= 18.5 && value <= 24.9){
        return 'Peso normal'
    } else if (value <= 25.0 && value <= 29.9){
        return 'Excesso de peso'
    } else if (value <= 30.0 && value <= 34.9){
        return 'Obesidade classe 1'
    } else if (value <= 35.0 && value <= 39.9){
        return 'Obesidade classe 2'
    } else if (value >= 40.0){
        return 'Obesidade classe 3'
    }
}

function imc () {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = peso / (altura * altura)
    document.getElementById('imcPessoa').innerHTML = 'Seu IMC é de: ' + formatImc(imc);
    document.getElementById('mensagemIMC').innerHTML = 'Resultado: ' + tabelaIMC(imc);

    setTimeout;
}

setTimeout(function () {
    window.location.reload(1);
}, 100000);
