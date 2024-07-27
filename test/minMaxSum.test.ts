import { minMaxSum, MinMaxInterface, simpleArraySum } from './../logica/miniMaxSum';


describe('minMaxSum', () => {

    test('Deve retornar uma mensagem quando o array for menor que 4', () => {
        const arr = [1, 2, 3];
        const valueSum: MinMaxInterface = minMaxSum(arr);
        expect(valueSum).toEqual({min: 0, max: 0, msg: "O array deve ter pelo menos 4 elementos."})
    });

    test('Deve retornar a soma do menor e maior valor quando o array é maior que 4', () => {
        const arr = [1, 2, 3, 4, 5];
        const valueSum: MinMaxInterface = minMaxSum(arr);
        expect(valueSum).toEqual({min: 10, max: 14})
    });
    test('Deve somar os valores do array - simpleArraySum', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(simpleArraySum(arr)).toEqual(15)
        expect(simpleArraySum([1,2,3,4,10,11])).toEqual(31)
    });
  
  });