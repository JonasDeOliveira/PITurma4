export interface Cartao{
    idCartao: number;
    usuario: Cliente;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: Date;
    dtEmissao: Date;
}

export interface Cliente{
   idUsuario: number;
   idGenero: number;
   idEspMedica: number;
   idUfCrm: number;
   idTipoUsuario: number;
    nmNome: string;
    dtNascimento: Date;
    nrCpf:string;
    nrCrm:string;
    dsEndImg:string;
    preco: Preco;
}

export interface Preco{
    vlConsulta: number;
}