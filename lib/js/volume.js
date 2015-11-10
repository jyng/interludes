/* Volume.js is for all volume related pages. */

$(document).ready(function() {

/* mmenu plugin for sidenav */
   $("#volume_nav").mmenu({
      navbar: {
         title: "Vol"
      },
      offCanvas: {
         position  : "right",
         zposition : "front",
      },
      // extensions: ["border-none"],
      extensions: ["border-none", "panelshadow"]
   });

   var API = $("#volume_nav").data( "mmenu" );

   $('.icon_volume').click( function(){
      API.open();
   });
/* END mmenu plugin */

});
