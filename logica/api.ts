

 interface CEP {

    cep: string;
    logradouro: string;
    bairro: string;
    uf: string;
}
export async function getCep(cep: string){

    try {
        const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data : CEP= await result.json();
        console.log(result);
        return data;
    } catch (error) {
        console.error(error);
    }
}