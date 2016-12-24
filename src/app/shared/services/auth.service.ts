
import { Injectable }             from '@angular/core';
import { Http, RequestOptions }   from '@angular/http';
import { Router }                 from '@angular/router';
import { AuthHttp, AuthConfig, 
         JwtHelper }              from 'angular2-jwt';
import { EventBusService }        from './eventbus.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noJwtError: false,
    tokenName: 'jwt-token',
          tokenGetter: (() => sessionStorage.getItem('jwt-token')),
          globalHeaders: [{'Content-Type':'application/json'}],
    }), http, options);
}


@Injectable()
export class AuthService {
  private token;
  private token_data;
  private authedUser;
  
  constructor(
    private http: Http,
    private auth: AuthHttp, 
    private jwt: JwtHelper,
    public  router: Router,
    public  eventbus: EventBusService
  ){
    console.log('Auth Service');
    this.refreshAuth();
  }
  
  /**
   * Runs after a refresh to renew the auth details
   */
  refreshAuth(){
    let tokenData   = this.jwt.decodeToken(localStorage.getItem('jwt-token'));
    this.eventbus.emit('user:data:update', tokenData);
  }

  /**
   * Initial method that sends the model info to the server to auth and get a JWT
   */
  login(user){
    this.http.post('http://localhost:8080/api/login', user)
    .subscribe( resp => {
      let token = resp.text();

      if(token === 'login:error') return this.loginError(token);
      this.recordToken(token);

      this.token_data  = this.jwt.decodeToken(token);
      console.log('AS', this.token_data);

      this.authedUser = this.token_data.data.authedUser;
      this.eventbus.emit('user:data:update', this.token_data);

      this.router.navigate(['games']);
    }, 
    err => {
      console.log('error: ');
      console.log(err);
    });
  }

  loginError(token){
    this.eventbus.emit('user:login:error', this.token);
  }

  recordToken(token){
    this.token = token;
    window.localStorage.setItem('jwt-token', JSON.stringify(token));
  }

  getAuthedUser(){
    return this.authedUser;
  }
}
