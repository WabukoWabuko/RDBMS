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


SELECT *
FROM table1
LEFT JOIN table2 ON table1.column = table2.column
UNION
SELECT *
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column
WHERE table1.column IS NULL;
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

 6. ## LEFT OUTER JOIN
- returns all rows from the left table and the matching rows from the right table, and NULL values for the non-matching rows in the right table
```sql
SELECT *
FROM table1
LEFT JOIN table2 ON table1.column = table2.column;
```

 7. ## RIGHT OUTER JOIN
- returns all rows from the right table and the matching rows from the left table, and NULL values for the non-matching rows in the left table
```sql
SELECT *
FROM table1
RIGHT JOIN table2 ON table1.column = table2.column;
```

 8. ## CROSS JOIN 
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

 1. ## <i>ROW NUMBER()</i>.<br>
- assigns a unique sequential number to each row in the result set.
```sql
SELECT ROW_NUMBER() OVER() AS row_num, employee_name, salary
FROM employee;
```

 2. ## <i>RANK()</i>.<br>
- returns the rank of each row within the result set based on a specified column or expression.
 ```sql
 SELECT employee_name, salary, RANK() OVER(ORDER BY salary DESC) AS rank
FROM employee;
```
 
 3. ## <i>DENSE RANK()</i>.<br>
- similar to RANK(), but assigns the same rank to rows with equal values
 ```sql
 SELECT employee_name, salary, DENSE_RANK() OVER(ORDER BY salary DESC) AS dense_rank
FROM employee;
```
 
 4. ## <i>NTILE()</i>.<br>
- divides the result set into a specified number of groups (or buckets) and assigns a bucket number to each row.
 ```sql
 SELECT employee_name, salary, NTILE(4) OVER(ORDER BY salary DESC) AS quartile
FROM employee;
```

 5. ## <i>LAG()</i>.<br>
- retrieves the value of a specified column from the previous row within a result set, based on a specified ordering.
 ```sql
 SELECT employee_name, salary, LAG(salary, 1) OVER(ORDER BY salary DESC) AS prev_salary
FROM employee;
```

 6. ## <i>LEAD()</i>.<br>
- retrieves the value of a specified column from the next row within a result set, based on a specified ordering.
 ```sql
 SELECT employee_name, salary, LEAD(salary, 1) OVER(ORDER BY salary DESC) AS next_salary
FROM employee;
```

 7. ## <i>AVG</i> 
- calculates the average value of a column
```sql
SELECT AVG(column1)
FROM table1;
```

 8. ## <i>SUM</i>
- calculates the sum of values in a column
```sql
SELECT SUM(column1)
FROM table1;
```

 9. ## <i>MAX</i>
- returns the maximum value in a column
```sql
SELECT MAX(column1)
FROM table1;
```

 10. ## <i>MIN</i>
- returns the minimum value in a column
```sql
SELECT MIN(column1)
FROM table1;
```

# TRUNCATE 
- deletes all rows from a table without logging each individual deletion, making it faster than DELETE for large tables.
```sql
TRUNCATE TABLE table_name;
```

# COMMIT
- saves all the changes made to the database in the current transaction.
```sql
COMMIT;
```

# ROLLBACK
- undoes all the changes made in the current transaction and restores the database to its previous state.
```sql
ROLLBACK;
ROLLBACK TO savepoint_name;
```

# SAVEPOINT
- sets a savepoint within a transaction, allowing a partial rollback if needed.
```sql
SAVEPOINT savepoint_name;
```

# RELEASE SAVEPOINT
- releases a savepoint previously defined in a transaction.
```sql
RELEASE SAVEPOINT savepoint_name;
```

# LOCK
- locks rows or tables to prevent other transactions from modifying the same data.<br>
- READ: This lock type is used to prevent other sessions from modifying the locked table while the current session is reading from it. Other sessions can still read from the table.
- WRITE: This lock type is used to prevent all other sessions from reading from or modifying the locked table while the current session is performing some operation on it.
```sql
LOCK TABLES table_name [AS alias_name] lock_type [, table_name [AS alias_name] lock_type] ...


LOCK TABLES
    table_name [AS alias] lock_type,
    ...
```

# UNLOCK
- releases locks previously set in a transaction.
```sql
UNLOCK TABLES;
```

