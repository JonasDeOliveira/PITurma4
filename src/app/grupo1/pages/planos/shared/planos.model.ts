export interface Planos {
    idPlano: number,
    nmPlano: string,
    dsPlano: string,
    vlPlano: number

   // idServicoPlano: BigInteger,
   //servicos:Array<ServicoPlano>,
}

//GET Planos
export interface ResponsePlanos {
    planos: Planos[]
}


