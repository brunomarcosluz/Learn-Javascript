// função sem return 
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)

//funcão com return
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 4)); //perceba que com return temos que imprimir a função no console.log