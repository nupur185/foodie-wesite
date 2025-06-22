//restaurant info
//1.img
//2. name
//3. rating
//4. food type
//5. price for two
//6. location
//7. distance
//8. offers
//9. alcohol
//10. restaurant opening time
//11. restaurnt closing time
//------------we can put all this in an object of each particular restaurant --------------------
//now, is all restaurant/objects ko ek array me store kr skte hai.


const restaurants = [
  {
    "image": "second",
    "name": "Spice Garden",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 902,
    "location": "Connaught Place",
    "distance": "9.2",
    "offers": 18,
    "alcohol": true,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "ten",
    "name": "Ember's Steakhouse",
    "rating": 1,
    "food_type": "American",
    "price_for_two": 1106,
    "location": "Jama Masjid",
    "distance": "5.7",
    "offers": 2,
    "alcohol": true,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "fifth",
    "name": "Spice Garden",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 712,
    "location": "Raj Ghat",
    "distance": "5.6",
    "offers": 19,
    "alcohol": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "first",
    "name": "The Urban Fork",
    "rating": 2,
    "food_type": "Italian",
    "price_for_two": 1554,
    "location": "Red Fort",
    "distance": "2.6",
    "offers": 18,
    "alcohol": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "ten",
    "name": "The Blue Plate",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 846,
    "location": "Humayun's Tomb",
    "distance": "4.6",
    "offers": 2,
    "alcohol": true,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "seven",
    "name": "Harvest Table",
    "rating": 4,
    "food_type": "Mexican",
    "price_for_two": 1837,
    "location": "Chandni Chowk",
    "distance": "9.2",
    "offers": 11,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "fourth",
    "name": "Mount-View Grill",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 1555,
    "location": "Akshardham Temple",
    "distance": "6.1",
    "offers": 11,
    "alcohol": true,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "nine",
    "name": "Greenhouse Dine",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 1671,
    "location": "Akshardham Temple",
    "distance": "9.6",
    "offers": 13,
    "alcohol": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "ten",
    "name": "Bella Cucina",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 809,
    "location": "Jama Masjid",
    "distance": "8.3",
    "offers": 1,
    "alcohol": false,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "fourth",
    "name": "Mount-view Grill",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 1424,
    "location": "Connaught Place",
    "distance": "2.9",
    "offers": 28,
    "alcohol": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "nine",
    "name": "Golden Spoon",
    "rating": 4,
    "food_type": "Mediterranean",
    "price_for_two": 2328,
    "location": "Chandni Chowk",
    "distance": "8.2",
    "offers": 5,
    "alcohol": true,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "eight",
    "name": "Spice Garden",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 1226,
    "location": "Red Fort",
    "distance": "1.9",
    "offers": 21,
    "alcohol": false,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  },
  {
    "image": "third",
    "name": "Mount-view Grill",
    "rating": 4,
    "food_type": "American",
    "price_for_two": 1307,
    "location": "Jama Masjid",
    "distance": "6.2",
    "offers": 1,
    "alcohol": true,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "first",
    "name": "Rustic Roost",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 1870,
    "location": "Red Fort",
    "distance": "8.7",
    "offers": 19,
    "alcohol": false,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "ten",
    "name": "Greenhouse Dine",
    "rating": 1,
    "food_type": "Chinese",
    "price_for_two": 1788,
    "location": "Lotus Temple",
    "distance": "1.1",
    "offers": 4,
    "alcohol": false,
    "restaurant_open_time": 1,
    "restaurant_close_time": 13
  },
  {
    "image": "third",
    "name": "Ember's Steakhouse",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 1140,
    "location": "Raj Ghat",
    "distance": "3.6",
    "offers": 7,
    "alcohol": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "third",
    "name": "Sweet Basil Café",
    "rating": 1,
    "food_type": "Greek",
    "price_for_two": 263,
    "location": "Humayun's Tomb",
    "distance": "5.6",
    "offers": 1,
    "alcohol": true,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "ten",
    "name": "Firestone Tavern",
    "rating": 4,
    "food_type": "Mediterranean",
    "price_for_two": 103,
    "location": "Qutub Minar",
    "distance": "3.0",
    "offers": 3,
    "alcohol": false,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "eight",
    "name": "The Urban Fork",
    "rating": 3,
    "food_type": "Mexican",
    "price_for_two": 1879,
    "location": "Qutub Minar",
    "distance": "7.6",
    "offers": 2,
    "alcohol": false,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "first",
    "name": "Velvet Lounge",
    "rating": 5,
    "food_type": "Greek",
    "price_for_two": 299,
    "location": "Red Fort",
    "distance": "2.1",
    "offers": 20,
    "alcohol": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "third",
    "name": "The Cozy Bistro",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 2443,
    "location": "Red Fort",
    "distance": "2.4",
    "offers": 20,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "first",
    "name": "The Golden Spoon",
    "rating": 2,
    "food_type": "Japanese",
    "price_for_two": 1877,
    "location": "Connaught Place",
    "distance": "2.1",
    "offers": 15,
    "alcohol": false,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "eight",
    "name": "Bella Cucina",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 2139,
    "location": "Connaught Place",
    "distance": "1.7",
    "offers": 4,
    "alcohol": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "second",
    "name": "Firestone Tavern",
    "rating": 2,
    "food_type": "Chinese",
    "price_for_two": 403,
    "location": "India Gate",
    "distance": "9.0",
    "offers": 17,
    "alcohol": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "nine",
    "name": "Velvet Lounge",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 552,
    "location": "Akshardham Temple",
    "distance": "2.5",
    "offers": 10,
    "alcohol": true,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "second",
    "name": "Mount-view Grill",
    "rating": 2,
    "food_type": "Japanese",
    "price_for_two": 1116,
    "location": "Lotus Temple",
    "distance": "9.8",
    "offers": 16,
    "alcohol": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "first",
    "name": "Harvest Table",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 2285,
    "location": "India Gate",
    "distance": "8.7",
    "offers": 1,
    "alcohol": true,
    "restaurant_open_time": 16,
    "restaurant_close_time": 4
  },
  {
    "image": "fifth",
    "name": "Velvet Lounge",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 1328,
    "location": "Connaught Place",
    "distance": "7.0",
    "offers": 3,
    "alcohol": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "sixth",
    "name": "Rustic Roost",
    "rating": 5,
    "food_type": "French",
    "price_for_two": 871,
    "location": "Qutub Minar",
    "distance": "9.9",
    "offers": 24,
    "alcohol": true,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "third",
    "name": "The Blue Plate",
    "rating": 4,
    "food_type": "Italian",
    "price_for_two": 1631,
    "location": "Connaught Place",
    "distance": "6.8",
    "offers": 27,
    "alcohol": false,
    "restaurant_open_time": 19,
    "restaurant_close_time": 7
  },
  {
    "image": "seven",
    "name": "Bella Cucina",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 2144,
    "location": "Lotus Temple",
    "distance": "1.6",
    "offers": 27,
    "alcohol": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "seven",
    "name": "Spice Garden",
    "rating": 4,
    "food_type": "Italian",
    "price_for_two": 2312,
    "location": "India Gate",
    "distance": "7.1",
    "offers": 14,
    "alcohol": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "nine",
    "name": "Harvest Table",
    "rating": 4,
    "food_type": "American",
    "price_for_two": 1982,
    "location": "Humayun's Tomb",
    "distance": "8.0",
    "offers": 19,
    "alcohol": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "seven",
    "name": "Ember's Steakhouse",
    "rating": 2,
    "food_type": "Indian",
    "price_for_two": 1199,
    "location": "Jama Masjid",
    "distance": "2.5",
    "offers": 22,
    "alcohol": false,
    "restaurant_open_time": 8,
    "restaurant_close_time": 20
  },
  {
    "image": "eight",
    "name": "Ember's Steakhouse",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 2262,
    "location": "Lotus Temple",
    "distance": "7.4",
    "offers": 9,
    "alcohol": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "fourth",
    "name": "Firestone Tavern",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 989,
    "location": "Akshardham Temple",
    "distance": "6.9",
    "offers": 10,
    "alcohol": true,
    "restaurant_open_time": 1,
    "restaurant_close_time": 13
  },
  {
    "image": "fourth",
    "name": "Bella Cucina",
    "rating": 1,
    "food_type": "Chinese",
    "price_for_two": 1589,
    "location": "Jama Masjid",
    "distance": "10.2",
    "offers": 25,
    "alcohol": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "eight",
    "name": "Velvet Lounge",
    "rating": 4,
    "food_type": "Chinese",
    "price_for_two": 2183,
    "location": "Humayun's Tomb",
    "distance": "9.9",
    "offers": 1,
    "alcohol": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "seven",
    "name": "Oceanview Grill",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 616,
    "location": "Red Fort",
    "distance": "10.7",
    "offers": 22,
    "alcohol": false,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "seven",
    "name": "Greenhouse Dine",
    "rating": 4,
    "food_type": "French",
    "price_for_two": 2024,
    "location": "Lotus Temple",
    "distance": "7.1",
    "offers": 25,
    "alcohol": true,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "ten",
    "name": "Ember's Steakhouse",
    "rating": 4,
    "food_type": "Greek",
    "price_for_two": 1701,
    "location": "Connaught Place",
    "distance": "8.6",
    "offers": 28,
    "alcohol": false,
    "restaurant_open_time": 1,
    "restaurant_close_time": 13
  },
  {
    "image": "fourth",
    "name": "The Blue Plate",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 2408,
    "location": "Akshardham Temple",
    "distance": "5.5",
    "offers": 10,
    "alcohol": true,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "third",
    "name": "Mount-view Grill",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 206,
    "location": "Chandni Chowk",
    "distance": "4.3",
    "offers": 22,
    "alcohol": true,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "fourth",
    "name": "Oceanview Grill",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 1374,
    "location": "Chandni Chowk",
    "distance": "6.1",
    "offers": 4,
    "alcohol": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "first",
    "name": "Velvet Lounge",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 1058,
    "location": "Humayun's Tomb",
    "distance": "8.5",
    "offers": 6,
    "alcohol": false,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "seven",
    "name": "Bella Cucina",
    "rating": 4,
    "food_type": "American",
    "price_for_two": 757,
    "location": "Qutub Minar",
    "distance": "7.9",
    "offers": 10,
    "alcohol": false,
    "restaurant_open_time": 12,
    "restaurant_close_time": 0
  },
  {
    "image": "sixth",
    "name": "Mount-view Grill",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 146,
    "location": "Connaught Place",
    "distance": "1.6",
    "offers": 13,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "sixth",
    "name": "Velvet Lounge",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 1758,
    "location": "India Gate",
    "distance": "1.7",
    "offers": 6,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "second",
    "name": "The Pasta Bar",
    "rating": 1,
    "food_type": "Indian",
    "price_for_two": 390,
    "location": "Red Fort",
    "distance": "8.8",
    "offers": 14,
    "alcohol": true,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "ten",
    "name": "Roll-Pin Bakery",
    "rating": 4,
    "food_type": "Chinese",
    "price_for_two": 1673,
    "location": "Qutub Minar",
    "distance": "6.8",
    "offers": 2,
    "alcohol": true,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "ten",
    "name": "Sage & Thyme",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 627,
    "location": "Humayun's Tomb",
    "distance": "8.6",
    "offers": 19,
    "alcohol": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "second",
    "name": "The Blue Plate",
    "rating": 2,
    "food_type": "Japanese",
    "price_for_two": 108,
    "location": "Connaught Place",
    "distance": "7.3",
    "offers": 15,
    "alcohol": true,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "sixth",
    "name": "Harvest Table",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 1451,
    "location": "Akshardham Temple",
    "distance": "9.5",
    "offers": 24,
    "alcohol": true,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "fifth",
    "name": "Bamboo Fusion",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 554,
    "location": "Qutub Minar",
    "distance": "4.4",
    "offers": 21,
    "alcohol": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "third",
    "name": "Mount-view Grill",
    "rating": 1,
    "food_type": "French",
    "price_for_two": 420,
    "location": "Raj Ghat",
    "distance": "9.7",
    "offers": 22,
    "alcohol": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "sixth",
    "name": "Bamboo Fusion",
    "rating": 2,
    "food_type": "Mexican",
    "price_for_two": 1865,
    "location": "India Gate",
    "distance": "1.7",
    "offers": 20,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "eight",
    "name": "The Cozy Bistro",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 770,
    "location": "Chandni Chowk",
    "distance": "5.4",
    "offers": 22,
    "alcohol": true,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  },
  {
    "image": "fourth",
    "name": "The Pasta Bar",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 2395,
    "location": "Qutub Minar",
    "distance": "2.5",
    "offers": 4,
    "alcohol": false,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "second",
    "name": "Mount-view Grill",
    "rating": 4,
    "food_type": "Italian",
    "price_for_two": 2088,
    "location": "Akshardham Temple",
    "distance": "10.7",
    "offers": 21,
    "alcohol": true,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "third",
    "name": "Oceanview Grill",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 1882,
    "location": "Chandni Chowk",
    "distance": "5.4",
    "offers": 18,
    "alcohol": true,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "seven",
    "name": "The Urban Fork",
    "rating": 4,
    "food_type": "Indian",
    "price_for_two": 201,
    "location": "India Gate",
    "distance": "8.1",
    "offers": 2,
    "alcohol": true,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "eight",
    "name": "Bella Cucina",
    "rating": 4,
    "food_type": "Greek",
    "price_for_two": 2425,
    "location": "Jama Masjid",
    "distance": "1.3",
    "offers": 19,
    "alcohol": false,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "fifth",
    "name": "Harvest Table",
    "rating": 1,
    "food_type": "American",
    "price_for_two": 1655,
    "location": "Qutub Minar",
    "distance": "3.7",
    "offers": 21,
    "alcohol": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "sixth",
    "name": "Bella Cucina",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 591,
    "location": "Akshardham Temple",
    "distance": "5.0",
    "offers": 2,
    "alcohol": false,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "seven",
    "name": "Greenhouse Dine",
    "rating": 1,
    "food_type": "French",
    "price_for_two": 1256,
    "location": "Chandni Chowk",
    "distance": "2.3",
    "offers": 14,
    "alcohol": false,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "sixth",
    "name": "Rustic Roost",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 2023,
    "location": "Jama Masjid",
    "distance": "8.7",
    "offers": 13,
    "alcohol": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "first",
    "name": "Spice Garden",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 1883,
    "location": "Humayun's Tomb",
    "distance": "2.8",
    "offers": 9,
    "alcohol": true,
    "restaurant_open_time": 12,
    "restaurant_close_time": 0
  },
  {
    "image": "second",
    "name": "Oceanview Grill",
    "rating": 3,
    "food_type": "French",
    "price_for_two": 2277,
    "location": "Jama Masjid",
    "distance": "2.2",
    "offers": 28,
    "alcohol": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "ten",
    "name": "The Golden Spoon",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 857,
    "location": "Raj Ghat",
    "distance": "9.0",
    "offers": 28,
    "alcohol": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "first",
    "name": "Bella Cucina",
    "rating": 4,
    "food_type": "Indian",
    "price_for_two": 580,
    "location": "Lotus Temple",
    "distance": "3.2",
    "offers": 5,
    "alcohol": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "second",
    "name": "Sweet Basil Café",
    "rating": 4,
    "food_type": "Italian",
    "price_for_two": 2340,
    "location": "Humayun's Tomb",
    "distance": "6.8",
    "offers": 9,
    "alcohol": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "fifth",
    "name": "Mount-view Grill",
    "rating": 4,
    "food_type": "French",
    "price_for_two": 2090,
    "location": "Connaught Place",
    "distance": "7.8",
    "offers": 13,
    "alcohol": true,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "third",
    "name": "The Pasta Bar",
    "rating": 3,
    "food_type": "American",
    "price_for_two": 636,
    "location": "Humayun's Tomb",
    "distance": "1.1",
    "offers": 13,
    "alcohol": true,
    "restaurant_open_time": 12,
    "restaurant_close_time": 0
  },
  {
    "image": "eight",
    "name": "Sage & Thyme",
    "rating": 2,
    "food_type": "Mexican",
    "price_for_two": 1302,
    "location": "Qutub Minar",
    "distance": "10.4",
    "offers": 23,
    "alcohol": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "third",
    "name": "Roll-Pin Bakery",
    "rating": 2,
    "food_type": "Chinese",
    "price_for_two": 1473,
    "location": "Red Fort",
    "distance": "6.5",
    "offers": 18,
    "alcohol": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "eight",
    "name": "The Cozy Bistro",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 2231,
    "location": "Lotus Temple",
    "distance": "1.3",
    "offers": 8,
    "alcohol": false,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "second",
    "name": "Sage & Thyme",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 493,
    "location": "Red Fort",
    "distance": "9.4",
    "offers": 27,
    "alcohol": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "fourth",
    "name": "The Cozy Bistro",
    "rating": 5,
    "food_type": "Greek",
    "price_for_two": 1076,
    "location": "Lotus Temple",
    "distance": "10.8",
    "offers": 17,
    "alcohol": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "second",
    "name": "Bamboo Fusion",
    "rating": 5,
    "food_type": "French",
    "price_for_two": 2422,
    "location": "Humayun's Tomb",
    "distance": "3.0",
    "offers": 11,
    "alcohol": false,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "fifth",
    "name": "Oceanview Grill",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 489,
    "location": "Jama Masjid",
    "distance": "9.2",
    "offers": 27,
    "alcohol": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "third",
    "name": "Greenhouse Dine",
    "rating": 3,
    "food_type": "French",
    "price_for_two": 663,
    "location": "Raj Ghat",
    "distance": "4.9",
    "offers": 2,
    "alcohol": true,
    "restaurant_open_time": 1,
    "restaurant_close_time": 13
  },
  {
    "image": "nine",
    "name": "The Pasta Bar",
    "rating": 4,
    "food_type": "Mediterranean",
    "price_for_two": 2412,
    "location": "India Gate",
    "distance": "3.8",
    "offers": 20,
    "alcohol": true,
    "restaurant_open_time": 16,
    "restaurant_close_time": 4
  },
  {
    "image": "eight",
    "name": "Ember's Steakhouse",
    "rating": 4,
    "food_type": "Mexican",
    "price_for_two": 2298,
    "location": "Lotus Temple",
    "distance": "7.8",
    "offers": 5,
    "alcohol": true,
    "restaurant_open_time": 8,
    "restaurant_close_time": 20
  },
  {
    "image": "ten",
    "name": "Bella Cucina",
    "rating": 1,
    "food_type": "Chinese",
    "price_for_two": 2011,
    "location": "Connaught Place",
    "distance": "2.4",
    "offers": 24,
    "alcohol": false,
    "restaurant_open_time": 12,
    "restaurant_close_time": 0
  },
  {
    "image": "ten",
    "name": "Bella Cucina",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 2486,
    "location": "Raj Ghat",
    "distance": "1.2",
    "offers": 1,
    "alcohol": false,
    "restaurant_open_time": 8,
    "restaurant_close_time": 20
  },
  {
    "image": "eight",
    "name": "Roll-Pin Bakery",
    "rating": 1,
    "food_type": "Mediterranean",
    "price_for_two": 886,
    "location": "Connaught Place",
    "distance": "6.3",
    "offers": 9,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "third",
    "name": "Rustic Roost",
    "rating": 5,
    "food_type": "American",
    "price_for_two": 503,
    "location": "Lotus Temple",
    "distance": "7.8",
    "offers": 27,
    "alcohol": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "seven",
    "name": "Sweet Basil Café",
    "rating": 1,
    "food_type": "Greek",
    "price_for_two": 1238,
    "location": "Qutub Minar",
    "distance": "8.8",
    "offers": 17,
    "alcohol": false,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "fourth",
    "name": "La Trattoria Bella",
    "rating": 5,
    "food_type": "Mediterranean",
    "price_for_two": 1492,
    "location": "Qutub Minar",
    "distance": "3.9",
    "offers": 28,
    "alcohol": false,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "fourth",
    "name": "Velvet Lounge",
    "rating": 5,
    "food_type": "Italian",
    "price_for_two": 1823,
    "location": "Lotus Temple",
    "distance": "8.9",
    "offers": 17,
    "alcohol": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "eight",
    "name": "Mount-view Grill",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 1089,
    "location": "Connaught Place",
    "distance": "10.5",
    "offers": 12,
    "alcohol": false,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "first",
    "name": "Sage & Thyme",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 1336,
    "location": "Raj Ghat",
    "distance": "7.9",
    "offers": 24,
    "alcohol": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "eight",
    "name": "Sweet Basil Café",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 620,
    "location": "Raj Ghat",
    "distance": "1.4",
    "offers": 27,
    "alcohol": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "eight",
    "name": "Mount-view Grill",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 1290,
    "location": "India Gate",
    "distance": "4.9",
    "offers": 4,
    "alcohol": true,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "seven",
    "name": "Firestone Tavern",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 2130,
    "location": "Chandni Chowk",
    "distance": "4.8",
    "offers": 13,
    "alcohol": false,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "ten",
    "name": "Sweet Basil Café",
    "rating": 4,
    "food_type": "Thai",
    "price_for_two": 336,
    "location": "Red Fort",
    "distance": "9.3",
    "offers": 24,
    "alcohol": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "ten",
    "name": "Greenhouse Dine",
    "rating": 4,
    "food_type": "American",
    "price_for_two": 897,
    "location": "Akshardham Temple",
    "distance": "4.0",
    "offers": 2,
    "alcohol": false,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "fourth",
    "name": "The Blue Plate",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 1554,
    "location": "Red Fort",
    "distance": "8.7",
    "offers": 23,
    "alcohol": false,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "fourth",
    "name": "Sage & Thyme",
    "rating": 2,
    "food_type": "Mediterranean",
    "price_for_two": 1409,
    "location": "Lotus Temple",
    "distance": "4.3",
    "offers": 6,
    "alcohol": true,
    "restaurant_open_time": 8,
    "restaurant_close_time": 20
  },
  {
    "image": "nine",
    "name": "Bella Cucina",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 1865,
    "location": "Akshardham Temple",
    "distance": "3.7",
    "offers": 19,
    "alcohol": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  }
]

