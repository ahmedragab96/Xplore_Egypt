import os
import csv
import sys
from surprise import Dataset
from surprise import Reader
class tourismData:

    itemID_to_name = {}
    name_to_itemID = {}
    ratingsPath = os.path.expanduser('~')+'/Desktop/code/ml-latest-small/ratings.csv'
    itemsPath = os.path.expanduser('~')+'/Desktop/code/ml-latest-small/tourism.csv'
    
    def loadItems(self):

        # Look for files relative to the directory we are running from
        os.chdir(os.path.dirname(sys.argv[0]))

        ratingsDataset = 0
        self.itemID_to_name = {}
        self.itemID_to_genres = {}
        self.name_to_itemID = {}

        reader = Reader(line_format='user item rating timestamp', sep=',', skip_lines=1)
        ratingsDataset = Dataset.load_from_file(self.ratingsPath, reader=reader)
       
        with open(self.itemsPath, newline='', encoding='ISO-8859-1') as csvfile:
                itemReader = csv.reader(csvfile)
                next(itemReader)  #Skip header line
                for row in itemReader:
                    itemID = int(row[0])
                    itemName = row[1]
                    itemGenres=row[2]
                    self.itemID_to_name[itemID] = itemName
                    self.name_to_itemID[itemName] = itemID
                    self.itemID_to_genres[itemID]=itemGenres
                 
        return ratingsDataset
    

    def getUserRatings(self, user):
        userRatings = []
        hitUser = False
        with open(self.ratingsPath, newline='') as csvfile:
            ratingReader = csv.reader(csvfile)
            next(ratingReader)
            for row in ratingReader:
                userID = int(row[0])
                if (user == userID):
                    itemID = int(row[1])
                    rating = float(row[2])
                    userRatings.append((itemID, rating))
                    hitUser = True
                if (hitUser and (user != userID)):
                    break
        return userRatings

    
    def getItemName(self, itemID):
        if itemID in self.itemID_to_name:
            return self.itemID_to_name[itemID]
        else:
            return ""
    def getItemGenres(self, itemID):
        if itemID in self.itemID_to_genres:
            return self.itemID_to_genres[itemID]
        else:
            return ""
        
    def getItemID(self, itemName):
        if itemName in self.name_to_itemID:
            return self.name_to_itemID[itemName]
        else:
            return 0