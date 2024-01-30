import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MycomponentTsComponent } from './mycomponent.ts/mycomponent.ts.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentTsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
