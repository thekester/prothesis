
var prothese = document.getElementById("prothese");
var outils = document.getElementById("outils");
var aPropos = document.getElementById("aPropos");
var navProthese = document.getElementById("navProthese");
var navOutils = document.getElementById("navOutils");
var navAPropos = document.getElementById("navAPropos");


/*var is_touch_device = function(){  
	console.log("TouchEvent ");
	try{  
		document.createEvent("TouchEvent");
		return true;  
	} catch(e){  
		return false;  
	}  
}*/

function is_touch_device4() {
    
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

//console.log(is_touch_device4());


 prothese.addEventListener("mouseover", function( event ) {   
      
      
      if(is_touch_device4()==true)
      {
		  
	  }
	  else if(is_touch_device4()==false)
	  {
		navProthese.style.display="block";
		navOutils.style.display="none";
		navAPropos.style.display="none";
	   }
	  else
	  {
		  
	}
  });
  
  
   prothese.addEventListener("click", function( event ) {   

      
	if(navProthese.style.display=="block")
		{
		navProthese.style.display="none";
		navOutils.style.display="none";
		navAPropos.style.display="none";
	  }
	  
	  else if(navProthese.style.display=="none")
		{
      
			navProthese.style.display="block";
			navOutils.style.display="none";
			navAPropos.style.display="none";
		}
		
		else if(navProthese.style.display=="")
		{
			navProthese.style.display="block";
			navOutils.style.display="none";
			navAPropos.style.display="none";
		}
		
		else
		{
			console.log("An error has occured");
			console.log(navProthese.style.display);
		}
	  
		      
  }); 
  


  outils.addEventListener("mouseover", function( event ) {   
      
      if(is_touch_device4()==true)
      {
		  
	  }
	  else if(is_touch_device4()==false)
	  {
      navProthese.style.display="none";
      navOutils.style.display="block";
      navAPropos.style.display="none";
        }
	  else
	  {
		  
	}
      
      
  });
                            

  
   outils.addEventListener("click", function( event ) {   

      
      	 if(navOutils.style.display=="block")
		{
		navProthese.style.display="none";
		navOutils.style.display="none";
		navAPropos.style.display="none";
	  }
	  
	  else if(navOutils.style.display=="none")
		{
      
			navProthese.style.display="none";
			navOutils.style.display="block";
			navAPropos.style.display="none";
		}
		
		else if(navOutils.style.display=="")
		{
			navProthese.style.display="none";
			navOutils.style.display="block";
			navAPropos.style.display="none";
		}
		
		else
		{
			console.log("An error has occured");
		}
	  
		      
  });            


  aPropos.addEventListener("mouseover", function( event ) {   
      
      if(is_touch_device4()==true)
      {
		  
	  }
	  else if(is_touch_device4()==false)
	  {
      navProthese.style.display="none";
      navOutils.style.display="none";
      navAPropos.style.display="block";
      }
	  else
		{
		  
		}
      
  });
   
     
  
     aPropos.addEventListener("click", function( event ) {   

      
      	 if(navAPropos.style.display=="block")
		{
		navProthese.style.display="none";
		navOutils.style.display="none";
		navAPropos.style.display="none";
	  }
	  
	  else if(navAPropos.style.display=="none")
		{
      
			navProthese.style.display="none";
			navOutils.style.display="none";
			navAPropos.style.display="block";
		}
		
		else if(navAPropos.style.display=="")
		{
			navProthese.style.display="none";
			navOutils.style.display="none";
			navAPropos.style.display="block";
		}
		
		else
		{
			console.log("An error has occured");
		}
	  
		      
  });
  
  
                
