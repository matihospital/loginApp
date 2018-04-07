import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isLogin: boolean;
  public username: string;
  public userEmail: string;
  public userPhoto: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.isLogin = true;
        this.username = auth.displayName;
        this.userEmail = auth.email;
        this.userPhoto = auth.photoURL;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logOut()
  }

}
