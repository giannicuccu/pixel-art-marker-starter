

// When size is submitted by the user, call makeGrid()
$('input[type=submit]').click(function (e) {
    e.preventDefault();
    makeGrid();
})


function makeGrid() {      
    grid.insertGrid(grid.buildGridMarkup( grid.fetchHeigth(), grid.fetchWidth()));
    grid.setHandlers();
}

// grid object
var grid = {
    cellColor: "black",
    gridWidth: 0,
    gridHeight: 0,
    gridMarkup: "",


    buildGridMarkup: function (gridHeight, gridWidth) {
        let gridMarkup = "";
        let h =0;
        while (h < gridHeight) {
            gridMarkup += '<tr id=tr_' + h + '>';
            for (let w = 0; w < gridWidth; w++) {
                gridMarkup += '<td id=td_' + h + '_' + w + '></td>';
            }
            gridMarkup += '</tr>'
            h++;

        }
        console.log(gridMarkup);
        return gridMarkup;
    },

    insertGrid: function (gridMarkup) {
        $('#pixel_canvas').empty().html(gridMarkup); 
        
    },

    fetchColor: function () {
        color = $('#colorPicker').val();
        return color;
    },

    fetchWidth: function () {
        gridWidth = $('#input_width').val();
        return gridWidth;
    },

    fetchHeigth: function () {
        gridHeight = $('#input_height').val();
        return gridHeight;
    },

    resetGridMarkup: function () {
        table = $('#pixel_canvas').empty();
    },

    setHandlers: function () {
        //  mouse events listener to paint the cell
        $('#pixel_canvas td').each(function () {
            // paint <td> on click
            $(this).mousedown(function (e) {
                e.preventDefault();
                $(this).css('background-color', colorPicker.getColor());
            });
            //TODO: paint on drag while user move the mouse inside the table with left button clicked

        })
    }
}

var colorPicker = {
    getColor: function () {
        color = $('#colorPicker').val();
        return color;
    }
}