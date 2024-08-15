//            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//  primeiro[0] e ultimo[9] posicao 0, 0 == não e crescente
//  se sim cria novo array e joga eles dentro
// se nao pula para a proxima posicao[1,8] 0,0 
// não e crescente (pula)
// posicao [2,7] 1,0 é crescente cria novo array [1,0] length 2
// posicao [3,6] 1,0 é crescente cria novo array [1,0, 1,0] length 4
// posicao [4,5] 1,0 é crescente cria novo array [1,0, 1,0, 1,0] length 5

//return 6

// [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
//   [0,1,1,0,1,0]

// [0,1,1,0]



export function areValidElements(firstElements: number, secondElements: number) {
    const isBinary = (value: any) => value === 0 || value === 1;
    return isBinary(firstElements) && isBinary(secondElements) && firstElements !== secondElements;
}

export function validateElement(firstElement: number): number {
    return firstElement === 0 ? -1 : 1;
}

// buscar pelo left e right

export function searchBinaryLeftAndRight(array: Array<number>): Array<number> {
    let newArrayElements = [];
    console.log(array);

    for (let i = 1; i < array.length / 2; i++) {

        let elementoInicio = array[i];
        let elementoFim = array[array.length - 1 - i];

        if (areValidElements(elementoInicio, elementoFim)) {
            newArrayElements.push(elementoInicio, elementoFim);
        } else {
        }

    }
    return newArrayElements;
}



export function searchBinaryFirstAndSecond(array: Array<number>): Array<number> {
    let newArrayElements = [];
    console.log(array);

    for (let i = 1; i < array.length / 2; i++) {
        let firstElements = array[i];
        let secondElements = array[i + 1];
        if (areValidElements(firstElements, secondElements)) {
            newArrayElements.push(firstElements, secondElements);
        } else {
        }
    }
    return newArrayElements;
}


export function searchBinary(array: Array<number>): number {

    if (array.length > 3) {
        const firstAndSecondArray = searchBinaryFirstAndSecond(array);
        const leftAndRightArray = searchBinaryLeftAndRight(array);
        let isSearchBinary = firstAndSecondArray.concat(leftAndRightArray);
        return isSearchBinary.length;

    } else if (array.length === 1) {
        console.log(array.length)
        return 0;

    }
    return array.length;

}


export function searchBinaryTwo(array: any): any {

    if (array.length === 1) {
        return 0;
    }else{
        const obj = createNewArrayElements(array);
    console.log(obj)
    console.log(array)

    // pegar as ocorrencias do array que mais sai e criar um 
    // novo array somente com esses indices

    const objArray = obj[Object.keys(obj)[0]];

   // Determina o intervalo baseado nos índices fornecidos
   const intervaloInicio = Math.min(...objArray);
   const intervaloFim = Math.max(...objArray);

   const elementosSelecionados = array.slice(intervaloInicio + 1, intervaloFim + 1);

   console.log(elementosSelecionados)
   return elementosSelecionados.length;

    }

    

}


export function createNewArrayElements(array: Array<number>): any {

    // cria um novo array de elementos com 1 e -1 (substitui o 0)
    const searchElement = [];

    for (let i = 0; i < array.length; i++) {
        let firstElement = array[i];
        console.log(firstElement)
        const isNumber = validateElement(firstElement)
        searchElement.push(isNumber);
    }

    const sumElement: any[] = [];
// [-1]
    console.log(searchElement)
    // Armazenar o primeiro elemento
    if (searchElement.length > 0) {
        sumElement.push(searchElement[0]);
    }

    // Somar os elementos subsequentes com o armazenado no resultArray
    for (let i = 1; i < searchElement.length; i++) {
        const previousValue = sumElement[sumElement.length - 1];
        sumElement.push(previousValue + searchElement[i]);
    }
    console.log(sumElement)
    //   encontrar o elemento que mais sai e depois colocar em um novo array
    const resultado = encontrarElementosMaisFrequentes(sumElement);


    console.log(resultado);
    return resultado;
}

function encontrarElementosMaisFrequentes<T>(arr: T[]): { [key: string]: number[] } {
    let contador: { [key: string]: number } = {};
    let indices: { [key: string]: number[] } = {};

    // Contar as ocorrências de cada elemento
    arr.forEach((elemento, indice) => {
        const chave = String(elemento);
        contador[chave] = (contador[chave] || 0) + 1;
        if (!indices[chave]) {
            indices[chave] = [];
        }
        indices[chave].push(indice);
    });

    // Encontrar o maior número de ocorrências
    const maxOcorrencias = Math.max(...Object.values(contador));

    // Encontrar os elementos que possuem o maior número de ocorrências
    const elementosMaisFrequentes = Object.keys(contador).filter(chave => contador[chave] === maxOcorrencias);

    // Obter os índices dos elementos mais frequentes
    const resultado: { [key: string]: number[] } = {};
    elementosMaisFrequentes.forEach(chave => {
        resultado[chave] = indices[chave];
    });

    return resultado;
}


