const fs= require('fs');   
const restaurant = [];
const images= ["first","second","third","fourth","fifth","sixth","seven","eight","nine","ten"]
const rest_name=["The Cozy Bistro",
  "Oceanview Grill",
  "Spice Garden",
  "The Urban Fork",
  "Sweet Basil Café",
  "Ember's Steakhouse",
  "La Trattoria Bella",
  "The Blue Plate",
  "Harvest Table",
  "Bamboo Fusion",
  "Rustic Roost",
  "The Pasta Bar",
  "Velvet Sky Lounge",
  "The Greenhouse Diner",
  "Bella Cucina",
  "Firestone Tavern",
  "The Rolling Pin Bakery",
  "Mountain View Grill",
  "The Golden Spoon",
  "Sage & Thyme"]
const foodTypes= [
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Japanese",
    "American",
    "Mediterranean",
    "French",
    "Thai",
    "Greek"];
    const delhiLocations = [
        "India Gate",
        "Qutub Minar",
        "Red Fort",
        "Lotus Temple",
        "Humayun's Tomb",
        "Connaught Place",
        "Jama Masjid",
        "Chandni Chowk",
        "Akshardham Temple",
        "Raj Ghat"];
      
for(let i=0;i<100;i++){      //same way me 100 object create karo

    const obj= {};             //make an empty object
    obj["image"] = images[Math.floor(Math.random()*10)];         //ya to hum image ko obj me hi create karke phir baad me uske innerhtml me photo daal dete ya, isse v create kar skte hai image naam ke element ko obj k andar.
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj['rating'] = Math.floor(Math.random()*5+1);
    obj["food_type"]= foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"]= Math.floor(Math.random()*2401+100);
    obj["location"] = delhiLocations[Math.floor(Math.random()*10)];
    obj["distance"] = (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcohol"] = Math.random() > 0.7;
    obj["restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["restaurant_close_time"] = (obj["restaurant_open_time"]+12)%24;

    restaurant.push(obj);}
   
 const jsonData = JSON.stringify(restaurant,null,4);
//const path = require('path');
//const filepath = path.join(__dirname,'zomato.json');
fs.writeFileSync('zomato.json', jsonData , 'utf8');

//in this way, we have put all informations of 100 restaurants in a different file of json----------------------

