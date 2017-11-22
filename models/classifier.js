// Modelo

var gaussianClassifier = "GCSubmit.py";
var rfClassifier3vars = "./TVCSubmit.py";
var rfClassifier3varsErrors = "./TVCSubmitWithError.py";
var rfClassifier4vars = "./CVCSubmit.py";
var rfClassifier5vars = "FVCSubmit.py";
var rfClassifier5varsErrors = "FVCSubmitWithError.py";


var classifiers = [
    {
        id: 1,
        name: "Gaussian Naive Bayes",
        model: gaussianClassifier,
        vars: ['Localización', 'Experiencia'],
        description: "Este clasificador tiene tres inputs, localización, experiencia y una tercera variable de caracter aleatorio. La localización puede tomar valores entre 0 y 2, y la experiencia valores entre 0 y 15. En el proceso de entrenamiento se han utilizado datos sin variables ocultas."
    },
    {
        id: 2,
        name: "Random Forest con 3 variables",
        model: rfClassifier3vars,
        vars: ['Localización', 'Experiencia'],
        description: "Este clasificador tiene tres inputs, localización, experiencia y una tercera variable de caracter aleatorio. La localización puede tomar valores entre 0 y 2, y la experiencia valores entre 0 y 15. En el proceso de entrenamiento se han utilizado datos sin variables ocultas."
    },
    {
        id: 3,
        name: "Random Forest con 3 variables y 1 oculta",
        model: rfClassifier3varsErrors,
        vars: ['Localización', 'Experiencia'],
        description: "Este clasificador tiene tres inputs, localización, experiencia y una tercera variable de caracter aleatorio. La localización puede tomar valores entre 0 y 2, y la experiencia valores entre 0 y 15. En el proceso de entrenamiento se han utilizado datos con una variable oculta que supone un peso aproximado del 2%."
    },
    {
        id: 4,
        name: "Random Forest con 4 variables",
        model: rfClassifier4vars,
        vars: ['Localización', 'Experiencia', 'Conocimiento'],
        description: "Este clasificador tiene cuatro inputs, localización, experiencia, conocimiento y una cuarta variable de caracter aleatorio. La localización puede tomar valores entre 0 y 2, la experiencia valores entre 0 y 15, y el conocimiento valores entre 0 y 10. En el proceso de entrenamiento se han utilizado datos sin variables ocultas."
    },
    {
        id: 5,
        name: "Random Forest con 5 variables",
        model: rfClassifier5vars,
        vars: ['Localización', 'Experiencia', 'Conocimiento'],
        description: "Este clasificador tiene cinco inputs, localización, experiencia, conocimiento y dos variables de caracter aleatorio. La localización puede tomar valores entre 0 y 2, la experiencia valores entre 0 y 15, y el conocimiento valores entre 0 y 10. En el proceso de entrenamiento se han utilizado datos con sin variables ocultas."        
    },
    {
        id: 6,
        name: "Random Forest con 5 variables y 1 oculta",
        model: rfClassifier5varsErrors,
        vars: ['Localización', 'Experiencia', 'Conocimiento'],
        description: "Este clasificador tiene cinco inputs, localización, experiencia, conocimiento y dos variables de caracter aleatorio. La localización puede tomar valores entre 0 y 2, la experiencia valores entre 0 y 15, y el conocimiento valores entre 0 y 10. En el proceso de entrenamiento se han utilizado datos con dos variables ocultas que suponen un peso aproximado del 11%."    
    }
];

exports.findAll = function() {
    return classifiers;
};

exports.findById = function(id) {
    return classifiers.find(function(classifier){
        return classifier.id === id;
    });
}