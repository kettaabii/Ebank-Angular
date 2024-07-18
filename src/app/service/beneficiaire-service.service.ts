
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiaire } from '../Modal/modele.model';

@Injectable({
  providedIn:'root'
})
export class beneficiaireService{
  private apiUrl: 'http://localhost:8080' = "http://localhost:8080";
  constructor(private http:HttpClient){}
 
  getBeneficiaires(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listbeneficiaires/{id}`);
  }

  addeBneficiaire(FormData:any):Observable<any>{
    return this.http.post<Beneficiaire>(`${this.apiUrl}/addbeneficiaire`,FormData);
  }

  updateBeneficiaire(id:number,Beneficiaire:any):Observable<any>{
    return this.http.put('${this.apiUrl}/updateBeneficiaire/{id}',Beneficiaire);
  }

  deleteBeneficiaire(id:number):Observable<any>{
    return this.http.delete('${this.apiUrl}/delete/{id}');

  }
  
}


