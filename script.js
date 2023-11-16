var numeroSecreto = parseInt(Math.random() * 1001);
var maxTentativas = numeroSecreto % 2 == 0 ? 10 : 5;
var numTentativas = 0;

var btnAddChute = document.getElementById('btn-add-chute');
if (btnAddChute) {
    btnAddChute.addEventListener('click', function () {
        var inputElement = document.getElementById('inputNumber');
        var numChute = inputElement.value.trim();
        var resultDiv = document.getElementById('result');

        if (numChute === '') {
            document.getElementById('result').innerHTML = 'Por favor, digite um número para jogar.';
            resultDiv.style.display = 'flex';
            return;
        }

        numChute = parseInt(numChute);

        if (isNaN(numChute)) {
            document.getElementById('result').innerHTML = 'Por favor, digite um número válido.';
            resultDiv.style.display = 'flex';
            return;
        }

        if (numChute == 0) {
            document.getElementById('result').innerHTML = 'Zero não é permitido 😅. Escolha entre 1 e 1000.';
            resultDiv.style.display = 'flex';
            return;
        }

        if (numTentativas < maxTentativas) {
            numTentativas++;
            if (numChute == numeroSecreto) {
                document.getElementById('result').innerHTML = 'Acertou! O número secreto é ' + numChute + '.' +
                    ' Você chutou ' + numTentativas + ' vezes.';
                resultDiv.style.display = 'flex';
            } else if (numChute > numeroSecreto) {
                document.getElementById('result').innerHTML = 'Errou... O número secreto é menor que ' + numChute + '.' +
                    ' Você chutou ' + numTentativas + ' vezes.';
                resultDiv.style.display = 'flex';
            } else {
                document.getElementById('result').innerHTML = 'Errou... O número secreto é maior que ' + numChute + '.' +
                    ' Você chutou ' + numTentativas + ' vezes.';
                resultDiv.style.display = 'flex';
            }
        } else {
            document.getElementById('result').innerHTML = 'Jogo encerrado. Você atingiu o máximo de tentativas.';
            resultDiv.style.display = 'flex';
        }
    });
}


/*

while (numTentativas < maxTentativas && chute!= numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000')
    numTentativas++;
    //i++;
    if (chute == numeroSecreto) {
        alert('Acertou! O número secreto é ' + chute + '.' + ' Você chutou ' + numTentativas + ' vezes.')
    } else if (chute > numeroSecreto) {
        alert('Errou... O número secreto é menor que ' + chute + '.' + ' Você chutou ' + numTentativas + ' vezes.')
    } else if (chute < numeroSecreto) {
        alert('Errou... O número secreto é maior que ' + chute + '.' + ' Você chutou ' + numTentativas + ' vezes.')
    }
}

alert('Jogo encerrado.')
*/