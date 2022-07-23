INSERT INTO department (name)
VALUES
  ('DOG'),
  ('CAT'),
  ('BIRD');
  

INSERT INTO roles (title, salary, department_id)
VALUES
('DOG GROOMER', 100000.00, 1),
('CAT WALKER', 150000.00, 2),
('BIRD WALKER', 200000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sam', 'Samuels', 1, NULL), 
('Mike', 'Michaels', 2, 1),
('Rob', 'Roberts', 3, NULL), 
('Smith', 'Smithinson', 3, 3), 
('Alice', 'Alison', 1, 1);
  