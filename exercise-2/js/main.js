// Main.js
$(function() {

	// Setup: Initialize Firebase using the configuration of your project
	var config = {
		apiKey: "AIzaSyAJVBLPgHFpeNYy20K96TlkJ7AHuNg5tA8",
		authDomain: "m12-e2.firebaseapp.com",
		databaseURL: "https://m12-e2.firebaseio.com",
		storageBucket: "m12-e2.appspot.com",
		messagingSenderId: "1087625218462"
	};
	firebase.initializeApp(config);

	// Set a reference to a "photos" point in your database
	

	// Create a variable to store the firebase storage object


	// Set listener: when an child is added, render each photo

		// Get the value of the data


		// Using jQuery, create a new img element with the URL of your data


		// Append your img to your element with id photos




	// Reading Data: Form submission

		// Get the file


		// Create a reference on Firebase storage using the filename


		// Put a file in the specified location, then...

			// Get the download URL from the reference, then...

				// Push the URL as a new child into your data structure
