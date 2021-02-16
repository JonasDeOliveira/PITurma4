import { IdTipoRefeicao } from "./tipoRefeicao.model";

export interface DadosPaciente {
    nome: string;
    vlPeso: number;
    vlAltura: number;
    dsHabitosVicios: string;
    dsAlergiasRestricoes: string;
    dsObjetivo: string;
}

export interface ResponseDadosPaciente {
    dadosPaciente: DadosPaciente
}

//Get Cadastrar Cardapio
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
    cardapio: Cardapio
}