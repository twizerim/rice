
import express from "express"
import custommerController from "../Controller/customercontroller"


const router=express.Router()

router.post("/",custommerController.shopRegist)
router.get("/",custommerController.getInformation)
router.get("/:id",custommerController.getInformationOFoneCustomer)
router.delete("/",custommerController.deleteInf)
router.delete("/:id",custommerController.deleteOne)

export default router