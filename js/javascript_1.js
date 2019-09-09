 $(document).ready(function(){
  
    // $("#auto").click("#icon_prefix").focus();
 
      $("#auto").click(function(){
    //Doo something
      $("#icon_prefix").focus();
      // alert("shubham");
  });



  // control for small screen 
  
  

// Returns width of browser viewport
var wid=$( window ).width();
 //alert(wid);
 // Returns width of HTML document
 // var wid2=$( document ).width();
 // alert(wid2);
     
    if(wid<400)//need of refreshing the page for mobile view
      {
      // toggle->chatting list  //hd->list item  //hov->each item in list 
      // $('.hd').hide(0);
      $('.chat-hide').hide(0);
      // $('#toggle').show(500);
      // alert("sk");

      // $('#toggle').click(function(){
      //   // $('#hd').show(500);
      //   $('.chat-hide').show(0);
        
      //   });
         
        $('.hov1').click(function(){
          $('#hd').hide(200);
          $('.chat-hide').show(0);
          $('.hd').hide(0);
          $('.user-hide').hide(0);

          });

        $('.back-arrow').click(function(){
          $('#hd').show(200);
          $('.chat-hide').hide(0);
          $('.hd').show(0);
          $('.user-hide').show(0);

          });


      }
      else
      {
        $('#toggle').hide(0);
        $('.bk').hide();  
        // alert("skj");
      }
      
     




    
  });