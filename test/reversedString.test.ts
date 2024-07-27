
import { reverseArray, reverseArraySwap, reverseArrayWithLoop, reversedString, reversedStringSwap, reversedStringWithLoop } from './../logica/reverseString';

describe('Reverse String', () => {

    test('Deve retornar uma palavra reversa', () => {
      expect(reversedString("ANDREZA")).toEqual("AZERDNA");
    });

    test('Deve retornar uma palavra reversa com reversedStringWithLoop', () => {
      expect(reversedStringWithLoop("ANDREZA")).toEqual("AZERDNA");
    });

    test('Deve retornar uma palavra reversa com reversedStringSwap', () => {
        expect(reversedStringSwap("ANDREZA")).toEqual("AZERDNA");
      });

      test('Deve retornar a matrix invertida [1, 4, 3, 2]', () => {
        const arr = [1, 4, 3, 2];
        expect(reverseArray(arr)).toEqual([2,3,4,1]);
      });

      test('Deve retornar a matrix invertida com reverseArrayWithLoop [1, 4, 3, 2]', () => {
        const arr = [1, 4, 3, 2];
        expect(reverseArrayWithLoop(arr)).toEqual([2,3,4,1]);
      });

      test('Deve retornar a matrix invertida com reverseArraySwap [1, 4, 3, 2]', () => {
        const arr = [1, 4, 3, 2];
        expect(reverseArraySwap(arr)).toEqual([2,3,4,1]);
      });
  });