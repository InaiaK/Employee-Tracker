
INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Marketing'),
        ('HR'),
        ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES  ('Lead Engineer', 120000, 1),
        ('Jr Engineer', 52000, 1),
        ('Marketing Director', 15000, 2),
        ('Lead HR', 75000, 3),
        ('HR Director', 198000, 3),
        ('Marketing Junior', 50000, 2),
        ('Account Manager', 112000, 4),
        ('Accountant', 95000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Alice', 'DeBoer', 1, NULL),
        ('Gabriel', 'DeBoer', 2, 1),
        ('Dean', 'Winchester', 3, NULL),
        ('Sammy', 'Winchester', 4, 3),
        ('Mary', 'Winchester', 5, 3),
        ('Adam', 'Demamp', 5, NULL),
        ('Anders', 'Homevich', 6, 5),
        ('Blake', 'Henderson', 7, 6),
        ('Kyle', 'Nuvacheck', 8, NULL),
        ('Chuck', 'Bartowski', 8, 7);