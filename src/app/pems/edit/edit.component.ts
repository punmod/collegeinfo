import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';
import { CourseService } from '../../course.service';
import { Course } from '../../course';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PEditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
      this.getSingleCourse();
  }

  //model:any={};
  model:any={};
  aid = this.route.snapshot.params['aid'];
   getSingleCourse(){
    
    this.courseService
      .getCourse()
      .subscribe(course =>{
          this.model = course[0];
          })
  };
  
  updateCourse(){
      this.courseService
        .updateCourse(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/home']);
  }
}
