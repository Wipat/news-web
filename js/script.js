let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('section nav a')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id +']').classList.add('active')
            })
        }
    })
}

// scroll
$(document).ready(function(){

    $('#menu').click(function(){
  
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
  
    });
  
    $(window).on('load scroll',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('#scroll-top').show();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        100,
        'linear'
      );
  
    });
  
  });