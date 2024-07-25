
import { birthdayCakeCandles } from './../logica/birthdayCakeCandles';

describe('birthdayCakeCandles', () => {

    test('Deve verificar a quantidade de vezes que o  maior valor aparece', () => {
        const candles = [3, 5, 14, 14, 5];
        expect(birthdayCakeCandles(candles)).toEqual(2);
    });

    test('Deve retornar de forma correta a quantidade de elementos no array', () => {
        const candles: number[] = [];
        expect(birthdayCakeCandles(candles)).toBe(0);
    });

    test('Deve retornar a quantidade correta de elementos do array com numeros negativos e positivos', () => {
        const candles = [-1, -2, -3, 0, 1, 2, 2];
        expect(birthdayCakeCandles(candles)).toBe(2);
    });



});