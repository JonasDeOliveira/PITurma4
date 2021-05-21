export interface Pagamento {

    idAgPagamento?: number;
    idCartao?: number;
    idContrato?: number;
    formaPgt?: TipoPagamento;
    idNF?: number;
    idAgPaciente?: number;
    idPedido?: number;
    vlPagamento?: number;
    dtPagamento?: Date;
    nrParcela?: number;
 
 }

 export interface TipoPagamento{
     idFormaPagamento: number;
     dsFormaPagamento: string;
 }



