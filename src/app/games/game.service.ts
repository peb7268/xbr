
import { Injectable } from '@angular/core';
import { Http, Headers }                   from '@angular/http';
import { Router }                          from '@angular/router';

import { API_KEY, PROFILE_USER_ID, MOCK } from './../config/api';

let headers;

@Injectable()
export class GameService {
  public game_info;
  public cache = true;

  constructor(public http: Http, public route: Router){}

  init(){
    if(this.cache === true)  {
      this.game_info = MOCK;
      //console.log('setting cached game info to: ', MOCK);
    } else {
      headers = new Headers();
      if(this.cache === false) this.connect();
    }
  }

  toggleGameList(evt){
    this.toggleNavClass(evt.target);
    this.navigate(evt.target);
  }

  navigate(target){
    this.route.navigate([target.dataset.dest]);
  }
  
  toggleNavClass(target){
    target.parentNode.querySelector('.active').classList.remove('active');
    target.classList.add('active');
  }

  connect(){
    headers.append('X-AUTH', '9ea9b24cc9dd72aec8be38327da080d102201628');
    let source = this.http.get('https://xboxapi.com/v2/accountxuid', {
      headers: headers
    });
    source.subscribe( connect_resp => {
      this.fetchGames(connect_resp);
    });
  }

  fetchGames(connect_resp){
    let source = this.http.get('https://xboxapi.com/v2/xboxone-gold-lounge/', {
      headers: headers
    });
    source.subscribe( resp => {
      this.game_info = resp.json();
      console.log('setting new game info');
    });
  }

}
