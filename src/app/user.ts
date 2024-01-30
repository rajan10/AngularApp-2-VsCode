export class User {

    username:string;
    password:string;


    constructor(public name: string,public pass: string,) {
        this.username = name;
        this.password = pass;
     }
}
