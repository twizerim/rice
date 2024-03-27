

import Farmer from "../model/farmer";
import errormessage from "../utils/errormessage";
import bcrypt from "bcrypt"
import successmessage from "../utils/successmessage";


class farmerController {
     static async createfarmer(req,res){
        const {firstname,lastname,email,phonenumber,district,sector,sell,village,password,confrimpawword}=req.body
        const {idPhotocopy,landReport,picture,letter}=req.body

        try {
            if(req.body.password!==req.body.confrimpawword){
                return errormessage(res,401,'please password and confrim password not match')
            }else{
               const hashpassword=bcrypt.hashSync(req.body.password,10)
               const hashconfrimpassword=bcrypt.hashSync(req.body.confrimpawword,10)
    
               const farmer = await Farmer.create({firstname,lastname,email,phonenumber,district,sector,sell,village,password:hashpassword,
                idPhotocopy,landReport,picture,letter,confrimpawword:hashconfrimpassword})
    
                if(!farmer){
                    return errormessage(res,401,'farmer not created')
                }else{
                    return successmessage(res,201,'your request to be farmer is successfuly',farmer)
                }
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
     }
}
export default farmerController