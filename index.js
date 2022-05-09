const express = require('express')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'no'
})

// Connect to mySQL
db.connect(err =>{
    if(err){
        throw err
    } console.log('mySQL connected')
})

const app = express ()

//Create DB
app.get('/createdb', (req,res) =>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err) => {
        if (err){
            throw err;
        }
        res.send('DATABASE created');
    });
});