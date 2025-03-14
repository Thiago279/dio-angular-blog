import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',

})
export class SmallCardComponent {
  @Input()
  imageCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string=""
}
