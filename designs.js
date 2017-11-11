// Select color input
const color = $('#colorPicker');

// Select size input
const gridWidth = $('#input_width');
const gridHeight = $('#input_height');

// When size is submitted by the user, call makeGrid()
$('input[type=submit]').click(function (e) {
    e.preventDefault();
    makeGrid(gridHeight.val(), gridWidth.val());
})


function makeGrid(gridHeight, gridWidth) {
    // Your code goes here!
    // TODO: limit table size
    const table = $('#pixel_canvas').empty();
    let h = 0;
    
    // build the grid (added element id's are not necessary)
    while (h < gridHeight) {
        table.append('<tr id=tr_' + h + '>');
        for (let w = 0; w < gridWidth; w++) {
            $('<td id=td_' + h + '_' + w + '>').appendTo('#tr_' + h);
        }
        h++ 
    }

    //  mouse events listener to paint the cell
    $('#pixel_canvas td').each(function () {
        // paint <td> on click
        $(this).mousedown(function (e) {
            e.preventDefault();
            $(this).css('background-color', $('#colorPicker').val());
        });
        //TODO: paint on drag while user move the mouse inside the table with left button clicked
      
    })
}