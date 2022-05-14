DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name  VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),  
salary DECIMAL (10,2) NULL,
department_id INT NULL
);

CREATE TABLE employee(
employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT NULL,
manager_id INT NULL
);










