import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.signIn(this.email, this.pass)
      .then( (res)=>{
        console.log('Usuario Registrado');
        console.log(res);
      }).catch( (err) => {
        console.log(err)
    })
  }

}

