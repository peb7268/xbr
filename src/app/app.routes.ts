
import { NgModule, Injectable }     from '@angular/core';
import { RouterModule, 
         Routes }        		        from '@angular/router';

import { GamesComponent }           from './games/games.component';
import { DealsComponent }           from './deals/deals.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
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