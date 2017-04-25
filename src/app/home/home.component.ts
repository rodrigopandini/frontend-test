import { Component } from '@angular/core';
import { ViewTitleService } from '../core/view-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {
  constructor(viewTitle: ViewTitleService) {
    viewTitle.set('Home');
  }
}
