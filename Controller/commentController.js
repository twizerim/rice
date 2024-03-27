import Comment from "../model/comment";
import Product from "../model/production";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";


class commentController{

    static async postcomment(req,res){
        const productId=req.params.productId

        const comment=await Comment.create(req.body)

        const product=await Product.findByIdAndUpdate(productId,{$push:{comments:comment}},{new:true})
        if(!product){
            return errormessage(res,401,`no product found`)
        }else{
            return successmessage(res,201,`success comment posted`,comment)
        }
        
    }

    static async getallcomment(req,res){
        const comment = await Comment.find()
        if(!comment){
            return errormessage(res,401,`no comment found`)
        }else{
            return successmessage(res,201,`all ${comment.length} comment retrived`,comment)
        }
    }
    
    static async deletecomment(req,res){
        const comment = await Comment.deleteMany()
        if(!comment){
            return errormessage(res,402,`no comment found`)
        }else{
            return successmessage(res,201,`all comment deleted`)
        }
    }

    static async deleteone(req,res){
        const commentId=req.params.commentId

        const comment = await Comment.findByIdAndDelete(commentId)
        if(!comment){
            return errormessage(res,402,`no comment found`)
        }else{
            return successmessage(res,201,` comment on this id ${commentId} deleted`)
        }
    }

    static async getone(req,res){
        const commentId=req.params.commentId
        const comment = await Comment.findById(commentId)
        if(!comment){
            return errormessage(res,401,`no comment found`)
        }else{
            return successmessage(res,201,` comment on this id ${commentId} retrived`,comment)
        }

    }
}
export default commentController