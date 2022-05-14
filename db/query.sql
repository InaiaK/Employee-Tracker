select * from employee;
select * from department;
select * from roles;

select e.employee_id, concat(e.first_name,' ', e.last_name) AS 'EmployeeName', r.title,concat(m.first_name,' ', m.last_name) AS "ManagerName"
FROM employee e left join roles r on r.id = e.role_id left join employee m on e.manager_id = m.employee_id;
