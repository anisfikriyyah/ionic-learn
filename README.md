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