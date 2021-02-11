import { Lembrete } from 'src/app/grupo1/lembretes/shared/lembrete.model'
import { Planos } from '../../planos/shared/planos.model';

export interface Cliente {
       
    // <!-- InputUsuario -->

        //loginUsuario: LoginUsuario,
        //usuario:Usuario,
        ddd: string,
        celular: string,
        //contrato: Contrato,
        //cartao: Cartao 

   // <!-- AreaDoCliente -->

        nmNome: string,
        idPaciente: number,
        lembretes:Array <Lembrete> 

    // <!-- FormularioCadastro -->
           
        //uf:  Array<Uf>,
       // genero: Array<Genero> 
        planos: Array<Planos> 

    // <!-- FormularioMeusDados -->
                    
        //usuario:  Usuario,
        dsEmail: string,
        //contatos: Array<Contato>;
        //ufs: Array<Uf>,
        //genero: Array<Genero>,
        //planos: Array<Planos>,
        idPlano: number
    }


