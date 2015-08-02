var $overlay = $('<div id="overlay"></div>');


//. add overlay
$("body").append($overlay);

//. capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var formLocation = $(this).attr("href");
  
  //ajax call request to from location
  $.get(formLocation, function( data ) {
    $overlay.html( data );
  });
  
   // show the overlay
   $overlay.show();
});
  
// when overlay is clicked
$overlay.click(function(){
  
  // hide the overlay
  $(this).hide();
});