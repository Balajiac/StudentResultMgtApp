import { Component, OnInit } from '@angular/core';  
import { StudentAppTitleStrategy } from '../student-app-title-strategy';
import { CourseService } from '../course.service';  
import { Course } from '../course';  
import { Observable,Subject } from "rxjs";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit { 
 
  constructor(private courseservice:CourseService) { }  
   courses?: Course[];
   currentCourse: Course = {};
   currentIndex = -1;
   title = '';
   
   course : Course=new Course();  
   deleteMessage=false;  
    
   
   ngOnInit(): void {
    this.retrieveCourses();
   }  
   retrieveCourses(): void {
    this.courseservice.getCoursesList().subscribe({
      next: data =>{  
        this.courses =data;  
        console.log(data);
      },
      error: (e) => {
        console.error(e);
      }
   }) 
  }  
   refreshList(): void {
    this.retrieveCourses();
    this.currentCourse = {};
    this.currentIndex = -1;
  }

  setActiveCourse(course: Course, index: number): void {
    this.currentCourse = course;
    this.currentIndex = index;
  }

   deleteCourse(id: number) {  
     this.courseservice.deleteCourse(id)  
       .subscribe(  
         data => {  
           console.log(data);  
           this.deleteMessage=true;  
           this.courseservice.getCoursesList().subscribe(data =>{  
             this.courses =data  
             })  
         },  
         error => console.log(error));  
   } 

}
