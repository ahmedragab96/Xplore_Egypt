from tourismData import tourismData
from RBM import RBM
import numpy as np

def LoadData():
    ml = tourismData()
    print("Loading items ratings...")
    data = ml.loadItems()
    print(data)
    return (ml, data)


# Load up common data set for the recommender algorithms
(ml, evaluationData) = LoadData()
#to train the model
trainset= evaluationData.build_full_trainset()
numUsers = trainset.n_users
numItems = trainset.n_items
trainingMatrix = np.zeros([numUsers, numItems, 10], dtype=np.float32)
for (uid, iid, rating) in trainset.all_ratings():
        adjustedRating = int(float(rating)*2.0) - 1
        trainingMatrix[int(uid), int(iid), adjustedRating] = 1
# Flatten to a 2D array, with nodes for each possible rating type on each possible item, for every user.
trainingMatrix = np.reshape(trainingMatrix, [trainingMatrix.shape[0], -1])
epochs=22
hiddenDim=100
learningRate=0.001
batchSize=100
# Create an RBM with (num items * rating values) visible nodes
rbm_recommend = RBM(trainingMatrix.shape[1], hiddenDimensions=hiddenDim, learningRate=learningRate, batchSize=batchSize, epochs=epochs)
rbm_recommend.Train(trainingMatrix)