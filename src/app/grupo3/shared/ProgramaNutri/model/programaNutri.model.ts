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

export interface ResponseCardapio{
    cardapio: Cardapio[]
}


//LISTAR CARDAPIOS DO USUÁRIO
//export interface ListarCardapios{
  //  cardapio: Cardapio
//}

export interface ResponseListarCardapios{
   cardapio: Cardapio[]
}
