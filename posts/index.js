const express=require('express');// to create a new app
const bodyParser=require('body-parser'); // some json data send by user in a body request actually gets passed  
const {randomBytes} =require('crypto'); //to create random id 
const cors =require('cors');// uses as a middleware inorder to rectify the localhost port

const app=express();

const posts={}; // store every post we create
app.use(bodyParser.json());
app.use(cors());


//retreice all post create
app.get('/posts',(req,res)=>{
res.send(posts);
});


//for new post
app.post('/posts',(req,res)=>{
    const id =randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id]={
        id,title
    };

    res.status(201).send(posts[id]);
});


app.listen(4000,()=>{
    console.log('Listening on 4000');
});