import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  count: any;
  userName:any
  ia:any
  
  constructor(private router:Router) { }

  ngOnInit() { 
    
  }
  
  connexion()
  {
    this.router.navigateByUrl("/LoginComponent")
  }
}

