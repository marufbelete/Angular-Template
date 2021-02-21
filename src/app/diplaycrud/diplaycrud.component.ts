import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'display',
  templateUrl: './diplaycrud.component.html',
  styleUrls: ['./diplaycrud.component.css']
})
export class DiplaycrudComponent implements OnInit {

  constructor(private service:CrudService) { }
students:any[]=[]
isChecked:boolean=false
  ngOnInit() {
  this.service.getdata()
     .subscribe(response =>
      {
        this.students=response

      });
  }
deleterow(student:any)
{
  console.log(student.id)
this.service.deletedata(student.id)
.subscribe(response=>
  {
    console.log(response)
  })
}
postrow(Post:object)
{
  console.log(Post)
  this.service.postdata(Post)
  .subscribe(response=>
    {
      console.log(response)
    })
}
// multipledelete(mult:any)
// {
//   console.log(mult)
//   this.service.deletedata(mult)
//   .subscribe(response=>
//     {
//       console.log(response)
//     })
//   }

//   editstudent()
//  {
//    this.service.updatedata()
//  }
  call(som:any)
  {
    this.isChecked=som.target.checked
  }
}


