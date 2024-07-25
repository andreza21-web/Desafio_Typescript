
export  function birthdayCakeCandles(candles: Array<number>) : number{

    // verifica o maior numero do array
    const maxCandles = Math.max(...candles)

    //busca a quantidade de vezes que o maior numero aparece
    const findCandles = candles.filter((num) => num === maxCandles);

    //retorna a quantidade de vezes
    const countCandles = findCandles.length;

    return countCandles;
}