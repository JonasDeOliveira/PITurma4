
export interface Cadastro {
    espMed : EspMed;
    uf : Uf ;
    nome: string;
    nrCpf:string;
    dtNascimento : any;
    nrCrm: string;
    preco: Preco;
    enderecos: Array<Endereco>;
    contatos: Array<Contato>;
    login: LoginUsuario;
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
export interface Contato {
    dsContato : string;
}

export interface LoginUsuario {
    dsEmail : string;
    dsSenha : string;
}
export interface Cidade {
    idCidade : number;
    uf: Uf;
}