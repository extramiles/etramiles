var express = require('express');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/extramile';
const JSON = require('circular-json');

const connection = closure => {
  return MongoClient.connect(
    'mongodb://localhost:27017/extramile',
    (err, db) => {
      if (err) {
        return console.log(err);
      } else {
        console.log('connected to data base');
      }
      closure(db);
    }
  );
};
let response = {
  status: 200,
  message: null,
  data: []
};

var sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

router.get('/testDataService', (req, res) => {
  connection(db => {
    //dbs.automation.collection("projects").find({}).toArray(function(err, proje)
    db.collection('users')
      .find({})
      .toArray()
      .then(users => {
        // response.data = users;
        //.json(response);
        console.log(users);
      });
  });
  console.log('we are at server');
});

router.post('/registration', (req, res) => {
  console.log('we are at server', req.body.userid);
  connection(db => {
    db.collection('users').insert({
      userid: req.body.userid,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    });
  });
});

router.post('/login', (req, res) => {
  connection(db => {
    db.collection('users')
      .find({ userid: req.body.userid })
      .toArray()
      .then(users => {
        console.log(users[0].password);
        if (bcrypt.compareSync(req.body.password, users[0].password)) {
          var token = jwt.sign({ userid: users[0].userid }, 's3cr3t', {
            expiresIn: 3600
          });
          response.data = { success: true, token: token };
          res.json(response);
          console.log('user is authenticated', token);
        } else {
          console.log('wrong password');
        }
        console.log(users);
      });
  });
});

router.post('/testcases', (req, res) => {
  console.log(req.body);
  connection(db => {
    db.collection('testcases')
      .find(
        { $and: [{ project: req.body.project }, { tag: req.body.tag }] },
        {
          _id: 0,
          tag: 0,
          status: 0,
          collection: 0,
          tcData: 0,
          rowIndex: 0,
          script: 0,
          scriptLang: 0,
          host: 0,
          type: 0,
          afterState: 0,
          project: 0,
          user: 0,
          lastModified: 0
        }
      )
      .toArray()
      .then(projects => {
        response.data = projects;
        res.json(response);
        //  console.log(JSON.stringify(projects, null, 2));
      });
  });
});

module.exports = router;
