
import express from "express"
import farmerController from "../Controller/farmercontroller"
import upload from "../middleware/uploadimages"



const router = express.Router()

router.post("/post",farmerController.createfarmer)
export default router