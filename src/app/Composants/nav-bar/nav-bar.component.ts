import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  count: any;
  userName:any
  ia:any
  
  constructor(private Login:LoginService,private router:Router,private ServiceloginService : LoginService) { }

  ngOnInit() { 
    this.ServiceloginService.ia$.subscribe(ia => {
      this.ia = ia;
      
    });
    this.ServiceloginService.userName$.subscribe(userName => {
      this.userName = userName;
    });
  }
  deconnexion()
  {
    this.Login.logout()
    this.userName = "";
    this.ia = "false";
  }
  connexion()
  {
    this.router.navigateByUrl("/LoginComponent")
  }
}

