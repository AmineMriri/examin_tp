const Mongoose = require("mongoose");


//url local : mongo://localhost:27017/dbname
Mongoose.connect('mongodb+srv://amine:amine@examintp.cgby0mp.mongodb.net/ExaminTp?retryWrites=true&w=majority')
    .then(()=>console.log('MongoDB is connected'))
    .catch(err=>console.error('MongoDB not connected, error :',err));





