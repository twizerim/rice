import express, { Router } from "express"
import Announcecontroller from "../Controller/announceController"
import VelifyAccess from "../middleware/velifyaccess"



const router=express.Router()
router.post("/",VelifyAccess("admin"),Announcecontroller.postAnnounce)
router.get("/",Announcecontroller.getall)
router.delete("/",VelifyAccess("admin"),Announcecontroller.deleteall)
router.get("/:id",Announcecontroller.getOne)
router.delete("/:id",VelifyAccess("admin"),Announcecontroller.deleteOne)

export default router