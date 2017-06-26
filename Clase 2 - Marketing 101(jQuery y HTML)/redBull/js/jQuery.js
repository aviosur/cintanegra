
 $(document).ready(function(){
   $("#title").click(function(){
       $(this).addClass("animated hinge");
   });
  $( "#can-photo" ).hover(
      function() {
               $( this ).addClass("animated infinite bounce");
             }, function() {
               $( this ).removeClass("infinite");
             }
           );
 });
