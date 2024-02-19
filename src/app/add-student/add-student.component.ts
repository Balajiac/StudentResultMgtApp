import { Component, OnInit } from '@angular/core';
import { StudentAppTitleStrategy } from '../student-app-title-strategy';
import { StudentService } from '../student.service';  
import {AbstractControl, FormControl,FormGroup, FormsModule, ReactiveFormsModule,Validators, ValidationErrors, ValidatorFn} from '@angular/forms';  
import { Student } from '../student';  
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {
  constructor(private studentservice:StudentService) { }  
  
  student : Student=new Student();
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  

  studentsaveform=new FormGroup({  
    firstName:new FormControl('' , [Validators.required , Validators.minLength(5), Validators.maxLength(50) ] ),  
    familyName:new FormControl('' , [Validators.required , Validators.minLength(5), Validators.maxLength(50) ] ),  
    email:new FormControl('',[Validators.required, Validators.maxLength(50),Validators.email]),  
    dateOfBirth:new FormControl('' , [Validators.required , Validators.minLength(10), this.createDateFormatValidator()] ),   
  });  

  saveStudent(savestudent : any){  
    this.submitted = true;  
    this.student=new Student();     
    this.student.firstName=this.FirstName.value;  
    this.student.familyName=this.FamilyName.value;   
    this.student.email=this.Email.value;   
    this.student.dateOfBirth=this.DateOfBirth.value;   

    this.studentservice.createStudent(this.student)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });   
    
  }  
  get FirstName() : any {  
    return this.studentsaveform.get('firstName');  
  }  
  get FamilyName() : any {  
    return this.studentsaveform.get('familyName');  
  }  
  get Email() : any {  
    return this.studentsaveform.get('email');  
  }  
  
  get DateOfBirth() : any {  
    return this.studentsaveform.get('dateOfBirth');  
  }  
  
  addStudentForm(){  
    this.submitted=false;  
    this.studentsaveform.reset();  
  } 

  createDateFormatValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const isValidDate = /\d{4}-\d{2}-\d{2}/.test(value);
        return isValidDate ? {dataFormatValid:true}:  {dataFormatValid:false};
    }
}
}
