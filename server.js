const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like HTML, CSS

// In-memory storage for students (for now)
let students = [];

// Route to handle form submission
app.post('/add_student', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  console.log('Student added:', newStudent);
  console.log('All students:', students);
  res.send('Student added successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
