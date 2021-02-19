import { AgPaciente } from './agPaciente';

export interface CartaoAgPaciente{

    idCartao?: number;
    usuario: AgPaciente;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: string;

}
