import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { StudentListComponent } from './student-list/student-list.component';  
import { AddStudentComponent } from './add-student/add-student.component'; 
import { CourseListComponent } from './course-list/course-list.component';  
import { AddCourseComponent } from './add-course/add-course.component'; 
import { StudentResultListComponent } from './student-result-list/student-result-list.component';  
import { AddStudentResultComponent } from './add-student-result/add-student-result.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },   
  { path: 'view-students', component: StudentListComponent, data: { title: 'View students' } },  
  { path: 'add-student', component: AddStudentComponent, data: { title: 'Add a new student' } },
  { path: 'view-courses', component: CourseListComponent, data: { title: 'View courses' } },  
  { path: 'add-course', component: AddCourseComponent, data: { title: 'Add a new course' } },
  { path: 'view-student-results', component: StudentResultListComponent, data: { title: 'View student result' } },  
  { path: 'add-student-result', component: AddStudentResultComponent, data: { title: 'Add a new result' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
