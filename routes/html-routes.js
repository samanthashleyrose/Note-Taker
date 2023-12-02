// GLOBAL VARIABLES & REQUIRES
const router = require('express').Router();

// HTML Routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/notes.html'))
});

module.exports = router;