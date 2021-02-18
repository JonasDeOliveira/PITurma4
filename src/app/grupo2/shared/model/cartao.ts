export interface Cartao{
<<<<<<< HEAD
    idCartao: number;
    usuario: Cliente;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: string;
    dtEmissao: Date;
=======
    idCartao?: number;
    usuario?: Cliente;
    nrCartao?: string;
    codSeguranca?: string;
    dtValidade?: Date;
    dtEmissao?: Date;
>>>>>>> 102477aa59c493cb86a5b65ce01e09d7090ae78d
}

export interface Cliente{
   idUsuario?: number;
   idGenero?: number;
   idEspMedica?: number;
   idUfCrm?: number;
   idTipoUsuario?: number;
    nmNome?: string;
    dtNascimento?: Date;
    nrCpf?:string;
    nrCrm?:string;
    dsEndImg?:string;
    preco?: Preco;
}

export interface Preco{
    vlConsulta?: number;
}