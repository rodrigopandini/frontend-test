import { Component } from '@angular/core';
import { ViewTitleService } from '../core/view-title.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  constructor(viewTitle: ViewTitleService) {
    viewTitle.set('Page not found');
  }
}
