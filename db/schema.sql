DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department(
id INT NOT NULL PRIMARY KEY,
name: VARCHAR(30) to hold department name
);

CREATE TABLE roles(
id INT NOT NULL PRIMARY KEY,
title VARCHAR(30) to hold role title,
salary DECIMAL to hold role salary ,
department_id INT to hold reference to department role belongs to
employee
);

CREATE TABLE employee(
id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(30) to hold employee first name,
last_name VARCHAR(30) to hold employee last name,
role_id INT to hold reference to employee role,
manager_id INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
);










