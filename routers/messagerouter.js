import express from "express"
import Contactcontroller from "../Controller/contactController"
import VelifyAccess from "../middleware/velifyaccess"


const router=express.Router()

router.post("/",Contactcontroller.sendmessage)
router.get("/",VelifyAccess("admin"),Contactcontroller.getallmessage)
router.delete("/",VelifyAccess("admin"),Contactcontroller.deleteAll)
router.get("/:id",VelifyAccess("admin"),Contactcontroller.getOnemessage)
router.delete("/:id",VelifyAccess("admin"),Contactcontroller.deleteOnemessage)

export default router