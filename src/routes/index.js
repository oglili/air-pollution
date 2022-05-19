const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {search, singleReport, saveReport, upload, allReports, reportByCity, editSearch, updateSearch, deleteSearch} = require('../controllers/SearchController')

router.get('/', search);
router.get('/report', singleReport);
router.get('/allReport', allReports);
router.post('/',  upload, [
    check('name', 'Name length should be 2 to 20 characters')
                    .isLength({ min: 2, max: 20 }),
    check('city', 'City length should be 2 to 20 characters')
                    .isLength({ min: 2, max: 20 }),
    check('temp', 'Temperature number should contains 2 digits')
                    .isLength({ min: 2, max: 2 }),
    check('desc',  'Description length should be 2 to 20 characters')
                    .isLength({ min: 2, max: 20 })    
], saveReport);
router.get('/query', reportByCity);
router.get('/edit/:id', editSearch);
router.post('/update/:id', upload, updateSearch);
router.get('/delete/:id', upload, deleteSearch);

module.exports = router;