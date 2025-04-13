const rdbmsData = [
  {
    title: "SELECT",
    description: "Fetches specific data from one or more tables. Think of it as asking a question about your data, like 'Which students are in a course?' You can choose columns and filter results.",
    example: `-- Get names and grades of students with a grade above 80\nSELECT first_name, grade FROM students WHERE grade > 80;`,
    tags: ["query", "read", "basic", "retrieve"]
  },
  {
    title: "INSERT",
    description: "Adds new records to a table, like enrolling a new student in a school database. Be careful to match column names with values to avoid errors!",
    example: `-- Add a new student to the students table\nINSERT INTO students (first_name, last_name, grade) VALUES ('Emma', 'Smith', 92);`,
    tags: ["create", "write", "add"]
  },
  {
    title: "UPDATE",
    description: "Changes existing data, such as updating a student's grade after a test. Always use a WHERE clause to avoid updating every row by mistake!",
    example: `-- Update a student's grade based on their ID\nUPDATE students SET grade = 95 WHERE student_id = 101;`,
    tags: ["update", "modify", "edit"]
  },
  {
    title: "DELETE",
    description: "Removes records from a table, like dropping a student from a course. Use WHERE to target specific rows, or you might delete everything!",
    example: `-- Remove a student by their ID\nDELETE FROM students WHERE student_id = 102;`,
    tags: ["delete", "remove", "erase"]
  },
  {
    title: "INNER JOIN",
    description: "Combines rows from two tables where a condition matches, like linking students to their courses. It only shows rows with matches in both tables.",
    example: `-- Get student names and course titles they’re enrolled in\nSELECT s.first_name, c.course_title \nFROM students s \nINNER JOIN enrollments e ON s.student_id = e.student_id \nINNER JOIN courses c ON e.course_id = c.course_id;`,
    tags: ["join", "combine", "relational", "match"]
  },
  {
    title: "LEFT JOIN",
    description: "Gets all rows from the left table (e.g., all students) and matching rows from the right table (e.g., enrollments). Non-matching rows show NULL for right table columns.",
    example: `-- List all students, including those not enrolled\nSELECT s.first_name, c.course_title \nFROM students s \nLEFT JOIN enrollments e ON s.student_id = e.student_id \nLEFT JOIN courses c ON e.course_id = c.course_id;`,
    tags: ["join", "left", "relational", "optional"]
  },
  {
    title: "RIGHT JOIN",
    description: "Gets all rows from the right table and matching rows from the left. Useful when the right table (e.g., courses) is your focus, but less common in practice.",
    example: `-- List all courses, including those with no students\nSELECT s.first_name, c.course_title \nFROM students s \nRIGHT JOIN enrollments e ON s.student_id = e.student_id \nRIGHT JOIN courses c ON e.course_id = c.course_id;`,
    tags: ["join", "right", "relational"]
  },
  {
    title: "FULL OUTER JOIN",
    description: "Includes all rows from both tables, with NULLs for non-matches. Great for comparing datasets, but not all databases support it (e.g., MySQL doesn’t).",
    example: `-- Show all students and courses, with NULLs for non-matches\nSELECT s.first_name, c.course_title \nFROM students s \nFULL OUTER JOIN enrollments e ON s.student_id = e.student_id \nFULL OUTER JOIN courses c ON e.course_id = c.course_id;`,
    tags: ["join", "full", "relational"]
  },
  {
    title: "SELF JOIN",
    description: "Joins a table to itself, useful for hierarchies like finding a student’s mentor who is also a student. Be clear with aliases to avoid confusion!",
    example: `-- Find students and their mentors (both in students table)\nSELECT s1.first_name AS student, s2.first_name AS mentor \nFROM students s1 \nJOIN students s2 ON s1.mentor_id = s2.student_id;`,
    tags: ["join", "self", "relational", "hierarchy"]
  },
  {
    title: "CROSS JOIN",
    description: "Pairs every row from one table with every row from another, creating all possible combinations. Use cautiously—it can generate huge results!",
    example: `-- List all possible student-course combinations\nSELECT s.first_name, c.course_title \nFROM students s \nCROSS JOIN courses c;`,
    tags: ["join", "cartesian", "relational"]
  },
  {
    title: "GROUP BY",
    description: "Organizes rows into groups based on a column, like counting students per course. Often used with functions like COUNT or SUM.",
    example: `-- Count students in each course\nSELECT c.course_title, COUNT(s.student_id) AS student_count \nFROM courses c \nLEFT JOIN enrollments e ON c.course_id = e.course_id \nLEFT JOIN students s ON e.student_id = s.student_id \nGROUP BY c.course_title;`,
    tags: ["aggregate", "group", "summarize", "count"]
  },
  {
    title: "ORDER BY",
    description: "Sorts your results, like listing students by grade from highest to lowest. Use ASC for ascending (default) or DESC for descending.",
    example: `-- List students by grade, highest first\nSELECT first_name, grade \nFROM students \nORDER BY grade DESC;`,
    tags: ["sort", "order", "arrange"]
  },
  {
    title: "WHERE",
    description: "Filters rows based on a condition, like finding students with high grades. It’s your way to zoom in on specific data.",
    example: `-- Find students with grades above 90\nSELECT first_name, grade \nFROM students \nWHERE grade > 90;`,
    tags: ["filter", "condition", "restrict"]
  },
  {
    title: "HAVING",
    description: "Filters grouped results, like finding courses with many students. Use it after GROUP BY, not instead of WHERE.",
    example: `-- Find courses with more than 5 students\nSELECT c.course_title, COUNT(s.student_id) AS student_count \nFROM courses c \nJOIN enrollments e ON c.course_id = e.course_id \nJOIN students s ON e.student_id = s.student_id \nGROUP BY c.course_title \nHAVING COUNT(s.student_id) > 5;`,
    tags: ["filter", "group", "aggregate", "condition"]
  },
  {
    title: "LIMIT",
    description: "Caps the number of rows returned, like showing only the top 5 students. Great for testing or ranking queries.",
    example: `-- Get top 5 students by grade\nSELECT first_name, grade \nFROM students \nORDER BY grade DESC \nLIMIT 5;`,
    tags: ["limit", "pagination", "restrict"]
  },
  {
    title: "OFFSET",
    description: "Skips a set number of rows, useful for pagination (e.g., showing the next 5 students after the top 5). Always pair with LIMIT.",
    example: `-- Get students 6-10 by grade\nSELECT first_name, grade \nFROM students \nORDER BY grade DESC \nLIMIT 5 OFFSET 5;`,
    tags: ["offset", "pagination", "skip"]
  },
  {
    title: "UNION",
    description: "Merges results from two queries, removing duplicates. Useful for combining similar data, like students from different classes.",
    example: `-- Combine student names from two classes\nSELECT first_name FROM students WHERE class = 'A' \nUNION \nSELECT first_name FROM students WHERE class = 'B';`,
    tags: ["combine", "set", "merge"]
  },
  {
    title: "UNION ALL",
    description: "Merges results from two queries, keeping duplicates. Faster than UNION since it doesn’t check for duplicates.",
    example: `-- Combine all student names, including duplicates\nSELECT first_name FROM students WHERE class = 'A' \nUNION ALL \nSELECT first_name FROM students WHERE class = 'B';`,
    tags: ["combine", "set", "merge"]
  },
  {
    title: "INTERSECT",
    description: "Finds rows common to two queries, like students in both classes. Not all databases support it (e.g., MySQL doesn’t).",
    example: `-- Find students in both classes\nSELECT first_name FROM students WHERE class = 'A' \nINTERSECT \nSELECT first_name FROM students WHERE class = 'B';`,
    tags: ["set", "common", "overlap"]
  },
  {
    title: "EXCEPT",
    description: "Finds rows in one query but not another, like students only in class A. Also called MINUS in some databases.",
    example: `-- Find students in class A but not class B\nSELECT first_name FROM students WHERE class = 'A' \nEXCEPT \nSELECT first_name FROM students WHERE class = 'B';`,
    tags: ["set", "difference", "exclude"]
  },
  {
    title: "COUNT",
    description: "Counts rows or non-null values, like tallying students in a course. Use * for all rows or a column for specific values.",
    example: `-- Count students with grades above 80\nSELECT COUNT(*) AS high_achievers \nFROM students \nWHERE grade > 80;`,
    tags: ["aggregate", "count", "summarize"]
  },
  {
    title: "LIKE",
    description: "Searches for patterns, like finding students whose names start with 'A'. Use % for any characters and _ for a single character.",
    example: `-- Find students with names starting with 'A'\nSELECT first_name \nFROM students \nWHERE first_name LIKE 'A%';`,
    tags: ["filter", "pattern", "search"]
  },
  {
    title: "CASE",
    description: "Adds if-then logic, like labeling students as 'Pass' or 'Fail' based on grades. It’s like a mini-program inside your query.",
    example: `-- Label students based on grade\nSELECT first_name, \nCASE \n  WHEN grade >= 60 THEN 'Pass' \n  ELSE 'Fail' \nEND AS status \nFROM students;`,
    tags: ["conditional", "logic", "transform"]
  },
  {
    title: "ROW_NUMBER",
    description: "Numbers each row in a result, like ranking students by grade. Useful for leaderboards or identifying positions.",
    example: `-- Rank students by grade\nSELECT first_name, grade, \nROW_NUMBER() OVER (ORDER BY grade DESC) AS position \nFROM students;`,
    tags: ["window", "ranking", "numbering"]
  },
  {
    title: "RANK",
    description: "Ranks rows with ties getting the same rank, leaving gaps. For example, two students tied for 1st both get rank 1, next gets 3.",
    example: `-- Rank students by grade with gaps\nSELECT first_name, grade, \nRANK() OVER (ORDER BY grade DESC) AS rank \nFROM students;`,
    tags: ["window", "ranking", "ties"]
  },
  {
    title: "DENSE_RANK",
    description: "Ranks rows like RANK but without gaps for ties. If two students tie for 1st, the next gets 2nd, not 3rd.",
    example: `-- Rank students by grade without gaps\nSELECT first_name, grade, \nDENSE_RANK() OVER (ORDER BY grade DESC) AS dense_rank \nFROM students;`,
    tags: ["window", "ranking", "ties"]
  },
  {
    title: "TRUNCATE",
    description: "Clears all data from a table instantly, like erasing a class roster. It’s faster than DELETE but can’t be undone without a backup.",
    example: `-- Remove all students (use with caution!)\nTRUNCATE TABLE students;`,
    tags: ["delete", "table", "clear"]
  },
  {
    title: "COMMIT",
    description: "Saves your changes permanently, like finalizing a grade update. Use it in transactions to lock in your work.",
    example: `-- Save changes after updating grades\nUPDATE students SET grade = 90 WHERE student_id = 101;\nCOMMIT;`,
    tags: ["transaction", "save", "confirm"]
  },
  {
    title: "ROLLBACK",
    description: "Undoes changes in a transaction, like canceling a mistaken grade change. Use it before COMMIT to revert.",
    example: `-- Undo a grade update\nUPDATE students SET grade = 0 WHERE student_id = 101;\nROLLBACK;`,
    tags: ["transaction", "undo", "revert"]
  },
  {
    title: "CREATE TABLE",
    description: "Builds a new table, like setting up a student roster with columns for names and grades. Define data types and rules carefully.",
    example: `-- Create a table for students\nCREATE TABLE students (\n  student_id INT PRIMARY KEY,\n  first_name VARCHAR(50),\n  grade DECIMAL(5,2)\n);`,
    tags: ["table", "create", "schema", "structure"]
  },
  {
    title: "ALTER TABLE",
    description: "Changes a table’s structure, like adding a column for student emails. Check existing data to avoid conflicts.",
    example: `-- Add an email column to students\nALTER TABLE students \nADD email VARCHAR(100);`,
    tags: ["table", "modify", "schema", "structure"]
  },
  {
    title: "DROP TABLE",
    description: "Deletes a table and all its data, like removing an old course catalog. Be sure you don’t need it before dropping!",
    example: `-- Delete the students table\nDROP TABLE students;`,
    tags: ["table", "delete", "schema", "remove"]
  },
  {
    title: "PRIMARY KEY",
    description: "Guarantees each row has a unique identifier, like a student ID. It prevents duplicates and speeds up searches.",
    example: `-- Create a table with a primary key\nCREATE TABLE students (\n  student_id INT PRIMARY KEY,\n  first_name VARCHAR(50)\n);`,
    tags: ["constraint", "unique", "schema", "identifier"]
  },
  {
    title: "FOREIGN KEY",
    description: "Links tables, like connecting enrollments to students. It ensures data stays consistent across tables.",
    example: `-- Create enrollments table linked to students\nCREATE TABLE enrollments (\n  enrollment_id INT PRIMARY KEY,\n  student_id INT,\n  FOREIGN KEY (student_id) REFERENCES students(student_id)\n);`,
    tags: ["constraint", "relational", "schema", "link"]
  },
  {
    title: "CHECK CONSTRAINT",
    description: "Enforces rules, like ensuring grades are positive. It stops invalid data from being added.",
    example: `-- Create a table with a grade check\nCREATE TABLE students (\n  student_id INT,\n  grade DECIMAL(5,2),\n  CONSTRAINT chk_grade CHECK (grade >= 0 AND grade <= 100)\n);`,
    tags: ["constraint", "validation", "schema", "rule"]
  },
  {
    title: "SUBQUERY",
    description: "Nests a query inside another, like finding students in a specific course by first finding the course ID. Keep it simple to stay readable!",
    example: `-- Find students in the Math course\nSELECT first_name \nFROM students \nWHERE student_id IN (\n  SELECT student_id \n  FROM enrollments \n  WHERE course_id = (SELECT course_id FROM courses WHERE course_title = 'Math')\n);`,
    tags: ["query", "nested", "complex"]
  },
  {
    title: "EXPLAIN",
    description: "Shows how a query runs, helping you spot slow parts. It’s like a map for optimizing your database searches.",
    example: `-- Check how a query is executed\nEXPLAIN SELECT first_name \nFROM students \nWHERE grade > 90;`,
    tags: ["performance", "query", "optimization", "plan"]
  },
  {
    title: "GRANT",
    description: "Gives users permissions, like letting a teacher view student grades. Be specific to keep your database secure.",
    example: `-- Allow a user to read student data\nGRANT SELECT ON students TO teacher_user;`,
    tags: ["security", "permissions", "access"]
  },
  {
    title: "REVOKE",
    description: "Takes away permissions, like blocking a user from changing grades. Use it to tighten security.",
    example: `-- Remove a user’s access to student data\nREVOKE SELECT ON students FROM teacher_user;`,
    tags: ["security", "permissions", "restrict"]
  },
  {
    title: "INDEX",
    description: "Speeds up searches by organizing data, like an index in a book. Create one for columns you query often.",
    example: `-- Speed up searches by student name\nCREATE INDEX idx_first_name ON students (first_name);`,
    tags: ["performance", "index", "schema", "optimize"]
  },
  {
    title: "VIEW",
    description: "Saves a query as a virtual table, like a shortcut for seeing top students. It simplifies complex queries but doesn’t store data.",
    example: `-- Create a view for high-performing students\nCREATE VIEW top_students AS \nSELECT first_name, grade \nFROM students \nWHERE grade > 90;`,
    tags: ["virtual", "query", "schema", "shortcut"]
  },
  // New Entries
  {
    title: "DISTINCT",
    description: "Removes duplicate rows, like listing unique course names. Use it to clean up repetitive results.",
    example: `-- Get unique course titles\nSELECT DISTINCT course_title \nFROM courses;`,
    tags: ["query", "unique", "deduplicate"]
  },
  {
    title: "BETWEEN",
    description: "Filters values in a range, like finding students with grades from 70 to 90. It’s inclusive, so 70 and 90 are included.",
    example: `-- Find students with grades between 70 and 90\nSELECT first_name, grade \nFROM students \nWHERE grade BETWEEN 70 AND 90;`,
    tags: ["filter", "range", "condition"]
  },
  {
    title: "IN",
    description: "Checks if a value matches a list, like finding students in specific courses. It’s shorter than multiple OR conditions.",
    example: `-- Find students in Math or Science\nSELECT first_name \nFROM students \nWHERE student_id IN (\n  SELECT student_id \n  FROM enrollments \n  WHERE course_id IN (\n    SELECT course_id \n    FROM courses \n    WHERE course_title IN ('Math', 'Science')\n  )\n);`,
    tags: ["filter", "list", "condition"]
  },
  {
    title: "COALESCE",
    description: "Picks the first non-NULL value from a list, like showing a default grade if none exists. Great for cleaning up data displays.",
    example: `-- Show grades or 'Not Assigned' if NULL\nSELECT first_name, COALESCE(grade, 'Not Assigned') AS grade_status \nFROM students;`,
    tags: ["transform", "null", "conditional"]
  },
  {
    title: "SUM",
    description: "Adds up values, like totaling student grades in a course. Use it with GROUP BY for summaries.",
    example: `-- Total grades per course\nSELECT c.course_title, SUM(s.grade) AS total_grades \nFROM courses c \nJOIN enrollments e ON c.course_id = e.course_id \nJOIN students s ON e.student_id = s.student_id \nGROUP BY c.course_title;`,
    tags: ["aggregate", "sum", "summarize"]
  },
  {
    title: "AVG",
    description: "Calculates the average, like finding the average grade in a class. It ignores NULL values.",
    example: `-- Average grade per course\nSELECT c.course_title, AVG(s.grade) AS avg_grade \nFROM courses c \nJOIN enrollments e ON c.course_id = e.course_id \nJOIN students s ON e.student_id = s.student_id \nGROUP BY c.course_title;`,
    tags: ["aggregate", "average", "summarize"]
  },
  {
    title: "MAX",
    description: "Finds the highest value, like the top grade in a class. Useful for rankings or limits.",
    example: `-- Highest grade per course\nSELECT c.course_title, MAX(s.grade) AS top_grade \nFROM courses c \nJOIN enrollments e ON c.course_id = e.course_id \nJOIN students s ON e.student_id = s.student_id \nGROUP BY c.course_title;`,
    tags: ["aggregate", "maximum", "summarize"]
  },
  {
    title: "MIN",
    description: "Finds the lowest value, like the lowest grade in a class. Pairs well with GROUP BY.",
    example: `-- Lowest grade per course\nSELECT c.course_title, MIN(s.grade) AS lowest_grade \nFROM courses c \nJOIN enrollments e ON c.course_id = e.course_id \nJOIN students s ON e.student_id = s.student_id \nGROUP BY c.course_title;`,
    tags: ["aggregate", "minimum", "summarize"]
  },
  {
    title: "TRIGGER",
    description: "Automatically runs a command when something happens, like logging when a student is added. It’s like setting a trap for changes.",
    example: `-- Log new students in a history table\nCREATE TRIGGER log_new_student \nAFTER INSERT ON students \nFOR EACH ROW \nINSERT INTO student_history (student_id, action, timestamp) \nVALUES (NEW.student_id, 'Added', NOW());`,
    tags: ["automation", "schema", "event"]
  },
  {
    title: "STORED PROCEDURE",
    description: "Saves a set of SQL commands to reuse, like a script to update grades. It simplifies complex tasks and improves security.",
    example: `-- Create a procedure to enroll a student\nDELIMITER //\nCREATE PROCEDURE EnrollStudent(IN s_id INT, IN c_id INT)\nBEGIN\n  INSERT INTO enrollments (student_id, course_id) \n  VALUES (s_id, c_id);\nEND //\nDELIMITER ;\n-- Call it\nCALL EnrollStudent(101, 1);`,
    tags: ["automation", "schema", "reusable"]
  }
];

export default rdbmsData;
