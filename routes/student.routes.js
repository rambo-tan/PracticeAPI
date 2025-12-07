const express = require('express');
const router = express.Router();

const { getStudents, createStudent, updateStudent } = require('../controllers/student.controller');

router.get('/', getStudents);
router.post('/', createStudent);
router.put('/:studentid', updateStudent);

module.exports = router;