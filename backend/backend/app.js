const express = require('express');
const { MongoClient } = require('mongodb')
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();


PORT = 3500;
mongoose.connect('mongodb+srv://anjali_rathor:YFjCcTQBT2dPJIk1@cluster1.fmdzk73.mongodb.net/?retryWrites=true&w=majority' ,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
 .then(()=> {
     console.log('Connected Successfully')
   }
   )
 .catch((e) => console.log(e)); 


app.listen(PORT, () => {
    console.log (`Server running on port: ${PORT}`);
});

  

 const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter); //try this route
app.use("/booking", bookingRouter);

// mongoose.connect= "mongodb+srv://rathoranjali680:@anjali21@cluster1.fmdzk73.mongodb.net/Movie-project" 
// app.listen(PORT, () => {
//     console.log(`Server Running`);
// })


