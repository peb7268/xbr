
import { Component }        from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { GameService }      from '../games/game.service';

import { AuthService }      from '../shared/services/auth.service';
import { EventBusService}   from '../shared/services/eventbus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user:any   = {};
  public loginError = false;

  constructor(
    public gameService: GameService, 
    public auth: AuthService,
    public eventbus: EventBusService
  ){}
  
  ngOnInit(){ this.listenForEvents() }

  listenForEvents(){
    this.eventbus.observe('user:login:error')
    .subscribe( user_token => {
      this.loginError = true;
    });
  }

  login(user, valid){
    this.auth.login(user);
  }
}
