//CADASTRAR Atendimento
export interface Atendimento {
    paciente : Paciente;
    medico: Medico;
    prontuario: Prontuario;
    agPaciente: AgPaciente;
    vlPeso: number;
    vlAltura: any;
    dsHabitosVicios: string;
    dsAlergiasRestricoes: string;
    dsMedicacaoUsoContinuo: string;
    dsProblemasSaude: string;
    dtAtendimento: any;
}

export interface Paciente {
    idUsuario: any;
}

export interface Medico {
    idUsuario: any;
}

export interface Prontuario {
    dsSubjetivo: string;
    dsObjetivo: string;
    dsAvaliacao: string;
    dsPlano: string;
    dsObservacoes: string;
}

export interface AgPaciente {
    idAgPaciente: any;
}