let mobile_menu = document.getElementById('mobile-menu');
let mobile_menubar = document.getElementById('mobile-menubar');
let close = document.getElementById('close');
let mobile_menu_close = document.getElementById('mobile-menu-close'); 
 
mobile_menu.addEventListener('click', () => {
    mobile_menubar.classList.toggle('show'); 
});

mobile_menu_close.addEventListener('click', () => {
    mobile_menubar.classList.remove('show'); 
});

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });