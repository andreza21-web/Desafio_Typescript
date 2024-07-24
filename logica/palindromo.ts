// Palíndromo
// Verifique se uma string é um palíndromo 
//(lê-se da mesma forma de trás para frente).

// deve retornar true se uma string OVO ler de tras para frente continuar igual
// deve retornar false se uma string MESA ler de tras para frente for diferente 

//MESA -> ASEM
// OVO -> OVO

const notPal = "ted";
const isPal = "ovo";

palindromo(notPal);
palindromo(isPal);

export function palindromo(str: string) : string{
    // quebra as letras do texto 
    const nameText = str.toUpperCase().split('');
    // reverte as letras do texto de tras para frente
    const reversed = str.toUpperCase().split('').reverse();

    // compara o nameText com o reversed para validar se sao iguais cada index
    const isValidPalindromo = nameText.every((text, index) => text == reversed[index]);

    const textReturn = isValidPalindromo ? `A palavra ${str} é Palindromo` : `A palavra ${str} não é Palindromo`
    return textReturn;
}