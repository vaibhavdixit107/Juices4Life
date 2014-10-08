var x=document.getElementById("demo");
var windowSize='';
	var windowWidth=0;	
	var actualSize=0;
	var firstRun=true;


function showPosition()
  {
  lat=55.749876;
  lon=12.382367;
  latlon=new google.maps.LatLng(lat, lon)
  mapholder=document.getElementById('mapholder')
  if(windowSize==='large'){
  mapholder.style.height='250px';
  mapholder.style.width='500px';
	}else{
  mapholder.style.height='150px';
  mapholder.style.width='300px';
	}
  var myOptions={
  center:latlon,zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
  }

function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="An unknown error occurred."
      break;
    }
  }
  

function loadLogo(){
if(windowSize=='large'){
	$('.header img').css({'display':'block'});
	$('body .bodyheading').css({'display':'block'});
	$('body .bodyheading h1').css({'display':'block'});
	$('body .bodyheading p').css({'display':'block'});
	$('body .logo').css({'width':'250px','position':'absolute','height':'200px','left':'16%','margin-left':'10px'});
	$('body .logo img').css({'opacity':'0.0'}).animate({'opacity':'0.8','width':'250px','height':'150px'},500);
	}
else{
	$('.header img').css({'display':'none'});
	$('body .bodyheading').css({'display':'none'});
	$('body .bodyheading h1').css({'display':'none'});
	$('body .bodyheading p').css({'display':'none'});
	$('body .logo').css({'width':'100%','position':'static','height':'160px','left':'0','margin-left':'0px'});
	$('body .logo img').css({'opacity':'0.0'}).animate({'opacity':'1','width':'100%','height':'150px'},2000);
	};
}

function checkBrowserSize(){
	windowWidth= window.outerWidth;//find out the width of the content without any scroll bar or resize bar
	var contentWidth= $('body').width();// find out the width of the body element
	var sizeDiff = windowWidth-contentWidth;//size of scroll bar
	actualSize= windowWidth-sizeDiff;
	if(windowWidth>500)
	{
		newWindowSize='large';
	}//checking widow size
	else
	{
		newWindowSize='small';
	}
	if(windowSize != newWindowSize){
		windowSize= newWindowSize;
		loadLogo();//load content only if the screensize is changed
	}
	}

$(document).ready(function(){
	$('.bodyheading h1').css({'left':'-501px'}).animate({'left':'0px'},2000);
	setInterval('checkBrowserSize()',100);
	showPosition();
	showError();
});
