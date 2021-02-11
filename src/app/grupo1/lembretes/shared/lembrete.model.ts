export interface Lembrete {
    tituloLembrete: string,
    descricaoLembrete: string,
    dataLembrete: string,
    horaLembrete: string,
    dataCriacao: string,
    nrRepeticao: 2,
    intervaloLembrete: string,
    vencido: boolean
}

//GET Lembrete
export interface ResponseLembrete {
    lembrete: Lembrete
}

// GET Lembretes
export interface ResponseLembretes {
    lembretes : Lembrete[]
}

