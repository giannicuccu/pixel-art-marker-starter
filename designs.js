// Select color input
var color = $("#colorPicker");

// Select size input
var gridWidth = $("#input_width");
var gridHeight = $("#input_height");

// When size is submitted by the user, call makeGrid()

$("input[type=submit]").click(function(e){
    e.preventDefault();
    makeGrid(color.val(), gridHeight.val(), gridWidth.val());
})


function makeGrid(color, gridHeight, gridWidth) {
    var table = $("#pixel_canvas");
    var cells ;
    var color = color;
    table.empty();
    for (let h = 0; h < gridHeight; h++) {
      const element = h;
      table.append("<tr id=tr_"+h+">");
     for (let w = 0; w < gridWidth; w++) {
         const element = w;
         $("<td id=td_"+h+"_"+w+">").appendTo("#tr_"+h);
         console.log(w);
         //table.append("<td>");
     }
     //table.append("</tr>");
  }
// Your code goes hwere!

cells = $("#pixel_canvas td").each(
    function(){
        $(this).click(function(){
            console.log("click on"+$(this).attr("id"));
            console.log(color);
            $(this).css("background-color", $("#colorPicker").val())
        })
    }
)

}