/*-------------making cards----------------*/

function getrestaurant(restaurants){

  const root= document.getElementById('root');
     restaurants.forEach(restaurant => {

      //create a card in which
      //1.image -> 
      //2.card content ->
  //      i: card header (name and rating)
  //      ii: card footer (food type and price)
  //      iii: card location (restaurant location and distance)

//create a card
       const card = document.createElement('div');
       card.classList.add('card');
//create image
       const pictures=document.createElement('div');
       pictures.classList.add('pictures');

       const image= document.createElement("img");
       image.src=`${restaurant.image}.avif`;

//create offer tag
       const card_offer=document.createElement('span');
       card_offer.innerText= "Flat " + restaurant.offers+"% OFF";
       card_offer.classList.add('card-offer');

       pictures.appendChild(image);
       pictures.appendChild(card_offer);

//create card content
       const card_content= document.createElement('div');
       card_content.classList.add('card-content');
 //card header
       const card_header= document.createElement('div');
       card_header.classList.add('card-header');
       const h3= document.createElement('h3');
       h3.textContent = restaurant.name;
       const rate = document.createElement('span');
       rate.textContent = "Rating: " + restaurant.rating;
       rate.classList.add('rating');

       card_header.appendChild(h3);
       card_header.appendChild(rate);

 //card footer
       const card_footer= document.createElement('div');
       card_footer.classList.add('card-footer');
       const food= document.createElement('span');
       food.textContent = restaurant.food_type;
       const price = document.createElement('span');
       price.textContent = "₹"+restaurant.price_for_two;
      
       card_footer.appendChild(food);
       card_footer.appendChild(price);

 //card location
       const card_location= document.createElement('div');
       card_location.classList.add('card-location');
       const location= document.createElement('span');
       location.textContent = restaurant.location;
       const distance = document.createElement('span');
       distance.textContent = restaurant.distance + "km";

       card_location.appendChild(location);
       card_location.appendChild(distance);

       card_content.appendChild(card_header);
       card_content.appendChild(card_footer);
       card_content.appendChild(card_location);

       //card.appendChild(image);
       card.appendChild(pictures);
       card.appendChild(card_content);
    root.appendChild(card);
     });}

