
import { palindromo } from './../logica/palindromo';

describe('Palindromo', () => {

  test('Deve retornar que a palavra ovo é Palindromo', () => {
    expect(palindromo("ovo")).toEqual("A palavra ovo é Palindromo");
  });

  test('Deve retornar que a palavra Sorvete não é Palindromo', () => {
    expect(palindromo("sorvete")).toEqual("A palavra sorvete não é Palindromo");
  });


});


