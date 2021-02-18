import { Usuario } from 'src/app/grupo1/usuario/shared/usuario.model';

export interface Cartao {

    nrCartao: string;
    nmCartao: string;
    codSeguranca: string;
    dtValidade: string;
    dtEmissao: string;
}

export class Cartao{

    nrCartao: string;
    codSeguranca: string;
    nmNome: string;
    usuario: Usuario; 
    dtValidade: string; //yyyy-MM-dd
    dtEmissao: string;

}

export interface ResponseCartao {
    cartao: Cartao
}
