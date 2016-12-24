
import { NgModule, Injectable }     from '@angular/core';
import { RouterModule, 
         Routes }        		        from '@angular/router';

import { GamesComponent }           from './games/games.component';
import { DealsComponent }           from './deals/deals.component';
import { LoginComponent }           from './login/login.component';
import { RegisterComponent }           from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GamesComponent },
  { path: 'deals', component: DealsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}