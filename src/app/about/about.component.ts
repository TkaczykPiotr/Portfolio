import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  tmp : number = 0;
  previousPageYOffset = 0;
  private scrolledDown = false;

  constructor(private elementRef: ElementRef) {}
  
  
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event) {
  //   const pageYOffset = window.pageYOffset;
  //   if (pageYOffset > this.previousPageYOffset && !this.scrolledDown) {
  //     this.scrolledDown = true;
  //     this.scrollToNextSection();
  //   } else if (pageYOffset < this.previousPageYOffset) {
      
  //   }
  //   this.previousPageYOffset = pageYOffset;


  // }

 

  async ngOnInit(){
  
    const firstSection = document.querySelector('.scrollme')!;
    firstSection.classList.add('active');
    
  }


  scrollToNextSection(): void {
    const currentSection = document.querySelector('.scrollme.active')!;
    const nextSection = document.querySelectorAll('.scrollme:not(.active)')[this.tmp];

    console.log(currentSection);
    console.log(nextSection);
    console.log(this.tmp);
    if (nextSection) {
      currentSection.classList.remove('active');
      nextSection.classList.add('active');
      nextSection.scrollIntoView({ behavior: 'smooth' });
      this.tmp += 1;
    }else {
      currentSection.classList.remove('active');
      const firstSection = document.querySelectorAll('.scrollme:not(.active)')[0];
      firstSection.classList.add('active');
      this.tmp = 0;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  

}
