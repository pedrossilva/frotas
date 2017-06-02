import {Component, Input, OnInit} from '@angular/core';
import { AppService } from "../app.service";
import { Carro } from "../frota/carro.model";
import {FormControl} from "@angular/forms";
import {ModalComponent} from "../modal/modal.component";
import {CadastroComponent} from "../frota/cadastro/cadastro.component";

@Component({
  selector: 'app-lista-frota',
  templateUrl: './lista-frota.component.html',
  styles: []
})
export class ListaFrotaComponent implements OnInit {
  frota: Array<Carro> = [];
  carros: object = {};
  checkedAll: boolean = false;

  @Input('cadastro') cadastroComponent: CadastroComponent;

  private _modal: ModalComponent;
  get modal() { return this._modal }
  @Input() set modal(m: ModalComponent) {
    this._modal = m;
  }

  constructor(private service: AppService) {
    this.atualizaFrota();
  }

  /**
   * Atualiza a frota buscando os dados salvos.
   */
  atualizaFrota() {
    this.frota = this.service.getFrota();
    this.totalItems = this.frota.length;
  }

  /**
   * Seleciona todos os checkboxes da tabela.
   */
  checkAll(e) {
    Object.keys(this.carros).map(k => this.carros[k].patchValue(e.target.checked));
    this.checkedAll = e.target.checked;
    this.setSelecteds();
  }

  /**
   * seleciona o control referente a posição (index).
   * caso não exista cria uma instância.
   * @param idx
   * @returns {FormControl}
   */
  control(placa: string) {
    if(!placa) return;
    let ctrl;
    if (!this.carros[placa]) {
      ctrl = new FormControl(false);
      ctrl.valueChanges.subscribe(v => this.selectItem());
      this.carros[placa] = ctrl;
    } else {
      ctrl = this.carros[placa];
    }
    return ctrl;
  }

  private selectItem() {
    if (this.checkedAll) this.checkedAll = false;
    this.setSelecteds();
  }

  private selecteds: Array<any> = [];
  private setSelecteds() {
    this.selecteds = Object.keys(this.carros).filter(c => (this.carros[c].value === true));
    this.selecteds = this.selecteds.map(s => s.toUpperCase());
  }


  /**
   * Paginação
   */
  public currentPage: number = 1;
  public totalItems: number = 0;
  public maxSize: number = 5;
  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  private remove() {
    if(confirm('deseja remover o(s) item(ns) selecionado(s)?')) {
      const frota = Object.assign(this.frota);

      const novaFrota = frota.filter(carro => (this.selecteds.indexOf(carro.placa.toUpperCase()) === -1));

      this.service.setFrota(novaFrota);
      this.atualizaFrota();
      this.selecteds.map(placa => delete this.carros[placa]);

      this.selecteds = [];
      this.checkedAll = false;

    }
  }

  private edit() {
    this.modal.show();
    // const carro = this.carros[this.selecteds[0]];
    const arr = this.frota.filter(carro => carro.placa.toUpperCase() === this.selecteds[0]);
    const carro = arr[0];
    this.cadastroComponent.form.patchValue(carro);
  }

  ngOnInit() {

  }

}
