import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:User[] = [
    new User("Admin","Admin!"),
    new User("User","User!")
  ];

constructor() { }
checkUnameAndPwd(username:string,password:string):boolean{
  var count = 0;
  for (var i=0;i<this.users.length;i++){
    if(this.users[i].username==username && this.users[i].password==password){
      count++
    }
  }
  if (count == 1){
    return true;
  }
  else
  {
    return false;
  }

}
}
