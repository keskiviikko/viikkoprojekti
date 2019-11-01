var express = require('express');
var router = express.Router();
var path = require('path');

// viittaus palveluun, joka käyttää tietokantaa
var palvelu = require('./controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// /api/users -reitit tarjoavat html:n sijaan JSON:ia
router.get('/api/topics', function(req, res) {
  console.log('/api/users toimii');
  palvelu.getTopics(function(results){
    res.json(results);
  });
});

router.put('/api/topics/:id', function(req, res) {
  palvelu.update(req, function(){
    res.status(200)
    .end();
  });
});

module.exports = router;
