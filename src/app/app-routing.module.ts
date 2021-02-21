import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DiplaycrudComponent } from './diplaycrud/diplaycrud.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'',
 component: LoginComponent},
{path:'table',
 component:DiplaycrudComponent},
 {path:'edit/:id',
 component:EditComponent
 },
 {path:'add',
 component:AddComponent
 }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
