import { User } from "./modele.model";

export interface LoginRequest {
    username: string;
    password: string
}
export interface SignupRequest{
    username : string ; 
    password : string ; 
}

export interface LoginResponse {
    token: string;
    user: User; 
  }