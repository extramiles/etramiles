
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
 var url = 'mongodb://localhost:27017/automationframework';
 const JSON = require('circular-json');


const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/automationframework',(err,db) =>{
    if(err){
      return console.log(err);
    }
    closure(db);
  });
  }
let response = {
  status: 200,
  message: null,
  data:[]
}

var sendError = (err,res) => {
  response.status = 501;
  response.message = typeof err =="object" ? err.message : err;
  res.status(501).json(response);
}

router.get('/project',(req,res) => {
  connection((db) => {
    //dbs.automation.collection("projects").find({}).toArray(function(err, proje)
   db.collection('projects').find().toArray().then((projects) =>{
      response.data = projects;
      res.json(response);
      console.log(projects);
    });

  });
});
router.post('/tags',(req,res) => {
  connection((db) => {
    console.log("on server :"+req);
    console.log("Request Data: %j", req);

    console.log(JSON.stringify(req, null, 2));
    //dbs.automation.collection("projects").find({}).toArray(function(err, proje)
   db.collection('testcaseTags').find({project:req.body.projectName}).toArray().then((projects) =>{
      response.data = projects;
      res.json(response);
      console.log(JSON.stringify(projects, null, 2));

    });

  });
});

router.post('/testcase',(req,res) => {
  connection((db) => {
    console.log(req.body);
    db.collection("testcases").find({$and: [{"project": req.body.projectName1},{"tag": req.body.testtags1}]},
               {_id:0,tag:0,status:0,collection:0,tcData:0,rowIndex:0,script:0,scriptLang:0,host:0,type:0,afterState:0,project:0,user
    :0,lastModified:0}).toArray().then((testcases) =>{
       response.data = testcases;
       res.json(response);
          console.log(testcases);
                   });
    //dbs.automation.collection("projects").find({}).toArray(function(err, proje)

    });

  });



  /*connection((db) => {
   db.collection('students').find().toArray().then((students) =>{
      response.data = students;
      res.json(response);
    })
console.log("students");
    //response.data = 'students';
  //  res.json(response);
}) */


module.exports = router;
