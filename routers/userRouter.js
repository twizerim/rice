import express from "express"
import userController from "../Controller/userController"
import Validator from "../middleware/validator"
// import VelifyAccess from "../middleware/velifyaccess"
import Datachecker from "../middleware/dataChequer"





const router = express.Router()
router.post("/",Validator.memberAcountRule(),Validator.inputvalidator,
Datachecker.memberRegistIsEmpt,Datachecker.EmailExist,userController.requestTobeMember)

router.post("/login",userController.Login)
router.get("/get",userController.getalluser)

export default router