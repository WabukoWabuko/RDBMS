# SELECT
- retrieves data from one or more tables
```sql
SELECT column1, column2, ... 
FROM table_name
WHERE condition;
```

# INSERT
- adds new data to a table
```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

# UPDATE
- modifies existing data in a table
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
 ```

# DELETE
- removes data from a table
```sql
DELETE FROM table_name
WHERE condition;
```

# JOIN
- combines data from two or more tables

  1. ## INNER JOIN
- returns only the rows from both tables that match the specified join condition.
```sql
SELECT column1, column2, ...
FROM table1
INNER JOIN table2
ON table1.column = table2.column;
```

  2. ## LEFT JOIN
- returns all the rows from the left table and the matching rows from the right table, or NULL if there is no match.
```sql
SELECT column1, column2, ...
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;
```

  3. ## RIGHT JOIN
- returns all the rows from the right table and the matching rows from the left table, or NULL if there is no match.
```sql
SELECT column1, column2, ...
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;
```

  4. ## FULL OUTER JOIN
- returns all the rows from both tables, along with NULL values for any rows that do not have a match in the other table.
```sql
SELECT column1, column2, ...
FROM table1
FULL OUTER JOIN table2
ON table1.column = table2.column;
```

  5. ## SELF JOIN
- a join where a table is joined with itself.<br>
- joins a table with itself using an alias, usually to find related data within the same table.
- Suppose we have a table named <b>employees</b> with columns <b>employee_id, name,</b> and <b>manager_id</b>. The <b>manager_id</b> column refers to the <b>employee_id</b> of the manager of the employee.
To retrieve the name of each <b>employee</b> and their manager's name, we can use a <b>self join</b> on the <b>employees</b> table:
```sql
SELECT e.name as employee_name, m.name as manager_name
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;
```

 6. ## FULL OUTER JOIN
- returns all rows from both tables, and matches rows from both tables when they are equal<br>
- Combines both Left Outer Join and Right Outer Join
```sql
SELECT *
FROM table1
LEFT JOIN table2 ON table1.column = table2.column
UNION
SELECT *
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column
WHERE table1.column IS NULL;
```

 7. ## LEFT OUTER JOIN
- returns all rows from the left table and the matching rows from the right table, and NULL values for the non-matching rows in the right table
```sql
SELECT *
FROM table1
LEFT JOIN table2 ON table1.column = table2.column;
```

 8. ## RIGHT OUTER JOIN
- returns all rows from the right table and the matching rows from the left table, and NULL values for the non-matching rows in the left table
```sql
SELECT *
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column;
```

 9. ## CROSS JOIN 
- returns the Cartesian product of the two tables, that is, all possible combinations of rows between the two tables.
```sql
SELECT *
FROM table1
CROSS JOIN table2;
```

# GROUP BY
- groups rows with the same values into summary rows
```sql
SELECT column1, SUM(column2), AVG(column3)
FROM table_name
GROUP BY column1;
```

# ORDER BY
- sorts the results of a query in ascending or descending order
```sql
SELECT column1, column2, column3
FROM table_name
ORDER BY column1 ASC, column2 DESC;
```

# DISTINCT
- returns unique values of a column
```sql
SELECT DISTINCT column_name
FROM table_name;
```

# WHERE
- filters data based on a condition
```sql
SELECT column1, column2, column3
FROM table_name
WHERE column1 = 'value';
```

# HAVING
- filters data based on a condition, but after GROUP BY has been applied
```sql
SELECT column1, SUM(column2) AS total
FROM table_name
GROUP BY column1
HAVING total > 100;
```

# LIMIT
- limits the number of rows returned in a query result
```sql
SELECT column1, column2, column3
FROM table_name
ORDER BY column1 DESC
LIMIT 10;
```

# OFFSET
- skips a specified number of rows in a query result
```sql
SELECT column1, column2, column3
FROM table_name
ORDER BY column1 DESC
LIMIT 10 OFFSET 5;
```

# UNION
- combines the results of two or more SELECT statements into a single result set
```sql
SELECT column1, column2, column3
FROM table1
UNION
SELECT column1, column2, column3
FROM table2;
```

# INTERSECT
- returns only the common rows between two SELECT statements.<br>
- Not supported by MySQl but can be simulated by the combinational use of <b>INNER JOIN</b> and <b>DISTINCT</b> commands
```sql
SELECT column1, column2, column3
FROM table1
INNER JOIN table2 ON table1.column1 = table2.column1
INNER JOIN table3 ON table1.column1 = table3.column1
WHERE table1.column2 = 'value1'
AND table2.column3 = 'value2'
AND table3.column4 = 'value3'
```

