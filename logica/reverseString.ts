
// ANDREZA
// <------
// AZERDNA

export function reversedString(s: string) : string{

    const text = s.toUpperCase().split("").reverse();
    return text.join("");
}


// 
export function reversedStringWithLoop(s: string): string {
    const arrayText = [];
    for (let i =  s.length -1; i >= 0; i--) {
        arrayText.push(s.charAt(i))
    }
    return arrayText.join("").toString();
}

// modifica a localização das letras usando um ponteiro
export function reversedStringSwap(s: string): string{
    const arrayReversed: string[] = [];
    const lastIndex = s.length - 1;

    for (let i = 0; i <= lastIndex; i++) {
        arrayReversed[i] = s.charAt(lastIndex - i);
    }

    return arrayReversed.join('');
}

export function reverseArray(arr: Array<number>) : number[]{
    return arr.reverse();
}

export function reverseArrayWithLoop(arr: Array<number>):  number[] {
    const arrayNumber = [];
    for (let i =  arr.length -1; i >= 0; i--) {
        arrayNumber.push(arr[i]);
    }
    return arrayNumber;
}

export function reverseArraySwap(arr: Array<number>): number[]{
    const arrayReversed: number[] = [];
    const lastIndex = arr.length - 1;

    for (let i = 0; i <= lastIndex; i++) {
        arrayReversed[i] = arr[lastIndex - i];
    }

    return arrayReversed;
}