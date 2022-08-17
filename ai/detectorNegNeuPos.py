import json
import tensorflow as tf

from tensorflow.keras.preprocessing.sequence import pad_sequences

max_length = 100
trunc_type='post'
padding_type='post'
oov_tok = "<OOV>"

modelNegNeu = tf.keras.models.load_model('ai/saved_training/positive-negative/neg0neu1/model')
modelNegPos = tf.keras.models.load_model('ai/saved_training/positive-negative/neg0pos1/model')
modelNeuPos = tf.keras.models.load_model('ai/saved_training/positive-negative/neu0pos1/model')

import pickle
with open('ai/saved_training/positive-negative/neg0neu1/tokenizer.pickle', 'rb') as handle:
    tokenizerNegNeu = pickle.load(handle)
with open('ai/saved_training/positive-negative/neg0pos1/tokenizer.pickle', 'rb') as handle:
    tokenizerNegPos = pickle.load(handle)
with open('ai/saved_training/positive-negative/neu0pos1/tokenizer.pickle', 'rb') as handle:
    tokenizerNeuPos = pickle.load(handle)

#read in the sentences
import sys
sentences = []
for i in range(1, len(sys.argv)):
    sentences.append(sys.argv[i])

sequencesNegNeu = tokenizerNegNeu.texts_to_sequences(sentences)
paddedNegNeu = pad_sequences(sequencesNegNeu, maxlen=max_length, padding=padding_type, truncating=trunc_type)
answerNegNeu = modelNegNeu.predict(paddedNegNeu)

sequencesNegPos = tokenizerNegPos.texts_to_sequences(sentences)
paddedNegPos = pad_sequences(sequencesNegPos, maxlen=max_length, padding=padding_type, truncating=trunc_type)
answerNegPos = modelNegPos.predict(paddedNegPos)

sequencesNeuPos = tokenizerNeuPos.texts_to_sequences(sentences)
paddedNeuPos = pad_sequences(sequencesNeuPos, maxlen=max_length, padding=padding_type, truncating=trunc_type)
answerNeuPos = modelNeuPos.predict(paddedNeuPos)

for i in range(len(sentences)):
    if answerNegNeu[i] > 0.25 and answerNeuPos[i] < 0.25: #if not pos or neg, its neu
        print(1, end="")
    elif answerNegNeu[i] < 0.25 and answerNeuPos[i] < 0.25: #only neg
        print(0, end="")
    elif answerNegNeu[i] > 0.25 and answerNeuPos[i] > 0.25: #only pos
        print(2, end="")
    elif answerNegNeu[i] < 0.25 and answerNeuPos[i] > 0.25: #if both pos and neg, check with pos vs neg
        if answerNegPos[i] < 0.25: #neg
            print(0, end="")
        elif answerNegPos[i] > 0.75: #pos
            print(2, end="")
        else: #neu
            print(1, end="")
    

    

