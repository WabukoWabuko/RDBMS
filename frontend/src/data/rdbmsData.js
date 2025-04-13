const rdbmsData = [
  // RDBMS Commands (Relational Database Specific)
  {
    title: "SELECT",
    description: "Retrieves specific data from one or more tables. It’s like asking a question about your data, such as 'Which employees are in a department?' You can select columns and filter results.",
    example: `-- Get names and salaries of employees with a salary above 50000\nSELECT first_name, salary FROM employees WHERE salary > 50000;`,
    tags: ["query", "read", "basic", "retrieve"],
    category: "RDBMS"
  },
  {
    title: "INSERT",
    description: "Adds new records to a table, such as adding a new employee to a company database. Ensure column names match values to prevent errors.",
    example: `-- Add a new employee to the employees table\nINSERT INTO employees (first_name, last_name, salary) VALUES ('Alex', 'Brown', 60000);`,
    tags: ["create", "write", "add"],
    category: "RDBMS"
  },
  {
    title: "UPDATE",
    description: "Modifies existing data, such as updating an employee’s salary. Use a WHERE clause to target specific rows and avoid unintended changes.",
    example: `-- Update an employee's salary based on their ID\nUPDATE employees SET salary = 65000 WHERE employee_id = 101;`,
    tags: ["update", "modify", "edit"],
    category: "RDBMS"
  },
  {
    title: "DELETE",
    description: "Removes records from a table, such as deleting a product from an inventory. Use WHERE to specify rows, or you might delete all data.",
    example: `-- Remove an employee by their ID\nDELETE FROM employees WHERE employee_id = 102;`,
    tags: ["delete", "remove", "erase"],
    category: "RDBMS"
  },
  {
    title: "INNER JOIN",
    description: "Combines rows from two tables where a condition matches, such as linking employees to their departments. Only rows with matches in both tables are shown.",
    example: `-- Get employee names and department names\nSELECT e.first_name, d.department_name \nFROM employees e \nINNER JOIN departments d ON e.department_id = d.department_id;`,
    tags: ["join", "combine", "relational", "match"],
    category: "RDBMS"
  },
  {
    title: "LEFT JOIN",
    description: "Retrieves all rows from the left table and matching rows from the right table. Non-matching rows from the right table will show NULL.",
    example: `-- List all employees, including those without a department\nSELECT e.first_name, d.department_name \nFROM employees e \nLEFT JOIN departments d ON e.department_id = d.department_id;`,
    tags: ["join", "left", "relational", "optional"],
    category: "RDBMS"
  },
  {
    title: "RIGHT JOIN",
    description: "Retrieves all rows from the right table and matching rows from the left table. Useful when focusing on the right table, but less common.",
    example: `-- List all departments, including those with no employees\nSELECT e.first_name, d.department_name \nFROM employees e \nRIGHT JOIN departments d ON e.department_id = d.department_id;`,
    tags: ["join", "right", "relational"],
    category: "RDBMS"
  },
  {
    title: "FULL OUTER JOIN",
    description: "Includes all rows from both tables, with NULLs for non-matching rows. Useful for comparing datasets, but not supported by all databases (e.g., MySQL).",
    example: `-- Show all employees and departments, with NULLs for non-matches\nSELECT e.first_name, d.department_name \nFROM employees e \nFULL OUTER JOIN departments d ON e.department_id = d.department_id;`,
    tags: ["join", "full", "relational"],
    category: "RDBMS"
  },
  {
    title: "SELF JOIN",
    description: "Joins a table to itself, useful for hierarchies like finding an employee’s manager within the same table. Use aliases to avoid confusion.",
    example: `-- Find employees and their managers\nSELECT e1.first_name AS employee, e2.first_name AS manager \nFROM employees e1 \nJOIN employees e2 ON e1.manager_id = e2.employee_id;`,
    tags: ["join", "self", "relational", "hierarchy"],
    category: "RDBMS"
  },
  {
    title: "CROSS JOIN",
    description: "Pairs every row from one table with every row from another, creating all possible combinations. Use with caution as it can produce large result sets.",
    example: `-- List all possible employee-department combinations\nSELECT e.first_name, d.department_name \nFROM employees e \nCROSS JOIN departments d;`,
    tags: ["join", "cartesian", "relational"],
    category: "RDBMS"
  },
  {
    title: "GROUP BY",
    description: "Groups rows based on a column, such as calculating total sales per product. Often used with aggregate functions like COUNT or SUM.",
    example: `-- Count employees in each department\nSELECT d.department_name, COUNT(e.employee_id) AS employee_count \nFROM departments d \nLEFT JOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name;`,
    tags: ["aggregate", "group", "summarize", "count"],
    category: "RDBMS"
  },
  {
    title: "WHERE",
    description: "Filters rows based on a condition, such as finding employees with high salaries. It narrows down your data to what’s relevant.",
    example: `-- Find employees with salaries above 60000\nSELECT first_name, salary \nFROM employees \nWHERE salary > 60000;`,
    tags: ["filter", "condition", "restrict"],
    category: "RDBMS"
  },
  {
    title: "HAVING",
    description: "Filters grouped results, such as finding departments with many employees. Use after GROUP BY to refine aggregate data.",
    example: `-- Find departments with more than 5 employees\nSELECT d.department_name, COUNT(e.employee_id) AS employee_count \nFROM departments d \nJOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name \nHAVING COUNT(e.employee_id) > 5;`,
    tags: ["filter", "group", "aggregate", "condition"],
    category: "RDBMS"
  },
  {
    title: "UNION",
    description: "Combines results from two queries, removing duplicates. Useful for merging similar data, such as employee names from different branches.",
    example: `-- Combine employee names from two branches\nSELECT first_name FROM employees WHERE branch = 'HQ' \nUNION \nSELECT first_name FROM employees WHERE branch = 'Branch1';`,
    tags: ["combine", "set", "merge"],
    category: "RDBMS"
  },
  {
    title: "UNION ALL",
    description: "Combines results from two queries, keeping duplicates. It’s faster than UNION as it doesn’t remove duplicates.",
    example: `-- Combine all employee names, including duplicates\nSELECT first_name FROM employees WHERE branch = 'HQ' \nUNION ALL \nSELECT first_name FROM employees WHERE branch = 'Branch1';`,
    tags: ["combine", "set", "merge"],
    category: "RDBMS"
  },
  {
    title: "INTERSECT",
    description: "Finds rows common to two queries, such as employees in both branches. Not supported by all databases (e.g., MySQL).",
    example: `-- Find employees in both branches\nSELECT first_name FROM employees WHERE branch = 'HQ' \nINTERSECT \nSELECT first_name FROM employees WHERE branch = 'Branch1';`,
    tags: ["set", "common", "overlap"],
    category: "RDBMS"
  },
  {
    title: "EXCEPT",
    description: "Finds rows in one query but not another, such as employees only in HQ. Also known as MINUS in some databases.",
    example: `-- Find employees in HQ but not Branch1\nSELECT first_name FROM employees WHERE branch = 'HQ' \nEXCEPT \nSELECT first_name FROM employees WHERE branch = 'Branch1';`,
    tags: ["set", "difference", "exclude"],
    category: "RDBMS"
  },
  {
    title: "COUNT",
    description: "Counts rows or non-null values, such as tallying employees in a department. Use * for all rows or a column for specific counts.",
    example: `-- Count employees with salaries above 50000\nSELECT COUNT(*) AS high_earners \nFROM employees \nWHERE salary > 50000;`,
    tags: ["aggregate", "count", "summarize"],
    category: "RDBMS"
  },
  {
    title: "LIKE",
    description: "Searches for patterns, such as finding employees whose names start with 'B'. Use % for multiple characters and _ for a single character.",
    example: `-- Find employees with names starting with 'B'\nSELECT first_name \nFROM employees \nWHERE first_name LIKE 'B%';`,
    tags: ["filter", "pattern", "search"],
    category: "RDBMS"
  },
  {
    title: "ROW_NUMBER",
    description: "Assigns a unique number to each row, such as ranking employees by salary. Useful for creating leaderboards or numbering results.",
    example: `-- Rank employees by salary\nSELECT first_name, salary, \nROW_NUMBER() OVER (ORDER BY salary DESC) AS position \nFROM employees;`,
    tags: ["window", "ranking", "numbering"],
    category: "RDBMS"
  },
  {
    title: "RANK",
    description: "Assigns ranks to rows, with ties sharing the same rank and leaving gaps. For example, two employees tied for 1st both get rank 1, next gets 3.",
    example: `-- Rank employees by salary with gaps\nSELECT first_name, salary, \nRANK() OVER (ORDER BY salary DESC) AS rank \nFROM employees;`,
    tags: ["window", "ranking", "ties"],
    category: "RDBMS"
  },
  {
    title: "DENSE_RANK",
    description: "Assigns ranks like RANK but without gaps for ties. If two employees tie for 1st, the next gets 2nd, not 3rd.",
    example: `-- Rank employees by salary without gaps\nSELECT first_name, salary, \nDENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank \nFROM employees;`,
    tags: ["window", "ranking", "ties"],
    category: "RDBMS"
  },
  {
    title: "TRUNCATE",
    description: "Removes all data from a table quickly, such as clearing an inventory table. It’s faster than DELETE but cannot be undone without a backup.",
    example: `-- Remove all employees (use with caution!)\nTRUNCATE TABLE employees;`,
    tags: ["delete", "table", "clear"],
    category: "RDBMS"
  },
  {
    title: "CREATE TABLE",
    description: "Defines a new table, such as creating a table for employee records with columns for names and salaries. Specify data types and constraints carefully.",
    example: `-- Create a table for employees\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  first_name VARCHAR(50),\n  salary DECIMAL(10,2)\n);`,
    tags: ["table", "create", "schema", "structure"],
    category: "RDBMS"
  },
  {
    title: "ALTER TABLE",
    description: "Modifies a table’s structure, such as adding a column for employee emails. Ensure existing data aligns with the changes.",
    example: `-- Add an email column to employees\nALTER TABLE employees \nADD email VARCHAR(100);`,
    tags: ["table", "modify", "schema", "structure"],
    category: "RDBMS"
  },
  {
    title: "DROP TABLE",
    description: "Deletes a table and all its data, such as removing an outdated inventory table. Ensure you no longer need the data before proceeding.",
    example: `-- Delete the employees table\nDROP TABLE employees;`,
    tags: ["table", "delete", "schema", "remove"],
    category: "RDBMS"
  },
  {
    title: "PRIMARY KEY",
    description: "Ensures each row has a unique identifier, such as an employee ID. It prevents duplicates and improves search performance.",
    example: `-- Create a table with a primary key\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  first_name VARCHAR(50)\n);`,
    tags: ["constraint", "unique", "schema", "identifier"],
    category: "RDBMS"
  },
  {
    title: "FOREIGN KEY",
    description: "Creates a link between tables, such as connecting employee records to departments. It maintains data consistency across tables.",
    example: `-- Create a departments table linked to employees\nCREATE TABLE employee_depts (\n  record_id INT PRIMARY KEY,\n  employee_id INT,\n  FOREIGN KEY (employee_id) REFERENCES employees(employee_id)\n);`,
    tags: ["constraint", "relational", "schema", "link"],
    category: "RDBMS"
  },
  {
    title: "CHECK CONSTRAINT",
    description: "Enforces rules on data, such as ensuring salaries are positive. It prevents invalid data from being inserted.",
    example: `-- Create a table with a salary check\nCREATE TABLE employees (\n  employee_id INT,\n  salary DECIMAL(10,2),\n  CONSTRAINT chk_salary CHECK (salary >= 0)\n);`,
    tags: ["constraint", "validation", "schema", "rule"],
    category: "RDBMS"
  },
  {
    title: "SUBQUERY",
    description: "Embeds a query within another, such as finding employees in a specific department by first identifying the department ID. Keep subqueries simple for clarity.",
    example: `-- Find employees in the Sales department\nSELECT first_name \nFROM employees \nWHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'Sales');`,
    tags: ["query", "nested", "complex"],
    category: "RDBMS"
  },
  {
    title: "INDEX",
    description: "Improves search performance by organizing data, like an index in a book. Create on columns frequently used in queries.",
    example: `-- Speed up searches by employee name\nCREATE INDEX idx_first_name ON employees (first_name);`,
    tags: ["performance", "index", "schema", "optimize"],
    category: "RDBMS"
  },
  {
    title: "VIEW",
    description: "Creates a virtual table from a query, such as a shortcut for viewing high-earning employees. It simplifies complex queries without storing data.",
    example: `-- Create a view for high-earning employees\nCREATE VIEW top_earners AS \nSELECT first_name, salary \nFROM employees \nWHERE salary > 70000;`,
    tags: ["virtual", "query", "schema", "shortcut"],
    category: "RDBMS"
  },
  {
    title: "DISTINCT",
    description: "Eliminates duplicate rows, such as listing unique department names. Use to avoid redundant data in results.",
    example: `-- Get unique department names\nSELECT DISTINCT department_name \nFROM departments;`,
    tags: ["query", "unique", "deduplicate"],
    category: "RDBMS"
  },
  {
    title: "BETWEEN",
    description: "Filters values within a range, such as finding employees with salaries between 50000 and 70000. It includes the boundary values.",
    example: `-- Find employees with salaries between 50000 and 70000\nSELECT first_name, salary \nFROM employees \nWHERE salary BETWEEN 50000 AND 70000;`,
    tags: ["filter", "range", "condition"],
    category: "RDBMS"
  },
  {
    title: "IN",
    description: "Matches values against a list, such as finding employees in specific departments. It’s a concise alternative to multiple OR conditions.",
    example: `-- Find employees in Sales or Marketing\nSELECT first_name \nFROM employees \nWHERE department_id IN (\n  SELECT department_id \n  FROM departments \n  WHERE department_name IN ('Sales', 'Marketing')\n);`,
    tags: ["filter", "list", "condition"],
    category: "RDBMS"
  },
  {
    title: "SUM",
    description: "Calculates the total of a column, such as summing sales amounts per product. Use with GROUP BY for grouped totals.",
    example: `-- Total salaries per department\nSELECT d.department_name, SUM(e.salary) AS total_salary \nFROM departments d \nJOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name;`,
    tags: ["aggregate", "sum", "summarize"],
    category: "RDBMS"
  },
  {
    title: "AVG",
    description: "Computes the average of a column, such as the average salary in a department. It skips NULL values.",
    example: `-- Average salary per department\nSELECT d.department_name, AVG(e.salary) AS avg_salary \nFROM departments d \nJOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name;`,
    tags: ["aggregate", "average", "summarize"],
    category: "RDBMS"
  },
  {
    title: "MAX",
    description: "Finds the highest value in a column, such as the maximum salary in a department. Useful for identifying peaks.",
    example: `-- Highest salary per department\nSELECT d.department_name, MAX(e.salary) AS top_salary \nFROM departments d \nJOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name;`,
    tags: ["aggregate", "maximum", "summarize"],
    category: "RDBMS"
  },
  {
    title: "MIN",
    description: "Finds the lowest value in a column, such as the minimum salary in a department. Useful for identifying lows.",
    example: `-- Lowest salary per department\nSELECT d.department_name, MIN(e.salary) AS lowest_salary \nFROM departments d \nJOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name;`,
    tags: ["aggregate", "minimum", "summarize"],
    category: "RDBMS"
  },
  {
    title: "TRIGGER",
    description: "Automatically executes a command when an event occurs, such as logging when a new employee is added. It ensures actions happen consistently.",
    example: `-- Log new employees in a history table\nCREATE TRIGGER log_new_employee \nAFTER INSERT ON employees \nFOR EACH ROW \nINSERT INTO employee_history (employee_id, action, timestamp) \nVALUES (NEW.employee_id, 'Added', NOW());`,
    tags: ["automation", "schema", "event"],
    category: "RDBMS"
  },
  {
    title: "STORED PROCEDURE",
    description: "Stores a set of SQL commands for reuse, such as a script to update salaries. It streamlines repetitive tasks and enhances security.",
    example: `-- Create a procedure to update salary\nDELIMITER //\nCREATE PROCEDURE UpdateSalary(IN e_id INT, IN new_salary DECIMAL(10,2))\nBEGIN\n  UPDATE employees SET salary = new_salary WHERE employee_id = e_id;\nEND //\nDELIMITER ;\n-- Call it\nCALL UpdateSalary(101, 75000);`,
    tags: ["automation", "schema", "reusable"],
    category: "RDBMS"
  },
  {
    title: "NOT NULL",
    description: "Ensures a column cannot have NULL values, such as requiring an employee’s name. It enforces data completeness.",
    example: `-- Create a table with a required name\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  first_name VARCHAR(50) NOT NULL\n);`,
    tags: ["constraint", "validation", "schema"],
    category: "RDBMS"
  },
  {
    title: "UNIQUE",
    description: "Ensures all values in a column are distinct, such as unique email addresses for employees. It prevents duplicates.",
    example: `-- Create a table with unique emails\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE\n);`,
    tags: ["constraint", "unique", "schema"],
    category: "RDBMS"
  },
  {
    title: "DEFAULT",
    description: "Sets a default value for a column if none is provided, such as defaulting a salary to 0. It simplifies data entry.",
    example: `-- Create a table with a default salary\nCREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  salary DECIMAL(10,2) DEFAULT 0\n);`,
    tags: ["constraint", "default", "schema"],
    category: "RDBMS"
  },
  {
    title: "PARTITION BY",
    description: "Divides rows into groups for window functions, such as calculating running totals within each department. It’s used with functions like ROW_NUMBER.",
    example: `-- Rank employees within each department\nSELECT first_name, salary, \nROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dept_rank \nFROM employees;`,
    tags: ["window", "group", "partition"],
    category: "RDBMS"
  },
  {
    title: "WITH (Common Table Expression)",
    description: "Creates a temporary result set for use in a query, such as simplifying complex joins. It improves readability for nested queries.",
    example: `-- Use a CTE to find high-earning employees\nWITH HighEarners AS (\n  SELECT first_name, salary \n  FROM employees \n  WHERE salary > 70000\n)\nSELECT first_name FROM HighEarners WHERE salary < 80000;`,
    tags: ["query", "temporary", "complex"],
    category: "RDBMS"
  },
  {
    title: "MERGE",
    description: "Performs insert, update, or delete operations in one statement, such as syncing employee data. Also known as UPSERT in some databases.",
    example: `-- Sync employee data with a source table\nMERGE INTO employees AS target \nUSING employee_updates AS source \nON target.employee_id = source.employee_id \nWHEN MATCHED THEN \n  UPDATE SET salary = source.salary \nWHEN NOT MATCHED THEN \n  INSERT (employee_id, first_name, salary) \n  VALUES (source.employee_id, source.first_name, source.salary);`,
    tags: ["upsert", "sync", "complex"],
    category: "RDBMS"
  },
  {
    title: "IS NULL",
    description: "Checks for NULL values in a column, such as finding employees without a department. Use it to handle missing data.",
    example: `-- Find employees with no department\nSELECT first_name \nFROM employees \nWHERE department_id IS NULL;`,
    tags: ["filter", "null", "condition"],
    category: "RDBMS"
  },
  {
    title: "IS NOT NULL",
    description: "Checks for non-NULL values, such as finding employees assigned to a department. It ensures data exists in a column.",
    example: `-- Find employees with a department\nSELECT first_name \nFROM employees \nWHERE department_id IS NOT NULL;`,
    tags: ["filter", "null", "condition"],
    category: "RDBMS"
  },
  {
    title: "EXISTS",
    description: "Tests if a subquery returns any rows, such as checking if an employee is in a department. It’s efficient for conditional checks.",
    example: `-- Find departments with at least one employee\nSELECT department_name \nFROM departments d \nWHERE EXISTS (\n  SELECT 1 \n  FROM employees e \n  WHERE e.department_id = d.department_id\n);`,
    tags: ["query", "subquery", "condition"],
    category: "RDBMS"
  },
  {
    title: "NOT EXISTS",
    description: "Tests if a subquery returns no rows, such as finding departments with no employees. It’s the opposite of EXISTS.",
    example: `-- Find departments with no employees\nSELECT department_name \nFROM departments d \nWHERE NOT EXISTS (\n  SELECT 1 \n  FROM employees e \n  WHERE e.department_id = d.department_id\n);`,
    tags: ["query", "subquery", "condition"],
    category: "RDBMS"
  },
  {
    title: "LAG",
    description: "Accesses the previous row’s value in a result set, such as comparing an employee’s salary to the previous one. Useful for trends.",
    example: `-- Compare salaries with the previous employee\nSELECT first_name, salary, \nLAG(salary) OVER (ORDER BY salary) AS previous_salary \nFROM employees;`,
    tags: ["window", "previous", "comparison"],
    category: "RDBMS"
  },
  {
    title: "LEAD",
    description: "Accesses the next row’s value in a result set, such as comparing an employee’s salary to the next one. Useful for forecasting.",
    example: `-- Compare salaries with the next employee\nSELECT first_name, salary, \nLEAD(salary) OVER (ORDER BY salary) AS next_salary \nFROM employees;`,
    tags: ["window", "next", "comparison"],
    category: "RDBMS"
  },
  {
    title: "FIRST_VALUE",
    description: "Returns the first value in a window, such as the highest salary in a department. Useful for comparisons within groups.",
    example: `-- Get the highest salary in each department\nSELECT first_name, salary, \nFIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS top_salary \nFROM employees;`,
    tags: ["window", "first", "comparison"],
    category: "RDBMS"
  },
  {
    title: "LAST_VALUE",
    description: "Returns the last value in a window, such as the lowest salary in a department. Requires careful framing to include all rows.",
    example: `-- Get the lowest salary in each department\nSELECT first_name, salary, \nLAST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS lowest_salary \nFROM employees;`,
    tags: ["window", "last", "comparison"],
    category: "RDBMS"
  },
  {
    title: "CREATE INDEX",
    description: "Creates an index on multiple columns, such as speeding up searches on employee names and departments. Improves query performance.",
    example: `-- Create a composite index\nCREATE INDEX idx_emp_dept ON employees (first_name, department_id);`,
    tags: ["performance", "index", "schema"],
    category: "RDBMS"
  },
  {
    title: "DROP INDEX",
    description: "Removes an index, such as dropping an unused index to save space. Be cautious as it may slow down queries.",
    example: `-- Drop an index\nDROP INDEX idx_first_name ON employees;`,
    tags: ["performance", "index", "schema"],
    category: "RDBMS"
  },
  {
    title: "CREATE VIEW",
    description: "Creates a virtual table with updatable properties, such as a view of active employees. Some views can be updated directly.",
    example: `-- Create an updatable view\nCREATE VIEW active_employees AS \nSELECT employee_id, first_name, salary \nFROM employees \nWHERE status = 'Active';\n-- Update through the view\nUPDATE active_employees SET salary = 65000 WHERE employee_id = 101;`,
    tags: ["virtual", "query", "schema", "updatable"],
    category: "RDBMS"
  },
  {
    title: "CREATE FUNCTION",
    description: "Defines a custom function to reuse logic, such as calculating a bonus based on salary. Enhances modularity in queries.",
    example: `-- Create a function to calculate bonus\nDELIMITER //\nCREATE FUNCTION CalculateBonus(salary DECIMAL(10,2)) RETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n  RETURN salary * 0.1;\nEND //\nDELIMITER ;\n-- Use it\nSELECT first_name, CalculateBonus(salary) AS bonus \nFROM employees;`,
    tags: ["function", "custom", "reusable"],
    category: "RDBMS"
  },
  {
    title: "OVER",
    description: "Defines a window for window functions, such as calculating a running total of salaries. Used with functions like SUM or ROW_NUMBER.",
    example: `-- Calculate a running total of salaries\nSELECT first_name, salary, \nSUM(salary) OVER (ORDER BY employee_id) AS running_total \nFROM employees;`,
    tags: ["window", "aggregate", "calculation"],
    category: "RDBMS"
  },
  {
    title: "WITH RECURSIVE",
    description: "Handles recursive queries, such as finding an employee’s reporting chain. Useful for hierarchical data.",
    example: `-- Find employee reporting chain\nWITH RECURSIVE emp_hierarchy AS (\n  SELECT employee_id, first_name, manager_id, 1 AS level \n  FROM employees \n  WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.employee_id, e.first_name, e.manager_id, eh.level + 1 \n  FROM employees e \n  JOIN emp_hierarchy eh ON e.manager_id = eh.employee_id\n)\nSELECT first_name, level \nFROM emp_hierarchy;`,
    tags: ["recursive", "hierarchy", "complex"],
    category: "RDBMS"
  },

  // NonRDBMS Commands (Useful for Non-Relational or Document-Like Operations in SQL)
  {
    title: "STRING_AGG",
    description: "Concatenates values into a single string, such as listing all employees in a department. Useful for summarizing data in one field.",
    example: `-- List all employees in each department as a comma-separated string\nSELECT d.department_name, STRING_AGG(e.first_name, ', ') AS employee_list \nFROM departments d \nJOIN employees e ON d.department_id = e.department_id \nGROUP BY d.department_name;`,
    tags: ["aggregate", "concatenate", "summarize"],
    category: "NonRDBMS"
  },
  {
    title: "CONCAT",
    description: "Joins strings together, such as combining first and last names. Useful for creating full names or custom labels.",
    example: `-- Combine first and last names\nSELECT CONCAT(first_name, ' ', last_name) AS full_name \nFROM employees;`,
    tags: ["transform", "string", "combine"],
    category: "NonRDBMS"
  },
  {
    title: "TRIM",
    description: "Removes leading and trailing spaces from a string, such as cleaning up department names. Ensures data consistency.",
    example: `-- Remove spaces from department names\nSELECT TRIM(department_name) AS clean_name \nFROM departments;`,
    tags: ["transform", "string", "clean"],
    category: "NonRDBMS"
  },
  {
    title: "LOWER",
    description: "Converts a string to lowercase, such as standardizing employee names. Useful for consistent searches or comparisons.",
    example: `-- Convert names to lowercase\nSELECT LOWER(first_name) AS name \nFROM employees;`,
    tags: ["transform", "string", "format"],
    category: "NonRDBMS"
  },
  {
    title: "UPPER",
    description: "Converts a string to uppercase, such as formatting department names. Helps with consistent data display.",
    example: `-- Convert department names to uppercase\nSELECT UPPER(department_name) AS dept_name \nFROM departments;`,
    tags: ["transform", "string", "format"],
    category: "NonRDBMS"
  },

  // General SQL Commands (Applicable to Both RDBMS and NonRDBMS)
  {
    title: "ORDER BY",
    description: "Sorts results, such as listing employees by salary from highest to lowest. Use ASC for ascending (default) or DESC for descending.",
    example: `-- List employees by salary, highest first\nSELECT first_name, salary \nFROM employees \nORDER BY salary DESC;`,
    tags: ["sort", "order", "arrange"],
    category: "GeneralSQL"
  },
  {
    title: "LIMIT",
    description: "Restricts the number of rows returned, such as showing only the top 5 employees. Useful for testing or ranking queries.",
    example: `-- Get top 5 employees by salary\nSELECT first_name, salary \nFROM employees \nORDER BY salary DESC \nLIMIT 5;`,
    tags: ["limit", "pagination", "restrict"],
    category: "GeneralSQL"
  },
  {
    title: "OFFSET",
    description: "Skips a specified number of rows, useful for pagination, such as showing the next 5 employees after the top 5. Pair with LIMIT.",
    example: `-- Get employees 6-10 by salary\nSELECT first_name, salary \nFROM employees \nORDER BY salary DESC \nLIMIT 5 OFFSET 5;`,
    tags: ["offset", "pagination", "skip"],
    category: "GeneralSQL"
  },
  {
    title: "CASE",
    description: "Adds conditional logic, such as categorizing employees as 'Senior' or 'Junior' based on salary. It’s a way to transform data on the fly.",
    example: `-- Categorize employees based on salary\nSELECT first_name, \nCASE \n  WHEN salary >= 70000 THEN 'Senior' \n  ELSE 'Junior' \nEND AS level \nFROM employees;`,
    tags: ["conditional", "logic", "transform"],
    category: "GeneralSQL"
  },
  {
    title: "COMMIT",
    description: "Permanently saves changes, such as finalizing a salary update. Use in transactions to confirm your updates.",
    example: `-- Save changes after updating salaries\nUPDATE employees SET salary = 70000 WHERE employee_id = 101;\nCOMMIT;`,
    tags: ["transaction", "save", "confirm"],
    category: "GeneralSQL"
  },
  {
    title: "ROLLBACK",
    description: "Reverts changes in a transaction, such as undoing a mistaken salary update. Use before COMMIT to cancel changes.",
    example: `-- Undo a salary update\nUPDATE employees SET salary = 0 WHERE employee_id = 101;\nROLLBACK;`,
    tags: ["transaction", "undo", "revert"],
    category: "GeneralSQL"
  },
  {
    title: "EXPLAIN",
    description: "Analyzes how a query executes, helping identify performance bottlenecks. It’s a tool for optimizing database queries.",
    example: `-- Analyze query performance\nEXPLAIN SELECT first_name \nFROM employees \nWHERE salary > 60000;`,
    tags: ["performance", "query", "optimization", "plan"],
    category: "GeneralSQL"
  },
  {
    title: "GRANT",
    description: "Assigns permissions to users, such as allowing a manager to view employee records. Be precise to maintain database security.",
    example: `-- Allow a user to read employee data\nGRANT SELECT ON employees TO manager_user;`,
    tags: ["security", "permissions", "access"],
    category: "GeneralSQL"
  },
  {
    title: "REVOKE",
    description: "Removes permissions from users, such as preventing a user from modifying records. Use to enforce security policies.",
    example: `-- Remove a user’s access to employee data\nREVOKE SELECT ON employees FROM manager_user;`,
    tags: ["security", "permissions", "restrict"],
    category: "GeneralSQL"
  },
  {
    title: "COALESCE",
    description: "Returns the first non-NULL value from a list, such as displaying a default salary if none is set. Useful for handling missing data.",
    example: `-- Show salaries or 'Not Set' if NULL\nSELECT first_name, COALESCE(salary, 'Not Set') AS salary_status \nFROM employees;`,
    tags: ["transform", "null", "conditional"],
    category: "GeneralSQL"
  },
  {
    title: "CURRENT_DATE",
    description: "Returns the current date, useful for tracking when records are added or updated. It helps with timestamping data.",
    example: `-- Add an employee with the current hire date\nINSERT INTO employees (first_name, hire_date) \nVALUES ('Jane', CURRENT_DATE);`,
    tags: ["date", "timestamp", "function"],
    category: "GeneralSQL"
  },
  {
    title: "CURRENT_TIMESTAMP",
    description: "Returns the current date and time, such as logging the exact moment a record is created. It’s more precise than CURRENT_DATE.",
    example: `-- Log an action with the current timestamp\nINSERT INTO employee_log (employee_id, action, log_time) \nVALUES (101, 'Updated', CURRENT_TIMESTAMP);`,
    tags: ["date", "timestamp", "function"],
    category: "GeneralSQL"
  },
  {
    title: "CAST",
    description: "Converts data from one type to another, such as turning a number into a string. It helps with data compatibility in queries.",
    example: `-- Convert salary to a string for display\nSELECT first_name, CAST(salary AS VARCHAR) AS salary_text \nFROM employees;`,
    tags: ["transform", "convert", "type"],
    category: "GeneralSQL"
  },
  {
    title: "NULLIF",
    description: "Returns NULL if two values are equal, otherwise returns the first value. Useful for avoiding division by zero or marking invalid data.",
    example: `-- Avoid division by zero in a calculation\nSELECT first_name, salary / NULLIF(hours_worked, 0) AS rate \nFROM employees;`,
    tags: ["transform", "null", "conditional"],
    category: "GeneralSQL"
  },
  {
    title: "ROUND",
    description: "Rounds a numeric value to a specified number of decimal places, such as rounding salaries. Useful for cleaner data presentation.",
    example: `-- Round salaries to 2 decimal places\nSELECT first_name, ROUND(salary, 2) AS rounded_salary \nFROM employees;`,
    tags: ["transform", "numeric", "format"],
    category: "GeneralSQL"
  },
  {
    title: "LENGTH",
    description: "Returns the length of a string, such as counting characters in an employee’s name. Useful for validation or analysis.",
    example: `-- Get the length of employee names\nSELECT first_name, LENGTH(first_name) AS name_length \nFROM employees;`,
    tags: ["transform", "string", "measure"],
    category: "GeneralSQL"
  },
  {
    title: "DATEADD",
    description: "Adds a time interval to a date, such as calculating a future review date. Useful for scheduling or forecasting.",
    example: `-- Add 6 months to hire dates\nSELECT first_name, DATEADD(MONTH, 6, hire_date) AS review_date \nFROM employees;`,
    tags: ["date", "calculate", "function"],
    category: "GeneralSQL"
  },
  {
    title: "DATEDIFF",
    description: "Calculates the difference between two dates, such as years of service for employees. Helps with time-based analysis.",
    example: `-- Calculate years of service\nSELECT first_name, DATEDIFF(YEAR, hire_date, CURRENT_DATE) AS years_of_service \nFROM employees;`,
    tags: ["date", "calculate", "function"],
    category: "GeneralSQL"
  },
  {
    title: "BEGIN TRANSACTION",
    description: "Starts a transaction to group multiple commands, such as batch updates. Ensures all changes succeed or none are applied.",
    example: `-- Start a transaction for salary updates\nBEGIN TRANSACTION;\nUPDATE employees SET salary = salary * 1.1 WHERE department_id = 1;\nUPDATE employees SET salary = salary * 1.05 WHERE department_id = 2;\nCOMMIT;`,
    tags: ["transaction", "batch", "control"],
    category: "GeneralSQL"
  },
  {
    title: "SAVEPOINT",
    description: "Sets a point within a transaction to roll back to, such as saving progress during complex updates. Allows partial rollbacks.",
    example: `-- Use a savepoint for partial rollback\nBEGIN TRANSACTION;\nUPDATE employees SET salary = 60000 WHERE employee_id = 101;\nSAVEPOINT after_first_update;\nUPDATE employees SET salary = 70000 WHERE employee_id = 102;\nROLLBACK TO SAVEPOINT after_first_update;\nCOMMIT;`,
    tags: ["transaction", "rollback", "control"],
    category: "GeneralSQL"
  }
];

export default rdbmsData;
