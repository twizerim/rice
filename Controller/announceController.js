 import Announce from "../model/announcement";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";


 class Announcecontroller{

    static async postAnnounce(req,res){
        const itangazo=await Announce.create(req.body)
        if(!itangazo){
            return errormessage(res,401,`announcement not sent`)
        }else{
            return successmessage(res,201,`successfuly announcement sent`,itangazo)
        }
    }

    static async getall(req,res){
        const itangazo=await Announce.find()
        if(!itangazo){
            return errormessage(res,401,`no announcement found`)
        }else{
            return successmessage(res,201,`successfuly all ${itangazo.length} announcement retrived`,itangazo)
        }
    }

    static async deleteall(req,res){
        const itangazo=await Announce.deleteMany()
        if(!itangazo){
            return errormessage(res,401,`no announcement found`)
        }else{
            return successmessage(res,201,`successfuly all announcement deleted`)
        }
    }

    static async getOne(req,res){
        const id=req.params.id
        const itangazo=await Announce.findById(id)
        if(!itangazo){
            return errormessage(res,401,`no announcement found`)
        }else{
            return successmessage(res,201,`announcement on this id ${id} retrived`,itangazo)
        }
    }

    static async deleteOne(req,res){
        const id=req.params.id
        const itangazo=await Announce.findByIdAndDelete(id)
        if(!itangazo){
            return errormessage(res,401,`no announcement found`)
        }else{
            return successmessage(res,201,`announcement on this id ${id} deleted`)
        }
    }
 }

 export default Announcecontroller