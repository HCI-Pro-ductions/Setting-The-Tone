import json
import tensorflow as tf

from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

'''
vocab_size = 10000
embedding_dim = 16
max_length = 100
trunc_type='post'
padding_type='post'
oov_tok = "<OOV>"
training_size = 20000

import numpy as np
training_padded = np.array(training_padded)
training_labels = np.array(training_labels)
testing_padded = np.array(testing_padded)
testing_labels = np.array(testing_labels)
'''

max_length = 100
trunc_type='post'
padding_type='post'
oov_tok = "<OOV>"
vocab_size = 10000

model = tf.keras.models.load_model('ai/saved_training/model')
import pickle
with open('ai/saved_training/tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

input = input("Key in sentence>")
sentence = [input]
sequences = tokenizer.texts_to_sequences(sentence)
padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
answer = model.predict(padded)
print("Value = ", answer)
if answer > 0.8:
    print("Hence, it is sarastic /s")
else:
    print("Hence, it is *not* sarastic, no /s")