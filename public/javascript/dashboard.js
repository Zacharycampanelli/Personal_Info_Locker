// When the user opens the page, show the modal and get items from local storage
$(document).ready(function () {
    $(".modalbtn").click(function () {
        $("#myModal").modal('show');
    });
});

var saveBtn = document.getElementById("saveBtn")

saveBtn.onclick = function () {
    console.log("clicked");
    $("#myModal").modal('hide');

    var title = $('#title').val();
    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#password').val();
    var website_url = $('#website_url').val();
    

    var row = $("<div>").addClass("row my-1 row-color");
    var websiteInfo = $("<p>").addClass("text-center text-white my-1 collapsible").text(websiteName);
    var password = $("<p>").addClass("content").text("password: " + websitePassword);

    $(row).append(websiteInfo, password);

    $(".container").append(row);
    $("#collapsible").trigger('create');

}

$(document).click(function (event) {
    
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
})