import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  ngOnInit(): void {
    console.log()
  }
submited(val:any)
{
console.log(val)
if(val.valid)
{
this.route.navigate(['/table'])
}

}

}
