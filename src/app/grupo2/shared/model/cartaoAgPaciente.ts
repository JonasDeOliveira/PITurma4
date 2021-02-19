

export interface CartaoAgPaciente{

    idCartao?: number;
    usuario: Paciente;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: string;

}

export interface Paciente{
    nome: string;
}
