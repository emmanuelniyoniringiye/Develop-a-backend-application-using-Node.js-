const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: "nodejs", // Your MySQL database name
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        // return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);

    const createTableQuery = `
    CREATE TABLE  nodepro8 (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      place VARCHAR(255) NOT NULL,
      job VARCHAR(255)UNIQUE  NOT NULL)
  `;

    // Step 5: Execute the query to create the table
    connection.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating table:', err.stack);
            //return;
        }
        console.log('Table created successfully:', result);
    });

    // Step 6: Close the connection (optional, but recommended)
    connection.end((err) => {
        if (err) {
            console.error('Error closing the connection:', err.stack);
            //return;
        }
        //console.log('Connection closed.');

    });
});