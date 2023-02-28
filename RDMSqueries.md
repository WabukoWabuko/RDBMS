# SELECT
- retrieves data from one or more tables

# INSERT
- adds new data to a table

# UPDATE
- modifies existing data in a table

# DELETE
- removes data from a table
# JOIN
- combines data from two or more tables

# GROUP BY
- groups rows with the same values into summary rows

# ORDER BY
- sorts the results of a query in ascending or descending order

# DISTINCT
- returns unique values of a column

# WHERE
- filters data based on a condition

# HAVING
- filters data based on a condition, but after GROUP BY has been applied

# LIMIT
- limits the number of rows returned in a query result

# OFFSET
- skips a specified number of rows in a query result

# UNION
- combines the results of two or more SELECT statements into a single result set

# INTERSECT
- returns only the common rows between two SELECT statements

# EXCEPT
- returns only the rows that are present in the first SELECT statement but not in the second SELECT statement.

# EXISTS
- checks if a subquery returns any rows and returns a Boolean value

# NOT EXISTS
- checks if a subquery returns no rows and returns a Boolean value

# COUNT
- returns the number of rows or non-null values in a column

# AVG 
- calculates the average value of a column

# SUM
- calculates the sum of values in a column

# MAX
- returns the maximum value in a column

# MIN
- returns the minimum value in a column

# IN 
- checks if a value matches any value in a list or subquery

# NOT IN
- checks if a value does not match any value in a list or subquery

# BETWEEN
- checks if a value is within a range of values

# NOT BETWEEN
- checks if a value is not within a range of values

# LIKE
- checks if a value matches a pattern using wildcard characters

# NOT LIKE
- checks if a value does not match a pattern using wildcard characters

# CASE
- performs conditional logic in a query

# COALESCE
- returns the first non-null value in a list of values

# CAST
- converts data from one data type to another

# DISTINCT ON
- returns distinct rows based on a specific column

# WINDOW functions
- performs calculations on a subset of rows (window) in a result set, such as RANK, DENSE_RANK, ROW_NUMBER, LAG, LEAD, and so on.

