
// Dado um array de inteiros em numbers (ordenado em ordem não decrescente).
// Deve encontrar dois numeros em que seja a soma do (target)
//  arrarNumbers [2,7,11,15]
//  target 9
//  saida esperada [1,2] sendo o indice do 2 e 7

// usar busca binaria

export function sumTwoNumber(arr: Array<number>, target: number): Array<number> {
    // iniciar os ponteiros lefth e right
    let left = 0;
    let right = arr.length - 1;

    // criar um laço de repetição em que o left seja maior que o right
    while (left < right) {
        // deve somar os ponteiros lefth e right 
        let sumPoint = arr[left] + arr[right];
        console.log(arr[left], arr[right]);
        // validar se a soma dos ponteiros seja igual ao target
        if (sumPoint === target) {
            // incrementar +1 nos indices
            return [left + 1, right + 1];

            // validar se a soma dos ponteiros for menor que o target (incrementar +1 no lefth)
        } else if (sumPoint < target) {
            left += 1;
            // validar se a soma dos ponteiros for maior que o target (decrementar -1 no right)

        } else right -= 1;

    }
    return [];
}