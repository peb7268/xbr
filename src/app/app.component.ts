
import { Component, ViewEncapsulation, Output, EventEmitter }    from '@angular/core';

import { GameService } from './games/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(public gs: GameService){}

    ngOnInit(){
      this.gs.init();
    }

    toggleGameList($event){
      this.gs.toggleGameList($event);
    }
}
