import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  apiUrl="http://localhost:8080"
}
