// GLOBAL VARIABLES & REQUIRES
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Read and write functions
const { readFromFile, writeToFile } = require('../db/db-utils');

// API Routes
router.get('/notes', (req, res) => {
    // Read notes from db.json and send as response
    const notes = readFromFile();
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // Add a new note to db.json
    const newNote = req.body;
    const notes = readFromFile();
    writeToFile(notes);
});
  
router.delete('/notes/:id', (req, res) => {
    // Delete a note by ID from db.json
    const notes = readFromFile();
});

module.exports = router;