window.onload = function () {
    var nav = document.getElementById('l-sidebar__nav-wrapper');
    var hamburger = document.getElementById('l-sidebar__js-hamburger');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
        $('html').toggleClass('scroll-prevent');
    });    
};

    $(function() {
        $('.p-search-word').click(function(){ 
         $('.p-search-word').text('ようこそ、Progateへ');
        });
        
      });  

