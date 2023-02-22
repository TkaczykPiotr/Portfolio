import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(){}

  imageListProjectOne: any[] = [
    {url: "assets/img/train1.png"},
    {url: "assets/img/train2.png"},
    {url: "assets/img/train1.png"},
  ]

  currentImage: string = this.imageListProjectOne[0].url;


  previousImageProjectOne() {
    const currentIndex = this.imageListProjectOne.findIndex(image => image.url === this.currentImage);
    const previousIndex = (currentIndex - 1 + this.imageListProjectOne.length) % this.imageListProjectOne.length;
    this.currentImage = this.imageListProjectOne[previousIndex].url;
  }

  nextImageProjectOne() {
    const currentIndex = this.imageListProjectOne.findIndex(image => image.url === this.currentImage);
    const nextIndex = (currentIndex + 1) % this.imageListProjectOne.length;
    this.currentImage = this.imageListProjectOne[nextIndex].url;
  }

}
