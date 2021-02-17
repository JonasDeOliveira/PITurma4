import { Lojas } from './lojas.model';
import { Servicos } from './servico.model';

export class AgServico {

    idAgendamento: number;
    idLoja: number;
    idServico: number;
    idStatus: number;
    idPedido: number;
    dtHr: string;
    dtDataHora: string;

    loja: Lojas; 
    servico: Servicos; 

}

export interface ResponseAgendamentos {
    agendamentos: AgServico[]
}