getrestaurant(restaurants);

document.getElementById('alcohol').addEventListener('click',()=>{

//to get filtered data
   const result = restaurants.filter((obj)=>obj.alcohol);

//to remove pichla data
   document.getElementById('root').innerHTML="";   //or to remove we can also write  //document.getElementById('root').replaceChildren();  //it will also do the same work here
   getrestaurant(result);
})

document.getElementById('rating').addEventListener('click',()=>{

  //to get filtered data
     const result = restaurants.filter((obj)=>obj.rating>4.5);
  
  //to remove pichla data
     document.getElementById('root').replaceChildren();  
     getrestaurant(result);
  })

document.getElementById('open').addEventListener('click',()=>{
    const now= new Date();
    const hours=now.getHours();
    const result= restaurants.filter((obj)=>(obj.restaurant_close_time>hours && hours>obj.restaurant_open_time));

//to remove pichla data
    document.getElementById('root').replaceChildren();  
     getrestaurant(result);
})

document.getElementById('offering').addEventListener('click',()=> {
  const result= restaurants.sort((a,b)=>b.offers-a.offers);

  //to remove pichla data
    document.getElementById('root').replaceChildren();  
     getrestaurant(result);
})

  
document.getElementById('filters').addEventListener('click',()=>{
       document.getElementById('filterpopup').classList.remove("hidden");
    })

