const express = require('express');
const router = express.Router();

const { createProgram, updateProgram } = require('../controllers/program.controller');

router.post('/', createProgram);
router.put('/:programid', updateProgram);

module.exports = router;