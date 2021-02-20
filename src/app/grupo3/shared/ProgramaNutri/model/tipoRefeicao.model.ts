export interface IdTipoRefeicao{
  idTipoRefeicao: number;
  dsTipoRefeicao: string;
}

export class IdTipoRefeicao{
  idTipoRefeicao: number;
  dsTipoRefeicao: string;
}

//getTipoRefeicao
export interface ResponseTipoRefeicao {
tipoRefeicao: IdTipoRefeicao
}