
$(document).ready(function() {

   $("#mc-embedded-subscribe-form").submit(function(e){
      e.preventDefault();
      submitSubscribeForm($("#mc-embedded-subscribe-form"));
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
            console.log("error");
         },

         success: function(data){
            var resultMessage = data.msg || "Sorry. Unable to subscribe. Please try again later."

            if (data.result != "success") {
               if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                  resultMessage = "You're already subscribed. Thank you."
               }
               if (data.msg && data.msg.indexOf("An email address must contain a single @") >= 0)
                  resultMessage = "I'm sorry, but that's not a real email address!";
               if (data.msg && data.msg.indexOf("The domain portion of the email address is invalid") >= 0)
                  resultMessage = "I'm sorry, but that's not a real email address!";
               if (data.msg && data.msg.indexOf("The username portion of the email address is invalid") >= 0)
                  resultMessage = "I'm sorry, but that's not a real email address!";
               if (data.msg && data.msg.indexOf("This email address looks fake or invalid") >= 0)
                  resultMessage = "This email address looks fake or invalid! Please enter a real email address.";
               if (data.msg && data.msg.indexOf("Please enter a value") >= 0)
                  resultMessage = "Please enter an email address.";
            } 
            else {
               resultMessage = "Thank you!<br>You must confirm the subscription in your inbox.";
            }
            $("#subscription_message").html(resultMessage);
            console.log(data);

         }
      });
   }

});