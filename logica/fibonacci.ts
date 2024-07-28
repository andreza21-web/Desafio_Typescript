

export function fibonacci(n : number) : Array<number>{
    let fib = [0,1];

    for (let index = 2; index < n; index++) {
        fib[index] = fib[index-1] + fib[index-2];
    }

    return fib;
}

// Verifique se duas strings são anagramas (possuem as mesmas letras com a mesma frequência).
export function anagrama(text1: string, text2: string): boolean{

    const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
    return normalize(text1) === normalize(text2);

}

// Ordenação de Strings
// Ordene uma array de strings por ordem alfabética.

export function sortStrings(abc : Array<string>): Array<string> {
    
    const orderString = abc.sort((a, b) => a.localeCompare(b));
    return orderString;
}

// Busca Binária
// Implemente a busca binária em uma array ordenada.

export function binarySearch(arr : Array<number>, target: number): number{

    let left = 0;
    let right = arr.length - 1;


    while (left <= right) {
        // O Math.floor arredonda um número para um inteiro  4.8 +0.1 =4.9/2--- 2.45
        let index = Math.floor((left + right) / 2);
        console.log(index)
        if(arr[index] === target) return index;
        else if (arr[index] < target) left = index + 1;
        else right = index - 1;
    }

    return -1;


}