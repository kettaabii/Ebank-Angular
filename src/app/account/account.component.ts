import { Component, OnInit } from '@angular/core';
import { Compte } from '../Modal/modele.model';
import { CompteService } from '../service/compte.service';
import { User } from '../Modal/modele.model';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
listeComptes?:Compte[];
userId:any;
constructor(private compteService:CompteService){}
Accountslist():void{
  this.compteService.getComptes(this.userId).subscribe(
    data  => {this.listeComptes=data
  console.log(data);
    }
);
  

}
}
