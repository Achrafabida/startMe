import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.scss']
})
export class CampagneComponent implements OnChanges {
  @Input() compagne: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }

}
