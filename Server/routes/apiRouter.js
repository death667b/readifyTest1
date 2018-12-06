const express = require('express');
const router = express.Router();

const fibonacciController = require('../controllers/fibonacciController');
const reverseWordsController = require('../controllers/reverseWordsController');
const tokenController = require('../controllers/tokenController');
const triangleTypeController = require('../controllers/triangleTypeController');

router.get('/Fibonacci', fibonacciController.index);
router.get('/ReverseWords', reverseWordsController.index);
router.get('/Token', tokenController.index);
router.get('/TriangleType', triangleTypeController.index);

module.exports = router;
