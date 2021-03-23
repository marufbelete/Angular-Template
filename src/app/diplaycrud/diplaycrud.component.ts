import { PlselectComponent } from './../plselect/plselect.component';
import { MultdeleteComponent } from './../multdelete/multdelete.component';
import { AddComponent } from './../add/add.component';
import { DeleteComponent } from './../delete/delete.component';
import { EditComponent } from './../edit/edit.component';
import { CrudService, obj} from './../crud.service';
import { Component, OnInit, ViewChild,} from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table'
import { MatSort} from '@angular/material/sort'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomVlidation } from './custumValidation'
@Component({
  selector: 'display',
  templateUrl: './diplaycrud.component.html',
  styleUrls: ['./diplaycrud.component.css']
})

export class DiplaycrudComponent implements OnInit {
// filter a date that we dont want
  // datefilter=function(date:any)
  // {
  //   const day=date.getDay()
  //   return day!=0 &&day!=6
  // }
form!:FormGroup
  constructor(private service:CrudService,
    private snack:MatSnackBar,
    private dialog:MatDialog,
    private fb:FormBuilder
) { }

courses:any[]=[{name:"Python"},{name:"Java"},{name:"Php"}]
open:boolean=false
students:any[]=[]
isChecked:boolean=false
sstudent:any[]=[]
ngOnInit() {
  // for filter for auto complete
  //  this.filteredlanguage=this.control.valueChanges.pipe(
  //    startWith(''),
  //    map(valu=>this._filter(valu))
  //  )
    // this.form = this.fb.group({
    //     NAME: ['',[Validators.required, CustomVlidation.mustMatch,CustomVlidation.conatin]],
    // })
    this.service.getdata()
       .subscribe(response =>
        {
          this.students=response
          this.students.forEach(result=>{
            this.sstudent.push(result)
          })
          console.log(this.students)

        });

    }
// search(data:string)
// {
//  this.dataSource.filter=data.trim().toLowerCase()
// }

sear:any
search(ser:any)
{
  this.sear=ser.toLowerCase()

  if(ser)
  {
  this.students.forEach(res=>{
    // console.log(this.sear)
    if((String(res.id).indexOf(this.sear)>-1 || res.name.toLowerCase().indexOf(this.sear)>-1 ||res.clas.toLowerCase().indexOf(this.sear)>-1 ||res.course.coursename.toLowerCase().indexOf(this.sear)>-1 ||String(res.course.outof).indexOf(this.sear)>-1 ||String(res.course.result).indexOf(this.sear)>-1))
  {
    if(this.sstudent.indexOf(res)==-1)
    this.sstudent.push(res)
  }
  else if(!(String(res.id).indexOf(this.sear)>-1 || res.name.toLowerCase().indexOf(this.sear)>-1 ||res.clas.toLowerCase().indexOf(this.sear)>-1 ||res.course.coursename.toLowerCase().indexOf(this.sear)>-1 ||String(res.course.outof).indexOf(this.sear)>-1 ||String(res.course.result).indexOf(this.sear)>-1))
  {
    if((this.sstudent.indexOf(res)>-1) )
     this.sstudent.splice(this.sstudent.indexOf(res),1)
  }
  })
}
else if(ser=='')
{
  this.students.forEach(result=>{
    if((this.sstudent.indexOf(result)==-1))
    this.sstudent.push(result)
  })
}
}
text(val:any)
{
  console.log(val)
}
checkedstud:any[]=[]
    openadd()
    {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='570px'
      dialogConfig.height='700px'

    let dialogRef=this.dialog.open(AddComponent,dialogConfig)
    dialogRef.afterClosed().subscribe(result=>{
      // console.log(result)
      if(result)
      {
      this.postrow(result)
      }
        })
   }

    openedit(student:obj)
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='570px'
      dialogConfig.height='700px'
  let dialogRef=this.dialog.open(EditComponent,{data:student})
  dialogRef.afterClosed().subscribe(result=>{

    if(result)
    {
    this.update(result)
    }
  })

    }
opendelete(student:any)
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='370px'
      dialogConfig.height='200px'
      let dialogRef=this.dialog.open(DeleteComponent,dialogConfig)
      dialogRef.afterClosed().subscribe(result=>{

        if(result==='ok')
        {
      this.opensnack(student,'undo')
        }

      })
        }

    // {
    //   opensnack(student,'undo')
    // }

  opensnack(message:any,action:any)
  {
    let sanckBarRef= this.snack.open('item is deleting click undo to stop',action,{duration:3000})
    let smt=sanckBarRef.afterDismissed().subscribe((response)=>{
      this.deleterow(message)
      // console.log(response)
      // console.log("deletion will take place")
    })
   sanckBarRef.onAction().subscribe((response)=>{
    // console.log("nothing will happen")
    smt.unsubscribe()
   })
  }

chane()
{
  if(this.isChecked)
  {
  this.students.forEach(val=>{
    if(this.checkedstud.indexOf(val)==-1)
    {this.checkedstud.push(val)}})
    console.log(this.checkedstud)
  }
  else
  {
    this.checkedstud=[]
  }
}
  chan(even:any,student:any)
  {
    if(even.target.checked)
    {
      this.checkedstud.push(student)
    console.log(this.checkedstud)
    console.log(this.students.indexOf(student))
    }
    else
    {
      this.checkedstud.splice(this.checkedstud.indexOf(student),1)
      console.log(this.checkedstud)
    }
  }
multipledelete()
{
  const dialogConfig = new MatDialogConfig();
      dialogConfig.width='370px'
      dialogConfig.height='200px'
      if(this.checkedstud.length!=0)
  {
    console.log(this.checkedstud.length)
      let dialogRef=this.dialog.open(MultdeleteComponent,dialogConfig)
      dialogRef.afterClosed().subscribe(result=>{

        if(result==='ok')
        {
      this.opensnacmd('multiple item is deleting click undo to stop','undo')
        }

      })
    }
    else
    {
      this.dialog.open(PlselectComponent,dialogConfig)
    }
}

opensnacmd(message:any,action:any)
{

  let sanckBarRef= this.snack.open(message,action,{duration:3000})
  let smt=sanckBarRef.afterDismissed().subscribe((response)=>{
    this.checkedstud.forEach(val=>this.deleterow(val))
    console.log(response)
    // console.log("deletion will take place")
  })
 sanckBarRef.onAction().subscribe((response)=>{
  // console.log("nothing will happen")
  smt.unsubscribe()
  console.log(response)
 })


}



  option:any
  // for filter for auto complete
  // learnlanguage:string[]=['python','php','rubby','html','javascript','java','c','c#']
  // filteredlanguage:any;
  // control=new FormControl()


  get f() { return this.form.controls; }
  // for filter for auto complete
//   private _filter(val:string)
//   {
//  val=val.toLocaleLowerCase()
//  return this.learnlanguage.filter(opt=>opt.toLocaleLowerCase().includes(val))
//   }


//   disply(subject:any)
//   {
// return subject? subject.name:null
//   }
update(val:any)
{
  this.service.updatedata(val.id,val)
  .subscribe()
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
  call(ev:any)
  {
    this.isChecked=ev.target.checked
  }
}


