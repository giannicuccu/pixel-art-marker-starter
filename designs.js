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
    var table = $("#pixel_canvas").empty();
    var h = 0;
    var mouseDownOnCanvas = false;
    
    // build the grid (element id's are not necessary)
    while (h < gridHeight) {
        let element = h;
        table.append("<tr id=tr_" + h + ">");
        for (let w = 0; w < gridWidth; w++) {
            const element = w;
            $("<td id=td_" + h + "_" + w + ">").appendTo("#tr_" + h);
        }
        h++ 
    }

    // mouse events listeners to enable drag painting
    // TODO what if mouse leave and reenter while clicked ???
    table.mousedown(function () {
        mouseDownOnCanvas = true ;
    });

    table.mouseup(function () {
        mouseDownOnCanvas = false ;
    });

    table.mouseleave(function () {
        mouseDownOnCanvas = false ;
    });

    //  mouse events listeners to paint the cell
    $("#pixel_canvas td").each(function () {
        // paint <td> on click
        $(this).mousedown(function (e) {
            e.preventDefault();
            $(this).css("background-color", $("#colorPicker").val());
        });
        //paint <td> on mouseenter if mouse button is clicked
        $(this).mouseenter(function () {
            if (mouseDownOnCanvas){
                $(this).css("background-color", $("#colorPicker").val());
            }
        })
    })
}