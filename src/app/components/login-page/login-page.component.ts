import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
      this.authService.logIn(this.email,this.pass)
        .then( (res) => {
          this.router.navigate(['/private']);
        }).catch((err) => {
          console.log(err);
          this.router.navigate(['/login'])
          });
  }
}
