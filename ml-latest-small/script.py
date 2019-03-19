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
input_file = open ('new.json', encoding='utf-8-sig')
json_array = json.load(input_file)
for x in json_array:
	list_=x['genres'].split('|')
	x['type']=list_[0]
	x['price_cateogry']=list_[1]
	x['keywords']=json.dumps(list_[2:])
	x.pop('genres', None)

with open('clean.json', 'w') as outfile:
    json.dump(json_array, outfile,indent=4)