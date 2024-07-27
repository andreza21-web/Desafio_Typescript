export interface MinMaxInterface {
    min: number,
    max: number,
    msg?: string
}


export function minMaxSum(arr: Array<number>): MinMaxInterface {

    var minSum = 0;
    var maxSum = 0;

    // Verificar se o array tem pelo menos 4 elementos
    if (arr.length < 4) {

        return {
            msg: "O array deve ter pelo menos 4 elementos.",
            max: maxSum,
            min: minSum,

        }
    }

    // Copiando o array para não modificar o original
    var sortedArr = [...arr];

    // Ordenar o array para facilitar a soma dos menores e maiores valores
    sortedArr.sort((a, b) => a - b);



    // Somar os quatro menores números
    for (let i = 0; i < 4; i++) {
        minSum += sortedArr[i];
    }

    // Somar os quatro maiores números
    for (let i = sortedArr.length - 1; i >= sortedArr.length - 4; i--) {
        maxSum += sortedArr[i];
    }

    return {
        min: minSum,
        max: maxSum
    }
}


export function simpleArraySum(arr: Array<number>): number {
    // iniciar a variavel
    var sum = 0;

    // Copiando o array para não modificar o original
    var sortedArr = [...arr];

    // Ordenar o array para facilitar a soma dos menores e maiores valores
    sortedArr.sort((a, b) => a - b);

    // soma todos os valores
    for (let i = 0; i < arr.length; i++) {
        sum += sortedArr[i];
    }

    return sum;
}