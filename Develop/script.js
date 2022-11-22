
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveBtns = document.querySelectorAll(".saveBtn");
  console.log(saveBtns);
  saveBtns.forEach(addListener);
  function addListener (button) {
    button.addEventListener ('click', function saveLocally () {
    console.log ("does this work so far?");
    var getHour = $(this).parent().attr('id');
    var userInput = $(".description").val();
    localStorage.setItem(getHour, userInput);
    
    })

  }
 

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    abilityEl.append("<div>" + ability + "</div>");
// })
var blockTime = $(".saveBtn").parent();

var currentTime = dayjs().hour();

console.log(dayjs().hour());

//for each hour, compare to current time and assign a color code

$.each(blockTime, function () {
  var hour = $(this).attr('id').replace ('hour', '');
  console.log($(this));
  var timeBlockColor = $(this);
if (currentTime > (parseInt(hour)* -1)) {
  timeBlockColor.removeClass("future present")
  timeBlockColor.addClass("past");
  console.log(blockTime);
  console.log((parseInt(hour)* -1));
}
if (currentTime == (parseInt(hour)* -1)) {
  timeBlockColor.removeClass("future past")
  timeBlockColor.addClass("present");
  console.log((parseInt(hour)* -1));
}
if (currentTime < (parseInt(hour)* -1)) {
  timeBlockColor.removeClass("past present")
  timeBlockColor.addClass("future");
  console.log((parseInt(hour)* -1));
}
})

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  //
  // TODO: Add code to display the current date in the header of the page.
});
