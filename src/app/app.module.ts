import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {LocalStorageModule} from 'angular-2-local-storage';
import {AppService} from './app.service';
import { CadastroComponent } from './frota/cadastro/cadastro.component';
import { ModalComponent } from './modal/modal.component';
import { MenuComponent } from './menu/menu.component';
import { ListaFrotaComponent } from './lista-frota/lista-frota.component';
import {ToastyModule} from "ng2-toasty";
import {Ng2MaskModule} from "ng2-mask";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {PaginacaoComponent} from "./resources/paginacao/paginacao.component";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ModalComponent,
    MenuComponent,
    PaginacaoComponent,
    ListaFrotaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ToastyModule.forRoot(),
    Ng2MaskModule,
    CurrencyMaskModule,
    LocalStorageModule.withConfig({
      prefix: 'frotas',
      storageType: 'localStorage'
    })
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
