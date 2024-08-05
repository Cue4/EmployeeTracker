INSERT INTO department (name) 
VALUES  ('Human Resources'),
        ('Engineering'),
        ('Maintenance'),
        ('Quality Assuarnce');


INSERT INTO roles (title, department_id) 
VALUES ('HR Manager', 1),
       ('Recruiter', 1),
       ('Software Engineer', 2),
       ('Maintenance Tech', 3),
       ('Quality Assuarnce Lead', 4),


INSERT INTO employees (first_name, last_name, email, phone, role_id, hire_date, salary) VALUES
(1, 'Abby', 'Days', 'abby.days@example.com', '555-0101', 1, '2023-01-15', 75000),
(2, 'Carl Lee', 'Smith', 'carl.smith@example.com', '555-0102', 3, '2022-08-22', 85000),
(3, 'Alieu', 'Danso', 'alieu.danso@example.com', '555-0103', 4, '2024-02-05', 90000),
(4, 'Brian', 'Talbert', 'brian.talbert@example.com', '555-0104', 6, '2023-11-30', 70000),
(5, 'Jonathan', 'Jacks', 'jon.jacks@example.com', '555-0105', 8, '2024-03-01', 75000);


