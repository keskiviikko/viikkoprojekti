/* kaikki tietokantaa käyttävä logiikka on täällä,
eristetään reititin/reitittimet ja
jätetään vain niiden oma toiminnallisuus niihin */

// otetaan pg-moduuli käyttöön
const Pool = require('pg').Pool;
// yhdistämisparametrit toisessa moduulissa
const config = require('./config');
// valmiita luomaan allas
const allas = new Pool(config.connectionOptions);

function getTopics(callback) {
    // haetaan yhteys altaasta
    allas.connect((err, client) => {
        if (err) throw err;
        // luodaan kysely
        client.query('select * from topics', (err, data) => {
            if (err) throw err;
            client.release();
            callback(data.rows);
        });
    });
}

function update(req, callback) {
    allas.connect((err, client) => {
        if(err) throw err;
        client.query('UPDATE topics SET nimi = $1, email=$2, kaupunki=$3 WHERE id=$4',
        [req.body.nimi, req.body.email, req.body.kaupunki, parseInt(req.params.id)],
        (err, data) => {
            if(err) throw err;
            client.release();
            callback();
        });
    });
}

module.exports = { getTopics, update };