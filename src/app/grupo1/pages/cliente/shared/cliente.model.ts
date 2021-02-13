import { Lembrete } from 'src/app/grupo1/lembretes/shared/lembrete.model'
import { Planos } from '../../planos/shared/planos.model';
import { Usuario } from '../../../usuario/shared/usuario.model';

export interface Cliente{}

    export interface InputCliente {
    loginUsuario: LoginUsuario,
    usuario: Usuario,
    ddd: String,
    celular: String,
    contrato: Contrato,
    //cartao: Cartao    
    }
    //----------------------------------------------------
    export interface AreaDoCliente{
    nmNome: String,
    idPaciente: number,
    lembrete: Array<Lembrete> 
    }
    //----------------------------------------------------
    export interface FormularioCadastro{
    ufs: Array<Uf>,
    genero: Array<Genero>,
    planos: Array<Planos>
    }
     //----------------------------------------------------
    export interface FormularioMeusDados{
    usuario: Usuario,
    dsEmail: string,
    contatos: Array<Contato>,
    ufs: Array<Uf>,
    genero: Array<Genero>,
    planos: Array<Planos>,
    idPlano: number
    }
    //----------------------------------------------------
    export interface Contrato {
        idContrato: number,
        dsContrato: string,
        dtVigencia: Date,
        idPlano: number,
        idUsuario: number
    }
     //----------------------------------------------------
     export interface Uf {
        idUf: number,
        dsUf: string
    }
    //----------------------------------------------------
       export interface Genero {
        idGenero: number,
        dsGenero: string
    }
    //----------------------------------------------------
       export interface Contato {
        idContato: number,
        idUsuario: number,
        idLoja: number,
        tipoContato:TipoContato,
        nrDdi: string,
        nrDdd: string,
        nrCep: string,
        nrRamal: string,
        dsContato: string
    }
    //----------------------------------------------------
     export interface TipoContato{
        idTipoContato: number,
        dsTipoContato: string
    }
     //----------------------------------------------------
     export interface LoginUsuario{
        idUsuario: number,
        dsSenha: string,
        dsEmail: string
       
    }
//GET Clientes para Tela Cadastro
export interface ResponseFormularioCadastro {
    formularioCadastro: FormularioCadastro
}

//GET Clientes para Tela Meus Dados
export interface ResponseFormularioMeusDados{
    formularioMeusDados: FormularioMeusDados
}

