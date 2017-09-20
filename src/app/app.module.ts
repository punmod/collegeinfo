import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule} from '@angular/common';
 

import { PAppComponent } from './papp.component';
import { PNavbarComponent } from './pems/navbar/navbar.component';
import { PHomeComponent } from './pems/home/home.component';
import { PAddComponent } from './pems/add/add.component';
import { PEditComponent } from './pems/edit/edit.component';
import { ProjService } from './proj.service';

import { CourseService } from './course.service';


@NgModule({
  declarations: [
    
    PAppComponent,
    PNavbarComponent,
    PHomeComponent,
    PAddComponent,
       PEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [ProjService,CourseService],
  bootstrap: [PAppComponent]
})
export class AppModule { }
