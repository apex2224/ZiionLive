const express = require('express');
const router = express.Router();
const formController= require('../controllers/studentController')

router.post('/form', formController.submitForm);

module.exports = router;
