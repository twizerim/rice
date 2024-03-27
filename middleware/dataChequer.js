import User from "../model/user";
import errormessage from "../utils/errormessage";


class Datachecker{

    static  memberRegistIsEmpt(req,res,next){
        const {firstname,lastname,district,email,password,phonenumber,confrimpassword}=req.body

        if(firstname==""){
            return errormessage(res,401,`please provide your names`)  
        }else  if(lastname==""){
            return errormessage(res,401,`please provide your names`) 
        }else if(district==""){
            return errormessage(res,401,`please provide your location`)
        }else if(email==""){
            return errormessage(res,401,`please provide your email`)
        }else if(password==""){
            return errormessage(res,401,`please provide tour password`)
        }else if(phonenumber==""){
            return errormessage(res,401,`please provide tour phone number`)
        }else if(confrimpassword==""){
            return errormessage(res,401,`please provide your confrim password`)
        }else{
            return next()
        }
    }

    static async EmailExist(req,res,next){
        const email=req.body.email

        const user=await User.findOne({email})
        if(user){
            return errormessage(res,401,`user allready exist in cooperative`)
        }else{
            return next()
        }
    }
}
export default Datachecker