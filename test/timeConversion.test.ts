
import { timeConversion } from './../logica/timeConversion';
describe('timeConversion', () => {

    test('timeConversion', () => {
     
        expect(timeConversion("09:05:45PM")).toEqual("21:05:45");
        expect(timeConversion("21:05:45")).toEqual("21:05:45");
    });

});