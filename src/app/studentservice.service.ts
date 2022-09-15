import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { students } from 'src/assets/student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  public student11:students[] = [];

  addstudent(student:students){
    this.student11.push(student);
  }
  getstudentById(id:number){
    return this.student11[id];

  }
  updatestudent(id:number){
    return this.student11[id];
  }
  studentdataview(xyz:students,id:number){
    this.student11[id] = xyz;
  }
  constructor() { }
  getstudent(){
    return this.student11;
  }
  
}
