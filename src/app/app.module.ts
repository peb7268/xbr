
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { LocationStrategy, 
         HashLocationStrategy }   from '@angular/common';


import { AppRoutingModule } from './app.routes';

import { AppComponent }     from './app.component';
import { GamesComponent }   from './games/games.component';
import { GameService }      from './games/game.service';
import { DealsComponent }   from './deals/deals.component';
import { LoginComponent }   from './login/login.component';

import { Http, RequestOptions } from '@angular/http';

import { AuthConfig, provideAuth, AuthHttp, JwtHelper }   from 'angular2-jwt';
import { AuthService, authHttpServiceFactory }   from './shared/services/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DealsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: JwtHelper,
      useFactory: function(){ return new JwtHelper() },
      deps: []
    },
    AuthService,
    GameService,
    { provide : LocationStrategy , useClass : HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
