import { Component, OnInit } from '@angular/core';
import { Compte } from '../Modal/modele.model';
import { CompteService } from '../service/compte.service';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  listeComptes!: Compte[];
  displayedColumns: string[] = ["Numero de Compte", "Type", "Solde", "Date Creation", "Status"];
  userId: any;
  datasource: any;
  errorMessage: string = '';

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.Accountslist();
  }

  Accountslist() {
    this.compteService.getComptes(2).subscribe(
      compte => {
        this.listeComptes = compte;
        this.datasource = new MatTableDataSource<Compte>(this.listeComptes);
        console.log(this.datasource);
        console.log(this.listeComptes);
      },
      
    
    );
  }
}