document.getElementById('applyfilter').addEventListener('click',()=>{
       
//select attribute on the basis of checked input attribute
         const element = document.querySelector('input[name="filteroption"]:checked');

  const answer= element.value;

     if(answer==="rating"){
      restaurants.sort((a,b)=>b.rating-a.rating);}
     else if(answer==="highlow"){
      restaurants.sort((a,b)=>b.price_for_two-a.price_for_two);}
     else if(answer==="costlowhigh"){
      restaurants.sort((a,b)=>a.price_for_two-b.price_for_two);}
     else if(answer==="distance"){
      restaurants.sort((a,b)=>a.distance-b.distance);}
      
      //to remove pichla data
         document.getElementById('root').replaceChildren();  
         document.getElementById('filterpopup').classList.add("hidden");
         getrestaurant(restaurants);
      })   
      
document.getElementById('closefilter').addEventListener('click',()=>{
           document.getElementById('filterpopup').classList.add("hidden");
})



  //first footer working//

  const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    items.forEach(i => i.classList.remove('active'));
    items.forEach(i => i.querySelector('.accordion-content').style.display = 'none');
    
    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.accordion-content').style.display = 'block';
    }
  });
});



//search bar working

const searchbar= document.getElementById('searchbar');

searchbar.addEventListener('input', () => {
  const query = searchbar.value.trim().toLowerCase();

  const result = restaurants.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.food_type.toLowerCase().includes(query)   
);
document.getElementById('root').replaceChildren();

  // Display filtered results
  getrestaurant(result);
});


