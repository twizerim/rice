import Product from "../model/production";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
// import sendEmail from "../utils/email";
// import Member from "../model/members";


class Productcontroller{

    static async postproduct(req,res){
        const product = await Product.create(req.body)
        if(!product){
            return errormessage(res,401,`product not posted`)
        }else{

            return successmessage(res,201,`prouct successfuly posted`,product)
        }
    }

    static async getallproduct(req,res){
        const product=await Product.find()
        if(!product){
            return errormessage(res,401,`no product found in stock`)

        }else{
            return successmessage(res,200,`this is all ${product.length} product available to buy`,product)
        }
    }

    static async delete(req,res){
        const product=await Product.deleteMany()
        if(!product){
            return errormessage(res,401,`no product found to delete`)
        }else{
            return successmessage(res,201,`all product deleted`)
        }
    }

    static async getone(req,res){
        const id=req.params.id
        const product=await Product.findById(id)
        if(!product){
            return errormessage(res,401,`no product found on that id`)
        }else{
            return successmessage(res,201,`this is product found on this is ${id}`,product)
        }
    }

    static async deleteone(req,res){
        const id=req.params.id
        
        const product=await Product.findByIdAndDelete(id)
            if(!product){
                return errormessage(res,401,`no product found`)
            }else{
                return successmessage(res,201,`product on this id ${id} deleted`)
        }
       
       
    }

    static async Likes(req,res){
        const productId=req.params.productId
        const product=await Product.findById(productId)
        if(!product){
            return errormessage(res,401,`no product found to like`)
        }else{
            product.likes+=1
            await product.save()
            return successmessage(res,201,`product liked`,product)
            
        }
    }
    static async dislike(req,res){
        const productId=req.params.productId
        const product=await Product.findById(productId)
        if(!product){
            return errormessage(res,401,`no product found to dislike`)
        }else{
           
            product.dislikes+=1
            await product.save()
            return successmessage(res,201,`product liked`,product)
            
        }
    }
}
export default Productcontroller