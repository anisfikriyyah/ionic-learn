import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    {
      id: '1',
      title: 'AAA',
      imageUrl: 'aaaa.jpg',
      ingredients: ['a', 'b']
    },
    {
      id: '2',
      title: 'BBBB',
      imageUrl: 'aaaa.jpg',
      ingredients: ['a', 'b']
    },
  ]

  ngOnInit() {
  }

}
