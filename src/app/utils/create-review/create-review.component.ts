import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  chosenRating = 10;
  comment: string;

  constructor() { }

  ngOnInit(): void {
  }

  setRating(value:unknown) {
    this.chosenRating = value as number;
  }

  setComment(value:string) {
    this.comment = value;
  }
}
