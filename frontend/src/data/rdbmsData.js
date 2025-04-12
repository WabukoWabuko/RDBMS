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
  }
];

export default rdbmsData;

