//Defining functions that interact directly with the database using SQL queries

const connection = require("./index");

function addFile(filename, path, size, callback) {
  const query = "INSERT INTO files (filename, path, size) VALUES (?, ?, ?)";
  const values = [filename, path, size];

  connection.query(query, values, callback);
}

function getAllFiles(callback) {
  const query = "SELECT * FROM files";
  connection.query(query, callback);
}

function updateFile(id, filename, path, size, callback) {
  const query = "UPDATE files SET filename=?, path=?, size=? WHERE id=?";
  const values = [filename, path, size, id];

  connection.query(query, values, callback);
}

function deleteFile(id, callback) {
  const query = "DELETE FROM files WHERE id=?";
  const values = [id];

  connection.query(query, values, callback);
}

module.exports = {
  addFile,
  getAllFiles,
  updateFile,
  deleteFile,
};
