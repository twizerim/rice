
import User from "../model/user";
import errormessage from "../utils/errormessage"
import successmessage from "../utils/successmessage"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



class userController{

  static async requestTobeMember(req,res){
       const {firstname,lastname,phonenumber,district,email,password
                  ,confrimpassword,role}=req.body
        
      if(req.body.password !== req.body.confrimpassword){
         return errormessage(res,401,`please password adn confrim password miss match`)
      }else{
         const hashpassword = bcrypt.hashSync(req.body.password,10)

         const user = await User.create({firstname,lastname,phonenumber,district,email,
          password:hashpassword,confrimpassword,role})

            if(!user){
               return errormessage(res,401,`please correct your error you are not created`)
            }else{
               return successmessage(res,201,`user successfuly created`,user)
            }
      }
  }

  static async Login(req,res){
    const {email,password}=req.body
      const user=await User.findOne({email})

    if(!user){
     return errormessage(res,401,`invalid email `)
    }
    else{
     const comperepassword=bcrypt.compareSync(password,user.password)
     if(!comperepassword){
       return errormessage(res,401,`invalid  password`)
     }else{

       const token=jwt.sign({user:user},process.env.SCRET_KY,{expiresIn:"1d"})
       return res.status(200).json({
         token:token,
         data:{
          user:user
         }
       })
     }
    }
}

static async getalluser(req,res){
   try {
    const user = await User.find()
    if(!user){
      return errormessage(res,401,'no user found')
    }else{
      return successmessage(res,201,'user successfuly retrived',user)
    }

    
   } catch (error) {
     return errormessage(res,500,`error is ${error}`)
   }
}



  
}
export default userController