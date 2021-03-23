import { AddComponent } from './../add/add.component';
import { DeleteComponent } from './../delete/delete.component';
import { EditComponent } from './../edit/edit.component';
import { CrudService, obj} from './../crud.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];




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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private service:CrudService,
      private snack:MatSnackBar,
      private dialog:MatDialog

    ) { }

    openadd()
    {

    let dialogRef=this.dialog.open(AddComponent)
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
      if(result)
      {
      this.postrow(result)
      }
        })
   }


    openedit(student:obj)
    {
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
    let sanckBarRef= this.snack.open('item is deleting press undo to stop',action,{duration:3000})
    let smt=sanckBarRef.afterDismissed().subscribe((response)=>{
      this.deleterow(message)
      // console.log("deletion will take place")
    })
   sanckBarRef.onAction().subscribe((response)=>{
    console.log("nothing will happen")
    smt.unsubscribe()
   })
  }

  option:any
  // for filter for auto complete
  // learnlanguage:string[]=['python','php','rubby','html','javascript','java','c','c#']
  // filteredlanguage:any;
  // control=new FormControl()
  courses:any[]=[{name:"Python"},{name:"Java"},{name:"Php"}]
open:boolean=false
students:any[]=[]
isChecked:boolean=false
  ngOnInit() {
// for filter for auto complete
//  this.filteredlanguage=this.control.valueChanges.pipe(
//    startWith(''),
//    map(valu=>this._filter(valu))
//  )

  this.service.getdata()
     .subscribe(response =>
      {
        this.students=response

      });
      this.dataSource=this.students
  }
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
  call(som:any)
  {
    this.isChecked=som.target.checked
  }
}


