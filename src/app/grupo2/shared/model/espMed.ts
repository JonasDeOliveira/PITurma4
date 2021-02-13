import { Time } from '@angular/common';

export interface EspMed {
    idEspMed: number;
    dsEspMed: String;
}



// GET espMedByAgenda
export interface ResponseEspMed {
    espMed: EspMed[]
}

