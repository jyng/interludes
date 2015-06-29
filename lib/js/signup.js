/**
 * This class uses Javascript to send an AJAX call to our server. The AJAX call
 * accesses the login.php function, and redirects the User to the dashboard if
 * the function returned true
 */

 $(document).ready(function() {

   $("#mc-subscribe-form").submit(function(e){
      e.preventDefault();
      submitSubscribeForm($("#mc-subscribe-form"));
   });

   // Submit the form with an ajax/jsonp request.
   // Based on http://stackoverflow.com/a/15120409/215821
   function submitSubscribeForm($form) {
       $.ajax({
           type: "GET",
           url: $form.attr("action"),
           data: $form.serialize(),
           cache: false,
           dataType: "jsonp",
           jsonp: "c", // trigger MailChimp to return a JSONP response
           contentType: "application/json; charset=utf-8",

           error: function(error){
               // According to jquery docs, this is never called for cross-domain JSONP requests
           },

           success: function(data){
               var resultMessage = data.msg || "Sorry. Unable to subscribe. Please try again later."

               if (data.result != "success") {
                   if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                       resultMessage = "You're already subscribed. Thank you."
                   }
               } else {
                   resultMessage = "Thank you!<br>You must confirm the subscription in your inbox.");
               }

               ...
               ...
           }
       });
   }

});