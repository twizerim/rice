import express from "express"
import Productcontroller from "../Controller/productcotroller"
import VelifyAccess from "../middleware/velifyaccess"


const router =express.Router()
router.post("/post",VelifyAccess("admin"),Productcontroller.postproduct)
router.get("/get",Productcontroller.getallproduct)
router.get("/get/:id",Productcontroller.getone)
router.delete("/delete",VelifyAccess("admin"),Productcontroller.delete)
router.delete("/delete/:id",VelifyAccess("admin"),Productcontroller.deleteone)
router.put("/like/:productId",Productcontroller.Likes)
router.put("/dislike/:productId",Productcontroller.dislike)
export default router