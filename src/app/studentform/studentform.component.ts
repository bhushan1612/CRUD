import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from 'src/assets/student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  constructor(private studentview:StudentserviceService,private router:Router) { }
  public fname="";
  public lname="";
  public address="";
  public gender="";
  public dob="";
  public course="";
  public email="";
  

  ngOnInit() : void {
  }
  Addnewstudent(){
    let student:students = {fname:this.fname,lname:this.lname,address:this.address,gender:this.gender,dob:this.dob,course:this.course,emailid:this.email}
    this.studentview.addstudent(student);
    this.router.navigateByUrl("/studentview")
  }
}
