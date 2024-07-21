import { Component } from '@angular/core';
import { TransactionsComponent } from "../transactions/transactions.component";
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TransactionsComponent, CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
