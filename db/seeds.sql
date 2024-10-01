INSERT INTO department (name) 
VALUES  ('Human Resources'),
        ('Engineering'),
        ('Maintenance'),
        ('Quality Assuarnce');


INSERT INTO roles (title, salary, department_id) 
VALUES ('HR Manager', 500, 1),
       ('Recruiter', 500, 1),
       ('Software Engineer', 500, 2),
       ('Maintenance Tech', 500, 3),
       ('Quality Assuarnce Lead', 500, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Abby', 'Days', 1, NULL),
('Carl Lee', 'Smith',  3, NULL),
('Alieu', 'Danso', 4, NULL),
('Brian', 'Talbert', 5, NULL),
('Jonathan', 'Jacks', 4, NULL);