# INDEX
- creates an index on one or more columns to improve query performance.
```sql
CREATE [UNIQUE] INDEX index_name
ON table_name (column1, column2, ...);
```

# VIEW
- creates a virtual table based on the result set of a SELECT statement, which can be used like a regular table.
```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table1
WHERE condition;
```

# CASCADE
- specifies that changes made to a parent record should propagate to its child records in a related table.
```sql
FOREIGN KEY (column_name) REFERENCES table_name(referenced_column_name)
ON UPDATE CASCADE
ON DELETE CASCADE
```

# RESTRICT
- specifies that changes made to a parent record should not propagate to its child records in a related table.
```sql
FOREIGN KEY (column_name) REFERENCES table_name(referenced_column_name)
ON UPDATE RESTRICT
ON DELETE RESTRICT
```

# SET NULL
- When a row in the referenced table is updated or deleted, the corresponding rows in the referencing table will have the foreign key columns set to NULL
```sql
FOREIGN KEY (column_name) REFERENCES table_name(referenced_column_name)
ON UPDATE SET NULL
ON DELETE SET NULL
```

# NO ACTION
- This is the default behavior. When a row in the referenced table is updated or deleted, no action is taken on the referencing table.
```sql
FOREIGN KEY (column_name) REFERENCES table_name(referenced_column_name)
ON UPDATE NO ACTION
ON DELETE NO ACTION
```

# OUTER REFERENCES
- allows a subquery to reference a column from an outer query.
```sql
SELECT customer_name
FROM customers
WHERE EXISTS (
  SELECT *
  FROM orders
  WHERE customers.customer_id = orders.customer_id
  AND order_date = '2022-02-28'
);
```

# MERGE
- allows you to perform INSERT, UPDATE, and DELETE operations on a target table based on the results of a source table or subquery.
```sql
MERGE INTO target_table USING source_table ON condition
WHEN MATCHED THEN
  UPDATE SET column1 = value1, column2 = value2, ...
WHEN NOT MATCHED THEN
  INSERT (column1, column2, ...) VALUES (value1, value2, ...)
```

# WITH clause
- allows you to define a subquery block that can be referenced multiple times within a larger query, improving code readability and performance.
```sql
WITH cte_name (column1, column2, ...) AS (
  SELECT column1, column2, ...
  FROM source_table
  WHERE condition
)
SELECT column1, column2, ...
FROM cte_name
WHERE condition
```

# COALESCE
- returns the first non-null value in a list of values.
```sql
SELECT COALESCE(NULL, NULL, 'hello', 'world');
```

# NVL
- similar to COALESCE, but specifically used in Oracle databases.
```sql
SELECT NVL(NULL, 'hello');
```

# GREATEST
- returns the greatest value in a list of values.
```sql
SELECT GREATEST(10, 20, 30, 40);


SELECT GREATEST(col1, col2, col3) FROM my_table;
SELECT LEAST(col1, col2, col3) FROM my_table;
```

# LEAST
- returns the smallest value in a list of values.
```sql
SELECT LEAST(10, 20, 30, 40);


SELECT GREATEST(col1, col2, col3) FROM my_table;
SELECT LEAST(col1, col2, col3) FROM my_table;
```

# ROW_NUMBER
- assigns a unique number to each row within a result set, which can be used for pagination or filtering purposes.
```sql
SELECT ROW_NUMBER() OVER (ORDER BY column1) as row_num, column1, column2
FROM table_name;
```

# FETCH
- used in conjunction with OFFSET to retrieve a specific number of rows from a query result starting at a specific position.
```sql
SELECT column1, column2
FROM table_name
ORDER BY column1
OFFSET 10 ROWS
FETCH NEXT 20 ROWS ONLY;
```

# TOP
- used in Microsoft SQL Server to retrieve a specific number of rows from a query result.
```sql
SELECT TOP n column1, column2, ...
FROM table_name;
```

# UNION ALL
- combines the results of two or more SELECT statements into a single result set, including duplicate rows.
```sql
SELECT column1, column2, ...
FROM table1
UNION ALL
SELECT column1, column2, ...
FROM table2;
```

# INTERSECT
- returns only the common rows between two or more SELECT statements.
```sql
SELECT column1, column2, ...
FROM table1
INTERSECT
SELECT column1, column2, ...
FROM table2;
```

