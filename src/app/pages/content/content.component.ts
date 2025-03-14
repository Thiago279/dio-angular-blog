import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { dataFake } from '../../data/dataFake'


@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  @Input()
  imageCover: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""

  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: string | null) {
    const result = dataFake.filter(
      article => article.id.toString() == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.imageCover = result.image
  }
}
