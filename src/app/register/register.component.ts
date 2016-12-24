
import { Component }   from '@angular/core';
import { Http }        from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user:any = {};
  constructor(public http: Http){}

  register(user){
    this.http.post('http://localhost:8080/api/register', user)
    .subscribe( resp => {
      console.log(resp);
    });
  }
}
