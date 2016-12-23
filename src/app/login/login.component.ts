
import { Component }   from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../games/game.service';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user:any = {};

  constructor(public gameService: GameService, public auth: AuthService){}
  ngOnInit(){}

  login(user, valid){
    this.auth.login(user);
  }
}
