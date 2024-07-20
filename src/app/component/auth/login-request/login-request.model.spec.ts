import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequestModel } from './login-request.model';

describe('LoginRequestModel', () => {
  let component: LoginRequestModel;
  let fixture: ComponentFixture<LoginRequestModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRequestModel]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRequestModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
