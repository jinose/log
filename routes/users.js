var express = require('express');
var router = express.Router();
var logger = require('../log');

/* GET users listing. */
router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	  logger.info('log to file');
	  logger.info('logger success');
	  logger.log('warn', 'Running out of memory...');
	  logger.log('error', { error: 'flagrant'});
	});
	////

module.exports = router;
