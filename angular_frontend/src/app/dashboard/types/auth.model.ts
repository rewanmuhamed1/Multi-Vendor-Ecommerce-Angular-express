export interface Auth {
    successMessage:string,
    errorMessage:string,
    loader :boolean,
    userInfo?: UserInfo | null;
    token : string,
    role:string
}

export interface LoginData {
    email:string,
    password:string,
   
}

export interface UserInfo {
    userInfo : {
        id :string ,
        name : string ,
        email: string,
        password:string ,
        role : string,
        image : string,
        status: string
    } 

}

export interface SellerRegister {
    name :string ,
    email:string,
    password:string,
   
}