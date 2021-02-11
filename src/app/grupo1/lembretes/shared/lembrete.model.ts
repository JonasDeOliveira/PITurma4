export interface Lembrete {
    idPaciente: number,
    nmTitulo: string,
    dsLembrete: string,
    dtLembrete: string,
    dtCriacao: string,
    hrHora: string,
    nrRepeticao: 2,
    lembreteIntervalo: LembreteIntervalo,
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

//----------------------------------------------------

export interface LembreteIntervalo {
    idLembreteIntervalo: number,
    dsLembreteIntervalo: string
}

//GET IntervaloLembrete
export interface ResponseLembreteIntervalo {
    intervaloLembrete: LembreteIntervalo
}

//GET IntervalosLembrete
export interface ResponseLembretesIntervalo {
    intervalosLembrete : LembreteIntervalo[]
}
