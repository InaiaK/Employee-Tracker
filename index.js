const express = require('express')
const mysql = require('mysql2')


const PORT = process.env.PORT || 3000;
express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to mySQL
db.connect(err => {
    if (err) {
        throw err
    } console.log('mySQL connected')
})


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123942'
},
console.log('Connected to the employeetracker_db database.')
);


//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE employeetracker';
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send('DATABASE created');
    });
});





app.listen('3000', () => {
    console.log('Server on port 3000')
})




