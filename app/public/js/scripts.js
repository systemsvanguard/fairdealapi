// Scripts for ryanHunter.org portfolio site



//---------------------------------------------------------> 
// Bulma Navigation Bar ~ JavaScript Toggle Component
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

	// Add a click event on each of them
	$navbarBurgers.forEach( el => {
	  el.addEventListener('click', () => {

		// Get the target from the "data-target" attribute
		const target = el.dataset.target;
		const $target = document.getElementById(target);

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		el.classList.toggle('is-active');
		$target.classList.toggle('is-active');

	  });
	});
  }

});



//---------------------------------------------------------> 
// Bulma Image Carousel.  Ensure to link to the required JS carousel file.
bulmaCarousel.attach('#carousel-demo', {
	slidesToScroll: 1,
	slidesToShow: 1,
	navigation: true , 
	navigationKeys: true , 
	loop: true , 
	effect: 'fade' ,
	autoplay: true , 
	autoplaySpeed: 9000, 
	pauseOnHover: true, 
	timing: 'ease' ,
	initialSlide: 0 		
	
});



//---------------------------------------------------------> 
// Questions for Humanity Test
const humanityQuestions = [
   "Which is smaller? 59 or 81?" 
 , "Which is smaller? 359 or 1070?" 
 , "Which is smaller? 30 or 300?" 
 , "Which is smaller? 22 or 440?" 
 , "Which is smaller? 27 or 72?" 
 , "Which is smaller? 51 or 5115?" 
 , "Which is smaller? 87 or 807?" 
 , "Which is larger? 104 or 359?" 
 , "Which is larger? 78 or 87?" 
 , "Which is larger? 15 or 51?" 
 , "Which is larger? 21 or 22?" 
 , "Which is larger? 19 or 59?" 
 , "Which is larger? 20 or 30?" 
 , "Which is larger? 17 or 27?" 
 , "What is 10 x 3?" 
 , "What is 10 + 12?" 
 , "What is 20 + 31?" 
 , "What is 25 + 2?" 
 , "What is 50 + 9?" 
 , "What is 300 + 59?" 
 , "What is 50 - 20?" 
 , "What is 20 + 2?" 
 , "What is 25 + 2?" 
 , "What is 30 - 3?" 
 , "What is 40 + 11?" 
 , "What is 3 x 10?" 
 , "What is 5 x 20?" 
 , "What is 90 - 3?" 
 , "What is 81 + 6?" 
 , "What is 50 + 37?"
];
const randomQuestion = humanityQuestions[Math.floor(Math.random()*humanityQuestions.length)];
document.getElementById("humanity_test").innerHTML = randomQuestion;
/* potential answers: 59 | 359 | 30 | 22 | 27 | 51 | 87  */
/* <span id="humanity_test"></span> */


//---------------------------------------------------------> 
// Google Maps
function myMap() {
  myCenter=new google.maps.LatLng(43.683334, -79.766670);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

//---------------------------------------------------------> 




