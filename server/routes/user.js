import { Router } from "express";
const router=Router()

router.get('/latest',(req,res)=>{
    return res.status(200).json({Message:"LATEST"})
})

router.get('/top',(req,res)=>{
    return res.status(200).json({Message:"TOP"})
})

router.get('/domestic',(req,res)=>{
    return res.status(200).json({Message:"DOMESTIC"})
})

router.get('/international',(req,res)=>{
    return res.status(200).json({Message:"INTERNATIONAL"})
})

export default router