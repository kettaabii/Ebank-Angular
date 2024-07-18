import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { LoginRequest } from '../Modal/login-request.model';

@Component({
  selector: 'app-login-request',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-request.model.html',
  styleUrl: './login-request.model.css'
})
export class LoginRequestModel {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      const loginRequest: LoginRequest = this.loginForm.value as LoginRequest;
      this.loginService.login(loginRequest).subscribe({
        next: (response: string) => {
          let token = response;
          console.log(token)
          localStorage.setItem('auth-token', token)
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }
  }

}
