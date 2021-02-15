
export interface Usuario{
    idUsuario:number, 
    idGenero: number,
    idEspMedica: number,
    idUfCrm: number,
    idTipoUsuario: number,
    nmNome: string,
    dtNascimento: string,
    nrCpf: string,
    nrCrm: string,
    dsEndImg: string
    idPreco: number
    enderecos: Array<Endereco>
}
export interface Endereco{
    idEndereco: number,
    dsEndereco: string,
    dsComplemento: string,
    dsBairro: string,
    nrCep: string,
    idCidade: number,
    idUf: number
}

export interface ResponseUsuario{
    usuario: ResponseUsuario
}