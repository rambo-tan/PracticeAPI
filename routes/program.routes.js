const express = require('express');
const router = express.Router();

const { getPrograms, createProgram, updateProgram } = require('../controllers/program.controller');

router.get('/:programid', getPrograms);
router.post('/', createProgram);
router.put('/:programid', updateProgram);

module.exports = router;