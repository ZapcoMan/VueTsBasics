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
    toString(){
        console.log("用户名:" + this.username + "密码:" + this.password);
    }
}
const user = new User("codervibe","123456");
user.toString()
export {}