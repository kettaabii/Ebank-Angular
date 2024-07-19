import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../Modal/modele.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  getComptes(userId:number):Observable<Array<Compte>>{
    return this.http.get<Array<Compte>>('http://localhost:8080/showaccounts/'+userId);

  }

  addCompte(Compte:any):Observable<any>{
    return this.http.post('http://localhost:8080/account/add',Compte);
  }

  // closeCompte(id:number):Observable<any>{
  //   return this.http.put('http://localhost:8080/account/close/{id}');
  // }


}
