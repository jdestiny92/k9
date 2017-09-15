/*Function to make equal height columns*/
'use strict';
var equalheight = function(container){

var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;
jQuery(container).each(function() {

   $el =jQuery(this);
  jQuery($el).height('auto')
   var topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
/*On window load*/
jQuery(window).load(function() {
    equalheight('.jag-tm-theme-8 .member-detail');
    equalheight('.jag-tm-theme-9 .member-detail');
    equalheight('.jag-tm-theme-10 .member-detail');
    equalheight('.jag-tm-theme-11 .member-detail');
    equalheight('.jag-tm-theme-12 .member-img-wrap');
    equalheight('.jag-tm-theme-12 .member-detail');
    equalheight('.jag-tm-theme-13 .member-outer-wrapper');
    equalheight('.jag-tm-theme-14 .member-detail');
});

/*On window resize*/
jQuery(window).resize(function(){
    setTimeout(function(){
        equalheight('.jag-tm-theme-8 .member-detail');
        equalheight('.jag-tm-theme-9 .member-detail');
        equalheight('.jag-tm-theme-10 .member-detail');
        equalheight('.jag-tm-theme-11 .member-detail');
        equalheight('.jag-tm-theme-12 .member-img-wrap');
        equalheight('.jag-tm-theme-12 .member-detail');
        equalheight('.jag-tm-theme-13 .member-outer-wrapper');
        equalheight('.jag-tm-theme-14 .member-detail');
    },100);  
});