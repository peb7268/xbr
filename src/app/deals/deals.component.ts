
import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  public game_info:any;
  constructor(public gs: GameService){}

  ngAfterViewInit(){
    this.game_info = this.gs.game_info;
    console.log(this.gs.game_info)
  }

}
