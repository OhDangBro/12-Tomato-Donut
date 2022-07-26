const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Jessie17',
      database: 'company'
    },
    console.log('Connected to the election database.')
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });


////////// PUT THESE TWO IN FUNCTIONS ///////////////////

  // Query database  // USE LATER BUT CHANGE 
// db.query('SELECT * FROM books', function (err, results) {
//     console.log(results);
  // });
// END

// DYNAMIC DATA
// let deletedRow = 2;

// db.query(`DELETE FROM books WHERE id = ?`, deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

//DYNAMIC DATA END



///////////// END PUT IN FUNCTION COMMENT ///////////

  app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  