import mongoose from "mongoose";

const StaffdataSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true,
      },
      file: {
        data: Buffer,   //data sent by multer as buffer 
        contentType: String
      },
      tech: {
        type: [],    
      },
})

const StaffData = new mongoose.model('StaffData', StaffdataSchema);

export default StaffData;