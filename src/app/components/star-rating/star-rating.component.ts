import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() maxStars: number = 5;
  @Input() initialStars: number = 0;
  
  filledStars: number=0;
  stars: number[]=[];

  ngOnInit() {
    this.stars = Array.from({ length: this.maxStars }, (_, i) => i + 1);
    this.filledStars = this.initialStars;
  }
}
