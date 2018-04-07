import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

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
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
      this.authService.logIn(this.email,this.pass)
        .then( (res) => {
          this.flashMessage.show("Usuario logueado correctamente", {cssClass: 'alert-success', timeout: 4000});
          this.router.navigate(['/private']);
        }).catch((err) => {
          this.flashMessage.show("Usuario y/o contraseña incorrectos", {cssClass: 'alert-danger', timeout: 4000});
          this.router.navigate(['/login'])
          });
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
      .then( (res) => {
        this.flashMessage.show("Usuario logueado correctamente", {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/private']);
      }).catch((err) => {
      this.flashMessage.show("Usuario y/o contraseña incorrectos", {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login'])
    });
  }

  onClickFacebookLogin(){
    return this.authService.loginFacebook()
      .then( (res) => {
        this.flashMessage.show("Usuario logueado correctamente", {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/private']);
      }).catch((err) => {
        this.flashMessage.show("Usuario y/o contraseña incorrectos", {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/login'])
      });
  }

  onClickTwitterLogin(){
    return this.authService.loginTwitter()
      .then( (res) => {
        this.flashMessage.show("Usuario logueado correctamente", {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/private']);
      }).catch((err) => {
        this.flashMessage.show("Usuario y/o contraseña incorrectos", {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/login'])
      });
  }

}
