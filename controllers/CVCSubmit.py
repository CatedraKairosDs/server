#!/usr/bin/env python
from sklearn.externals import joblib 
from sklearn.ensemble import RandomForestClassifier
import numpy as np
import pandas as pd
import sys
from random import randint

a_input = np.ndarray(shape=(1,4))

for i in range(a_input.shape[1]-1):
	a_input[0][i] = int(sys.argv[i+1])

a_input[0][a_input.shape[1]-1] = randint(0,10)
clasificador = '4varsClassifier.pkl'  

clf = 0 
prediction = 0
clf = joblib.load(clasificador, 'r')


print(clf.predict(a_input)[0])