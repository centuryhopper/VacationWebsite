
$(document).ready(function() {
    var curColor;
        $("tr:even").hover(
            function() {
                curColor = $(this).css("background-color")
                $(this).css("background-color", "yellow")
            },
            function() {
                $(this).css("background-color", curColor)
            }
        );
});
