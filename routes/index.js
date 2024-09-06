var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
const passport = require('passport');

// responssible for userLogin
const localStrategy = require('passport-local');
passport.authenticate(new localStrategy(userModel.authenticate()));


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register", function (req, res) {

  
  // const userData = new userModel({
  //   username: req.body.username,
  //   email: req.body.email,
  //   fullName: req.body.fullName,
  // })

  // Consice and shorter form of above code
  const { username, email, fullname } = req.body;
  const userData = new userModel({ username, email, fullname });


  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
})
module.exports = router;
