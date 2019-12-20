## Untuk menampilkan data

`home.page.html`

```html
<p> {{ text }} </p>
```

`home.page.ts`

```ts
export class HomePage {
  text = "ini Text"
}
```

## Untuk event on clik

```html
<ion-button (click)="onChangeText()">tombol</ion-button>
```

`home.page.ts`

```ts
export class HomePage {
  text = "ini Text"
  onChangeText() {
    this.text = "Text berubah"
  }
}
```

## Component UI

ion-app

ion-header
    ion-toolbar
        ion-title

ion-content
    ion-item
        ion-label
        ion-input


### Button

`<ion-button>`

```html
<button>
    <span> ... </span>
</button>
```

```css
.button-native {
    color: var(--color)
}
```

```js
onClick(event) {
    ...
}
```

## Contoh Input Text dan label

```html
<ion-item>
    <ion-label position="floating">Name</ion-label>
    <ion-input type="text"></ion-input>
</ion-item>
```

## core UI component

### 1. Output

- <ion-img>

- <ion-badge>

- <ion-loading>

- <ion-label>

- <ion-title>

- <ion-thumbnail>

- <ion-toolbar>

- <ion-alert>

- <ion-toast>

- <ion-modal>

### 2. Layout

- <ion-grid>

- <ion-row>

- <ion-col>

- <ion-list>

- <ion-card>

- <ion-infinite-scroll>

- <ion-tabs>

- <div margin-vertical text-right>

### 3. Input

- <ion-button>

- <ion-input>

- <ion-textarea>

- <ion-menu>

- <ion-select>

- <ion-datetime>

- <ion-fab>

- <ion-toggle>

## CLI IONIC

```cli
ionic generate
```

-------

## Model

`recipe.model.ts`

```ts
export interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string[];
}
```

`about.page.ts`

```ts
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
```

Loop pada html

`about.page.html`

```html
<ion-list>
    <ion-item *ngFor="let recipe of recipes; let i = index">
        <ion-avatar>
            <ion-img [src]="recipe.imageUrl"></ion-img>
        </ion-avatar>
    </ion-item>
</ion-list>
```