/**
 * Created by codervibe on 06 2月 2025
 * DateTime:2025/02/06 6:34 下午
 * Description:
 * Others:
 */
/**
 * User类代表一个用户对象，包含了用户的用户名和密码信息
 */
export default class User{
    username:string;
    password:string;

    /**
     * 构造一个新的User实例
     * @param username 用户名
     * @param password 密码
     */
    constructor(username:string,password:string) {
        this.username = username;
        this.password = password;
    }

    /**
     * 打印用户信息，包括用户名和密码
     */
    toString(){
        console.log("用户名:" + this.username + "密码:" + this.password);
    }
}

