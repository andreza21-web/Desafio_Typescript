
import { sumTwoNumber } from './../logica/twoSum';

describe("sumTwoNumber", () => {

    // array = [2, 7, 11, 15] target  = 9
    //          1, 2,  3,  4

    // o left valor inicial 2(fixo)
    // right valor final 15 (move ate encontrar o valor exato da soma)

    // sumPoint soma dos ponteiros arr[left] posicao do array (2+15)[17] (2+11)[13] (2+7)[9]

    // retorna a posicao do array [1,2]

    test("Deve retornar [1,2] para a entrada [2,7,11,15] com o target 9", () => {
        expect(sumTwoNumber([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test("Deve retornar [1,2] para a entrada [10,11,13,15] com o target 23", () => {
        expect(sumTwoNumber([10,11,13,15], 23)).toEqual([1, 3]);
    });

    test("Deve retornar [2,4] para a entrada [2,3,4,5,9] com o target 8", () => {
        expect(sumTwoNumber([2,3,4,5,9], 8)).toEqual([2,4]);
    });

    test("Deve retornar [1,2] para a entrada [1,2] com o target 3", () => {
        expect(sumTwoNumber([1,2], 3)).toEqual([1, 2]);
    });

    test("Deve retornar [] para a entrada [] com o target 0", () => {
        expect(sumTwoNumber([], 0)).toEqual([]);
    });


})