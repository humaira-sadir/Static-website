// // var myIndex = 0;
// // carousel();

// // function carousel() {
// //     var i;
// //     var x = document.getElementsByClassName("mySlides");
// //     for (i = 0; i < x.length; i++) {
// //        x[i].style.display = "none";  
// //     }
// //     myIndex++;
// //     if (myIndex > x.length) {myIndex = 1}    
// //     x[myIndex-1].style.display = "block";  
// //     setTimeout(carousel, 5000);    
// // }


// // var mytexture = 0;
// // texture();

// // function texture() {
// //     var i;
// //     var y = document.getElementsByClassName("mytext");
// //     for (i = 0; i < y.length; i++) {
// //        y[i].style.display = "none";  
// //     }
// //     mytexture++;
// //     if (mytexture > y.length) {mytexture = 1}    
// //     y[mytexture-1].style.display = "block";  
// //     setTimeout(texture, 5000);    
// // }



// const carouselSlide = document.querySelector('.carousel-slide');

// const carouselImages = document.querySelectorAll('.carousel-slide div')

// const prevBtn = document.querySelector('#prevBtn');

// const nextBtn = document.querySelector('#nextBtn');

// let counter = 1;

// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click', function(){

//     if(counter <= 0){return }

//     carouselSlide.style.transition = "transform 0.4s ease-in-out";

//     counter++;

//     console.log(counter);

//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// });

// prevBtn.addEventListener('click', function(){

//     carouselSlide.style.transition = "transform 0.4s ease-in-out";

//     counter--;

//     console.log(counter);

//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// });






























