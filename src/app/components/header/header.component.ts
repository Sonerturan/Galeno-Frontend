import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  statusClass = 'not-show';

  setActiveClass() {
    if (this.statusClass == 'not-show') {
      this.statusClass = 'show';
    } else {
      this.statusClass = 'not-show';
    }
  }
  

}
