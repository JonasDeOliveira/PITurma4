export interface Receitas {
    idReceita: number;
    nomeReceita: String;
    dsReceita: String;
    qtCalorias: number;
    qtRendimento: number;
    endImagem:  String;
}

export interface Receita {
  idReceita: number;
  nomeReceita: String;
  dsReceita: String;
  qtCalorias: number;
  qtRendimento: number;
  endImagem:  String;
}

// GET Receitas
export interface ResponseReceitas {
  receitas: Receitas[]
}

export interface ResponseReceita {
receita : Receita;
}


export interface Categoria {
  idCategoria: number;
  dsCategoria: string;
}



// GET Receita
//export interface ResponseReceita {
  // receita: Receita
//}