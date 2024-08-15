
import { createNewArrayElements, searchBinary, searchBinaryTwo } from './../logica/searchBinary';

describe('SEARCH BINARY', () => {

    test('searchBinary deve retornar o lenght 2 [0, 1]', () => {
        expect(searchBinaryTwo([ 0, 1 ])).toEqual(2);
    });

    test('searchBinary deve retornar o lenght 0 [ 0 ]', () => {
        expect(searchBinaryTwo([ 0 ])).toEqual(0);
    });

    test('searchBinary deve retornar o lenght 4 [ 1, 1, 0, 1, 1, 0, 1, 1]', () => {
        expect(searchBinaryTwo([ 1, 1, 0, 1, 1, 0, 1, 1])).toEqual(4);
    });

    // [0, 1, 1, 0, 1, 1, 1, 0, 0, 0]
    // [1,0,1,0,0,1] 6
    // [0,1,1,0,0,1,1,0] 6
    test('searchBinary deve retornar o lenght 10 [0, 1, 1, 0, 1, 1, 1, 0, 0, 0]', () => {
        expect(searchBinaryTwo([0, 1, 1, 0, 1, 1, 1, 0, 0, 0])).toEqual(10);
    });


    // [0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ]
    //  [0,1,1,0,1,0] 6
    // [0,1] 2
    test('searchBinary deve retornar o lenght 6 [0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ]', () => {
        expect(searchBinaryTwo([0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ])).toEqual(6);
    });


});