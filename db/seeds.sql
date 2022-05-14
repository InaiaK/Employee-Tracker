
INSERT INTO department (department_name)
VALUES  ('Engineering'),
        ('Marketing'),
        ('HR'),
        ('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Lead Engineer', 120000, 1),
        ('Jr Engineer', 52000, 1),
        ('Marketing Director', 15000, 2),
        ('Lead HR', 75000, 3),
        ('HR Director', 198000, 3),
        ('Marketing Junior', 50000, 2),
        ('Account Manager', 112000, 4),
        ('Accountant', 95000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Cody', 'Martin', 1, NULL),
        ('Inaia', 'Martin', 2, 1),
        ('Fernando', 'Mattos', 3, NULL),
        ('Jeane', 'Dantas', 4, 3),
        ('Mari', 'Nascimento', 5, 3),
        ('Ana', 'Claudia', 5, NULL),
        ('Agatha', 'Smith', 6, 5),
        ('Cris', 'Ripepi', 7, 6),
        ('Georgia', 'Williams', 8, NULL),
        ('Aline', 'Santos', 8, 7);