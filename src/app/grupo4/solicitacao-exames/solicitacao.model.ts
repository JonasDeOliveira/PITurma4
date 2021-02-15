export interface Solicitacao {
    nomePaciente: string;
    medico: Medico;
    listaTipoExame : Exames[];
}

export interface Medico {
    idUsuario: number;
    ufCrm: UfCrm;
    nome: string;
    nrCrm: number;
    enderecos: Endereco[];
    contatos: Contato[];
}

export interface UfCrm {
    idUf: number;
    dsUf: string;
}


export interface Endereco {
    idEndereco: number;
    dsEndereco: string;
    dsComplemento: string,
    dsBairro: string;
    nrCep: string;
    idCidade: number;
}

export interface Contato {
    nrDdd: number;
    dsContato: number;
}

export interface Exames {
    idTipoExame: number;
    dsTipoExame: string;
}
