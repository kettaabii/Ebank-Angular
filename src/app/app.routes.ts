import { Routes } from '@angular/router';
import { LoginRequestModel } from './component/auth/login-request/login-request.model';
import { AccountComponent } from './component/account/account.component';
import { SignupComponent } from './component/auth/signup/signup.component';

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
    }

];
