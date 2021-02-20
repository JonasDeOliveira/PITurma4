import { IdTipoRefeicao } from "./tipoRefeicao.model";

export interface DadosPaciente {
    nome: string;
    dtNascimento : string;
    vlPeso: number;
    vlAltura: number;
    dsHabitosVicios: string;
    dsAlergiasRestricoes: string;
    dsObjetivo: string;
}

export interface ResponseDadosPaciente {
   dadosPaciente: DadosPaciente
}

//  Cardapio
export interface Cardapio{
    idTipoRefeicao: IdTipoRefeicao;
    idPaciente: number;
    idMedico: number;
    nomeReceita: string;
    qtCalorias: number;
    qtRendimento: number;
    dsDescricao: string;
}
//Property 'cardapio' is missing in type 'ListarCardapios[]' but required in type 'ResponseCardapio'

export interface ResponseCardapio{
    cardapio: ResponseListarCardapios[]
}


//LISTAR CARDAPIOS DO USUÁRIO
export interface ListarCardapios{
  cardapio: Cardapio
}

export interface ResponseListarCardapios{
   cardapio: Cardapio[]
}