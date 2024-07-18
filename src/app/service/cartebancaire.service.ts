import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartebancaireService {
  
  constructor(private http:HttpClient) { }


  addCard(CarteBancaire:any):Observable<any>{
    return this.http.post("http://localhost:8080/card/add",CarteBancaire);
  }

  desactivateCard(id:number , CarteBancaire:any):Observable<any>{
    return this.http.put("http://localhost:8080/card/desactivate/'{id}",CarteBancaire);
  }

  activateCard(id:number , CarteBancaire:any):Observable<any>{
    return this.http.put('http://localhost:8080/card/activate/{id}',CarteBancaire);
  }

  blockCard(id:number , reason:String , CarteBancaire:any):Observable<any>{
    return this.http.put('http://localhost:8080/card/block/{id}&{reason}',CarteBancaire);
  }

  showAllCards(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/card/all/{id}')
  }
}
