import { CrudService} from './../crud.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route:ActivatedRoute,
             private service:CrudService
             ) { }

  id:any
  name:any
  clas:any
  coursename:any
  outof:any
  result:any
  ngOnInit() {

let ID=this.route.snapshot.paramMap.get('id')
 this.service.getdatabyid(ID)
 .subscribe(response=>{
   console.log(response)
   this.id=response.id
  this.name=response.name
   this.clas=response.clas
   this.coursename=response.course.coursename
   this.outof=response.course.outof
   this.result=response.course.result
 })

  }
update(val:any)
{
  this.service.updatedata(val.id,val)
  .subscribe()
}

}
