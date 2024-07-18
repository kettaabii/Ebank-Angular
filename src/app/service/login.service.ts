import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Modal/login-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL = 'http://localhost:8080/'

  constructor(private HttpClient: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any>{
    //@ts-ignore
    return this.HttpClient.post<any>(this.URL + 'login', loginRequest, {responseType: 'text'});
  }
}
