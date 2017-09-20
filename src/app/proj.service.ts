import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjService {
  projects=[];
  constructor(private _http:Http) { }
  checkMe:any;
   getProjects(){
    
    return this._http.get("http://misrusachd.in/projectapi/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  addProject(info){
    return this._http.post("http://misrusachd.in/projectapi/insert.php",info)
      .map(()=>"");
  }
  getProject(aid){
    return this._http.post("http://misrusachd.in/projectapi/selectone.php/",{'aid':aid,})
      .map(res=>res.json());
  }
  deleteProject(id){
    return this._http.post("http://misrusachd.in/projectapi/delete.php/",{'id':id})
      .map(()=>this.getProjects());
  }
  updateProject(info){
    return this._http.post("http://misrusachd.in/projectapi/update.php/", info)
      .map(()=>"");
  }
}
