import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public showbutton: boolean = false;
  public imgToShow: string = '';

  ngOnInit(): void {
    let svgElement = document.querySelector(".logoImg svg");
    if (svgElement) {
      svgElement.remove();
    }
  }
  public showElement(stateButton: boolean, type: string): void {
    if (stateButton === true) {
      this.showbutton = false;
    } else {
      this.showbutton = true;
    }
    if (type === 'biodiversity') {
      this.imgToShow = "../assets/Imagenes/BioDiversity.png";
    } else if (type === 'climate') {
      this.imgToShow = "../assets/Imagenes/ClimateAction.png";
    } else if (type === 'compilance') {
      this.imgToShow = "../assets/Imagenes/CompilanceDash.png";
    } else if (type === 'susta') {
      this.imgToShow = "../assets/Imagenes/Sustan.png";
    }
  }
}
