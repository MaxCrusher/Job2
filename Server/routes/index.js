var express = require('express');
var app = express();
var router = require('express').Router();
var session = require('cookie-parser');
var bodyParser = require("body-parser");
var fs = require('fs');
var hash = require('js-hash-code');
var credential = require('../credential');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var path = '/home/developer1/Рабочий стол/Example/Web-project/Server/loginPassword.json';

router.get("/",function(req, res){

    /*router.use(require('cookie-parser')(credential.cookieSecret));
    router.use(require('express-session')({
        resave: false,
        saveUninitialized: false,
        secret: credential.cookieSecret
    }));*/
})
router.post("/registation",urlencodedParser, function(req,res){//регистрация
    app.use(bodyParser.urlencoded({ extended: false }));
    //router.use(require("body-parser").json());
    console.log(req);
    console.log(req.body.login+"qwere+");
    var user={
        "name": req.body.login,
        "password" : req.body.password
    }

    let text = fs.readFileSync(path ,"utf8");
    text = text.replace(']',"");
    fs.writeFileSync(path ,text);
    fs.appendFileSync(path ,","+JSON.stringify(user)+"]");
    //res.redirect("http://localhost:3000");
});
router.post("/login",urlencodedParser, function(req,res, next){
    let text = fs.readFileSync(path ,"utf8");
    var user = {
        "name":req.body.login,
        "password":hash(req.body.password)
    }
    console.log(req.body);
    if(text.search(JSON.stringify(user))!==-1)
    {
        console.log("+");
        res.redirect("http://localhost:3000/game");
    }
    
    else{
        console.log("неверно!!!");
        res.redirect("http://localhost:3000");
    } 
});


module.exports = router;