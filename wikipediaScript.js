
	
    
	$("#forma").on("submit", function(event){
    event.preventDefault();
    var x;
    var api="https://ru.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
    var apiPar2="&callback=JSON_CALLBACK";
    x=$("#target1").val();
    api+=x+apiPar2;
     $.ajax({ 
     dataType: "jsonp", 
     url: api, 
     success: function (result) {
       var vivod='';
         $.each(result.query.pages, function(key,value) {
          vivod+='<div class=" col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
            '<li><h1>'+value.title+'</h1>'+
             '<p>' + value.extract + '</p>'+
             '<p><a href="https://ru.wikipedia.org/?curid='+ 
              value.pageid + '" target="_blank">Wikipedia article</a></p>'+
             '</li></div>'+
            '<div class="clearfix"></div>';
           $("#target3").html(vivod);
         });
        }
      });
    });