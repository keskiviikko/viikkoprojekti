var express = require('express');
var router = express.Router();

// viittaus palveluun, joka käyttää tietokantaa
var palvelu = require('./controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

// /api/topics -reitit tarjoavat html:n sijaan JSON:ia
router.get('/api/topics', function (req, res) {
  console.log('/api/topics toimii');
  palvelu.getTopics(function (results) {
    res.json(results);
  });
});

router.get('/api/topics/:id', function (req, res) {
  console.log('/api/topics/:id toimii');
  palvelu.getATopic(req, function (results) {
    console.log(results);
    if (results.length == 0) {
      res.json('Topic ID Does Not Exist');
    } else {
      res.json(results);
    }
  });
});

router.put('/api/topics/:id', function (req, res) {
  palvelu.update(req, function () {
    res.status(200)
      .end();
  });
});

module.exports = router;
