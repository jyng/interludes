/* Volume.js is for all volume related pages. */

$(document).ready(function() {

/* mmenu plugin for sidenav */
   $("#volume_nav").mmenu({
      offCanvas: {
         position  : "right",
         zposition : "front",
      }
   });

   var API = $("#volume_nav").data( "mmenu" );

   $('.icon_volume').click( function(){
      API.open();
   });
/* END mmenu plugin */

});
