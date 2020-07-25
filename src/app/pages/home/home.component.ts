import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [{ title: 'No mouse events...', details: 'This carousel doesn\'t pause or resume on mouse events', src: 'https://picsum.photos/id/700/900/500' },
  { title: '10 seconds between slides...', details: 'This carousel uses customized default values.', src: 'https://picsum.photos/id/533/900/500' },
  { title: 'test', details: 'test eeee', src: 'https://picsum.photos/id/807/900/500' },
  { title: 'test', details: 'test eeee', src: 'https://picsum.photos/id/124/900/500' },]
  constructor() { }

  ngOnInit(): void {
  }

  compagnes = [
    {
      title: "Aide pour les orphelins de Kinshasa",
      desc: 'Faites le premier don',
      img: '/assets/img/campagnes/h0dw7s8kdxcemcssl4d7.jpg',
      creator:'Achraf Abida',
      goal: 3500,
      reached: 500
    }
  ]

}
