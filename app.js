// Get the countdown elements
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

// Update the countdown every second
setInterval(function() {
  // Get the current date and time
  var currentTime = new Date();

  // Calculate the number of seconds until the end of the day
  var secondsUntilEndOfDay = (24 * 60 * 60) - (currentTime.getHours() * 60 * 60) - (currentTime.getMinutes() * 60) - currentTime.getSeconds();

  var hoursUntilEndOfDay = Math.floor(secondsUntilEndOfDay / 3600);
  var minutesUntilEndOfDay = Math.floor((secondsUntilEndOfDay % 3600) / 60);
  var secondsUntilEndOfDay = secondsUntilEndOfDay % 60;

  // Update the hours, minutes, and seconds elements with the number of hours, minutes, and seconds until the end of the day
  hoursElement.innerHTML = hoursUntilEndOfDay;
  minutesElement.innerHTML = minutesUntilEndOfDay;
  secondsElement.innerHTML = secondsUntilEndOfDay;
}, 1000);


// Get the progress bar elements
var progressElement = document.getElementById("countdown-progress");
var barElement = document.getElementById("countdown-bar");

// Update the progress bar every second
setInterval(function() {
  // Get the current date and time
  var currentTime = new Date();

  // Calculate the percentage of the day that has passed
  var percentage = (currentTime.getHours() * 60 * 60 + currentTime.getMinutes() * 60 + currentTime.getSeconds()) / (24 * 60 * 60);

  // Update the width of the progress bar
  barElement.style.width = (percentage * 100) + "%";
}, 1000);



// Get the element where the current time will be displayed
var timeElement = document.getElementById("current-time");

// Update the current time every second
setInterval(function() {
  // Get the current date and time
  var currentTime = new Date();

  // Format the current time as a string
  var timeString = currentTime.toLocaleTimeString();

  // Update the time element with the current time
  timeElement.innerHTML = timeString;
}, 1000);









var formElement = document.getElementById("activity-log-form");
var inputElement = document.getElementById("activity-input");
var clearButtonElement = document.getElementById("clear-button");

// Get the form and activity log elements
var formElement = document.getElementById("activity-log-form");
var activityLogElement = document.getElementById("activity-log");

// Handle the form submission
formElement.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the current date and time
  var currentDateTime = new Date();

  // Get the activity input
  var activityInput = document.getElementById("activity-input").value;

  // Create a new list item for the activity
  var activityElement = document.createElement("li");
  activityElement.innerHTML = currentDateTime.toLocaleString() + ": " + activityInput;

  // Add the activity to the activity log
  activityLogElement.appendChild(activityElement);

  // Handle the clear button click
clearButtonElement.addEventListener("click", function() {
    // Display a confirm dialog
    if (confirm("Are you sure you want to clear the entire log?")) {
      // Clear the activity log
      document.getElementById("activity-log").innerHTML = "";
    }
  });


     inputElement.value = "";
    });



// Reset the activity log at the end of the day
setInterval(function() {
    // Get the current date and time
    var currentTime = new Date();
  
    // Check if the current time is at the end of the day
    if (currentTime.getHours() === 23 && currentTime.getMinutes() === 59 && currentTime.getSeconds() === 59) {
      // Clear the activity log element
      activityLogElement.innerHTML = "";
    }
  }, 1000); // Check every second
  


  function addActivity(activity) {
    // Create a new activity element
    var activityElement = document.createElement("div");
    activityElement.className = "activity";
    activityElement.innerHTML = activity;
  
    // Add the activity element to the activity log
    document.getElementById("activity-log").appendChild(activityElement);
  
    // Save the activity log to localStorage
    localStorage.setItem("activityLog", document.getElementById("activity-log").innerHTML);
  }

  
// Get the saved activity log from localStorage
var savedActivityLog = localStorage.getItem("activityLog");

// Update the activity log element with the saved data
document.getElementById("activity-log").innerHTML = savedActivityLog;


// Get the form element
var formElement = document.getElementById("activity-log-form");

// Bind the submit event to the addActivity function
formElement.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the activity input
  var activity = document.getElementById("activity-input").value;

  // Add the activity to the activity log
  addActivity(activity);
});

