// 'use strict'

// var app = "Hellow";
// console.log(window.app);
// console.log(this.app);


// function sum(a, b) {
// 	var result = a + b;
// 	return result;
// };

// function bad(a, b) {
// 	var result = a + b;
// 	return result;
// }
// console.log(bad(1, 5));
// console.log(result);
 

 // myname = "global";
 //
 // function func() {
 // 	alert (myname);
 // 	var myname = "local";
 // 	alert (myname);
 // };
 //
 // func();
 //
 // console.log (myname);

$('.grid').isotope({
  itemSelector: '.grid-item',
  // percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    // columnWidth: '.grid-sizer'
    columnWidth: '.grid-item'
  }

});


