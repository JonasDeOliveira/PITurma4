export interface Prescricao {
    listaTipoReceita : Array<TipoReceita>;
    nomePaciente: string;
    listaMedicacao: Array<Medicacao>;
    listaViaAdm: Array<ViaAdm>;
    listaFormaFarmac: Array<FormaFarmac>;
    medico: Medico;
}

export interface TipoReceita {
    idTipoReceita: number;
    dsTipoReceita: string;
}

export interface Medicacao {
    idMedicacao: number;
    dsMedicacao: string;
}

export interface ViaAdm {
    idViaAdm: number;
    dsViaAdm: string;
}

export interface FormaFarmac {
    idFormaFarmac: number;
    dsFormaFarmac: string;
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
    dsComplemento: string;
    dsBairro: string;
    nrCep: string;
    idCidade: number;
}

export interface Contato {
    nrDdd: number;
    dsContato: number;
}