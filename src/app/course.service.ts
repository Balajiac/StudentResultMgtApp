import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/courses';  

  constructor(private http:HttpClient) { }

  getCoursesList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }  
  
  createCourse(course: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, course);  
  }  
  
  deleteCourse(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
}
