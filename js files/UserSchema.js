// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");

var mongoose = require("mongoose");

var express = require("express");

var body-parser = require("body-parser");

var express-handlebars = require("express-handlebars");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `firstName` must be of type String
  // `firstName` will trim leading and trailing whitespace before it's saved
  // `firstName` is a required field and throws a custom error message if not supplied
  firstName: {
    type: String,
    trim: true,
    required: "First Name"
  },
  // `lastName` must be of type String
  // `lastName` will trim leading and trailing whitespace before it's saved
  // `lastName` is a required field and throws a custom error message if not supplied
  lastName: {
    type: String,
    trim: true,
    required: "Last Name"
  },
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  username: {
    type: String,
    trim: true,
    required: "Username"
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    trim: true,
    required: "Password",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // `lastUpdated` must be of type Date
  lastUpdated: Date,
  // `fullName` must be of type String
  fullName: String
});

// Custom Instance Methods

// Custom method `setFullName`
UserSchema.methods.setFullName = function() {
  // Set the current user's `fullName` to their `firstName` and their `lastName` together
  this.fullName = this.firstName + " " + this.lastName;
  // Return the new `fullName`
  return this.fullName;
};

// Custom method `lastUpdatedDate`
UserSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

// This creates our model from the above schema, using mongoose's model method

module.exports = User;
