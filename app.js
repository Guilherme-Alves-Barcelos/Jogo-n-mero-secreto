alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log (numeroSecreto); //apresenta na parte inspecionar no navegador o valor da variavel(console)
let chute ;
let tentativas = 1

//condição ENQUANTO - chute for diferente do numero secreto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 a ${numeroMaximo}`);    

//condição na SE e SENÃO
    if (chute==numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentaviva = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentaviva}.`);
//if (tentativas > 1){
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

