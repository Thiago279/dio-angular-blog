import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  standalone: true,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',

})
export class SmallCardComponent {
  @Input()
  imageCover:string = ""
  @Input()
  cardTitle:string = ""
}
