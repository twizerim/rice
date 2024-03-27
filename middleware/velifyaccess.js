
import errormessage from "../utils/errormessage";
import  Jwt  from "jsonwebtoken";


function VelifyAccess(passRole){

    return (req,res,next)=>{
        const token=req.headers["auth-token"]

        if(!token){
            return errormessage(res,401,`no token provided`)
        }else{
            try {
                const velifytoken=Jwt.verify(token,process.env.SCRET_KY,{expiresIn:"1d"})

                req.user=velifytoken.user
                if(passRole!==velifytoken.user.role){
                    return errormessage(res,401,`you don't have access`)
                }else{
                    return next()          
                }
            } catch (error) {
                if ((error.name = "JsonWebTokenError"))
                     return errormessage(res, 401, "Invalid Token or Expired Token");
            }
        }
    }
}

export default VelifyAccess