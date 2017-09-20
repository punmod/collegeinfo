import { Component, OnInit,Input } from '@angular/core';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../course.service';
import { Course } from '../../course';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class PHomeComponent implements OnInit {
        
 
  constructor(
    private _courseService:CourseService,
   private route: ActivatedRoute,
    private router: Router
   ) {
     
  }
  courses:any;
  count:any;
  ngOnInit() {
   this.getCourse();  
  }
    
 model:any ={};
 uid:any;
  getCourse(){
      this.uid = this.route.snapshot.params['uid'];
     this._courseService
        .getCourse()
        .subscribe(employ => {
          this.model = employ[0];
      
    } )
   
     
           
}
  
updateCollegedata(){
      this._courseService
        .updateCollegedata(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }


}