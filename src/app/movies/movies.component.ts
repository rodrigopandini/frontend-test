import { Component } from '@angular/core';
import { ViewTitleService } from '../core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [
    './movies.component.scss'
  ]
})
export class MoviesComponent {
  constructor(viewTitle: ViewTitleService) {
    viewTitle.set('Movies');
  }
}