# EXCEPT
- returns only the rows that are present in the first SELECT statement but not in the second SELECT statement.<br>
- Not supported by MySQL but can be simulated by the use of <b>NOT IN</b> and <b>SELECT</b> commands
```sql
SELECT column1, column2, column3
FROM table1
WHERE column1 NOT IN (
    SELECT column1
    FROM table2
)
```

# EXISTS
- checks if a subquery returns any rows and returns a Boolean value
```sql
SELECT *
FROM table1
WHERE EXISTS (
    SELECT *
    FROM table2
    WHERE table2.column1 = table1.column1
);
```

# NOT EXISTS
- checks if a subquery returns no rows and returns a Boolean value
```sql
SELECT *
FROM table1
WHERE NOT EXISTS (
    SELECT *
    FROM table2
    WHERE table2.column1 = table1.column1
);
```

# COUNT
- returns the number of rows or non-null values in a column
```sql
SELECT COUNT(*)
FROM table1
WHERE column1 = 'value';
```

# IN 
- checks if a value matches any value in a list or subquery
```sql
SELECT column1, column2
FROM table1
WHERE column1 IN ('value1', 'value2', 'value3');
```

# NOT IN
- checks if a value does not match any value in a list or subquery
```sql
SELECT column1, column2
FROM table1
WHERE column1 NOT IN ('value1', 'value2', 'value3');
```

# BETWEEN
- checks if a value is within a range of values
```sql
SELECT column1, column2
FROM table1
WHERE column1 BETWEEN 10 AND 20;
```

# NOT BETWEEN
- checks if a value is not within a range of values
```sql
SELECT column1, column2
FROM table1
WHERE column1 NOT BETWEEN 10 AND 20;
```

# LIKE
- checks if a value matches a pattern using wildcard characters
```sql
SELECT column1, column2
FROM table1
WHERE column1 LIKE 'a%';
```

# NOT LIKE
- checks if a value does not match a pattern using wildcard characters
```sql
SELECT column1, column2
FROM table1
WHERE column1 NOT LIKE 'a%';
```

# CASE
- performs conditional logic in a query
```sql
SELECT column1, column2,
CASE
  WHEN column1 < 10 THEN 'Less than 10'
  WHEN column1 >= 10 AND column1 < 20 THEN 'Between 10 and 20'
  ELSE 'Greater than or equal to 20'
END AS range
FROM table1;
```

# CAST
- converts data from one data type to another
```sql
SELECT column1, CAST(column2 AS CHAR) AS column2_char
FROM table1;
```

# DISTINCT ON
- returns distinct rows based on a specific column.<br>
- Distinct keyword is used in elimination of duplicate rows from a result set.<br>
- Instead <b>GROUP BY</b> clause is used.
```sql
SELECT customer_id, MAX(order_date) AS latest_order_date
FROM orders
GROUP BY customer_id;
```

# WINDOW functions
- performs calculations on a subset of rows (window) in a result set, such as RANK, DENSE_RANK, ROW_NUMBER, LAG, LEAD, and so on.

 1. ## ROW NUMBER().<br>
- assigns a unique sequential number to each row in the result set.
```sql
SELECT ROW_NUMBER() OVER() AS row_num, employee_name, salary
FROM employee;
```

 2. ## RANK().<br>
- returns the rank of each row within the result set based on a specified column or expression.
 ```sql
 SELECT employee_name, salary, RANK() OVER(ORDER BY salary DESC) AS rank
FROM employee;
```
 
 3. ## DENSE RANK().<br>
- similar to RANK(), but assigns the same rank to rows with equal values
 ```sql
 SELECT employee_name, salary, DENSE_RANK() OVER(ORDER BY salary DESC) AS dense_rank
FROM employee;
```
 
 4. ## NTILE().<br>
- divides the result set into a specified number of groups (or buckets) and assigns a bucket number to each row.
 ```sql
 SELECT employee_name, salary, NTILE(4) OVER(ORDER BY salary DESC) AS quartile
FROM employee;
```

 5. ## LAG().<br>
- retrieves the value of a specified column from the previous row within a result set, based on a specified ordering.
 ```sql
 SELECT employee_name, salary, LAG(salary, 1) OVER(ORDER BY salary DESC) AS prev_salary
FROM employee;
```

 6. ## LEAD().<br>
- retrieves the value of a specified column from the next row within a result set, based on a specified ordering.
 ```sql
 SELECT employee_name, salary, LEAD(salary, 1) OVER(ORDER BY salary DESC) AS next_salary
FROM employee;
```

 7. ## AVG 
- calculates the average value of a column
```sql
SELECT AVG(column1)
FROM table1;
```

 8. ## SUM
- calculates the sum of values in a column
```sql
SELECT SUM(column1)
FROM table1;
```

 9. ## MAX
- returns the maximum value in a column
```sql
SELECT MAX(column1)
FROM table1;
```

 10. ## MIN
- returns the minimum value in a column
```sql
SELECT MIN(column1)
FROM table1;
```

