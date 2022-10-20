import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signed = false;
  clicked = false;

  handleSignClick() {
    this.signed = true;
  }

  user_name = "Tharesu";
}
