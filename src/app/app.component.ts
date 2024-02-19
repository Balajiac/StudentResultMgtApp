import { Component } from '@angular/core';
import { Menu } from './menu'; 
import { MenuItem } from './menu-item'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Students application';
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      new MenuItem('Home', 'home', './../../assets/homepage-icon.png'),
      new MenuItem('Add a new student', 'add-student', './../../assets/add-new-student-icon.png'),
      new MenuItem('Students list', 'view-students', './../../assets/student-list-icon.png'),
      new MenuItem('Add a new course', 'add-course', './../../assets/add-course-icon.png'),
      new MenuItem('Courses list', 'view-courses', './../../assets/course-list-icon.png'),
      new MenuItem('Add a new result', 'add-student-result', './../../assets/add-new-student-result-icon.png'),
      new MenuItem('Results list', 'view-student-results', './../../assets/result-list-icon.png'),
      new MenuItem('About us', 'home', './../../assets/about-us-icon.png'),
    ];
  }
}
