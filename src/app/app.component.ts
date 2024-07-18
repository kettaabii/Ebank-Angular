import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { beneficiaireService } from './service/beneficiaire-service.service';
import { CartebancaireService } from './service/cartebancaire.service';
import { CompteService } from './service/compte.service';
import { TransactionService } from './service/transaction.service';
import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[beneficiaireService,CartebancaireService,CompteService,TransactionService,LoginService,UserService]
})
export class AppComponent {
  title = 'E-BANK-FRONT';
}
