export interface Cartao{

      idCartao:number, 
      idUsuario:number,
      nrCartao:number,
      codSeguranca:number;
      dtValidade:string;
      dtEmissao:string;

}


//GET Cartao
export interface ResponseCartao {
    cartao: Cartao
}

// GET Cartoes
export interface ResponseCartoes {
    cartoes : Cartao[]
}
