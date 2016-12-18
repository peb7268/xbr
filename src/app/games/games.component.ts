
import { Component, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  inputs: ['game_info']
})
export class GamesComponent  {
  public game_info:any;
  
  constructor(public gs: GameService){}

  ngAfterViewInit(){
    this.game_info = this.gs.game_info;
  }
}
