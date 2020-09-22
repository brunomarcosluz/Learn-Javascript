function tratarErroELancar(erro){
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final');
    }
    
}

const obj = { nome: 'bruno' }
imprimirNomeGritado(obj)