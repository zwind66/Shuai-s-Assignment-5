$(function () {

    // Adding current time.
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    var currentHour = moment().hour();

    // Color according to time.
    $(".description").each(function () {
        var timeBlock = parseInt($(this).attr("id"));

        if (timeBlock === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (timeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });

    // Show saved taskes. 
    $(".description").each(function () {
        for (var i = 0; i < localStorage.length; i++) {
            var savedHour = localStorage.key(i);
            var savedText = localStorage.getItem(savedHour);
            var hour = $(this).siblings(".hour").text();

            if (hour === savedHour) {
                $(this).val(savedText);
            }
        }
    });

    // Save task to local storage. 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();

        localStorage.setItem(time, text);
    })   
});