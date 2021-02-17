export interface PerfilMedico{
    espMed : EspMed;
    ufCrm : Uf ;
    nome: string;
    nrCpf:string;
    dtNascimento : any;
    nrCrm: string;
    preco: Preco;
    enderecos: Array<Endereco>;
    contatos: Array<Contato>;
}
export interface Uf{
    idUf: number;
}

export interface EspMed {
    idEspMed : number;
}

export interface Preco {
    vlConsulta : number;
}

export interface Endereco {
    dsEndereco : string;
    dsComplemento: string;
    dsBairro: string;
    nrCep: string;
    cidade: Cidade;
}

export interface Cidade {
    idCidade: number;
    uf : Uf; 
}

export interface Contato {
    dsContato : string;
}

