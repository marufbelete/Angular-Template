import { CrudService, obj } from './../crud.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private student:obj) { }

  id:any
  name:any
  clas:any
  coursename:any
  outof:any
  result:any
  ngOnInit() {
    console.log("indialogcomp")
  console.log(this.student)
   this.id=this.student.id
  this.name=this.student.name
   this.clas=this.student.clas
   this.coursename=this.student.course.coursename
   this.outof=this.student.course.outof
   this.result=this.student.course.result

// let ID=this.route.snapshot.paramMap.get('id')
//  this.service.getdatabyid(ID)
//  .subscribe(this.student=>{
//    console.log(this.student)
//  })
  }

}
