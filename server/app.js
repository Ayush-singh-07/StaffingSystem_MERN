import express from 'express';
import connectDB from './DB/connectDB.js';
import router from './routes/api.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(cors());
app.use('/api', router);


try{
    await connectDB(process.env.DB_URL);
    console.log("DB Connected");
}
catch(err){
    console.log("error: "+err);
}



const port = process.env.PORT || 8000;
app.listen(port, ()=>{console.log("Server running on port: "+port)})






