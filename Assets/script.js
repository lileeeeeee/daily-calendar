
// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Adds a listener for click events on the save button. Uses the id in the containing time-block as a key to save the user input in local storage. 

  var saveBtns = document.querySelectorAll(".saveBtn");
  console.log(saveBtns);
  saveBtns.forEach(addListener);
  function addListener (button) {
    button.addEventListener ('click', function saveLocally () {
    var getHour = $(this).parent().attr('id');
    var getText = $(this).prev();
    var getInput = getText.get();
    console.log(getInput);
    console.log(getInput[0].value);
    localStorage.setItem(getHour, getInput[0].value);
    })

  }
   

//for each hour, compares to current time and assigns a color code
var blockTime = $(".saveBtn").parent();

var currentTime = dayjs().hour();

$.each(blockTime, function () {
  var hour = $(this).attr('id').replace ('hour', '');
  console.log($(this));
  var timeBlockColor = $(this);
  console.log(parseInt(hour));
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


  // Gets any user input that was saved in localStorage and sets
  // the values of the corresponding textarea elements.

    $.each(blockTime, function () {
      var checkId = $(this).attr('id');
      var displayStored = $(this).children('textarea');
      console.log(blockTime);
      console.log(checkId);
      console.log(displayStored);
      displayStored.text(localStorage.getItem(checkId));
    })

  //
  // Displays the current date in the header of the page.
    var displayCurrentDate = $("#currentDay");
    console.log(displayCurrentDate);
    var currentDate = dayjs().day();
    displayCurrentDate.text (dayjs(currentDate).format('dddd'));
});
