import { AgServico } from "./agservico.model";
import { Cartao } from "./cartao.model";

export interface Pedido {
    idPedido: number;
    paciente: Usuario;
    agendamentos: AgServico;
    cartao: Cartao;
}

export interface Usuario {
    idPaciente: number;
}

export interface ResponsePedido {
    pedido: Pedido []
}
