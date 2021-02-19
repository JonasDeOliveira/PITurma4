import { Paciente } from './agPaciente';

export interface CartaoAgPaciente{

    idCartao?: number;
    usuario: Paciente;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: string;

}
