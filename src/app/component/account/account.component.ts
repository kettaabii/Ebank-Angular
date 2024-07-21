import { Component, OnInit } from '@angular/core';
import { Compte } from '../../Modal/modele.model';
import { CompteService } from '../../service/compte.service';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { Router , RouterLink } from '@angular/router';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MaterialModule,MatCardModule,NgFor,RouterLink],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  listeComptes!: Compte[];
  userId: any;
  
  errorMessage: string = 'there is an error';

  constructor(private compteService: CompteService,private router: Router) { }

  ngOnInit(): void {
    this.Accountslist();
  }

  Accountslist() {
    this.userId = localStorage.getItem("userid");
    console.log(this.userId)
    
    this.compteService.getComptes(this.userId).subscribe(
      compte => {
        this.listeComptes = compte;
       
        console.log("---------->"+this.listeComptes);
      },
      
    
    );
  }
  selectAccount(account: Compte) {
    console.log('Selected account:', account);
    localStorage.setItem('accountId',String(account.accountId))
    this.router.navigateByUrl('/dashboard');
  }
 
}
