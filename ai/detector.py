import json
import tensorflow as tf

from tensorflow.keras.preprocessing.sequence import pad_sequences

max_length = 100
trunc_type='post'
padding_type='post'
oov_tok = "<OOV>"
vocab_size = 10000

model = tf.keras.models.load_model('ai/saved_training/model')
print(model.summary())
import pickle
with open('ai/saved_training/tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

#read in the sentences
import sys
sentence = []
for i in range(1, len(sys.argv)):
    sentence.append(sys.argv[i])

sequences = tokenizer.texts_to_sequences(sentence)
padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
answer = model.predict(padded)
#print("Value=", answer)
if answer > 0.2:
    print("It is sarcastic, /s", "(Value: ", answer, ")")
else:
    print("It is *not* sarcastic, no /s", "(Value: ", answer, ")")
