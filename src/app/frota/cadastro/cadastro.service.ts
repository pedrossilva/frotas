import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';
import { Carro } from 'app/frota/carro.model';

@Injectable()
export class CadastroService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  addCarro(carro: Carro) {
    if (typeof carro !== 'object') {
      console.error('carro is not instanceof Carro', carro);
      return;
    }
    const frota: Array<any> = <Array<any>>this.localStorageService.get('frota') || [];

    let edit = false;

    const novaFrota = frota.map(carr => {
      if(carr.placa.toUpperCase() === carro.placa.toUpperCase()) {
        edit = true;
        return carro;
      }
      return carr;
    });

    if(edit) {
      this.localStorageService.set('frota', novaFrota);
    } else {
      frota.push(carro);
      this.localStorageService.set('frota', frota);
    }
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
