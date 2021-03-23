import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:CrudService) { }

  ngOnInit(): void {
  }
  // addnewstudent(val:object)
  // {
  //   console.log(val)
  //   console.log(typeof(val))
  //   this.service.postdata(val)
  //   .subscribe()
  // }
}
