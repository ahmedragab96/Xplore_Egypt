import numpy as np
import tensorflow as tf
import json
def softmax(x):
    return np.exp(x) / np.sum(np.exp(x), axis=0)

numItems = 1575   #number of items trained on

def predict(n): #edit to send matrix of user's rating for each movie// predict(trainingMatrix,n)
    #database
   json_data=open("userRatings.json").read()
   data = json.loads(json_data)
   userRatings=[]
   for object in data:
       userRatings.append((object["itemID"],object["rating"]))

   trainingMatrix = np.zeros([1,numItems, 10], dtype=np.float32)

   for iid, rating in userRatings:
        adjustedRating = int(float(rating)*2.0) - 1
        trainingMatrix[0,int(iid), adjustedRating] = 1
   trainingMatrix = np.reshape(trainingMatrix, [trainingMatrix.shape[0], -1])
   print(trainingMatrix.shape)
    #inputs to the model (trainingMatrix):matrix of user's ratings for each movie , shape:(1,items_number*10)

   #Restore the model
   tf.reset_default_graph()
   sess = tf.Session()  
   saver = tf.train.import_meta_graph('checkpoints/my_model-21.meta')
   saver.restore(sess, "checkpoints/my_model-21")
   print("Model restored.")
   
    #predict (model use)
   graph = tf.get_default_graph()
   bh= graph.get_tensor_by_name("hiddenBias:0")
   bv= graph.get_tensor_by_name("visibleBias:0")
   weights= graph.get_tensor_by_name("weights:0")
   X = tf.placeholder(tf.float32, [None, trainingMatrix.shape[1]], name="X")
   hidden = tf.nn.sigmoid(tf.matmul(X, weights) + bh)
   visible = tf.nn.sigmoid(tf.matmul(hidden, tf.transpose(weights)) + bv)
   feed = sess.run(hidden, feed_dict={ X: [trainingMatrix[0]]} )
   rec = sess.run(visible, feed_dict={ hidden: feed} )
   rec= np.reshape(rec, [numItems, 10])
   predictedRatings = np.zeros([numItems], dtype=np.float32)

   for itemID, recs in enumerate(rec):
       # The obvious thing would be to just take the rating with the highest score:                
       # but this just leads to a huge multi-way tie for 5-star predictions.
       # paper suggests performing normalization over K values to get probabilities and take the expectation as your prediction
        normalized = softmax(recs)
        rating = np.average(np.arange(10), weights=normalized)
        predictedRatings[itemID]=(rating + 1) * 0.5
   recommended_items=np.argsort(predictedRatings)[::-1][0:n]  #pick top n predicted items
   return '|'.join(str(e) for e in recommended_items)

#print(predict(10))
   
#use flask
from flask import Flask
#from flask import request
#code which helps initialize our server
app = Flask(__name__) 
#defining a /hello route for only post requests
@app.route('/recommend', methods=['GET'])
def index():
   #id=request.args.get("id")
   #string_id=str(id)
   query=predict(10)
   print(query)
   return(query)
