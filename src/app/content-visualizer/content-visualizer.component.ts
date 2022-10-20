import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-visualizer',
  templateUrl: './content-visualizer.component.html',
  styleUrls: ['./content-visualizer.component.css']
})
export class ContentVisualizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  game = { 
    title : "Kerbal Space Program",
    publisher : "EA Games",
    description : " ",
    rating : 8.9,
    imageURL : " "
  }
}
