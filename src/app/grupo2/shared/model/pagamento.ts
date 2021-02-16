export interface Pagamento {

    idAgPagamento: number;
    idCartao: number;
    idContrato: number;
    idFormaPgt: number;
    idNF: number;
    idAgPaciente: number;
    idPedido: number;
    vlPagamento: number;
    dtPagamento: Date;
    nrParcela: number;
 
 }

 export interface ResponsePagamento{
     responsePagamento: ResponsePagamento;
 }


