import { Component  } from '@angular/core';
import { LoginRequestModel } from "../auth/login-request/login-request.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginRequestModel],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
