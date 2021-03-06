var express = require('express');
var router = express.Router();

var classifierController = require('../controllers/classifier_controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' , {title: "TalentoLearning"});
});


// Definición de rutas de /quizzes
router.get('/classifiers',                           classifierController.index);
router.get('/classifiers/:classifierId(\\d+)',       classifierController.show);
router.get('/classifiers/:classifierId(\\d+)/predict', classifierController.predict);
router.post('/saveData', function(req, res, next) {
  console.log("Me llega la peticion");
  console.log("Body: ");
  console.log(req.body);
});


module.exports = router;