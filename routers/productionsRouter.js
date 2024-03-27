 import express from "express"
 import postProductController from "../Controller/postProductionController"
 import VelifyAccess from "../middleware/velifyaccess"



 const router = express.Router()
 router.post("/",VelifyAccess("member"),postProductController.productioDiposition)
 router.get("/",VelifyAccess("admin"),postProductController.getproductionOfmember)
 router.get("/:id",VelifyAccess("admin"),postProductController.getoneproductionOfmember)
 router.delete("/",VelifyAccess("admin"),postProductController.deleteproductionOfmember)
 router.delete("/:id",VelifyAccess("admin"),postProductController.deleteoneproductionOfmember)
 export default router