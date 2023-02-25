import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogImageComponent } from '../dialog-image/dialog-image.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  imageListProjectOne: any[] = [
    {url: "assets/img/train1.png"},
    {url: "assets/img/train2.png"},
    {url: "assets/img/train3.png"},
    {url: "assets/img/train4.png"},
    {url: "assets/img/train5.png"},
    {url: "assets/img/train6.png"},
    {url: "assets/img/train7.png"},
    {url: "assets/img/train8.png"},
    {url: "assets/img/train9.png"},
    {url: "assets/img/train10.png"},
  ]

  imageListProjectTwo: any[] = [
    {url: "assets/img/bus1.png"},
    {url: "assets/img/bus2.png"},
    {url: "assets/img/bus3.png"},
    {url: "assets/img/bus4.png"},
    {url: "assets/img/bus6.png"},
    {url: "assets/img/bus7.png"},
  ]

  imageListProjectThree: any[] = [
    {url: "assets/img/football1.png"},
    {url: "assets/img/football2.png"},
    {url: "assets/img/football3.png"},
    {url: "assets/img/football4.png"},
    {url: "assets/img/football6.png"},
    {url: "assets/img/football7.png"},
    {url: "assets/img/football8.png"},
  ]

  constructor(public dialog: MatDialog){}

  openDialog(dataImg : string) {
    const dialogRef = this.dialog.open(DialogImageComponent, {
      data: { myData: dataImg }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





  currentImageOne: string = this.imageListProjectOne[0].url;
  currentImageTwo: string = this.imageListProjectTwo[0].url;
  currentImageThree: string = this.imageListProjectThree[0].url;

  previousImageProjectOne() {
    const currentIndex = this.imageListProjectOne.findIndex(image => image.url === this.currentImageOne);
    const previousIndex = (currentIndex - 1 + this.imageListProjectOne.length) % this.imageListProjectOne.length;
    this.currentImageOne = this.imageListProjectOne[previousIndex].url;
  }

  nextImageProjectOne() {
    const currentIndex = this.imageListProjectOne.findIndex(image => image.url === this.currentImageOne);
    const nextIndex = (currentIndex + 1) % this.imageListProjectOne.length;
    this.currentImageOne = this.imageListProjectOne[nextIndex].url;
  }

  previousImageProjectTwo() {
    const currentIndex = this.imageListProjectTwo.findIndex(image => image.url === this.currentImageTwo);
    const previousIndex = (currentIndex - 1 + this.imageListProjectTwo.length) % this.imageListProjectTwo.length;
    this.currentImageTwo = this.imageListProjectTwo[previousIndex].url;
  }

  nextImageProjectTwo() {
    const currentIndex = this.imageListProjectTwo.findIndex(image => image.url === this.currentImageTwo);
    const nextIndex = (currentIndex + 1) % this.imageListProjectTwo.length;
    this.currentImageTwo = this.imageListProjectTwo[nextIndex].url;
  }

  previousImageProjectThree() {
    const currentIndex = this.imageListProjectThree.findIndex(image => image.url === this.currentImageThree);
    const previousIndex = (currentIndex - 1 + this.imageListProjectThree.length) % this.imageListProjectThree.length;
    this.currentImageThree = this.imageListProjectThree[previousIndex].url;
  }

  nextImageProjectThree() {
    const currentIndex = this.imageListProjectThree.findIndex(image => image.url === this.currentImageThree);
    const nextIndex = (currentIndex + 1) % this.imageListProjectThree.length;
    this.currentImageThree = this.imageListProjectThree[nextIndex].url;
  }

}
