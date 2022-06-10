import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initFunction();
  }

  initFunction() {
    const element = document.getElementById("fun");
    element?.addEventListener("click", this.listenerFunction);
  }
  
  listenerFunction(this: HTMLElement, ev: Event) {
    ev.preventDefault();
    const element = document.getElementById("fun");
    // element?.draggable();
  }

  
  
}
