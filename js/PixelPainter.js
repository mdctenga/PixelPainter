// ids are always going to be unique (there for a reason)
// classes are used when an element is going to be used a bunch of places

// Append pp-canvas div to pixelPainter id
$( document ).ready(function() {
  console.log( 'ready!');
  // create a box for the color pallet
  $( '#pixelPainter' ).append( '<div id="color-palette">');
  $( '#color-palette' ).width(100).height(200);

  // create a box for the pixels
  $( '#pixelPainter').append( '<div id="pp-canvas" class="clearfix">');
  $( '#pp-canvas' ).width(100).height(100);

  for (var i = 1; i <= 21 - 1; i += 1) {
    // if (i % 10 === 0) {
    //   console.log(i);
    // } else {
      $( '#pp-canvas' ).append( '<div class="pixel">');
    // }
  }


});




// make a 1x1 box


// make a box in the 1x1 box