# EXCEPT
- returns only the rows that are unique to the first SELECT statement and not present in any of the subsequent SELECT statements.
```sql
SELECT column1, column2, ...
FROM table1
EXCEPT
SELECT column1, column2, ...
FROM table2;
```

# ROWS BETWEEN
- allows you to specify a range of rows within a result set for a window function to operate on.
```sql
SELECT customer_id, sale_date, sale_amount,
    SUM(sale_amount) OVER (
        PARTITION BY customer_id
        ORDER BY sale_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM sales_table;
```

# CROSS APPLY
- applies a table-valued function to each row of a table and returns the combined result set.
```sql
SELECT *
FROM table1
CROSS APPLY table2
WHERE condition;
```

# OUTER APPLY
- similar to CROSS APPLY, but also returns rows from the left table that do not match any rows in the right table.
```sql
SELECT *
FROM table1
OUTER APPLY table2
WHERE condition;


SELECT col1, col2, AVG(col3) OVER (ORDER BY col1 ROWS BETWEEN 3 PRECEDING AND 1 PRECEDING)
FROM table1;
```

# TRIGGER
- a special type of stored procedure that automatically executes in response to specific events, such as INSERT, UPDATE, or DELETE statements.
```sql
CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE} ON table_name
FOR EACH ROW
BEGIN
    -- trigger actions here
END;
```

# CONSTRAINT
- defines rules that must be followed for data to be entered into a table, such as a NOT NULL constraint or a FOREIGN KEY constraint.
```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
{CHECK (condition) | UNIQUE (column_name) | PRIMARY KEY (column_name) | FOREIGN KEY (column_name) REFERENCES other_table (column_name)}
```

# INDEXED VIEW
- a view that has been materialized and stored in the database as an indexed table, improving query performance.
```sql
CREATE VIEW view_name
AS SELECT column1, column2, ...
FROM table_name
WHERE condition
WITH CHECK OPTION
GO

CREATE UNIQUE CLUSTERED INDEX index_name
ON view_name (column_name)
GO
```

# TEMPORARY TABLE
- a table that is created and used only for the duration of a single session or transaction.
```sql
CREATE TEMPORARY TABLE table_name (
column1 datatype,
column2 datatype,
...
);

INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

# CROSS DATABASE QUERY
- allows you to query tables and views across multiple databases within the same RDBMS instance.
```sql
SELECT *
FROM database1.table1 t1
JOIN database2.table2 t2 ON t1.id = t2.id;
```

# IN
- used to specify a list of values to match against a column in a subquery or WHERE clause.
```sql
SELECT *
FROM table_name
WHERE column_name IN (value1, value2, value3);
```

# ANY/SOME
- used to compare a single value to a list of values returned by a subquery.
```sql
SELECT *
FROM table_name
WHERE column_name > ANY (
    SELECT column_name
    FROM another_table
    WHERE some_column = some_value
);


SELECT *
FROM table_name
WHERE column_name > SOME (
    SELECT column_name
    FROM another_table
    WHERE some_column = some_value
);

```

# ALL
- used to check if all values returned by a subquery meet a certain condition.
```sql
SELECT column1, column2, ...
FROM table_name
WHERE column_name operator ALL (SELECT column_name FROM table_name WHERE condition);
```

# MERGE JOIN/ HASH JOIN
- used when joining two large sorted datasets, and can be more efficient than other join types in certain cases.
- used when joining two large unsorted datasets, and can be more efficient than other join types in certain cases.
```sql
SELECT *
FROM table1
JOIN table2
ON table1.column_name = table2.column_name
ORDER BY column_name;
```

# PIVOT
- rotates a table-valued expression by turning the unique values from one column into multiple columns in the output.
```sql
SELECT <non-pivoted column>,
       [first pivoted column] AS <column name>,
       [second pivoted column] AS <column name>,
       ...
FROM
    (<SELECT query that produces the data>)
PIVOT
(
    <aggregation function>(<column to be aggregated>)
    FOR
    [<column that contains the values to become column headers>]
    IN ( [first pivoted column], [second pivoted column],
         ... [last pivoted column])
) AS <alias for the pivot table>
```

# UNPIVOT
- performs the opposite of PIVOT, and transforms columns into rows.
```sql
SELECT <key>,
       <value>
FROM
    (<SELECT query that produces the data>)
