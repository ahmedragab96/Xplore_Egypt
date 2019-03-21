import csv  
import json  
  
# # Open the CSV  
# f = open( 'tourism.csv', 'rU' )  
# # Change each fieldname to the appropriate field name. I know, so difficult.  
# reader = csv.DictReader( f, fieldnames = ( "itemid","title","genres","rating","region" ))  
# # Parse the CSV into JSON  
# out = json.dumps( [ row for row in reader ],indent=4 )  
# print("JSON parsed!") 
# # Save the JSON  
# f = open( 'new.json', 'w')  
# f.write(out)  
# print("JSON saved!")  
# input_file = open ('new.json', encoding='utf-8-sig')
# json_array = json.load(input_file)
# for x in json_array:
# 	list_=x['genres'].split('|')
# 	x['type']=list_[0]
# 	x['price_cateogry']=list_[1]
# 	x['keywords']=json.dumps(list_[2:])
# 	x.pop('genres', None)

# with open('clean.json', 'w') as outfile:
#     json.dump(json_array, outfile,indent=4)

# all_trips = open ('Restaurants.json', encoding='utf-8-sig')
# Trips = open ('Restaurants_new.json', encoding='utf-8-sig')
# json_array_all_trips = json.load(all_trips)
# json_array_Trips = json.load(Trips)
# for x in json_array_all_trips:
# 	for y in json_array_Trips:
# 		if x['name']==y['title']:
# 			x['itemid']=(y['itemid'])


# with open('trial.json', 'w') as outfile:
#     json.dump(json_array_all_trips, outfile,indent=4)

# input_file = open ('Final_hotels.json', encoding='utf-8-sig')
# place = json.load(input_file)
# index=2041
# for x in place:
# 	if "itemid" not in x:
# 		x["itemid"]=index
# 		index+=1

# print(index)
# with open('trial_.json', 'w') as outfile:
#     json.dump(place, outfile,indent=4)

input_file = open ('Final2_trips.json', encoding='utf-8-sig')
trips = json.load(input_file)

for x in trips:
	for y in x['price']:
		if


with open('trial_.json', 'w') as outfile:
	json.dump(trips, outfile,indent=4)



# index=2030

# # while index<2031:
# # 	json_object={
# # 	"keywords":"",
# # 	"price_cateogry": "",
# # 	"type": "",
# # 	"itemid":"",
# # 	"title":"",
# # 	"rating":"",
# # 	"region":""}
# # 	json_object['itemid']=index
# # 	json_object['type']="trip"
# # 	print(json_object)
# # 	place.append(json_object)
# # 	index+=1
# while index<2040:
# 	json_object={
# 	"keywords":"",
# 	"price_cateogry": "",
# 	"type": "",
# 	"itemid":"",
# 	"title":"",
# 	"rating":"",
# 	"region":""}
# 	json_object['itemid']=index
# 	json_object['type']="Restaurant"
# 	place.append(json_object)
# 	index+=1

# while index<2045:
# 	json_object={
# 	"keywords":"",
# 	"price_cateogry": "",
# 	"type": "",
# 	"itemid":"",
# 	"title":"",
# 	"rating":"",
# 	"region":""}
# 	json_object['itemid']=index
# 	json_object['type']="Hotel"
# 	place.append(json_object)
# 	index+=1

# with open('new.json', 'w') as outfile:
# 	json.dump(place, outfile,indent=4)