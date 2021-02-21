export interface Planos {
    idPlano: number,
    nmPlano: string,
    dsPlano: string,
    vlPlano: number
    servicos: Array<ServicoPlano>
   
   
}

export interface ServicoPlano{
    idServicoPlano: BigInteger,
    dsServico: string
    
}
//GET Planos
export interface ResponsePlanos {
    planos: Planos[]
}


