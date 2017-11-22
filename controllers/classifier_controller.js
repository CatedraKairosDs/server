var models = require("../models")
var PythonShell = require('python-shell');

//GET /classifiers
exports.index = function (req, res, next) {

        var classifiers = models.Classifier.findAll();
        
        res.render('classifiers/index.ejs', {classifiers: classifiers});
    };

//GET /classifiers/:classifierId
exports.show = function (req, res, next) {
    var classifierId = Number(req.params.classifierId);

    var classifier = models.Classifier.findById(classifierId);

    if (classifier) {
        res.render('classifiers/show', {classifier: classifier});
    } else {
        next(new Error('No existe el clasificador'));
    }
};


//GET /classifiers/:classifierId/predict
exports.predict = function(req, res, next) {
    var classifierId = Number(req.params.classifierId);

    var classifier = models.Classifier.findById(classifierId);

    var vars = req.query.vars;

    if (classifier) {
        var model = classifier.model;
        var prediction = 2;
        //Aquí se hace la predicción utilizando el modelo.
        var options = {
            mode: 'text',
            args: vars
        };
        var cwd = __dirname;
        PythonShell.run(model, options, cwd, function(err, result){
            if (err) throw err;
            prediction = result;
            res.render('classifiers/result' ,{
                classifier: classifier,
                prediction: prediction,
                vars: vars
            });
        });
    } else {
        next(new Error('No existe el clasificador'));
    }

}