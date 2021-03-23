import { MatrialModule } from './matrial/matrial.module';
import { CrudService } from './crud.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPopper } from 'angular-popper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiplaycrudComponent } from './diplaycrud/diplaycrud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    DiplaycrudComponent,
    LoginComponent,
    EditComponent,
    DeleteComponent,
    AddComponent
  ],
  entryComponents:[
    EditComponent,
    DeleteComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPopper,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatrialModule,
    ReactiveFormsModule

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
