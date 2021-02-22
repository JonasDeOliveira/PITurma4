export interface Login {
    idUsuario: number;
    dsEmail: string;
    dsSenha: string;
}

export interface ResultData {
    status: number;
    mensagem: String;
    retorno: any;
    dtTimestampErro: Date;
}