//location bar working

const locate= document.getElementById('locate');

locate.addEventListener('input', () => {
  const query = locate.value.trim().toLowerCase();

  const result = restaurants.filter(item =>
    item.location.toLowerCase().includes(query));
document.getElementById('root').replaceChildren();

  // Display filtered results
  getrestaurant(result);
});



//login signup slider

const btnLogin = document.getElementById('btn-login');
const btnSignup = document.getElementById('btn-signup');
const slider = document.getElementById('slid');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

btnLogin.onclick = () => {
  slider.style.left = '0';
  loginForm.classList.remove('hidd');
  signupForm.classList.add('hidd');
};

btnSignup.onclick = () => {
  slider.style.left = '50%';
  loginForm.classList.add('hidd');
  signupForm.classList.remove('hidd');
};




document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btn-login");
    const btnSignup = document.getElementById("btn-signup");
    const formLogin = document.getElementById("login-form");
    const formSignup = document.getElementById("signup-form");
    const slid = document.getElementById("slid");
    const linkToSignup = document.getElementById("no");
    const linkToLogin = document.getElementById("yes");

    function showLogin() {
      formLogin.classList.remove("hidd");
      formSignup.classList.add("hidd");
      slid.style.left = "0%";
    }

    function showSignup() {
      formSignup.classList.remove("hidd");
      formLogin.classList.add("hidd");
      slid.style.left = "50%";
    }

    btnLogin.addEventListener("click", showLogin);
    btnSignup.addEventListener("click", showSignup);

    linkToSignup.addEventListener("click", (e) => {
      e.preventDefault();
      showSignup();
    });

    linkToLogin.addEventListener("click", (e) => {
      e.preventDefault();
      showLogin();
    });
  });



//login signup header button click to open window

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const container = document.querySelector(".cont");
    const slid = document.getElementById("slid");

    const openLoginBtn = document.getElementById("open-login");
    const openSignupBtn = document.getElementById("open-signup");

    function showContainerAndLogin() {
      container.style.display = "block";
      loginForm.classList.remove("hidd");
      signupForm.classList.add("hidd");
      slid.style.left = "0%";
    }

    function showContainerAndSignup() {
      container.style.display = "block";
      signupForm.classList.remove("hidd");
      loginForm.classList.add("hidd");
      slid.style.left = "50%";
    }

    openLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showContainerAndLogin();
    });

    openSignupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showContainerAndSignup();
    });
  });



document.addEventListener("DOMContentLoaded", function () {
    const cutBtn = document.getElementById("cut");
    const popupContainer = document.querySelector(".up-show");

    cutBtn.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });