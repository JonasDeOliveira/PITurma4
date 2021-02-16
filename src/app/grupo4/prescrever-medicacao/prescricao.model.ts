
//CADASTRAR PRESCRIÇÃO
export interface CadastroPrescricao {
    paciente: Paciente;
    prontuario: Prontuario;
    medico: Medico;
    tipoReceita: TipoReceita;
    dtEmissao: string;
    dsEndImgAssMed: string;
    prescricoes: Prescricao[];
}

export interface Paciente {
    idUsuario: number;
}

export interface Prontuario {
    idProntuario: number;
}

export interface Medico {
    idUsuario: number;
}

export interface TipoReceita {
    idTipoReceita: number
}

export interface Prescricao {
    idMedicacao: number;
    idFormaFarmac: number;
    idViaAdm: number;
    vlQuantidade: string;
    vlConcentracao: string;
    dsOrientacoes: string;
}

export interface Medicacao {
    idMedicacao: number,
    dsMedicacao: string
}