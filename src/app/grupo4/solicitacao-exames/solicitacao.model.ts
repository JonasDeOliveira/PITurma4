
//CADASTRAR SOLICITACAO
export interface CadastroSolicitacao {
    idSolicExame: number;
    prontuario: Prontuario;
    paciente: Paciente;
    medico: Medico;
    dtSolicitacao: Date;
    dsIndicacaoClin: string;
    exames: Exames[];
}

export interface Prontuario {
    idProntuario: number;
}

export interface Paciente {
    idUsuario: number;
}

export interface Medico {
    idUsuario: number;
}

export interface Exames {
    idTipoExame: number;
    dsTipoExame: string;
}
