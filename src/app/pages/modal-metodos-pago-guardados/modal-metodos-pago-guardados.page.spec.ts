import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMetodosPagoGuardadosPage } from './modal-metodos-pago-guardados.page';

describe('ModalMetodosPagoGuardadosPage', () => {
  let component: ModalMetodosPagoGuardadosPage;
  let fixture: ComponentFixture<ModalMetodosPagoGuardadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMetodosPagoGuardadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMetodosPagoGuardadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
