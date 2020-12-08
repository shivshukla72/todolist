$(document).ready(function(){
   $("#btn1").click(function(){

  	    var x= $("#addtask").val();
  	    console.log(x);
       $("#ul1").append("<li><input type='checkbox' class='checkboxes'><span class='title'>"+x+"</span><input type='text' class='task'><button class='edit'>Edit</button><button class='update'>Update</button><button class='Delete'>delete</button></li>");
 
     $(".edit").click(function(){
        var z=$(this).parent().find('.title').text();
        $(this).parent().find('.task').val(z);       

      });
     
     $(".update").click(function(){
     	var u=$(this).siblings('.task').val().trim();
     	console.log(u);
     	$(this).siblings('.title').text(u);

     });
     $(".Delete").click(function(){
           $(this).parent('li').remove(); 
      });

     $(".checkboxes").click(function(){
         if($(this).prop("checked")==true)
         	{
         		var y=$(this).parent('li');
         		console.log(y);
         		$("#ul2").append(y);
         	}
            if ($(this).prop("checked")==false)
              {
           	    var y=$(this).parent('li');
         		$("#ul1").append(y);
               }
     });
   

  });


 
});