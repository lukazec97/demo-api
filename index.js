const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connection');

var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM timesheets";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.post('/api/get/:date', (req, res) => {
    const date = req?.params?.date
    const formatedDate = date?.split('-').reverse().join('-');
    const sqlSelect = `SELECT * FROM timesheets WHERE date=?`;
    db.query(sqlSelect, formatedDate, (err, result) => {
        res.send(result);
    });
});

app.post('/api/insert', (req, res) => {
    const title = req.body.title;
    const hours = req.body.hours;
    const date = req.body.date;
    const formatedDate = date?.split('/').reverse().join('-');
    const sqlInsert = "INSERT INTO timesheets (title,hours,date) VALUES (?, ?, ?)";

    db.query(sqlInsert, [title, hours, formatedDate], (err, result) => {
        res.send(result);

    });
});

app.listen(3005);