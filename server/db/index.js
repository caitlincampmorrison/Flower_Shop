const db = require("./db");
//const Customer = require("./customer.js");
const Flower = require("./flower");
const Sale = require("./sale")

Sale.hasMany(Flower)

module.exports = { db, Flower, Sale };