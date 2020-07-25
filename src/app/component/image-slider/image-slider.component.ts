import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnChanges {
  
  @Input()images:any[];
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1500;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
    ngOnChanges(changes: SimpleChanges): void {  
      
    }

  ngOnInit(): void {
  }

}
