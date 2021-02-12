function imprime(mensagem){
    console.log(mensagem)
}

const nome = window.prompt("Qual é o nome do estudante? ")
imprime("Nome do estudante: " + nome)
imprime("============================")

let total = 0;

for (let i = 1; i <= 4; i++){
    const novastring = window.prompt("Digite a nota referente à " + i + "ª unidade: ")
    const valor = parseInt(novastring)
    imprime("A nota do " + i + "º bimestre é: " + valor);
    total += valor;
}

const media = (total / 4)
imprime("A média do ano: " + media);
// imprime(`A média do ano: ${media}`)

if (media < 5){
    imprime(nome + " está reprovado por média.")
}else{
    imprime(nome + " está aprovado.")
}