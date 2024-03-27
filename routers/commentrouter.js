import express from "express"
import commentController from "../Controller/commentController"
import VelifyAccess from "../middleware/velifyaccess"


const router=express.Router()
router.post("/:productId",commentController.postcomment)
router.get("/",commentController.getallcomment)
router.get("/:commentId",commentController.getone)
router.delete("/",VelifyAccess("admin"),commentController.deletecomment)
router.delete("/:commentId",VelifyAccess("admin"),commentController.deleteone)
export default router