/* Atividade: validação de erros por tipo
O objetivo é que a função de aumentar o seu tamanho corresponde ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não foram enviados, lance um erro do tipo enviadoReferenceError
Se o array não for do tipo 'object', lance um erro do tipoTypeError
Se o número não for do tipo 'number', lance um erro do tipoTypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipoRangeError
Utilize uma declaraçãotry...catch
Filtre como chamadas de captura por cada tipo de erro usando o operador instanceof */

function validaArray(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof arr !== 'object')
        throw new TypeError('Array precisa ser do tipo object');

    if(typeof num !== 'number')
        throw new TypeError('num precisa ser do tipo number');

    if(arr.length != num) throw new RangeError('Tamanho inválido');

    return arr;

    } catch (e) {
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log('Este erro é um TypeError!');
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log('Este erro é um RangeError!');
            console.log(e.message);
        }else{
            console.log('Tipo de Erro não esperado: ' + e);
        }
    }
}

console.log(validaArray());
console.log("\n");
console.log(validaArray(5, 5));
console.log("\n");
console.log(validaArray([], 'a'));
console.log("\n");
console.log(validaArray([], 5));
console.log("\n Saida sem erro");
console.log(validaArray([1,2,3,4,5], 5));