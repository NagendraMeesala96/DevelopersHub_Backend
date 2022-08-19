const express = require("express");

const Employees = require('../Models/model.js');

const route = express.Router();


// Server Start Page
route.get('/',async(req,res)=>{

   res.send("Welcome to server")

})

//Get All Employees Data
route.get('/Employees', async(req,res)=>{

    try{

        const getAllData = await Employees.find();

         return res.json(getAllData);
    }

    catch(err){

        console.log(err.message);
    }

})

//Get Employee Data By ID
route.get('/Employees/:id', async(req,res)=>{

    try{

        const data = await Employees.findById(req.params.id);

         return res.json(data);
    }

    catch(err){

        console.log(err.message);
    }

    

})

//Search Employee Data With Name

route.get('/Search/:Name',async(req,res)=>{
 
    let name=req.params.Name;
 
    let arr=[];
 
     try{
 
         const getAllData = await Employees.find();
 
         getAllData.map((user)=>{
 
             if(!(name.localeCompare(user.Name)))
             {
                 arr.push(user)
             }
         })
 
         return res.json(arr)
         
     }
 
     catch(err){
 
         alert(err.message);
     }
 })
 

//Post request
route.post('/addEmployee',async(req,res)=>{

    const {Name,Email,MobileNum,Gender,Status,Profile,CompanyName,JobRole} = req.body;

    try {

        const newData = new Employees ({Name,Email,MobileNum,Gender,Status,Profile,CompanyName,JobRole})

        await newData.save();

        console.log('POST Request')

        return res.json(await Employees.find());

    }
    catch (err) {

        return res.json(err);
    }
})

//Delete Request 
route.delete('/:id',async(req,res)=>{

    try{

         await Employees.findByIdAndDelete(req.params.id);

         console.log('User Deleted');

         return res.json(await Employees.find());
    }

    catch(err){

        console.log(err.message);
    }
})

//Update data
route.put('/Update/:id',async(req,res)=>{

    const {Name,Email,MobileNum,Gender,Status,Profile,CompanyName,JobRole} = req.body;

    try {

        Employees.findByIdAndUpdate(req.params.id,{Name,Email,MobileNum,Gender,Status,Profile,CompanyName,JobRole},(err,docs)=>{

            if(err)
            {
                console.log(err);
            }
            
        })

        console.log('Update Request')

        return res.json(await Employees.find())

        
    }
    catch (err) {

        console.log(err.message);
    }
})
module.exports = route;