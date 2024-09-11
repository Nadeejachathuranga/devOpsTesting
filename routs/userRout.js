const router=require('express').Router();
let product= require("../models/UserModel.js");
const UserController = require("../controller/UserController");

router.post("/save",UserController.saveUser);
router.get("/Userlogin",UserController.loginUser);
router.get('/', UserController.getUsers);
router.get('/testing', UserController.testingDocker);
router.get("/find/:id",UserController.findUser);
router.put("/update/:id",UserController.updateUser);
router.delete("/delete/:id",UserController.deleteuser);

module.exports=router