import json
from collections import OrderedDict

#Testing Parse method
#parse("HOTEL CLASS\r\nROOM TYPES\r\nNon-Smoking Rooms, Suites, Family Rooms, Smoking rooms available\r\nNUMBER OF ROOMS\r\n15\r\nPRICE RANGE\r\nEGP 395 - EGP 682 (Based on Average Rates for a Standard Room)\r\nLOCATION\r\nEgypt > Cairo Governorate > Cairo\r\n")
	
#Get AveragePrice From styleand price value
def parseforPrice(s):
	sarray=s.split("\r\n")
	for x in sarray:
		if x=="PRICE RANGE":
			index=sarray.index(x)+1
			return(sarray[index])

#parsing features 
def parseFeatures(s):
	sarray=s.split("\r\n")
	string='|'.join(sarray)
	return(string)
#testing parsing features 

# parseFeatures("Free High Speed Internet (WiFi)\r\nBreakfast included\r\nRoom Service\r\nAir Conditioning\r\nAirport Transportation\r\nBabysitting\r\nBreakfast Available\r\nDry Cleaning\r\nLaundry Service\r\nMultilingual Staff\r\nNon-Smoking Hotel\r\nSelf-Serve Laundry\r\nShuttle Bus Service\r\nRestaurant\r\n")

							
#main

input_file = open ('hurghada34.json', encoding='utf-8-sig')
json_array = json.load(input_file)
for x in json_array:
	x['features']=parseFeatures(x['features'])
	if x['rate'][0].isalpha():
		x['rate']=""
	if x['priceRange']=="":
		x['priceRange']=parseforPrice(x['StyleandPrice'])
	if (x['priceRange'][0]=='E' and x['priceRange'][1]=='G' and x['priceRange'][2]=='P'):
    		pass
	else:
		x['priceRange']=parseforPrice(x['StyleandPrice'])

with open('P4OUT.json', 'w') as outfile:
    json.dump(json_array, outfile,indent=4)
		

# print(json_array[20]['name'])
