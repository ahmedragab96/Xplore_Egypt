import csv  
import json  

input_file = open ('editedFinal2_hotels.json', encoding='utf-8-sig')
hotels = json.load(input_file)

# ----------------------------------------- for the missing attributes------------------------------------
for x in hotels:
    if "mapURL" not in x:
        x['mapURL'] = " "
    if "features" not in x:
        x['features'] = " "
    if "StyleandPrice" not in x:
        x['StyleandPrice'] = " "
    if "description" not in x:
        x['description'] = " "
    if "priceRange" not in x:
        x['priceRange'] = " "
    if "address" not in x:
        x['address'] = " "
    if "imageURL" not in x:
        x['imageURL'] = " "
    if "priceLow" not in x:
        x['priceLow'] = " "
    if "priceHigh" not in x:
        x['priceHigh'] = " "



with open('trial_.json', 'w') as outfile:
	json.dump(hotels, outfile,indent=4)