import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class StudentResultService {
  private baseUrl = 'http://localhost:8080/students/results';  

  constructor(private http:HttpClient) { }

  getStudentResultsList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }  
  
  createStudentResult(studentResult: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, studentResult);  
  }  
  
  deleteStudentResult(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
}
