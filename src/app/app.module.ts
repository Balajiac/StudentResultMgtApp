import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddStudentResultComponent } from './add-student-result/add-student-result.component';
import { StudentResultListComponent } from './student-result-list/student-result-list.component';
import { HomeComponent } from './home/home.component';
import { TitleStrategy } from "@angular/router";
import { StudentAppTitleStrategy } from './student-app-title-strategy';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    AddCourseComponent,
    CourseListComponent,
    AddStudentResultComponent,
    StudentResultListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [{ provide: TitleStrategy, useClass: StudentAppTitleStrategy }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
