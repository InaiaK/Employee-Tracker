const express = require('express')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:''
})

// Connect to mySQL
db.connect(err =>{
    if(err){
        throw err
    } console.log('mySQL connected')
})

const app = express ()

//Create DB
app.get()