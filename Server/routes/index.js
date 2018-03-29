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
var userdefault = {name:'user', password:'user'}
var usererror = {name:'error', password:'error'}
router.use(bodyParser.json());
router.get("/a",function(req, res){

    res.json(userdefault);
    console.log("+")
    /*router.use(require('cookie-parser')(credential.cookieSecret));
    router.use(require('express-session')({
        resave: false,
        saveUninitialized: false,
        secret: credential.cookieSecret
    }));*/
});

router.post("/registration", function(req,res){//регистрация
    console.log(req.body.user.login+"qwere+");
    var user={
        "name": req.body.user.login,
        "password" : req.body.user.password
    }
    let text = fs.readFileSync(path ,"utf8");
    text = text.replace(']',"");
    fs.writeFileSync(path ,text);
    fs.appendFileSync(path ,","+JSON.stringify(user)+"]");
    res.json({registration:true});
});

router.post("/login",urlencodedParser, function(req,res, next){
    let text = fs.readFileSync(path ,"utf8");
    console.log(req.body.user)
    var user = {
        "name":req.body.user.login,
        "password":req.body.user.password
    }
    if(text.search(JSON.stringify(user))!==-1)
    {
        console.log("+");
        res.json(user);
    }
    
    else{
        console.log("неверно!!!");
        res.json(usererror);
    } 
});
router.get("/exit",urlencodedParser, function(req,res){
    console.log("exit");
   res.json({name:'user', password: 'user'}) 
});


module.exports = router;