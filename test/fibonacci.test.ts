import { binarySearch, fibonacci, sortStrings } from './../logica/fibonacci';

describe('fibonacci', () => {


    test('fibonacci', () => {
      expect(fibonacci(10)).toEqual([0,1,1,2,3,5,8,13,21,34]);
    });
  
    test('sortStrings', () => {
      expect(sortStrings(["banana", "apple", "cherry"])).toEqual(["apple", "banana", "cherry"]);
    });

    test('binarySearch', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
    });
  
  });