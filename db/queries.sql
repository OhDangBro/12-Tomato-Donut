--SELECT ALL DEPARTMENTS--
SELECT * FROM department;

-- SELECT only names from departments--
SELECT name FROM department;

-- SELECT ALL ROLES -- 
SELECT * FROM roles;

--SELECT ALL EMPLOYEES -- 
SELECT * FROM employee;

-- INSERT 'value' into departments
INSERT INTO department(name)
VALUES ('Fish'); 
-- ^ Inserts the value of fish into the table 'department'

--INSERT 'value' into roles
INSERT INTO roles (title, salary, department_id)
VALUES
('Fish Cleaner', 90000.00, 4);
--^ Inserts the values into 'roles'

 -- INSERT 'value' into 'employee'
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Laura', 'Laurens', 4, 3);


-- HOW TO UPDATE AN EMPLOYEE role_id -- 
 UPDATE employee
    SET role_id = 2
    WHERE id = 3;


