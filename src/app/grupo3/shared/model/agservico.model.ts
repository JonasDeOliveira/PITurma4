export class AgServico {

    idAgendamento: number;
    idLoja: number;
    idServico: number;
    idStatus: number;
    idPedido: number;
    dtHr: string;
    dtDataHora: string;

    dsServico: string;
    endLoja: string;
}

export interface ResponseAgendamentos {
    agendamentos: AgServico[]
}