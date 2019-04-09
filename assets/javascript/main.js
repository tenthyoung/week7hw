

$(document).ready(function() {
    // var config = {
    //     apiKey: "AIzaSyBnKuLu_esFYGcBlWWwjQmJWEel8UhO4Jo",
    //     authDomain: "train-scheduler-hw7-95529.firebaseapp.com",
    //     databaseURL:"https://train-scheduler-hw7-95529.firebaseio.com",
    //     projectId: "train-scheduler-hw7-95529",
    //     storageBucket: "train-scheduler-hw7-95529.appspot.com",
    //     messagingSenderId: "917841135528"
    // };
    
    // firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    var trainName = "";
    var destination = "";
    var firstTime = "";
    var frequency = "";

    // Click Button changes what is stored in firebase
    $("#submitButton").on("click", function(event) {
        // Prevent the page from refreshing
        event.preventDefault();
        
        console.log('hi');

        // Get inputs
        trainName = $("#trainNameInput").val().trim();
        destination = $("#destinationInput").val().trim();
        firstTime = $("#timeInput").val().trim();
        frequency = $("#frequencyInput").val().trim();
    
        // Change what is saved in firebase
        database.ref().set({
            trainName: trainName,
            destination: destination, 
            firstTime: firstTime,
            frequency: frequency
        });
    });

    // I haven't been able to get this to work, but I know what's next is
    // that i need to get a listener to listen to the data changes, so 
    // multiple people can submit the data, and then I need to use 
    // moment.js so people can have a realtime update of how far
    // the train is from them.

});