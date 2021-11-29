const serverPort = 3000, webDir="../materiaali";

const express = require('express')
const db = require('../db/dbconfig')

const app = express();

app.use(express.static(webDir));


app.get("/api/pelit", (_req, res) => {
    db.query('select * from pelit', (err, result) => {
    if (err)
    console.log(err);
    else
    res.json(result.rows)
})

})

app.listen(serverPort);
console.log('Serveri on päällä, portti:'+serverPort);
console.log('Yhteydessä: '+webDir);


