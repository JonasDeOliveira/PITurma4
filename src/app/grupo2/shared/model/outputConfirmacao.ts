import { AgPaciente } from './agPaciente';
import { Pagamento } from './pagamento';

export interface OutputConfirmacao{
    agPaciente: AgPaciente;
    pagamento: Pagamento;
}