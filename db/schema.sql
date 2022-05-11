DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30)  
PRIMARY KEY(id)
);

CREATE TABLE roles(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),  
salary DECIMAL (8,2) NULL,
department_id INT NULL
PRIMARY KEY(id)
);

CREATE TABLE employee(
employee_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY (employee_id)
);










