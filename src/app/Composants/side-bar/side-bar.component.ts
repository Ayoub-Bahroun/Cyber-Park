import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  activeIndex: number=0;
  username :any=localStorage.getItem('username')
  current: string = window.location.href;
  allLinks = document.querySelectorAll(".sidebar-links a");
  collapsed=true;
  count: any;
  userName:any
  ia:any
  constructor() { }
  ngOnInit(): void {
    const expandBtn = document.querySelector(".expand-btn") as HTMLElement;
    expandBtn.addEventListener("click", () => {
      document.body.classList.toggle("collapsed");
      
    });
    

    this.allLinks.forEach((elem) => {
      elem.addEventListener('click', () => {
        const hrefLinkClick = elem.getAttribute("href");

        this.allLinks.forEach((link) => {
          if (link.getAttribute("href") === hrefLinkClick) {
            link.classList.add("active");
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
    
  }
  
}
