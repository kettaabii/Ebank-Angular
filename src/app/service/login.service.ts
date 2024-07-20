import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, SignupRequest } from '../Modal/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL = 'http://localhost:8080/'

  constructor(private HttpClient: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any>{
    //@ts-ignore
    return this.HttpClient.post<any>(this.URL + 'login', loginRequest);
  }

  signup(_data:SignupRequest):Observable<any>{
    return this.HttpClient.post(this.URL + 'signup',_data , {responseType: 'text'})
  }
}
