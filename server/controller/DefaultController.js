import express from "express";
import StaffData from "../model/ResourceData.js";
import multer from 'multer';



const getalldata = (req,  res)=>{
    StaffData.find({})
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch(err => console.log(err));
} 


const sendData = (req, res)=>{
    const data = new StaffData({
        name: req.body.name,
        file: {
            data: req.file.buffer,
            contentType : req.file.mimetype,
        },
          tech: req.body.tech 
    });

    data.save()
    .then(()=>{res.status(200).json(data)})
    .catch((err)=>{console.log("Error: "+err)})

}


export {getalldata, sendData};