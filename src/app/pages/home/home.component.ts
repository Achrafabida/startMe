import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [{ title: 'No mouse events...', details: 'This carousel doesn\'t pause or resume on mouse events', src: 'assets/img/slider/img1.jpg' },
  { title: '10 seconds between slides...', details: 'This carousel uses customized default values.', src: 'assets/img/slider/img2.jpg' },
  { title: 'test', details: 'test eeee', src: 'assets/img/slider/img3.jpg' },]
  constructor() { }

  ngOnInit(): void {
  }

  compagnes = [
    {
      title: "Création des vélos éléctroniques",
      desc: 'Faites le premier don',
      img: '/assets/img/campagnes/image1.jpg',
      creator:'Achraf Abida',
      goal: 50000,
      reached: 10000
    },
    {
      title: "Atelier réparation voiture",
      desc: 'Améliorer et performer vos voitures',
      img: '/assets/img/campagnes/image2.png',
      creator:'Jamil Yaiche',
      goal: 25000,
      reached: 15000

    },
    {
      title: "Bureau de consulting et de formations",
      desc: 'Notre bureau vous accompagne dans vos recrutements en Tunisie et ailleurs à l’international. s’entoure de professionnels compétents dans différents domaines d’activités pour répondre aux besoins du marché.',
      img: '/assets/img/campagnes/image3.jpg',
      creator:'Dalila Zayani',
      goal: 50000,
      reached: 20000

    },
    {
      title: "Impression 3D",
      desc: 'Réalisation de coque,cadre,....',
      img: '/assets/img/campagnes/image4.jpg',
      creator:'Youssef Karray',
      goal: 10000,
      reached: 2500

    },
    {
      title: "Développement des cours de Sports en ligne",
      desc: 'Optimiser et gérer votre temps pour pratiquer votre sport tout en étant chez soi',
      img: '/assets/img/campagnes/image5.jpg',
      creator:'Zayneb Drira',
      goal: 5000,
      reached: 1500

    },
    {
      title: "Connecter votre maison",
      desc: 'Plus précisément, la maison connectée propose des appareils électroniques gérés par informatique pour la gestion du chauffage, de la climatisation, des volets...',
      img: '/assets/img/campagnes/image6.jpg',
      creator:'Said Taktak',
      goal: 80000,
      reached: 60000

    }
  ]

}