FULL OUTER JOIN - returns all rows from both tables, and matches rows from both tables when they are equal
LEFT OUTER JOIN - returns all rows from the left table and the matching rows from the right table, and NULL values for the non-matching rows in the right table
RIGHT OUTER JOIN - returns all rows from the right table and the matching rows from the left table, and NULL values for the non-matching rows in the left table
CROSS JOIN - returns the Cartesian product of the two tables, that is, all possible combinations of rows between the two tables.
SELF JOIN - joins a table with itself using an alias, usually to find related data within the same table.
TRUNCATE - deletes all rows from a table without logging each individual deletion, making it faster than DELETE for large tables.
COMMIT - saves all the changes made to the database in the current transaction.
ROLLBACK - undoes all the changes made in the current transaction and restores the database to its previous state.
SAVEPOINT - sets a savepoint within a transaction, allowing a partial rollback if needed.
RELEASE SAVEPOINT - releases a savepoint previously defined in a transaction.
LOCK - locks rows or tables to prevent other transactions from modifying the same data.
UNLOCK - releases locks previously set in a transaction.
INDEX - creates an index on one or more columns to improve query performance.
VIEW - creates a virtual table based on the result set of a SELECT statement, which can be used like a regular table.
CASCADE - specifies that changes made to a parent record should propagate to its child records in a related table.
RESTRICT - specifies that changes made to a parent record should not propagate to its child records in a related table.
OUTER REFERENCES - allows a subquery to reference a column from an outer query.
MERGE - allows you to perform INSERT, UPDATE, and DELETE operations on a target table based on the results of a source table or subquery.
WITH clause - allows you to define a subquery block that can be referenced multiple times within a larger query, improving code readability and performance.
COALESCE - returns the first non-null value in a list of values.
NVL - similar to COALESCE, but specifically used in Oracle databases.
GREATEST - returns the greatest value in a list of values.
LEAST - returns the smallest value in a list of values.
ROW_NUMBER - assigns a unique number to each row within a result set, which can be used for pagination or filtering purposes.
FETCH - used in conjunction with OFFSET to retrieve a specific number of rows from a query result starting at a specific position.
TOP - used in Microsoft SQL Server to retrieve a specific number of rows from a query result.
UNION ALL - combines the results of two or more SELECT statements into a single result set, including duplicate rows.
INTERSECT - returns only the common rows between two or more SELECT statements.
EXCEPT - returns only the rows that are unique to the first SELECT statement and not present in any of the subsequent SELECT statements.
GROUP BY - groups the result set by one or more columns, allowing you to perform aggregate functions like SUM, AVG, MAX, MIN, and COUNT on each group.
HAVING - used in conjunction with GROUP BY to filter the result set based on aggregate function values.
CASE - performs conditional logic in a query and returns different values based on the condition.
ROWS BETWEEN - allows you to specify a range of rows within a result set for a window function to operate on.
RANK - assigns a rank to each row within a result set based on the specified criteria.
DENSE_RANK - similar to RANK, but assigns a unique rank to each distinct value in the result set.
NTILE - divides the result set into a specified number of buckets, assigning each row to a bucket based on its order in the result set.
CROSS APPLY - applies a table-valued function to each row of a table and returns the combined result set.
OUTER APPLY - similar to CROSS APPLY, but also returns rows from the left table that do not match any rows in the right table.
OFFSET - used in conjunction with FETCH to specify the starting position for retrieving rows from a query result.
TRIGGER - a special type of stored procedure that automatically executes in response to specific events, such as INSERT, UPDATE, or DELETE statements.
CONSTRAINT - defines rules that must be followed for data to be entered into a table, such as a NOT NULL constraint or a FOREIGN KEY constraint.
INDEXED VIEW - a view that has been materialized and stored in the database as an indexed table, improving query performance.
TEMPORARY TABLE - a table that is created and used only for the duration of a single session or transaction.
CROSS DATABASE QUERY - allows you to query tables and views across multiple databases within the same RDBMS instance.
JOINS WITH USING - allows you to specify the column(s) that the two tables have in common, rather than using the ON clause to join based on a condition.
IN - used to specify a list of values to match against a column in a subquery or WHERE clause.
EXISTS - used to check if a subquery returns any rows, and can be used to filter the results of an outer query based on the existence of related data.
NOT EXISTS - used to filter the results of an outer query based on the absence of related data.
ANY/SOME - used to compare a single value to a list of values returned by a subquery.
ALL - used to check if all values returned by a subquery meet a certain condition.
FULL OUTER JOIN - returns all rows from both tables in the join, including those that do not match any rows in the other table.
CROSS JOIN - returns the Cartesian product of two tables, which is all possible combinations of rows from both tables.
MERGE JOIN - used when joining two large sorted datasets, and can be more efficient than other join types in certain cases.
HASH JOIN - used when joining two large unsorted datasets, and can be more efficient than other join types in certain cases.
PIVOT - rotates a table-valued expression by turning the unique values from one column into multiple columns in the output.
UNPIVOT - performs the opposite of PIVOT, and transforms columns into rows.
CHECK constraint - defines a condition that must be met for data to be entered into a column, such as a range of allowed values or a regular expression pattern.
EXPLICIT TRANSACTION - allows you to group one or more statements together as a single transaction, which can be committed or rolled back as a unit of work.
ISNULL - returns the first non-null expression in a list of expressions.
CONCAT - concatenates two or more strings into a single string.
STRING_AGG - aggregates a set of strings into a single string using a specified separator.
JSON_VALUE - extracts a scalar value from a JSON string based on a specified path.
JSON_QUERY - returns a JSON fragment from a JSON string based on a specified path.
JSON_MODIFY - updates a JSON string based on a specified path.
STRING_SPLIT - splits a string into a table of substrings based on a specified separator.
IIF - performs conditional logic in a query and returns one of two values based on the condition.
TRY/CATCH - used to handle errors that occur during the execution of a query, and allows you to gracefully handle and recover from those errors.
Common Table Expressions (CTE) - provides a way to define a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.
WITH clause - used to define a CTE.
MERGE - used to perform INSERT, UPDATE, and DELETE operations on a target table based on the results of a join with a source table.
OFFSET/FETCH - used to limit the number of rows returned by a query, and can be used in conjunction with ORDER BY to return a specific subset of rows.
STRING_ESCAPE - escapes special characters in a string, such as single quotes or double quotes, so that they can be used in a SQL statement.
CONCAT_WS - concatenates two or more strings into a single string using a specified separator, and automatically excludes null values.
LEAD - returns the value of a specified column from the next row in the result set.
LAG - returns the value of a specified column from the previous row in the result set.
COALESCE - returns the first non-null value in a list of expressions.
DATEADD - adds a specified interval to a date or time value.
DATEDIFF - returns the difference between two date or time values, in a specified interval.
DATEPART - extracts a specified part of a date or time value, such as the year, month, or day.
DATENAME - returns the name of a specified part of a date or time value, such as the name of the month or day of the week.
GETDATE - returns the current date and time from the system clock.
SYSDATETIME - returns the current date and time from the system clock, with high precision.
CAST - converts a value from one data type to another.
CONVERT - converts a value from one data type to another, and allows you to specify a format.
TOP - used to limit the number of rows returned by a query to a specified number.
TRUNCATE - removes all rows from a table without logging each individual row.
REPLACE - replaces all occurrences of a specified substring with another substring in a string.
STUFF - replaces a specified length of characters in a string with another string.
FORMAT - formats a value as a string using a specified format.
QUOTENAME - adds square brackets around a string to make it a valid identifier in SQL.
TRY_CONVERT - converts a value from one data type to another, and returns NULL if the conversion fails.
TRY_PARSE - converts a string to a specified data type, and returns NULL if the conversion fails.
GROUPING SETS - used to group data by multiple combinations of columns in a single query.
RANK - assigns a rank to each row in a result set based on the values in one or more columns.
DENSE_RANK - assigns a rank to each row in a result set based on the values in one or more columns, and assigns the same rank to rows with the same values.
ROW_NUMBER - assigns a unique row number to each row in a result set.
PARTITION BY - used with ranking functions to partition a result set into subsets based on the values in one or more columns.
CROSS APPLY - used to apply a table-valued function to each row of a table expression.
OUTER APPLY - similar to CROSS APPLY, but also includes rows from the left table expression that do not match any rows in the right table expression.
PIVOT - used to transform rows into columns, based on the values in a specified column.
UNPIVOT - used to transform columns into rows, based on the values in a specified column.
CUMULATIVE DISTRIBUTION FUNCTION (CDF) - calculates the cumulative distribution of a specified column in a table.
CORRELATED SUBQUERY - a subquery that references a column from the outer query.
HAVING - used to filter the results of a query based on a specified condition.
ROWLOCK - used to lock a single row in a table, to prevent concurrent access by multiple transactions.
TABLOCK - used to lock an entire table, to prevent concurrent access by multiple transactions.
UPDATE - used to update one or more rows in a table, based on a specified condition.
DELETE - used to delete one or more rows in a table, based on a specified condition.
INDEX - used to create an index on one or more columns in a table, to improve query performance.
UNIQUE INDEX - similar to an index, but also enforces a unique constraint on the specified columns.
CLUSTERED INDEX - an index that determines the physical order of the data in a table, based on the values in the specified columns.
NONCLUSTERED INDEX - an index that does not determine the physical order of the data in a table, but instead provides a separate data structure for faster lookup of values in the specified columns.
INNER JOIN - returns only the rows from both tables that match the specified join condition.
LEFT JOIN - returns all the rows from the left table and the matching rows from the right table, or NULL if there is no match.
RIGHT JOIN - returns all the rows from the right table and the matching rows from the left table, or NULL if there is no match.
FULL OUTER JOIN - returns all the rows from both tables, along with NULL values for any rows that do not have a match in the other table.
SELF JOIN - a join where a table is joined with itself.
