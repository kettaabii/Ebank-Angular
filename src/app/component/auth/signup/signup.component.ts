import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { SignupRequest } from '../../../Modal/auth.model';
import { LoginService } from '../../../service/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class SignupComponent {

  constructor(private builder: FormBuilder, private service: LoginService) {}

  _regform = this.builder.group({
    username: this.builder.control('', [Validators.required, Validators.email]),
    password: this.builder.control('', Validators.required),
    confirmpassword: this.builder.control('', Validators.required)
  });

  proceedregister() {
    if (this._regform.valid) {
      const _obj: SignupRequest = {
        username: this._regform.value.username as string,
        password: this._regform.value.password as string
      };

      console.log('Form values:', this._regform.value);
      console.log('SignupRequest object:', _obj);

      this.service.signup(_obj).subscribe(
        response => {
          console.log('User registered successfully', response);
          
        },
        error => {
          console.error('Registration failed', error);
         
        }
      );
    } else {
      console.error('Form is invalid');
     
    }
  }
}
