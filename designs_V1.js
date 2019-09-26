
// Submit button. When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {
  event.preventDefault();

  // Define Height and Width variable

  var input_height, input_width;
  input_height = $('#inputHeight').val();
  input_width = $('#inputWidth').val();
  makeGrid(input_height, input_width);

})

// Build table from input data.
function makeGrid(h, w) {
  $('tr').remove();  // Remove old table rows.

// Table rows and table data

  for (var i =1; i<=h; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j =1; j<=w; j++) {
        $('#table' + i).append('<td></td>');
      }

    }

// Adding color to background
  $('td').click(function addColor() {
      let input_color
      input_color = $('#colorPicker').val();

// Removing and adding the style
      if($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:' + input_color);
      }

  })

}
