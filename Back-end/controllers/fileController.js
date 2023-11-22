//Intermediary between the routes (HTTP requests) and the model (database)

// Import MySQL connection
const connection = require("../models");

// Function to add a new file to the database
function addFile(filename, path, size) {
  const query = "INSERT INTO files (filename, path, size) VALUES (?, ?, ?)";
  const values = [filename, path, size];

  connection.query(query, values, (err, results) => {
    if (err) throw err;

    console.log("File added successfully!");
    console.log("Inserted ID:", results.insertId);
  });
}

// Function to get all files from the database
function getAllFiles() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM files";

    connection.query(query, (err, results) => {
      if (err) {
        console.error(err);
        reject("Error fetching files");
      } else {
        console.log("All Files:", results);
        resolve(results);
      }
    });
  });
}

// Function to update existing file information in the database
function updateFile(id, filename, path, size) {
  const query = "UPDATE files SET filename=?, path=?, size=? WHERE id=?";
  const values = [filename, path, size, id];

  connection.query(query, values, (err, results) => {
    if (err) throw err;

    console.log("File updated successfully!");
    console.log("Rows affected:", results.affectedRows);
  });
}

// Function to delete a file from the database
function deleteFile(id) {
  const query = "DELETE FROM files WHERE id=?";
  const values = [id];

  connection.query(query, values, (err, results) => {
    if (err) throw err;

    console.log("File deleted successfully!");
    console.log("Rows affected:", results.affectedRows);
  });
}

// Export the functions to be used in routes
module.exports = {
  addFile,
  getAllFiles,
  updateFile,
  deleteFile,
};
