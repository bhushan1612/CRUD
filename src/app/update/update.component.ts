import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from 'src/assets/student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  studentdata:students;
studentid:any;
  constructor(private studdata:StudentserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.studentid = this.router.snapshot.paramMap.get("studentid");
    this.studentdata = this.studdata.updatestudent(this.studentid);
  }
  updatestudentdata(){
    this.studdata.studentdataview(this.studentdata,this.studentid);
    this.route.navigateByUrl("/studentview")
  }
}
