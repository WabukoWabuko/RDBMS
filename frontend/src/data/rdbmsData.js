const rdbmsData = [
  {
    title: "SELECT",
    description: "Retrieves data from one or more tables",
    example: `SELECT column1, column2 FROM table_name WHERE condition;`,
    tags: ["query", "read", "basic"]
  },
  {
    title: "INSERT",
    description: "Adds new data to a table",
    example: `INSERT INTO table_name (column1, column2) VALUES (value1, value2);`,
    tags: ["create", "write"]
  },
  {
    title: "UPDATE",
    description: "Modifies existing data in a table",
    example: `UPDATE table_name SET column1 = value1 WHERE condition;`,
    tags: ["update", "modify"]
  },
  {
    title: "DELETE",
    description: "Removes data from a table",
    example: `DELETE FROM table_name WHERE condition;`,
    tags: ["delete", "remove"]
  },
  {
    title: "INNER JOIN",
    description: "Returns rows from both tables where the join condition is met",
    example: `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.fk_id;`,
    tags: ["join", "combine", "relational"]
  },
  {
    title: "LEFT JOIN",
    description: "Returns all rows from the left table and matching rows from the right table, or NULL if no match",
    example: `SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;`,
    tags: ["join", "left", "relational"]
  },
  {
    title: "RIGHT JOIN",
    description: "Returns all rows from the right table and matching rows from the left table, or NULL if no match",
    example: `SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;`,
    tags: ["join", "right", "relational"]
  },
  {
    title: "FULL OUTER JOIN",
    description: "Returns all rows from both tables, with NULLs for non-matching rows",
    example: `SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.column = table2.column;`,
    tags: ["join", "full", "relational"]
  },
  {
    title: "SELF JOIN",
    description: "Joins a table with itself to find related data",
    example: `SELECT e.name AS employee, m.name AS manager FROM employees e JOIN employees m ON e.manager_id = m.employee_id;`,
    tags: ["join", "self", "relational"]
  },
  {
    title: "CROSS JOIN",
    description: "Returns the Cartesian product of two tables (all possible row combinations)",
    example: `SELECT * FROM table1 CROSS JOIN table2;`,
    tags: ["join", "cartesian", "relational"]
  },
  {
    title: "GROUP BY",
    description: "Groups rows with the same values into summary rows",
    example: `SELECT department, COUNT(*) FROM employees GROUP BY department;`,
    tags: ["aggregate", "group", "summarize"]
  },
  {
    title: "ORDER BY",
    description: "Sorts the result set in ascending or descending order",
    example: `SELECT * FROM employees ORDER BY salary DESC;`,
    tags: ["sort", "order"]
  },
  {
    title: "WHERE",
    description: "Filters records that meet certain conditions",
    example: `SELECT * FROM employees WHERE salary > 50000;`,
    tags: ["filter", "condition"]
  },
  {
    title: "HAVING",
    description: "Filters grouped data based on a condition",
    example: `SELECT department, SUM(salary) AS total FROM employees GROUP BY department HAVING total > 100000;`,
    tags: ["filter", "group", "aggregate"]
  },
  {
    title: "LIMIT",
    description: "Limits the number of rows returned in a query result",
    example: `SELECT * FROM employees ORDER BY salary DESC LIMIT 10;`,
    tags: ["limit", "pagination"]
  },
  {
    title: "OFFSET",
    description: "Skips a specified number of rows in a query result",
    example: `SELECT * FROM employees ORDER BY salary DESC LIMIT 10 OFFSET 5;`,
    tags: ["offset", "pagination"]
  },
  {
    title: "UNION",
    description: "Combines the results of two or more SELECT statements, removing duplicates",
    example: `SELECT column1 FROM table1 UNION SELECT column1 FROM table2;`,
    tags: ["combine", "set"]
  },
  {
    title: "UNION ALL",
    description: "Combines the results of two or more SELECT statements, including duplicates",
    example: `SELECT column1 FROM table1 UNION ALL SELECT column1 FROM table2;`,
    tags: ["combine", "set"]
  },
  {
    title: "INTERSECT",
    description: "Returns common rows between two SELECT statements",
    example: `SELECT column1 FROM table1 INTERSECT SELECT column1 FROM table2;`,
    tags: ["set", "common"]
  },
  {
    title: "EXCEPT",
    description: "Returns rows from the first SELECT statement not present in the second",
    example: `SELECT column1 FROM table1 EXCEPT SELECT column1 FROM table2;`,
    tags: ["set", "difference"]
  },
  {
    title: "COUNT",
    description: "Returns the number of rows or non-null values in a column",
    example: `SELECT COUNT(*) FROM employees WHERE department = 'IT';`,
    tags: ["aggregate", "count"]
  },
  {
    title: "LIKE",
    description: "Checks if a value matches a pattern using wildcards",
    example: `SELECT * FROM employees WHERE name LIKE 'A%';`,
    tags: ["filter", "pattern"]
  },
  {
    title: "CASE",
    description: "Performs conditional logic in a query",
    example: `SELECT name, CASE WHEN salary < 50000 THEN 'Low' ELSE 'High' END AS salary_range FROM employees;`,
    tags: ["conditional", "logic"]
  },
  {
    title: "ROW_NUMBER",
    description: "Assigns a unique sequential number to each row",
    example: `SELECT ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num, name, salary FROM employees;`,
    tags: ["window", "ranking"]
  },
  {
    title: "RANK",
    description: "Assigns a rank to each row based on a specified column, with gaps for ties",
    example: `SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rank FROM employees;`,
    tags: ["window", "ranking"]
  },
  {
    title: "DENSE_RANK",
    description: "Assigns a rank to each row, without gaps for ties",
    example: `SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank FROM employees;`,
    tags: ["window", "ranking"]
  },
  {
    title: "TRUNCATE",
    description: "Deletes all rows from a table without logging individual deletions",
    example: `TRUNCATE TABLE table_name;`,
    tags: ["delete", "table"]
  },
  {
    title: "COMMIT",
    description: "Saves all changes made in the current transaction",
    example: `COMMIT;`,
    tags: ["transaction", "save"]
  },
  {
    title: "ROLLBACK",
    description: "Undoes all changes made in the current transaction",
    example: `ROLLBACK;`,
    tags: ["transaction", "undo"]
  },
  {
    title: "CREATE TABLE",
    description: "Defines a new table with specified columns and constraints",
    example: `CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50), salary DECIMAL(10,2));`,
    tags: ["table", "create", "schema"]
  },
  {
    title: "ALTER TABLE",
    description: "Modifies an existing table's structure",
    example: `ALTER TABLE employees ADD department VARCHAR(50);`,
    tags: ["table", "modify", "schema"]
  },
  {
    title: "DROP TABLE",
    description: "Deletes an entire table and its data",
    example: `DROP TABLE employees;`,
    tags: ["table", "delete", "schema"]
  },
  {
    title: "PRIMARY KEY",
    description: "Ensures unique, non-null values for a column or set of columns",
    example: `CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(50));`,
    tags: ["constraint", "unique", "schema"]
  },
  {
    title: "FOREIGN KEY",
    description: "Establishes a relationship between two tables",
    example: `CREATE TABLE orders (order_id INT, employee_id INT, FOREIGN KEY (employee_id) REFERENCES employees(id));`,
    tags: ["constraint", "relational", "schema"]
  },
  {
    title: "CHECK CONSTRAINT",
    description: "Ensures data meets a specific condition",
    example: `CREATE TABLE employees (id INT, salary DECIMAL(10,2), CONSTRAINT chk_salary CHECK (salary > 0));`,
    tags: ["constraint", "validation", "schema"]
  },
  {
    title: "SUBQUERY",
    description: "A query nested within another query",
    example: `SELECT name FROM employees WHERE department_id = (SELECT id FROM departments WHERE name = 'IT');`,
    tags: ["query", "nested"]
  },
  {
    title: "EXPLAIN",
    description: "Shows the execution plan of a query for performance analysis",
    example: `EXPLAIN SELECT * FROM employees WHERE salary > 50000;`,
    tags: ["performance", "query", "optimization"]
  },
  {
    title: "GRANT",
    description: "Assigns permissions to users or roles",
    example: `GRANT SELECT, INSERT ON employees TO user_name;`,
    tags: ["security", "permissions"]
  },
  {
    title: "REVOKE",
    description: "Removes permissions from users or roles",
    example: `REVOKE SELECT ON employees FROM user_name;`,
    tags: ["security", "permissions"]
  },
  {
    title: "INDEX",
    description: "Creates an index to improve query performance",
    example: `CREATE INDEX idx_name ON employees (name);`,
    tags: ["performance", "index", "schema"]
  },
  {
    title: "VIEW",
    description: "Creates a virtual table based on a SELECT query",
    example: `CREATE VIEW high_earners AS SELECT name, salary FROM employees WHERE salary > 100000;`,
    tags: ["virtual", "query", "schema"]
  }
];

export default rdbmsData;
