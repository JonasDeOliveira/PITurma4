import { AgServico } from "./agservico.model";
import { Cartao } from "./cartao.model";

export interface Pedido {
    idPedido: number;
    idUsuario: number;
    agendamentos: AgServico[];
    cartao: Cartao;
}

export class Pedido {
    idPedido: number;
    idUsuario: number;
    agendamentos: AgServico[];
    cartao: Cartao;
}


export interface ResponsePedido {
    pedido: Pedido []
}