# TRUNCATE 
- deletes all rows from a table without logging each individual deletion, making it faster than DELETE for large tables.

# COMMIT
- saves all the changes made to the database in the current transaction.

# ROLLBACK
- undoes all the changes made in the current transaction and restores the database to its previous state.

# SAVEPOINT
- sets a savepoint within a transaction, allowing a partial rollback if needed.

# RELEASE SAVEPOINT
- releases a savepoint previously defined in a transaction.

# LOCK
- locks rows or tables to prevent other transactions from modifying the same data.

# UNLOCK
- releases locks previously set in a transaction.

# INDEX
- creates an index on one or more columns to improve query performance.

# VIEW
- creates a virtual table based on the result set of a SELECT statement, which can be used like a regular table.

# CASCADE
- specifies that changes made to a parent record should propagate to its child records in a related table.

# RESTRICT
- specifies that changes made to a parent record should not propagate to its child records in a related table.

# OUTER REFERENCES
- allows a subquery to reference a column from an outer query.

# MERGE
- allows you to perform INSERT, UPDATE, and DELETE operations on a target table based on the results of a source table or subquery.

# WITH clause
- allows you to define a subquery block that can be referenced multiple times within a larger query, improving code readability and performance.

# COALESCE
- returns the first non-null value in a list of values.

# NVL
- similar to COALESCE, but specifically used in Oracle databases.

# GREATEST
- returns the greatest value in a list of values.

# LEAST
- returns the smallest value in a list of values.

# ROW_NUMBER
- assigns a unique number to each row within a result set, which can be used for pagination or filtering purposes.

# FETCH
- used in conjunction with OFFSET to retrieve a specific number of rows from a query result starting at a specific position.

# TOP
- used in Microsoft SQL Server to retrieve a specific number of rows from a query result.

# UNION ALL
- combines the results of two or more SELECT statements into a single result set, including duplicate rows.

# INTERSECT
- returns only the common rows between two or more SELECT statements.

# EXCEPT
- returns only the rows that are unique to the first SELECT statement and not present in any of the subsequent SELECT statements.

# GROUP BY
- groups the result set by one or more columns, allowing you to perform aggregate functions like SUM, AVG, MAX, MIN, and COUNT on each group.

# HAVING
- used in conjunction with GROUP BY to filter the result set based on aggregate function values.

# CASE
- performs conditional logic in a query and returns different values based on the condition.

# ROWS BETWEEN
- allows you to specify a range of rows within a result set for a window function to operate on.

# RANK
- assigns a rank to each row within a result set based on the specified criteria.

# DENSE_RANK
- similar to RANK, but assigns a unique rank to each distinct value in the result set.

# NTILE
- divides the result set into a specified number of buckets, assigning each row to a bucket based on its order in the result set.

# CROSS APPLY
- applies a table-valued function to each row of a table and returns the combined result set.

# OUTER APPLY
- similar to CROSS APPLY, but also returns rows from the left table that do not match any rows in the right table.

# OFFSET
- used in conjunction with FETCH to specify the starting position for retrieving rows from a query result.

# TRIGGER
- a special type of stored procedure that automatically executes in response to specific events, such as INSERT, UPDATE, or DELETE statements.

# CONSTRAINT
- defines rules that must be followed for data to be entered into a table, such as a NOT NULL constraint or a FOREIGN KEY constraint.

# INDEXED VIEW
- a view that has been materialized and stored in the database as an indexed table, improving query performance.

# TEMPORARY TABLE
- a table that is created and used only for the duration of a single session or transaction.

# CROSS DATABASE QUERY
- allows you to query tables and views across multiple databases within the same RDBMS instance.

# JOINS WITH USING
- allows you to specify the column(s) that the two tables have in common, rather than using the ON clause to join based on a condition.

# IN
- used to specify a list of values to match against a column in a subquery or WHERE clause.

# EXISTS
- used to check if a subquery returns any rows, and can be used to filter the results of an outer query based on the existence of related data.

# NOT EXISTS
- used to filter the results of an outer query based on the absence of related data.

# ANY/SOME
- used to compare a single value to a list of values returned by a subquery.

# ALL
- used to check if all values returned by a subquery meet a certain condition.

# FULL OUTER JOIN
- returns all rows from both tables in the join, including those that do not match any rows in the other table.

# CROSS JOIN
- returns the Cartesian product of two tables, which is all possible combinations of rows from both tables.

# MERGE JOIN
- used when joining two large sorted datasets, and can be more efficient than other join types in certain cases.

# HASH JOIN
- used when joining two large unsorted datasets, and can be more efficient than other join types in certain cases.

# PIVOT
- rotates a table-valued expression by turning the unique values from one column into multiple columns in the output.

# UNPIVOT
- performs the opposite of PIVOT, and transforms columns into rows.

