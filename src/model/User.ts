/**
 * Created by codervibe on 06 2月 2025
 * DateTime:2025/02/06 6:34 下午
 * Description:
 * Others:
 */
class User{
    username:string;
    password:string;
    constructor(username:string,password:string) {
        this.username = username;
        this.password = password;
    }
    eating(){
        console.log(this.username + "eating");
    }
}