import { AgPaciente } from './agPaciente';
import { Pagamento } from './pagamento';

export interface ConfirmacaoConsulta{
    agPaciente: AgPaciente;
    pagamento: Pagamento;
}