# CHECK constraint
- defines a condition that must be met for data to be entered into a column, such as a range of allowed values or a regular expression pattern.

# EXPLICIT TRANSACTION
- allows you to group one or more statements together as a single transaction, which can be committed or rolled back as a unit of work.

# ISNULL
- returns the first non-null expression in a list of expressions.

# CONCAT
- concatenates two or more strings into a single string.

# STRING_AGG
- aggregates a set of strings into a single string using a specified separator.

# JSON_VALUE
- extracts a scalar value from a JSON string based on a specified path.

# JSON_QUERY
- returns a JSON fragment from a JSON string based on a specified path.

# JSON_MODIFY
- updates a JSON string based on a specified path.

# STRING_SPLIT
- splits a string into a table of substrings based on a specified separator.

# IIF
- performs conditional logic in a query and returns one of two values based on the condition.

# TRY/CATCH
- used to handle errors that occur during the execution of a query, and allows you to gracefully handle and recover from those errors.

# Common Table Expressions (CTE)
- provides a way to define a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.

# WITH clause
- used to define a CTE.

# MERGE
- used to perform INSERT, UPDATE, and DELETE operations on a target table based on the results of a join with a source table.

# OFFSET/FETCH
- used to limit the number of rows returned by a query, and can be used in conjunction with ORDER BY to return a specific subset of rows.

# STRING_ESCAPE
- escapes special characters in a string, such as single quotes or double quotes, so that they can be used in a SQL statement.

# CONCAT_WS
- concatenates two or more strings into a single string using a specified separator, and automatically excludes null values.

# LEAD
- returns the value of a specified column from the next row in the result set.

# LAG
- returns the value of a specified column from the previous row in the result set.

# COALESCE
- returns the first non-null value in a list of expressions.

# DATEADD
- adds a specified interval to a date or time value.

# DATEDIFF
- returns the difference between two date or time values, in a specified interval.

# DATEPART
- extracts a specified part of a date or time value, such as the year, month, or day.

# DATENAME
- returns the name of a specified part of a date or time value, such as the name of the month or day of the week.

# GETDATE
- returns the current date and time from the system clock.

# SYSDATETIME
- returns the current date and time from the system clock, with high precision.

# CAST
- converts a value from one data type to another.

# CONVERT
- converts a value from one data type to another, and allows you to specify a format.

# TOP
- used to limit the number of rows returned by a query to a specified number.

# TRUNCATE
- removes all rows from a table without logging each individual row.

# REPLACE
- replaces all occurrences of a specified substring with another substring in a string.

# STUFF
- replaces a specified length of characters in a string with another string.

# FORMAT
- formats a value as a string using a specified format.

# QUOTENAME
- adds square brackets around a string to make it a valid identifier in SQL.

# TRY_CONVERT
- converts a value from one data type to another, and returns NULL if the conversion fails.

# TRY_PARSE
- converts a string to a specified data type, and returns NULL if the conversion fails.

# GROUPING SETS
- used to group data by multiple combinations of columns in a single query.

# RANK
- assigns a rank to each row in a result set based on the values in one or more columns.

# DENSE_RANK
- assigns a rank to each row in a result set based on the values in one or more columns, and assigns the same rank to rows with the same values.

# ROW_NUMBER
- assigns a unique row number to each row in a result set.

# PARTITION BY
- used with ranking functions to partition a result set into subsets based on the values in one or more columns.

# CROSS APPLY
- used to apply a table-valued function to each row of a table expression.

# OUTER APPLY
- similar to CROSS APPLY, but also includes rows from the left table expression that do not match any rows in the right table expression.

# PIVOT
- used to transform rows into columns, based on the values in a specified column.

# UNPIVOT
- used to transform columns into rows, based on the values in a specified column.

# CUMULATIVE DISTRIBUTION FUNCTION (CDF)
- calculates the cumulative distribution of a specified column in a table.

# CORRELATED SUBQUERY
- a subquery that references a column from the outer query.

# HAVING
- used to filter the results of a query based on a specified condition.

# ROWLOCK
- used to lock a single row in a table, to prevent concurrent access by multiple transactions.

# TABLOCK
- used to lock an entire table, to prevent concurrent access by multiple transactions.

# UPDATE
- used to update one or more rows in a table, based on a specified condition.

# DELETE
- used to delete one or more rows in a table, based on a specified condition.

# INDEX
- used to create an index on one or more columns in a table, to improve query performance.

# UNIQUE INDEX
- similar to an index, but also enforces a unique constraint on the specified columns.

# CLUSTERED INDEX
- an index that determines the physical order of the data in a table, based on the values in the specified columns.

# NONCLUSTERED INDEX
- an index that does not determine the physical order of the data in a table, but instead provides a separate data structure for faster lookup of values in the 
specified columns.
