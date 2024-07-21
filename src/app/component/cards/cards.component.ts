import { Component ,OnInit } from '@angular/core';
import { CarteBancaire } from '../../Modal/modele.model';
import { CartebancaireService } from '../../service/cartebancaire.service';
import { NgFor } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MaterialModule, MatCardModule, NgFor, RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  listeCartes!: CarteBancaire[];
  accountId: any;
  constructor(private carteService: CartebancaireService, private router: Router) { }
  ngOnInit(): void {
    this.Afficher();
  }
  Afficher() {
    this.accountId = localStorage.getItem("accountId");
    console.log("THHHHHIIIIIIS"+this.accountId)
    this.carteService.showAllCards(this.accountId).subscribe(
      carte => { this.listeCartes = carte; }

    );

  }
  selectCard(card: CarteBancaire) {
    console.log('Selected account:', card);
    
    this.router.navigateByUrl('/dashboard');
  }
}
