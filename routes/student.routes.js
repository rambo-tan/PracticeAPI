const express = require('express');
const router = express.Router();

const { createStudent } = require('../controllers/student.controller');

// router.get('/:programid', getPrograms);
router.post('/', createStudent);
// router.put('/:programid', updateProgram);

module.exports = router;