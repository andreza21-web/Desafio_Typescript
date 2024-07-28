import {getCep} from "./../logica/api"

describe('API', () => {

    test('getCep', () => {
    const cep = getCep("01001000").then(dados => {
            if (dados) {
                console.log('Dados do CEP:', dados);
            }
        });
      
       expect(cep).toEqual(2);
    });
});