UNPIVOT
(
    <value>
    FOR <column> IN ([first column], [second column], ..., [last column])
) AS <alias for the unpivot table>
```

# CHECK constraint
- defines a condition that must be met for data to be entered into a column, such as a range of allowed values or a regular expression pattern.
```sql
```

# EXPLICIT TRANSACTION
- allows you to group one or more statements together as a single transaction, which can be committed or rolled back as a unit of work.
```sql
START TRANSACTION [transaction_options];
```
- WITH CONSISTENT SNAPSHOT: This option enables the transaction to use a consistent snapshot of the database, which means that the transaction will see the database as it was at the start of the transaction, regardless of any changes made to the database by other transactions.
- READ WRITE: This option specifies that the transaction can read and write data.
- READ ONLY: This option specifies that the transaction can only read data.

# ISNULL
- returns the first non-null expression in a list of expressions.
```sql
ISNULL(expression, value)


SELECT department_name, ISNULL(department_name, 'Unknown') as department_name2
FROM departments;
```

# CONCAT
- concatenates two or more strings into a single string.
```sql
CONCAT(string1, string2, ...)


SELECT CONCAT(first_name, ' ', last_name) as 'Full Name'
FROM employees;
```

# STRING_AGG
- aggregates a set of strings into a single string using a specified separator.
```sql
STRING_AGG (expression, delimiter)


SELECT STRING_AGG(name, ', ') AS concatenated_names
FROM employees;
```

# JSON_VALUE
- extracts a scalar value from a JSON string based on a specified path.
```sql
SELECT JSON_VALUE('{"name": "Wabuko", "age": 21, "city": "Khwisero/Butere"}', '$.name');
```

# JSON_QUERY
- returns a JSON fragment from a JSON string based on a specified path.
```sql
SELECT JSON_QUERY('{"name": "Wabuko", "age": 21, "city": "Manyulia/Butere"}', '$.name');
```

# JSON_MODIFY
- updates a JSON string based on a specified path.
```sql
JSON_MODIFY(json_string, path, new_value)


DECLARE @json NVARCHAR(MAX) = '{"product": "chicken", "price": 1000}';
SET @json = JSON_MODIFY(@json, '$.price', 1200);
SELECT @json;
```

# STRING_SPLIT
- splits a string into a table of substrings based on a specified separator.
```sql
STRING_SPLIT (string, delimiter)


SELECT value
FROM STRING_SPLIT('apple,banana,cherry', ',');
```

# IIF
- performs conditional logic in a query and returns one of two values based on the condition.
```sql
IIF(logical_expression, value_if_true, value_if_false)


SELECT customer_name, IIF(customer_total > 1000, 'VIP', 'Regular') AS customer_type
FROM customers;
```

# TRY/CATCH
- used to handle errors that occur during the execution of a query, and allows you to gracefully handle and recover from those errors.
```sql
BEGIN TRY
    -- SQL statements to execute
END TRY
BEGIN CATCH
    -- Handle the error
END CATCH


BEGIN TRY
    SELECT 1/0;
END TRY
BEGIN CATCH
    SELECT 'An error occurred: ' + ERROR_MESSAGE() AS error_message;
END CATCH;
```

# STRING_ESCAPE
- escapes special characters in a string, such as single quotes or double quotes, so that they can be used in a SQL statement.
```sql
SELECT STRING_ESCAPE('John\'s book', 'sql')
```

# CONCAT_WS
- concatenates two or more strings into a single string using a specified separator, and automatically excludes null values.
```sql
SELECT CONCAT_WS(',', 'John', 'Doe', '25')
```

# DATEADD
- adds a specified interval to a date or time value.
```sql
DATEADD(interval, number, date)


SELECT DATEADD(day, 3, '2022-03-01');
```

# DATEDIFF
- returns the difference between two date or time values, in a specified interval.
```sql
DATEDIFF(interval, start_date, end_date)


SELECT DATEDIFF(day, '2022-03-01', '2022-03-04');
```

# DATEPART
- extracts a specified part of a date or time value, such as the year, month, or day.
```sql
SELECT DATEPART(year, '2022-03-01')
-- returns: 2022

SELECT DATEPART(quarter, GETDATE())
-- returns: the quarter number of the current date

SELECT DATEPART(dayofyear, '2022-03-01')
-- returns: 60 (the 60th day of the year)
```

# DATENAME
- returns the name of a specified part of a date or time value, such as the name of the month or day of the week.
```sql
SELECT DATENAME(month, '2022-03-01')
-- returns: March

