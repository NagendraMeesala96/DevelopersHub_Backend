const express = require("express");
const { json } = require("express/lib/response");

const mongoose = require('mongoose');

const appRouter = require ('./Routes/app.js')

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://Nagendra9573:Nagendra9573@cluster0.j08ql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{console.log('DB is connected......')}).catch((err)=>{console.log(err)});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = process.env.PORT || 3000;

app.use('/',appRouter);

app.use('/Employees',appRouter);

app.use('/addEmployee',appRouter);

app.use('/Delete/:id',appRouter);

app.use('/Search/:Name',appRouter);

app.use('Update/:id',appRouter)

app.listen(port,()=>{

    console.log(`Server Running At http://localhost:${port}`);
});
