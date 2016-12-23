
import { Injectable }             from '@angular/core';
import { Http, RequestOptions }   from '@angular/http';
import { Router }                 from '@angular/router';
import { AuthHttp, AuthConfig, 
         JwtHelper }               from 'angular2-jwt';

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
    public  router: Router
  ){}
  
  /**
   * Initial method that sends the model info to the server to auth and get a JWT
   */
  login(user){
    this.http.post('http://localhost:8080/api/login', user)
    .subscribe( resp => {
      let token = resp.text();
      this.recordToken(token);
      console.log(token);

      this.token_data  = this.jwt.decodeToken(token);
      this.authedUser = this.token_data.data.authedUser;
      this.router.navigate(['games']);
    }, 
    err => {
      console.log('error: ');
      console.log(err);
    });
  }

  recordToken(token){
    this.token = token;
    window.localStorage.setItem('jwt-token', JSON.stringify(token));
  }
}
