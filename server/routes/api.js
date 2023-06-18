import express from "express";
import * as handlers from '../controller/DefaultController.js';
import multer from 'multer';
const storage = multer.memoryStorage()  //using memorystorage to store whole file on DB
const upload = multer({ storage: storage })




const router = express.Router();


router.get('/', handlers.getalldata);
router.post('/add', upload.single('file') , handlers.sendData );



export default router;