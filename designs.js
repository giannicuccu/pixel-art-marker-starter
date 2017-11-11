// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

$("input[type=submit]").click(function(e){
    e.preventDefault();
    var color = $("#colorPicker").val();
    var gridHeight = $("#input_height").val();
    var gridWidth = $("#input_width").val();
    makeGrid(color, gridHeight, gridWidth);
})


function makeGrid(color, gridHeight, gridWidth) {

// Your code goes here!
console.log(color);
console.log(gridHeight);
console.log(gridWidth);
}
