const User = require("../models/User.model");

const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

router.get("/users", (req, res, next) => {
    User.find()
    .then(allUsers => {
        res.json(allUsers)
    })
    .catch(err => console.log("All user error: ", err))
});

router.get("/users/:userId", (req,res,next) => {
    const {userId} = req.params;

    User.findById(userId)
    .populate("basket rentedProducts pastRented")
    .then(foundUser => {
        res.json(foundUser)
    })
    .catch(err => console.log("A single user profile error: ", err))
})

router.put("/users/:userId", (req,res,next) => {
    const {userId} = req.params;

    User.findByIdAndUpdate(userId, req.body, { new: true })
    .then(updatedUser => {
        res.json(updatedUser)
    })
    .catch(err => console.log("A user update error: ", err))
})

router.delete("/user/:userId", (req,res,next) => {
    const {userId} = req.params;
    User.findByIdAndRemove(userId)
    .then(response => {
        res.json(response)
    })
    .catch(err => console.log("A single user profile error: ", err))
})





module.exports = router;
