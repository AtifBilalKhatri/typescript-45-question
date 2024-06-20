"use strict";
function city_Country(city, country) {
    return (`"${city},${country}"`);
}
console.log(city_Country("Hyderabad", "Paksitan"));
console.log(city_Country("New York", "USA"));
console.log(city_Country("Paris", "France"));
