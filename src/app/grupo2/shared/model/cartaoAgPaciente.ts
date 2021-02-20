

export interface CartaoAgPaciente{

    paciente: Paciente;
    nrCartao: string;
    codSeguranca: string;
    dtValidade: string;

}

export interface Paciente{
    nome: string;
}
