const express=require('express');
//const { model, models } = require('mongoose');
const router=express.Router();




router.get('/',(req,res)=>{
    res.send("hello to company");
})
router.get('/new',(req,res)=>{
    res.render('../views/company/new.ejs');
})

module.exports=router;