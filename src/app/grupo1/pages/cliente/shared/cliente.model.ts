import { Lembrete } from 'src/app/grupo1/lembretes/shared/lembrete.model'
import { Planos } from '../../planos/shared/planos.model';
import { Usuario } from '../../../usuario/shared/usuario.model';
import { Cartao} from 'src/app/grupo1/Cartoes/shared/cartao.model';
export interface OutputCliente {
   
        loginUsuario: LoginUsuario,
        usuario:Usuario,
        ddd: string,
        celular: string,
        contrato: Contrato,
        cartao: Cartao 
        nmNome: string,
        idPaciente: number,
        lembretes:Array <Lembrete> 
        uf:  Array<Uf>,
        genero: Array<Genero> 
        planos: Array<Planos> 
        dsEmail: string,
        contatos: Array<Contato>;
        ufs: Array<Uf>,
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
