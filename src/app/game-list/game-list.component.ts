import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() alt="";
  @Input() url="";
  @Input() title="";
  @Input() shortDescription="";
}
