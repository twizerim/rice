
import Contact from "../model/contact-us";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";


class Contactcontroller{

    static async sendmessage(req,res){
        const message=await Contact.create(req.body)
        if(!message){
            return errormessage(res,401,`message not sent`)
        }else{
            return successmessage(res,201,`message sent`,message)
        }
    }

    static async getallmessage(req,res){
        const message=await Contact.find()
        if(!message){
            return errormessage(res,401,`no message found`)
        }else{
            return successmessage(res,201,`all ${message.length} message retrived`,message)
        }
    }


    static async deleteAll(req,res){
        const message=await Contact.deleteMany()
        if(!message){
            return errormessage(res,401,`no message found`)
        }else{
            return successmessage(res,201,`all message deleted`)
        }
    }

    static async getOnemessage(req,res){
        const id=req.params.id
        const message=await Contact.findById(id)
        if(!message){
            return errormessage(res,401,`no message found`)
        }else{
            return successmessage(res,201,` message on this id ${id} retrived`,message)
        }
    }

    static async deleteOnemessage(req,res){
        const id=req.params.id
        const message=await Contact.findByIdAndDelete(id)
        if(!message){
            return errormessage(res,401,`no message found`)
        }else{
            return successmessage(res,201,` message on this id ${id} deleted`)
        }
    }

}
export default Contactcontroller