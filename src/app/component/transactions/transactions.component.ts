import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../Modal/modele.model';
import { TransactionService } from '../../service/transaction.service';
import { Router , RouterLink } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-transactions',
  standalone: true,
  imports:[MaterialModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{
listeTransactions!: Transaction[]
accountId:any;
displayedColumns: string[]=["dateTransaction","montant","transactionFor"]
datasource: any;
constructor(private transactionService:TransactionService,private router:Router){}

ngOnInit(): void {
  this.TransactionList()}



TransactionList(){
  this.accountId=localStorage.getItem("accountId");
  this.transactionService.getTransactions(this.accountId).subscribe(
    transaction => {
      this.listeTransactions=transaction;

      this.datasource = new MatTableDataSource<Transaction>(this.listeTransactions);
      console.log(this.datasource);
    }
  )}
}