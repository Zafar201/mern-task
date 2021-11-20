import express, { urlencoded } from "express";
import dotenv from 'dotenv'
import  mongoose  from "mongoose";
import userRouter from "./routers/userRouter.js";
import data from "./data.js";
import { OAuth2Client } from "google-auth-library";


dotenv.config()
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);


const app = express();
app.use(express.json());
app.use(urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mern',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

app.use('/api/users',userRouter)

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.get('/',(req,res)=>{
    res.send("Server is ready")
})

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})
const port =process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})