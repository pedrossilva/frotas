import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFrotaComponent } from './lista-frota.component';

describe('ListaFrotaComponent', () => {
  let component: ListaFrotaComponent;
  let fixture: ComponentFixture<ListaFrotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFrotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
