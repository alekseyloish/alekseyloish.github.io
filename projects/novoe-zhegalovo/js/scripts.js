$(document).ready(function(){
    
    // fix  vertical adaptive main slider for mobile/tablet device
    $(function() {
        if( device.mobile() || 
            device.tablet() ||
            device.ios() ||
            device.ipad() || 
            device.iphone() || 
            device.ipod() ||
            device.android() ||
            device.androidPhone() ||
            device.androidTablet()
        ) {
            $('#main-slider').css({
                'height': 720,
                'min-height': 720
            });
        }
    });
    
    
    // Init popup windows
    $(function() {
        
        $('.details-button').on('click', function(e) {
            e.preventDefault();
            $('.overlay').fadeIn(350);
            $('#popup-order').fadeIn(350);
        });
        
        $('.popup__close, .overlay').on('click', function(e) {
            $('.overlay').fadeOut(350);
            $('#popup-order').fadeOut(350);
        });
        
    });
    
    
    // Инициализация карусели (универсальная)
    $(function() {
        $('.slider').each(function() {
                
            var sliderAPI = $(this).bxSlider({
                moveSlides: 1,
                adaptiveHeight: true
            });
            
            var sliderControls = $(this).closest('.parent-slider').find('.slider__control');
            
            $(sliderControls).find('.slider__arrow--prev').click(function(e) {
                e.preventDefault();
                sliderAPI.goToPrevSlide();
            });
            $(sliderControls).find('.slider__arrow--next').click(function(e) {
                e.preventDefault();
                sliderAPI.goToNextSlide();
            });
        });
    });
    
    
    // Main slider
    $(function() {
        
        var bullets = $('.bullet-item'),
            
            mainSlider = $('#main-slider').bxSlider({
                mode: 'fade',
                pagerCustom: true,
                auto: true,
                pause: 5000,
                pager: false,
                controls: false,
                onSlideNext: function($slideElement, oldIndex, newIndex){
                    bullets.removeClass('bullet-item--active');
                    $(bullets[newIndex]).addClass('bullet-item--active');

                }
            });

        $('.bullet-item').on('click', function(e){
            e.preventDefault();
            $(".bullet-item").removeClass("bullet-item--active");
            $(this).addClass('bullet-item--active');

            var slideId = $(this).data('slide-num');

            mainSlider.stopAuto();
            mainSlider.goToSlide(slideId - 1);
            mainSlider.startAuto();

        });

        $('.bullet-item').hover(function(e){
            mainSlider.stopAuto();
        },function(e){
            mainSlider.startAuto();
        });
    });
    
    
    // Tabs
    $(function() {
        $('.tabs__control-link').on('click', function(e) {
            e.preventDefault();
            
            var item = $(this).closest('.tabs__control-item'),
                tabsContent = $('.tabs-item'),
                itemPos = item.data('class-tab');
            
            tabsContent.filter('.tabs-item--' + itemPos)
                .add(item)
                .addClass('tabs-item--active')
                .siblings()
                .removeClass('tabs-item--active');
        });
    });
    
    
    // всплывающий текст в блоке Описание
    $(function() {
        
        $('.tabs-text__toggle').on('click', function(e){
            var $this = $(this),
                parent = $this.closest('.tabs-text');
            
            if ( !parent.hasClass('close') ) {
                $('.tabs-text').removeClass('close');
                parent.addClass('close');
                
                $this.find('.fa').toggleClass('fa-chevron-down fa-times');
                
                parent.find('.tabs-text__content').fadeToggle(300);
                parent.animate({
                    height: 60,
                    width: 60,
                    'margin-left': 507
                }, 500);
                
            } else {
                $this.find('.fa').toggleClass('fa-chevron-down fa-times');
                parent.animate({
                    height: 300,
                    width: 590,
                    'margin-left': -23
                }, 500);
                parent.find('.tabs-text__content').delay(500).fadeToggle(500);
                $('.tabs-text').removeClass('close');
            }
        });
    });
    
    
    // Scroll to some section
    $(function() {
        var scrollToSection = function(ob) {
            var anchorLink = $(ob).attr('href'),
                toAnchor = $(anchorLink).offset().top;

            $('body, html').animate({
                scrollTop: toAnchor - 50
            }, 1000);
            return false;
        }
        
        $('.page-nav').find('a').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            scrollToSection($this);
        });
    });
    
    
    // Fixed main nav after scrolling
    $(function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 125 ) {
                if ( $('.page-nav').hasClass('page-nav--fixed') == false ) {
                    $('.page-nav').addClass('page-nav--fixed');
                }
                return false;
            }
            $('.page-nav').removeClass('page-nav--fixed');
        });
    });
    
    
    // Calc installmentы (Калькулятор рассрочки)
    $(function() {
        var calcBox = $('.calc-instalments'),
            btnMinusClass = 'calc-form__button  calc-form__button--minus',
            btnPlusClass = 'calc-form__button  calc-form__button--plus';

        calcBox.find('.calc-form__button--minus, .calc-form__button--plus').on('click', function(e){
            e.preventDefault();

            var $this = $(this),
                btnName = $this.attr('class'),
                parent = $this.parents('fieldset'),
                parentName = parent.attr('id'),

                inputValue = parent.find('.calc-form__count-value').find('.value'),
                currentValue = parseInt(inputValue.text()),

                step = 1,
                result;

            console.log(btnName);

            if ( parentName == 'square-apart' ){
                step = 4;
            }

            if ( btnName == btnPlusClass ) {
                console.log(inputValue.text());
                
                if ( (parentName == 'amount-room' && currentValue > 4)  ||  
                     (parentName == 'period-installments' && currentValue > 11) ) {
                    return false;
                    
                } else {
                    result = currentValue + step;
                    inputValue.text(result);
                }
            } else {
                if ( currentValue <= 1 ) {
                    return false;
                } else {
                    result = currentValue - step;
                    inputValue.text(result);
                }
            }
        });
    });
    
    
    // Datepicker   viewing-date
    $(function() {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false
        };

        $.datepicker.setDefaults($.datepicker.regional['ru']);

        $('#viewing-date').datepicker({
            dateFormat: 'd MM'
        });
    });
    
    
    // Mask for input Viewing Time and input Phone
    $(function() {
        $('.input-phone').mask("+7-(999)-999-99-99 ",{placeholder:"x"});
        $('#viewing-time').mask("99:99", {
                placeholder: "_",
                completed: function() {
                    var val = $(this).val().split(':');
                    if ( val[0]*1 > 23) val[0] = '23';
                    if ( val[1]*1 > 59) val[1] = '59';
                    $(this).val( val.join(':') );
                    $(this).next(':input').focus();
                }
            }
        );
    });
    
    
    // Yandex maps
    function init(){
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.91, 38.09], // Москва
            zoom: 12,
            controls: ['zoomControl']
        });
        myMap.behaviors.disable('scrollZoom');

        myMap.behaviors.disable('scrollZoom');
        myGeoObject = new ymaps.GeoObject();
        myMap.geoObjects
            .add(new ymaps.Placemark([55.90582, 37.981974], {
                balloonContent: 'ЖК &laquo;<strong>Новое Жегалово</strong>&raquo;'
            }, {
                iconImageHref: '/images/map-pin.png'
            }));

    }
    ymaps.ready(init);

});