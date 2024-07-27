
import { reversedString, reversedStringSwap, reversedStringWithLoop } from './../logica/reverseString';

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

  });