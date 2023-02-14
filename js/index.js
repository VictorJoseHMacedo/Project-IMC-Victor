function formatImc(value){
    value = Math.ceil(value * 100) /100;
    value = value.toFixed(2) // Fixar o valor decimal em duas casas
    return value 
}

function tabelaIMC (value) {
    if (value < 18.5) {
        return 'Magreza'
    } else if (value >= 18.5 && value <= 24.9){
        return 'Normal'
    } else if (value >= 25.0 && value <= 29.9){
        return 'Sobrepeso'
    } else if (value >= 30.0 && value <= 34.9){
        return 'Obesidade'
    } else if (value > 40.0){
        return 'Obesidade grave'
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
