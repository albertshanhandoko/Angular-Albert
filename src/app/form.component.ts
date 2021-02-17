import { Component, Input} from '@angular/core';

@Component({
  selector: 'favorite-color',
  template: `
    {{name}}: <input type="text" [(ngModel)]="favoriteColor" id = {{id}}><br>
  `
})
export class FavoriteColorComponent {
  @Input() name: string;
  @Input() id: string;
  favoriteColor = '';
}