import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../Modal/modele.model';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }
  getTransactions(accountId:number):Observable<any>{
    return this.http.get<Array<Transaction>>('http://localhost:8080/transaction/all/'+accountId);
  }
  addTransaction(accnt:any,transaction:Transaction):Observable<any>{
    return this.http.post('http://localhost:8080/transaction/new/'+accnt,transaction);
  }
}
