import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-studentviewdata',
  templateUrl: './studentviewdata.component.html',
  styleUrls: ['./studentviewdata.component.css']
})
export class StudentviewdataComponent implements OnInit {

  constructor(private Studentdata:StudentserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let studentid:any = this.router.snapshot.paramMap.get("studentid");
    this.studentdata = this.Studentdata.getstudentById(studentid);
  }
 studentdata:any ={};
}
