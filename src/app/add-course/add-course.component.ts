import { Component, OnInit } from '@angular/core';
import { StudentAppTitleStrategy } from '../student-app-title-strategy';
import { CourseService } from '../course.service';  
import {AbstractControl, FormControl,FormGroup,Validators} from '@angular/forms';  
import { Course } from '../course'; 

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {
  constructor(private courseservice:CourseService) { }  
  
  course : Course=new Course();
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  

  coursesaveform=new FormGroup({  
    courseName:new FormControl('' , [Validators.required , Validators.minLength(5), Validators.maxLength(50) ] )
  });  

  saveCourse(savecourse : any){  
    this.submitted = true;  
    this.course=new Course();     
    this.course.courseName=this.CourseName.value;  

    this.courseservice.createCourse(this.course)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });   
    
  }  
  get CourseName() : any {  
    return this.coursesaveform.get('courseName');  
  } 
  
  addCourseForm(){  
    this.submitted=false;  
    this.coursesaveform.reset();  
  } 
}