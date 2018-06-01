$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZUjo8deq5nWTz3B65XiZ9i2m7cNo9VMo",
    authDomain: "portfolio-contact-6af4a.firebaseapp.com",
    databaseURL: "https://portfolio-contact-6af4a.firebaseio.com",
    projectId: "portfolio-contact-6af4a",
    storageBucket: "portfolio-contact-6af4a.appspot.com",
    messagingSenderId: "825521821033"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#contact-submit").on("click", function (event){
    event.preventDefault();

    var contactName = $("#contact-name").val.trim();
    var contactEmail = $("#contact-email").val.trim();
    var contactPhone = $("#contact-phone").val.trim();
    var contactMessage = $("#contact-message").val.trim();

    databas.ref().push({
        Name: contactName,
        email: contactEmail,
        phone: contactPhone,
        message: contactMessage,
    })
})
})

