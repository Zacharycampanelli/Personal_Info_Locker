// When the user opens the page, show the modal and get items from local storage
$(document).ready(function(){
    $(".modalbtn").click(function(){
        $("#myModal").modal('show');
    });
});

var saveBtn = document.getElementById("saveBtn")

// this button doesn't work yet for some reason lol
saveBtn.onClick = function () {
    console.log("clicked");
    $("#myModal").modal('hide');

    var websiteName = $('#website-name').val();
    var websitePassword = $('#website-password').val();

    var row = $("<div>").addClass("row my-1 row-color");
    var websiteInfo = $("<p>").addClass("text-center text-white my-1").text(websiteName);

    $(row).append(websiteInfo);
    $(".container").append(row);
}