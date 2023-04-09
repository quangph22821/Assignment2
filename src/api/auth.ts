import instance from ".";
import { signinForm, signupForm } from "../models";

export const signup = (data:signupForm)=>{
    const uri = "/signup"
    return instance.post(uri,data)
}

export const signin = (data:signinForm)=>{
    const uri = "/signin"
    return instance.post(uri,data)
}