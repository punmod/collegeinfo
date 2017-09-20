import { Component, OnInit } from '@angular/core';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CourseService } from '../../course.service';
import { Course } from '../../course';

@Component({
  selector: 'papp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class PAddComponent implements OnInit {

  
constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }
  ngOnInit() {
  }

model: any ={} ;
 uid = this.route.snapshot.params['uid'];
  addCourse(){
      this.courseService
        .addCourse(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
