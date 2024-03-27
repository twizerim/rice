
import express from "express"
import productrouter from "./productrouter"
import commentrouter from "./commentrouter"
import annouRouter from "./annouRouter"
import custommerRouter from "./custommerRouter"
import messagerouter from "./messagerouter"
import oderRoute from "./oderRoute"
import productionRouter from "./productionsRouter"
import userRouter from "./userRouter"
import farmerRouter from "./farmerRouter"


const router =express.Router()
router.use("/product",productrouter)
router.use("/comment",commentrouter)
router.use("/announcement",annouRouter)
router.use("/custommer",custommerRouter)
router.use("/contact-us",messagerouter)
router.use("/oder",oderRoute)
router.use("/memberproduct",productionRouter)
router.use("/user",userRouter)
router.use("/farmer",farmerRouter)

export default router