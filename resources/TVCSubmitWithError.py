#!/usr/bin/env python
from sklearn.externals import joblib 
from sklearn.ensemble import RandomForestClassifier
import numpy as np
import pandas as pd
import sys
from random import randint

a_input = np.ndarray(shape=(1,3))

for i in range(a_input.shape[1]-1):
	a_input[0][i] = int(sys.argv[i+1])

a_input[0][a_input.shape[1]-1] = randint(0,10)
clasificador = '3varsClassifierWithErrors.pkl'  

clf = 0 
prediction = 0
clf = joblib.load(clasificador, 'r')

def predecir():
	prediction = clf.predict(a_input)
	return int(prediction)

predecir()