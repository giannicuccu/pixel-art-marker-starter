// When size is submitted by the user, call makeGrid()
$('input[type=submit]').click(function (e) {
    e.preventDefault();
    makeGrid();
})


function makeGrid() {
    grid.insertGrid(grid.buildGridMarkup(inputForm.getTableSize()));
    grid.setHandlers();
}


// grid object
var grid = {
    
    buildGridMarkup: function (tableSize) {
        let gridMarkup = "";
        let h = 0;
        while (h < tableSize.heigth) {
            gridMarkup += '<tr id=tr_' + h + '>';
            for (let w = 0; w < tableSize.width; w++) {
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
        const color = $('#colorPicker').val();
        return color;
    }
}


var inputForm = {
    getTableSize: function () {
        const tableSize = {
            width:$('#input_width').val(),
            heigth:$('#input_height').val()
        }
        return tableSize;
    }
}