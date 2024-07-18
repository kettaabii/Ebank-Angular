import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  getComptes(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/showaccounts/{id}');

  }

  addCompte(Compte:any):Observable<any>{
    return this.http.post('http://localhost:8080/account/add',Compte);
  }

  // closeCompte(id:number):Observable<any>{
  //   return this.http.put('http://localhost:8080/account/close/{id}');
  // }


}
