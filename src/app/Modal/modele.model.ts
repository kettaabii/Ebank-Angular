
import { AccountType } from "../enums/account-type"
import { Bank } from "../enums/bank"
import { CardType } from "../enums/card-type"
import { Network } from "../enums/network"
import { Status } from "../enums/status"
import { StatusCard } from "../enums/status-card"
import { TransactionFor } from "../enums/transaction-for"
import { TypeTransaction } from "../enums/type-transaction"

export interface User {
    userId:number
    username:string
    password:string
    listeCompte:Array<Compte>

}
export interface Compte {
  accountId:number
  account_number:String
  account_type:AccountType
  solde:number
  date_creation:Date
  status:Status
  listeCarteBancaires : Array<CarteBancaire>
  user:User
  beneficiaires: Array<Beneficiaire>
  transactions:Array<Transaction>
}
export interface CarteBancaire{
  carteId:number
  cardNumber:String
  expirationDate:Date
  cardType:CardType
  statusCard:StatusCard
  motifBlockage:String
  network:Network
  compte:Compte


}
export interface Transaction{
  transactionId:number
  dateTransaction:Date
  heureTransaction:Date
  montant:number
  typeTransaction:TypeTransaction
  description:String
  transactionFor:TransactionFor
}
export interface Beneficiaire{
  beneficiaireId:number
  accountNumber:String
  bank:Bank
  namebeneficiaire:String
  compte:Compte
}
