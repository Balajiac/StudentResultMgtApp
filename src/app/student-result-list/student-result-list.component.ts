import { Component, OnInit } from '@angular/core';  
import { StudentAppTitleStrategy } from '../student-app-title-strategy';
import { StudentResultService } from '../student-result.service';  
import { StudentResult } from '../student-result';  
import { Observable,Subject } from "rxjs";  
  

@Component({
  selector: 'app-student-result-list',
  templateUrl: './student-result-list.component.html',
  styleUrl: './student-result-list.component.css'
})
export class StudentResultListComponent implements OnInit {  
  
  constructor(private studentresultservice:StudentResultService) { }  
   studentResults?: StudentResult[];
   currentStudentResult: StudentResult = {};
   currentIndex = -1;
   title = '';
   studentResultsArray: any[] = [];  
   
   
   
   studentResult : StudentResult=new StudentResult();  
   deleteMessage=false;  
   studentResultlist:any;      
    
   
   ngOnInit(): void {
    this.retrieveStudentResults();
   }  
   retrieveStudentResults(): void {
    this.studentresultservice.getStudentResultsList().subscribe({
      next: data =>{  
        this.studentResults =data;  
        console.log(data);
      },
      error: (e) => console.error(e)
   }) 
  }  
   refreshList(): void {
    this.retrieveStudentResults();
    this.currentStudentResult = {};
    this.currentIndex = -1;
  }

  setActiveStudentResult(studentResult: StudentResult, index: number): void {
    this.currentStudentResult = studentResult;
    this.currentIndex = index;
  }

   deleteStudentResult(id: number) {  
     this.studentresultservice.deleteStudentResult(id)  
       .subscribe(  
         data => {  
           console.log(data);  
           this.deleteMessage=true;  
           this.studentresultservice.getStudentResultsList().subscribe(data =>{  
             this.studentResults =data  
             })  
         },  
         error => console.log(error));  
   } 

}
