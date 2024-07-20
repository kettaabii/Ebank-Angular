import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';
import { LoginRequest, LoginResponse } from '../../../Modal/auth.model';
import { MaterialModule } from '../../../material/material.module';
import { Router , RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-request',
  standalone: true,
  imports: [
    ReactiveFormsModule , MaterialModule, RouterLink
  ],
  templateUrl: './login-request.model.html',
  styleUrl: './login-request.model.css'
})
export class LoginRequestModel {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder,  private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      const loginRequest: LoginRequest = this.loginForm.value as LoginRequest;
      this.loginService.login(loginRequest).subscribe({
        next: (response: LoginResponse) => {
          const loginResponse:LoginResponse =response;
          console.log(loginResponse)
          console.log(loginResponse.token)
          localStorage.setItem('auth-token', loginResponse.token)
          localStorage.setItem('userid',String(loginResponse.user.userId))
          this.router.navigateByUrl('/');
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }
  }

}
