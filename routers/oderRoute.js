import express from "express";
import odercontroller from "../Controller/oderController";


const router=express.Router()
router.post("/",odercontroller.orderingProduct)
router.delete("/",odercontroller.deleteOder)
router.get("/",odercontroller.getoder)
router.get("/:id",odercontroller.getOneOder)
router.delete("/:id",odercontroller.deleteOne)

export default router