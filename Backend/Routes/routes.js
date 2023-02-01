const { response } = require("express");
const express = require("express")
const User = require("../Models/userModel");
const Consumer = require("../Models/consumerModel");

require("../Db/connection");


const router = express.Router();




router.post('/register' , (req , res)=>{
   const {name , age , nickName} = req.body;

   if(!name || !age || !nickName)
   {
      return res.status(422).json({message : "please fill the all fields"});
   }

   User.findOne({nickName : nickName}).then((response)=>{
            if(response){
              console.log(response);
                return res
                  .status(422)
                  .json({ message: "nickName already exixts" });
            }

          const user = new User({name , age , nickName })  ;
          user
            .save()
            .then(() => {
              res.status(201).json({ message: "registerd successfully" });
            })
            .catch((err) => {
              res.status(500).json({ error: "not registered" });
            });
   })
})

router.post('/signin' , async (req , res)=>{
     
    const {name , nickName} = req.body;

    try{
        if( !name || !nickName){
            return res.status(422).json({message : "fill the both fields"});
        }

       const userSingin =  await User.findOne({nickName : nickName});

       console.log(userSingin);

       if(!userSingin)
       {
        res.json({message : "nickName is not registered.. please register first"});
       }
       else{
        res.json({message : " signin successfully"});
       }

    }catch(err){
        console.log(err);
    }

})

router.post('/registerConsumer' , async (req , res) =>{
      const {consumerId , consumerName} = req.body;

      try{
           
        const consumer = new Consumer ({consumerId , consumerName});
        const registered = consumer.save();

        if(registered)
        {
            res.json({message : "consumer registered successfully"})
        }
        else{
           res.json({ message: "consumer not registered " });
        }

      }catch(err){
        console.log(err);
      }
})




module.exports = router;