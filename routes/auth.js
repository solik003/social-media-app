const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//register
router.post("/register", async (req, res) => {
    // const user = await new User({
    //     username: "solomiya",
    //     email: "solomiya@gmail.com",
    //     password: "b7oN34SzQF0AW14S"
    // });
    // await user.save();
    // res.send("ok");
    
    try {
        //generate password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        // save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err);
    }
});
//login
router.post("/login",async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password.trim(), user.password.trim());
        console.log(req.body.password);
        console.log(user.password);
        console.log(validPassword);
        //!validPassword && res.status(400).json("wrong password");
        if (validPassword) {
            console.log("password isn't ok")
            return res.status(400).json("Wrong password");
        }
        
        res.status(200).json(user);
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;