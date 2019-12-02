import { RegisterService } from './../services/register.service';
import { User } from './../Models/user';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User(0, '', '', '', '', false);

  constructor(private http: HttpClient, private register: RegisterService) { }

  ngOnInit() {
  }

  onClear() {
    this.register.form.reset();
    this.register.initializeFormGroup();
  }

  newUser() {
    console.log(this.register.form.value);
    /*const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');*/
    this.http.post('api/users/register', this.register.form.value/*, { headers }*/)
      .subscribe((response) => {
        console.log('repsonse ', response);
      });
  }
  connect() {
    this.http.post('api/users/login', { email: 'shinigami@gmail.com', password: 'shinigami' })
      .subscribe((response) => {
        console.log('repsonse ', response);
      });
  }
  /*connect() {
    const headers = new HttpHeaders()
    // tslint:disable-next-line: max-line-length
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDY4ZmMzYmRkN2NlNDY2MDQ0NDQ3MCIsImF2YXRhciI6InB1YmxpY1xcYXZhdGFyc1xcZGVmYXVsdC5wbmciLCJpYXQiOjE1NzQ2NzA1ODgsImV4cCI6MTU3NDY3NDE4OH0.CjEsEwpJiNNw6xHcvxbn7phvxp11m8TPOQp6naO9hDs');
    this.http.get<{message: string}>('http://localhost:5000/api/users/current', { headers })
      .subscribe((postData) => {
        console.log('repsonse ', postData);
      });
  }*/
}
