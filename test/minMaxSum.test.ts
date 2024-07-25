import { minMaxSum, MinMaxInterface } from './../logica/miniMaxSum';


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
  
  });