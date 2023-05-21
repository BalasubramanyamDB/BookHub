const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user')
const router = express.Router();
dotenv.config();

//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next) =>{{
    console.log(req.path,req.method)}
    next()
})

//routes
app.use('/',userRoutes)

mongoose.connect(process.env.MONG_URI)
.then(() => {
    app.listen(process.env.PORT,console.log(`connected to ${PORT}`));
})
.catch((error) => {console.log(error)})


const PORT = process.env.PORT || 5000;
