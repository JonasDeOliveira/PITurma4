import { Cartao } from './cartao';



export interface CadastroAgPactPgto {
    idAgenda: number;
    idUsuario: number;
    nrParcelas: number;
    tipoPgto: TipoPagamento;
    cartao: Cartao;
 }

 export interface TipoPagamento{
    idFormaPagamento: number;
    dsFormaPagamento?: string;
 }

