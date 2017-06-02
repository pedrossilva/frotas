import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {LocalStorageService} from 'angular-2-local-storage';
import {Carro} from './frota/carro.model';

@Injectable()
export class AppService {

  constructor(
    private http: Http,
    private localStorageService: LocalStorageService
  ) {
    this.mock();
  }

  /**
   * Recupera o valor da frota armazenada no localStorage.
   */
  getFrota(): Array<Carro> {
    return <Array<Carro>>this.localStorageService.get('frota');
  }

  /**
   * Monta a carga inicial de dados caso não haja valor no localStorage.
   */
  mock() {
    let frota = this.localStorageService.get('frota');
    if (!frota) {
      frota = [
        { 'combustivel' : 'Flex',
          'imagem' : null,
          'marca' : 'Volkswagem',
          'modelo' : 'Gol',
          'placa' : 'FFF-5498',
          'valor' : '20000'
        },
        { 'combustivel' : 'Gasolina',
          'imagem' : null,
          'marca' : 'Volkswagem',
          'modelo' : 'Fox',
          'placa' : 'FOX-4125',
          'valor' : '20000'
        },
        { 'combustivel' : 'Alcool',
          'imagem' : 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
          'marca' : 'Volkswagen',
          'modelo' : 'Fusca',
          'placa' : 'PAI-4121',
          'valor' : '20000'
        }
      ];
      this.localStorageService.set('frota', frota);
    }
  }

  setFrota(frota) {
    this.localStorageService.set('frota', frota);
  }

}
