import { Routes } from '@angular/router';
import { LoginRequestModel } from './component/auth/login-request/login-request.model';
import { AccountComponent } from './component/account/account.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { CardsComponent } from './component/cards/cards.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginRequestModel
    },

    {
        path:'comptes',
        component : AccountComponent
    },
    {
        path:'signup',
        component : SignupComponent
    },
    {
        path:'home',
        component : HomeComponent
    },
    {
        path:'dashboard',
        component : DashboardComponent
    },
    {
        path:'transactions',
        component : TransactionsComponent
    },
    {
        path:'cards',
        component : CardsComponent
    }

];