SELECT DATENAME(weekday, GETDATE())
-- returns: the name of the day of the week for the current date
```

# GETDATE
- returns the current date and time from the system clock.
```sql
Get the current date and time using GETDATE()
SELECT GETDATE() AS CurrentDateTime;
```

# SYSDATETIME
- returns the current date and time from the system clock, with high precision.
```sql
Get the current date and time using SYSDATETIME()
SELECT SYSDATETIME() AS CurrentDateTime;
```

# CONVERT
- converts a value from one data type to another, and allows you to specify a format.
```sql
CONVERT ( data_type [ ( length ) ], expression [ , style ] )


SELECT CONVERT(date, '2023-02-28')
```

# TOP
- used to limit the number of rows returned by a query to a specified number.
```sql
SELECT TOP (expression) select_list FROM table_name WHERE condition;


SELECT TOP 10 * FROM employees;
```

# REPLACE
- replaces all occurrences of a specified substring with another substring in a string.
```sql
REPLACE ( string_expression , string_pattern , string_replacement )
```

# STUFF
- replaces a specified length of characters in a string with another string.
```sql
STUFF ( string_expression , start , length , string_insert )
```

# FORMAT
- formats a value as a string using a specified format.
```sql
FORMAT(value, format)


SELECT FORMAT(GETDATE(), 'yyyy-MM-dd')
```

# QUOTENAME
- adds square brackets around a string to make it a valid identifier in SQL.
```sql
QUOTENAME(string[, quote_character])


SELECT QUOTENAME('my column')
```

# TRY_CONVERT
- converts a value from one data type to another, and returns NULL if the conversion fails.
```sql
TRY_CONVERT ( data_type [ ( length ) ], expression [, style ] )


SELECT TRY_CONVERT(INT, '123') AS ConvertedValue;
```

# TRY_PARSE
- converts a string to a specified data type, and returns NULL if the conversion fails.
```sql
TRY_PARSE ( string_value AS data_type [ USING culture ] )



SELECT TRY_PARSE('2022-03-01' AS DATE USING 'en-US') AS ParsedDate;
```

# GROUPING SETS
- used to group data by multiple combinations of columns in a single query.

# PARTITION BY
- used with ranking functions to partition a result set into subsets based on the values in one or more columns.

# CROSS APPLY
- used to apply a table-valued function to each row of a table expression.

# OUTER APPLY
- similar to CROSS APPLY, but also includes rows from the left table expression that do not match any rows in the right table expression.


# CUMULATIVE DISTRIBUTION FUNCTION (CDF)
- calculates the cumulative distribution of a specified column in a table.

# CORRELATED SUBQUERY
- a subquery that references a column from the outer query.

# ROWLOCK
- used to lock a single row in a table, to prevent concurrent access by multiple transactions.
```sql
SELECT *
FROM myTable WITH (ROWLOCK) -- will lock only the rows returned by the query
WHERE id = 1;
```

# TABLOCK
- used to lock an entire table, to prevent concurrent access by multiple transactions.
```sql
SELECT *
FROM myTable WITH (TABLOCK) -- will lock the entire table
WHERE id = 1;
```

# DELETE
- used to delete one or more rows in a table, based on a specified condition.
```sql
DELETE FROM table_name WHERE condition;
```

# INDEX
- used to create an index on one or more columns in a table, to improve query performance.
```sql
CREATE [UNIQUE] [CLUSTERED | NONCLUSTERED] INDEX index_name
ON table_name (column1, column2, ...);
```

# DROP INDEX
- Used to drop index in a column.
```sql
DROP INDEX index_name ON table_name;
```

# UNIQUE INDEX
- similar to an index, but also enforces a unique constraint on the specified columns.
```sql
CREATE UNIQUE INDEX idx_name ON table_name (column_name);
```

# CLUSTERED INDEX
- an index that determines the physical order of the data in a table, based on the values in the specified columns.
```sql
CREATE CLUSTERED INDEX index_name ON table_name(column_name);
```

# NONCLUSTERED INDEX
- an index that does not determine the physical order of the data in a table, but instead provides a separate data structure for faster lookup of values in the specified columns.
```sql
CREATE NONCLUSTERED INDEX index_name
ON table_name (column1, column2, ...);
```
