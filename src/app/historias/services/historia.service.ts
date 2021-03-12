import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historia } from '../interfaces/historia.interface';
import { historiaData } from '../data/historias.data';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  historiaData = historiaData;

  constructor() { }



  getHistoria(id: number): Historia {
    let historiaReturn: Historia;

    this.historiaData.forEach(historiaData => {
      if (historiaData.id == id) {
        historiaReturn =  historiaData;
      }
    })

    return historiaReturn;

  }


 
}
