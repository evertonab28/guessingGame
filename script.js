var numeroSecreto = parseInt(Math.random() * 1001);
var maxTentativas = numeroSecreto % 2 == 0 ? 15 : 10;
var numTentativas = 0;

var btnAddChute = document.getElementById('btn-add-chute');
if (btnAddChute) {
    btnAddChute.addEventListener('click', function () {
        var inputElement = document.getElementById('inputNumber');
        var numChute = inputElement.value.trim();
        var resultDiv = document.getElementById('result');

        if (numChute === '') {
            resultDiv.innerHTML = 'Por favor, digite um número para jogar.';
            resultDiv.style.display = 'flex';
            return;
        }

        numChute = parseInt(numChute);

        if (isNaN(numChute)) {
            resultDiv.innerHTML = 'Por favor, digite um número válido.';
            resultDiv.style.display = 'flex';
            return;
        }

        if (numChute == 0) {
            resultDiv.innerHTML = 'Zero não é permitido 😅. Escolha entre 1 e 1000.';
            resultDiv.style.display = 'flex';
            return;
        }

        numTentativas++;

        if (numChute == numeroSecreto) {
            resultDiv.innerHTML = 'Acertou! O número secreto é ' + numChute + '.' +
                ' Você chutou ' + numTentativas + ' vezes.';
            resultDiv.style.display = 'flex';
            return;
        } else if (numChute > numeroSecreto) {
            resultDiv.innerHTML = 'Errou... O número secreto é menor que ' + numChute + '.' +
                ' Você chutou ' + numTentativas + ' vezes.';
        } else {
            resultDiv.innerHTML = 'Errou... O número secreto é maior que ' + numChute + '.' +
                ' Você chutou ' + numTentativas + ' vezes.';
        }

        if (numTentativas >= maxTentativas) {
            resultDiv.innerHTML = 'Jogo encerrado. Você atingiu o máximo de tentativas. O número secreto era ' + numeroSecreto + '.';
        }

        resultDiv.style.display = 'flex';
    });
}
