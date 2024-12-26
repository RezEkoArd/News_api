export interface User<T> {
    ID : Number;    
    email: string;
    name: string;
    password: string;
}


export interface UpdatePasswordRequest {
    current_password : string;
    new_password: string;
    confirm_password: string;
}