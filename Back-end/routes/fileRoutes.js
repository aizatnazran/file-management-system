//Defines routes for handling the operations using Express.js

const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

// Define routes and link them to controller functions
router.post("/add", async (req, res) => {
  try {
    // Handle adding a file
    await fileController.addFile(
      req.body.filename,
      req.body.path,
      req.body.size
    );
    res.status(201).json({ message: "File added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    // Handle getting all files
    const files = await fileController.getAllFiles();
    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    // Handle updating a file
    await fileController.updateFile(
      req.params.id,
      req.body.filename,
      req.body.path,
      req.body.size
    );
    res.status(200).json({ message: "File updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    // Handle deleting a file
    await fileController.deleteFile(req.params.id);
    res.status(200).json({ message: "File deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
