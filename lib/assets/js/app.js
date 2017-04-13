$(document).ready(function () {
    $.getJSON("js/books.json", function (result) {
            // console.log(result);
            var panelHtml = "";
            var panelCount = 0;
            $(".main-content").empty();
          
            $.each(result, function (i, field) {
                // console.log(field);
                panelHtml = $("<div class='col-xs-6 panels'>")
                        .append("<img src='"+ field.cover.medium +"' class='img-responsive img-rounded center-block' alt='Book Cover'>")                      
                        .append("<h5 class='title'>" + field.title + "</h5>")
                        .append("<p class='desc'>" + field.by_statement + "</p>")
                        .append("<button type='button' class='btn btn-primary'>Add to Cart</button>");
                        
                $(".main-content").append(panelHtml);                                                  
            });
        });

    // $("#getdata").click(function () {
        
    // });

});
