import { Component, OnInit } from '@angular/core';
import { students } from 'src/assets/student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
 public student:students[] = [];

  constructor(private student1:StudentserviceService) { }
  deleteitem(id:any){
    this.student1.student11.splice(id,1);
    this.student = this.student1.getstudent();
    alert("Will you want to delete this data")
  }
  ngOnInit(): void {
    this.student = this.student1.getstudent();
   
  }
  
}
