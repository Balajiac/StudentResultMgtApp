import { Component } from '@angular/core';
import { StudentAppTitleStrategy } from '../student-app-title-strategy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Students application - Home page';
  user = 'user';
}
