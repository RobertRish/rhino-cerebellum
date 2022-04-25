$(document).ready(function() {
    $(".saveBtn").click(function(){
       var userInput = $(this).siblings(".form-control").val();
       var hour = $(this).parent().attr('id');
       localStorage.setItem(hour, userInput); });

    function changeBackground() {
           var momentTime = moment().hours();
           $(".input-group").each(function(){
            var timeTest = parseInt($(this).attr("id").split('-')[1]);
            if (timeTest < momentTime){
                $(this).children(".form-control").addClass("past");
            } else if (timeTest === momentTime) {
                $(this).children(".form-control").removeClass("past");
                $(this).children(".form-control").addClass("present");
            } else {
                $(this).children(".form-control").removeClass("past");
                $(this).children(".form-control").removeClass("present");
                $(this).children(".form-control").addClass("future");
            }
        });
       }
    changeBackground();

    // sets interval to continously use function
    var interval = setInterval(changeBackground, 100)

    // Displays current date on page
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'), 100)

    $('#hour-9 .form-control').val(localStorage.getItem('hour-9'));
    $('#hour-10 .form-control').val(localStorage.getItem('hour-10'));
    $('#hour-11 .form-control').val(localStorage.getItem('hour-11'));
    $('#hour-12 .form-control').val(localStorage.getItem('hour-12'));
    $('#hour-13 .form-control').val(localStorage.getItem('hour-13'));
    $('#hour-14 .form-control').val(localStorage.getItem('hour-14'));
    $('#hour-15 .form-control').val(localStorage.getItem('hour-15'));
    $('#hour-16 .form-control').val(localStorage.getItem('hour-16'));
    $('#hour-17 .form-control').val(localStorage.getItem('hour-17'));
});

// remote repo - rhino cerebellum