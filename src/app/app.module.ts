
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { LocationStrategy, 
         HashLocationStrategy }   from '@angular/common';


import { AppRoutingModule } from './app.routes';

import { AppComponent }     from './app.component';
import { GamesComponent }   from './games/games.component';
import { GameService }      from './game.service';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DealsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GameService,
    { provide : LocationStrategy , useClass : HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
