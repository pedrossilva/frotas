import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CadastroService} from './cadastro.service';
import {ToastyService} from "ng2-toasty";
import * as $ from "jquery";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ CadastroService ]
})
export class CadastroComponent {

  private submitted = false;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  private _veiculo: any = {};
  get veiculo() { return this._veiculo }
  set veiculo(veiculo: any) {
    if (typeof veiculo === 'object') {
      this._veiculo = veiculo;
      this.setValues(veiculo);
    }
  }

  private _modal: ModalComponent;
  get modal() { return this._modal }
  @Input() set modal(m: ModalComponent) {
    this._modal = m;
  }

  form: FormGroup =  new FormBuilder().group({
    marca: [null, Validators.required],
    modelo: [null, Validators.required],
    combustivel: [null, Validators.required],
    imagem: [null],
    placa: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]{3}-[0-9]{4}')])],
    valor: [null, Validators.required]
  })

  constructor(
    private service: CadastroService,
    private toasty: ToastyService
  ) {
  }

  salvar() {
    this.submitted = true;
    if (this.form.invalid) {
      console.error('Formulário inválido.');
      this.toasty.error('Preencha os campos obrigatórios.');
      return;
    }
    this.service.addCarro(this.form.value);
    this.onUpdate.emit(true);
    this.submitted = false;
    this.clearForm();
    this.modal.hide();
  }

  cancelar() {
    this.clearForm();
    if(this.modal) this.modal.hide();
  }

  clearForm() {
    this.submitted = false;
    this.form.reset();
    $('#placa').val('');
  }

  setValues(veiculo: any) {
    const data = {
      marca: veiculo.marca || null,
      modelo: veiculo.veiculo || null,
      ano: veiculo.ano_modelo || null,
      combustivel: veiculo.combustivel || null,
      valor: this.moneyToValue(veiculo.preco) || null

    }
    this.form.patchValue(data);
  }

  moneyToValue(v: string) {
    if(!v) return null;
    v = v.replace('R$ ', '');
    v = v.replace('\.', '');
    v = v.replace(',', '.');
    return v;
  }

  setImage(e) {
    const file = e.target.files[0];
    this.base64(file);
  }

  base64(file) {
    const self = this;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      self.form.get('imagem').patchValue(reader.result);
    };
    reader.onerror = function (error) {
      console.error('Error: ', error);
    };
  }

}
