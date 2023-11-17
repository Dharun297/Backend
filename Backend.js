// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 5000;


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dharunninja:merchantform@form.buqzzqw.mongodb.net/Signup')

.then(()=> {console.log('connected to mongodb')})
.catch((error)=> {console.log('Error in connecting:',error)})

const userSchema = new mongoose.Schema(
  {username:{type:String,required:true},
  password:{type:String,required:true}
})


const User = mongoose.model('User',userSchema)  
app.post('/api/Signup',function(req,res){
  console.log(req.body)
  res.send('send data successfully')
  var userdata =new User({username:req.body.username,password:req.body.password});

  userdata.save().then(()=>{res.send('send data successfully')})
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



