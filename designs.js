// Select color input
var color = $("#colorPicker");

// Select size input
var gridWidth = $("#input_width");
var gridHeight = $("#input_height");

// When size is submitted by the user, call makeGrid()
$("input[type=submit]").click(function (e) {
    e.preventDefault();
    makeGrid(gridHeight.val(), gridWidth.val());
})


function makeGrid(gridHeight, gridWidth) {
    // Your code goes here!
    var table = $("#pixel_canvas");
    var h = 0;
    var mouseDown = false;
    table.empty();

    while (h < gridHeight) {
        let element = h;
        table.append("<tr id=tr_" + h + ">");
        for (let w = 0; w < gridWidth; w++) {
            const element = w;
            $("<td id=td_" + h + "_" + w + ">").appendTo("#tr_" + h);
        }
        h++
    }

    table.mousedown(function () {
        mouseDown = true
    });

    table.mouseup(function () {
        mouseDown = false
    });


    $("#pixel_canvas td").each(function () {
        $(this).mousedown(function (e) {
            e.preventDefault();
            $(this).css("background-color", $("#colorPicker").val())
        });
        $(this).mouseenter(function () {
            if (mouseDown)
                $(this).css("background-color", $("#colorPicker").val())
        })
    })
}