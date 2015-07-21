//  Инициализация слайдера товаров / Set Owl Carousels
function initOwlCarousels(){

    $('.owl-carousel').each(function(){

        /* Max items counting */
        var max_items = $(this).attr('data-max-items'),
            slide_speed = $(this).attr('data-slide-speed');
        
        /* Install Owl Carousel */
        $(this).owlCarousel({
            items: max_items,
            navigation: false,
            pagination: false,
            responsive: false,
            slideSpeed: slide_speed,
            width: 'auto',
            
        });

        var owl = $(this).data('owlCarousel'),
            sliderControls = $(this).parent().parent().find('.carousel-controls'),
            sliderPagination = $(sliderControls).find('.carousel-pagination');
        
        /* Arrow next */
        $(sliderControls).find('.carousel-next').click(function(e){
            e.preventDefault();
            
            owl.next();
            
            sliderPagination.find('.slider-page').each(function() {
                if ( $(this).index() === owl.currentItem ) {
                    sliderPagination.find('.slider-page').removeClass('current');
                    $(this).addClass('current');
                }
            });
        });

        /* Arrow previous */
        $(sliderControls).find('.carousel-prev').click(function(e){
            e.preventDefault();
            
            owl.prev();
            
            sliderPagination.find('.slider-page').each(function() {
                if ( $(this).index() === owl.currentItem ) {
                    sliderPagination.find('.slider-page').removeClass('current');
                    $(this).addClass('current');
                }
            });
        });
        
        /* Pagination Controls Slider */
        sliderPagination.find('.slider-page').on('click', function(e) {
            e.preventDefault();
            
            owl.goTo($(this).index());
            sliderPagination.find('.slider-page').removeClass('current');
            $(this).addClass('current');
        });

    });
}

$(document).ready(function(){

    initOwlCarousels();
    
    $('#vert-prodslider').Thumbelina({
        orientation: 'vertical',
        $bwdBut:$('#vert-prodslider .top'),
        $fwdBut:$('#vert-prodslider .bottom')
    });
    
    $(function($) {
        var tabItem = $('.card-info-nav').find('li');
        var tabSection = $('.card-info-content').find('section');

        $(tabItem).on('click', function() {
            
            var tabItemId = $(this).index();
            
            if ( $(this).hasClass('current') === false ) {
                
                $(tabItem).removeClass('current');
                $(this).addClass('current');

                $(tabSection).fadeOut();
                
                $(tabSection).each( function() {
                    if ( $(this).index() === tabItemId ) {
                        $(this).fadeIn();
                    }
                });
            } else {
                return false;
            }
        });
    });
    
    // Dropdown меню сортикровки в каталоге
    $(function($) {
        var sortItem = $('.sort-items').find('li');
        var subSortMenu = $('.sub-sort-items');
        
        $(sortItem).on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).find(subSortMenu).fadeToggle(200);
        });
    });
    
    // Настройка поля "Загрузка файлов"
    $(function() {
        var wrapper = $(".upload-file"),
            inp = wrapper.find("input"),
            btn = wrapper.find(".upload-btn"),
            lbl = wrapper.find(".file-path");
                
        var file_api = (window.File && window.FileReader && window.FileList &&
            window.Blob) ? true : false;
        
        inp.change(function() {
            var file_name;
            
            if (file_api && inp[0].files[0]) {
                file_name = inp[0].files[0].name;
            } else {
                file_name = inp.val().replace("C:\\fakepath\\", '');
            }
            
            if (!file_name.length) return;
            
            if (lbl.is(":visible")) {
                lbl.text(file_name);
                btn.text("Выбрать");
            } else {
                btn.text(file_name);
            }
        }).change();
    });
    
    // Карта местности точки выдачи товара
    $(function() {
        var pointStoreRadio = $('.point-store-item').find('input:radio');
        
        $(pointStoreRadio).change(function() {
            var pointStoreItem = $(this).parent().parent();
            
            $('.point-store-item').removeClass('is-active');
            $(pointStoreItem).addClass('is-active');
            
        });
        
    });
    
    // Выпадающий список "Популярные товары"/"Новые поступления"
    $(function() {
        var categoryChoice = $('.category-choice').children('a');
        
        $(categoryChoice).on('click', function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('is-active');
        });
    
    });

});