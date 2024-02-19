import { Component, OnInit } from '@angular/core';  
import { StudentAppTitleStrategy } from '../student-app-title-strategy';
import { StudentService } from '../student.service';  
import { Student } from '../student';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {  
  
  constructor(private studentservice:StudentService) { }  
   students?: Student[];
   currentStudent: Student = {};
   currentIndex = -1;
   title = '';
   studentsArray: any[] = [];  
   
   
   
   student : Student=new Student();  
   deleteMessage=false;  
   studentlist:any;      
    
   
   ngOnInit(): void {
    this.retrieveStudents();
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
   refreshList(): void {
    this.retrieveStudents();
    this.currentStudent = {};
    this.currentIndex = -1;
  }

  setActiveStudent(student: Student, index: number): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

   deleteStudent(id: number) {  
     this.studentservice.deleteStudent(id)  
       .subscribe(  
         data => {  
           console.log(data);  
           this.deleteMessage=true;  
           this.studentservice.getStudentList().subscribe(data =>{  
             this.students =data  
             })  
         },  
         error => console.log(error));  
   } 


}
