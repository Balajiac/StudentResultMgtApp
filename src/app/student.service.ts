import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/students';  

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }  
  
  createStudent(student: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, student);  
  }  
  
  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
}