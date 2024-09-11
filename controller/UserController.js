let user= require("../models/UserModel.js");

const UserController={
    saveUser:async function (req, res, next) {
        try {
            const userData = req.body;
            const promise = await user.create(userData);
            res.status(200).json(promise);
        }catch (err){
            console.error("save user error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },


    getUsers :async function (req, res, next) {
        const userList =await user.find();
        res.status(200).json(userList);
    },

    testingDocker :async function (req, res, next) {
        res.json('test completed');
    },
   
    findUser:async function (req,res,next){
        try {
            const UserId = req.params.id;
         const result= await user.find({email:UserId})
            res.status(200).json(result);
        }catch (err){
            console.error("find user by id error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },

    loginUser:async function (req,res,next){
        const { email, password } = req.body;

        try {
          
          const use = await user.findOne({ email, password });
      
          if (use) {
            res.json({ authenticated: true });
          } else {
            res.json({ authenticated: false });
          }
        } catch (error) {
          console.error('Error finding user:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    },


    updateUser:async function (req,res,next){
      
        let userId=req.params.id;
        const userdata=req.body;
    
       
        const update=await user.findByIdAndUpdate(userId,userdata).then(()=>{
            res.status(200).send({status: 'user update'});
        }).catch((err)=>{
            console.log(err)
            res.status(500).send({status: 'user update faild'});
        })
    
    },


    deleteuser:async function (req,res,next){


        let userId = req.params.id;  
        await user.findByIdAndDelete(userId).then(() => {
            res.status(200).send({status : "Record deleted"});
    
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status : "Error Deleting user" , error: err.message});
        })
    }


   
}
module.exports=UserController