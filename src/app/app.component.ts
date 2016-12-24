
import { Component, ViewEncapsulation, Output, EventEmitter }    from '@angular/core';
import { Http }            from '@angular/http';

import { GameService }     from './games/game.service';
import { EventBusService } from './shared/services/eventbus.service';
import { AuthService }     from  './shared/services/auth.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public user:any = {};
    public loggedIn = false;

    constructor(
      public http: Http,
      public gs: GameService,
      public eventbus: EventBusService,
      public auth: AuthService
    ){}

    ngOnInit(){
      this.gs.init();
      this.eventbus.observe('user:data:update').subscribe(user_token => this.updateLoginStatus(user_token));
      this.auth.refreshAuth();
    }
  
    updateLoginStatus(user_data){        
        this.user.username = user_data.data.authedUser.username;
        this.user.password = user_data.data.authedUser.password;
        this.user.phone    = user_data.data.authedUser.phone;

        this.loggedIn = true;  
    }

    toggleGameList($event){
      this.gs.toggleGameList($event);
    }

    toggleSidebar($event){
      $('.ui.sidebar').sidebar('toggle');
      return false;
    }

    testNotification(user){
      this.http.post('http://localhost:8080/api/msg', user)
      .subscribe( resp => {
        console.log(resp);
      });
      return false;
    }
}
