import { Routes } from '@angular/router';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { HomeComponent } from '../components/home/home.component';
import { authGuard } from '../auth.guard';
export const routes: Routes = [
    {path: '', component:SignUpComponent},
    {path: 'home', component:HomeComponent, canActivate: [authGuard]},
    { path: '**', redirectTo: '' }
];
