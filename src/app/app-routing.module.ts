import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DiplaycrudComponent } from './diplaycrud/diplaycrud.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { GuardGuard } from './guard.guard';

const routes: Routes = [
{path:'',
 component: LoginComponent},
{path:'table',
 component:DiplaycrudComponent,
//  canActivate:[GuardGuard],
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
