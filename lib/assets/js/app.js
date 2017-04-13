$(document).ready(function () {
    $.getJSON("js/books.json", function (result) {
        // console.log(result);
        var panelHtml = "";
        var panelCount = 0;
        $(".main-content").empty();

        $.each(result, function (i, field) {
            // console.log(field);
            panelHtml = $("<div class='col-xs-6 panels' id='" + i + "'>")
                .append("<img src='" + field.cover.medium + "' class='img-responsive img-rounded center-block' alt='Book Cover'>")
                .append("<h5 class='title'>" + field.title + "</h5>")
                .append("<p class='desc'>" + field.by_statement + "</p>")
                .append("<small>" + i + "</small>")
                .append("<button type='button' class='btn btn-primary'>Add to Cart</button>");

            $(".main-content").append(panelHtml);
        });
    });

});

$('#searchbtn').click(function () {
    var searchField = $('#search').val();

    if (searchField) {
        var searchHTML = "";
        $.getJSON('js/books.json', function (data) {
            // console.log(data);
            $.each(data, function (k, obj) {
                if ((searchField.toLowerCase() === k.toLowerCase()) || (searchField.toLowerCase() === obj.title.toLowerCase())) {
                    searchHTML = $("<div class='col-xs-12'>")
                        .append("<h3>Search Results</h3>")                    
                        .append("<img src='" + obj.cover.medium + "' class='img-responsive img-rounded center-block' alt='Book Cover'>")
                        .append("<h5 class='title'>" + obj.title + "</h5>")
                        .append("<p class='desc'>" + obj.by_statement + "</p>")
                        .append("<small>" + k + "</small>")
                        .append("<button type='button' class='btn btn-primary'>Add to Cart</button>");
                    $(".search-results").empty();
                    $(".search-results").append(searchHTML);
                    return false;
                } else {
                    $(".search-results").empty();
                    $(".search-results").append("<div class='col-xs-6 alert alert-danger'>No Books found</div>");
                }
            });
        });
    } else {
        $(".search-results").empty();
        $(".search-results").append("<div class='col-xs-6 alert alert-danger'>Value should not be blank</div>");
    }

});
