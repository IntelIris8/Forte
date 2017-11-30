var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");

var mongoose = require("mongoose");

var express = require("express");

var body-parser = require("body-parser");

var express-handlebars = require("express-handlebars");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var Articles = new Schema({
	Headlines: {
		type: String,
		required: true
	},
	Summary: {
	type: String,
	required: true

	} 
	URL: {
		type: String,
		required: true
	},
	comments: {
		type: Schema.Types.ObjectId,
		ref: "Comment"
	},
	fullURL: {
		type: String,
		required: true
	}

});

Articles.methods.addURL = function() {
  // Set the current user's `fullName` to their `firstName` and their `lastName` together
  this.fullURL = "https://www.huffingtonpost.com" + this.URL;

  // Return the new `fullName`
  return this.fullURL;


var Articles = mongoose.model("Articles", Articles);

// Export the User model
module.exports = Articles;


