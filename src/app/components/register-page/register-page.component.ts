import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.signIn(this.email, this.pass)
      .then( (res)=>{
        this.flashMessage.show("Usuario registrado correctamente", {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/private'])
        console.log(res);
      }).catch( (err) => {
        console.log(err)
    })
  }

}

