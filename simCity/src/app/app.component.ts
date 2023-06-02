import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public showbutton: boolean = false;

  ngOnInit(): void {
    // codigo que se ejecuta nada mas iniciar el componente
  }
  public showElement(stateButton: boolean): void {
    if (stateButton === true) {
      this.showbutton = false;
    } else {
      this.showbutton = true;
    }
  }
}
