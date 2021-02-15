
//CADASTRAR SOLICITACAO
export interface CadastroSolicitacao {
    prontuario: Prontuario;
    paciente: Paciente;
    medico: Medico;
    dtSolicitacao: string;
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
}
