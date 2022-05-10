const express = require('express')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123942'
})

// Connect to mySQL
db.connect(err => {
    if (err) {
        throw err
    } console.log('mySQL connected')
})

const app = express()



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


// Create table
app.get

app.listen('3000', () => {
    console.log('Server on port 3000')
})





const createManager = async () => {
    const managerQuestions = [
        {
            type: "input",
            message: "Enter manager name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter your office number:",
            name: "officeNumber",
            validate: validateInput,
        },

        {
            type: "input",
            message: "Enter work email:",
            name: "email",
            validate: validateInput,

        },
    ];

    const{ name,id,email,officeNumber} = await inquirer.prompt(managerQuestions);
    const manager = new Manager(name,id,email,officeNumber);
    employeeDB.push(manager); 
};