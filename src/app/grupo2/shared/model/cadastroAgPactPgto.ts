import { CartaoAgPaciente } from './cartaoAgPaciente';




export interface CadastroAgPactPgto {
    idAgenda: number;
    idUsuario: number;
    nrParcelas: number;
    tipoPgto: TipoPagamento;
    cartao: CartaoAgPaciente;
 }

 export interface TipoPagamento{
    idFormaPagamento: number;
    dsFormaPagamento?: string;
 }

