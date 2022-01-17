// Variáveis tem um valor variável e modificável ao longo do programa
// Já constantes tem um valor fixo e não modificável
const PRECO = 10;
var desconto = 2;
var preco_final = PRECO - desconto;


function soma(a, b) {
    console.log(a + b);
    return a + b;
}

console.log(soma(4, 7));