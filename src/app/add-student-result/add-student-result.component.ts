import { Component, OnInit } from '@angular/core';
import { StudentAppTitleStrategy } from '../student-app-title-strategy';
import { StudentResultService } from '../student-result.service';  
import { StudentService } from '../student.service';  
import { CourseService } from '../course.service';  
import {AbstractControl, FormControl,FormGroup,Validators} from '@angular/forms';  
import { StudentResult } from '../student-result';  
import { Student } from '../student';
import { Course } from '../course';

@Component({
  selector: 'app-add-student-result',
  templateUrl: './add-student-result.component.html',
  styleUrl: './add-student-result.component.css'
})
export class AddStudentResultComponent implements OnInit {
  constructor(private studentresultservice:StudentResultService, private studentservice:StudentService
    , private courseservice:CourseService) { }  
  
  studentResult : StudentResult=new StudentResult();
  submitted = false;  
  students?: Student[];
  courses?: Course[];
  
  ngOnInit() {  
    this.submitted=false;  
    this.retrieveStudents();
    this.retrieveCourses();
  }  

  studentresultsaveform=new FormGroup({  
    score:new FormControl('' , [Validators.required , Validators.minLength(1), Validators.maxLength(3) ] ),  
    studentId:new FormControl('' , [Validators.required ] ),
    courseId:new FormControl('' , [Validators.required ] )
  });  

  saveStudentResult(savestudentResult : any){  
    this.submitted = true;  
    this.studentResult=new StudentResult(); 
    this.studentResult.score=this.Score.value; 

    this.studentResult.student = new Student();
    this.studentResult.student.studentId=this.StudentId.value;  

    this.studentResult.course = new Course();
    this.studentResult.course.courseId=this.CourseId.value;  

    this.studentresultservice.createStudentResult(this.studentResult)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });   
    
  }  
  get Score() : any {  
    return this.studentresultsaveform.get('score');  
  }  
  get StudentId() : any {  
    return this.studentresultsaveform.get('studentId');  
  }  
  get CourseId() : any {  
    return this.studentresultsaveform.get('courseId');  
  }  
  
  addStudentResultForm(){  
    this.submitted=false;  
    this.studentresultsaveform.reset();  
  } 
  retrieveStudents(): void {
    this.studentservice.getStudentList().subscribe({
      next: data =>{  
        this.students =data;  
        console.log(data);
      },
      error: (e) => console.error(e)
   }) 
  }  
  retrieveCourses(): void {
    this.courseservice.getCoursesList().subscribe({
      next: data =>{  
        this.courses =data;  
        console.log(data);
      },
      error: (e) => console.error(e)
   }) 
  }  
}
