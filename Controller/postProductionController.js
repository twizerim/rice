import Productmember from "../model/memberproduction";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";



class postProductController{

    static async productioDiposition(req,res){
         const memberproduction = await Productmember.create(req.body)

         if(!memberproduction){
             return errormessage(res,401,`your production is not deposited`)
         }else{
            return successmessage(res,201,`thank you for your contribution to post product`,memberproduction)
         }
    }

    static async getproductionOfmember(req,res){
        const memberproduction = await Productmember.find()
         if(!memberproduction){
            return errormessage(res,401,`no production posted`)
         }else{
            return successmessage(res,201,`production available here are`,memberproduction)
         }
    }
    static async deleteproductionOfmember(req,res){
        const memberproduction = await Productmember.deleteMany()
         if(!memberproduction){
            return errormessage(res,401,`no production posted`)
         }else{
            return successmessage(res,201,`production are deleted`,memberproduction)
         }
    }

    static async getoneproductionOfmember(req,res){
        const id=req.params.id
        const memberproduction = await Productmember.findById(id)
         if(!memberproduction){
            return errormessage(res,401,`no production posted`)
         }else{
            return successmessage(res,201,`production available on thi id ${id}`,memberproduction)
         }
    }

    static async deleteoneproductionOfmember(req,res){
        const id=req.params.id
        const memberproduction = await Productmember.findByIdAndDelete(id)
         if(!memberproduction){
            return errormessage(res,401,`no production posted`)
         }else{
            return successmessage(res,201,`production on this id ${id} deleted`,memberproduction)
         }
    }
}
export default postProductController