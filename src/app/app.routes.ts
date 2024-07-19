import { Routes } from '@angular/router';
import { LoginRequestModel } from './login-request/login-request.model';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginRequestModel
    },

    {
        path:'comptes',
        component : AccountComponent
    }
];
