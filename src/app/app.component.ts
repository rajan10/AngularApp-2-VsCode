import { Component, inject } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app5';

  username:string="";
  password:string="";
  msg:string="";

  //constructor injection  loginServive is an object of type LoginService
    /**
   * Constructor injection to create instance of LoginService.
   * This allows the AppComponent to use the methods and properties of the LoginService without having to manually create an instance itself.
   in summary, the constructor allows the AppComponent class to declare a dependency on the LoginService class which it needs. When AppComponent 
   is instantiated, it will automatically create and inject a LoginService instance via this constructor, storing it in the private loginService property
    for internal use in AppComponent. This is a useful pattern for dependency injection and encapsulation in TypeScript
    */
  constructor(private loginService: LoginService) {

   }
/**
   * Checks if the provided username and password match valid credentials by calling the loginService's checkUnameAndPwd method.
   *
   * If valid, sets the msg property to "Login Successful!", otherwise sets msg to "Login Failed!".
   */
  CheckLogin() {
    if (this.loginService.checkUnameAndPwd(this.username, this.password)) {
      this.msg = 'Login Successful!';
    } else {
      this.msg = 'Login Failed!';
    }
  }
}
