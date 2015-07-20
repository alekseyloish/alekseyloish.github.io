$(function($) {
    $(".knob").knob({
        change: function(value) {
            //console.log("change : " + value);
        },
        release: function(value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel: function() {
            console.log("cancel : ", this);
        },
        /*format : function (value) {
                        return value + '%';
                    },*/
        draw: function() {
            // "tron" case
            if (this.$.data('skin') == 'tron') {
                this.cursorExt = 0.3;
                var a = this.arc(this.cv) // Arc
                    , pa // Previous arc
                    , r = 1;
                this.g.lineWidth = this.lineWidth;
                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius -
                        this.lineWidth, pa.s, pa.e, pa.d
                    );
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor :
                    this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius -
                    this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius -
                    this.lineWidth + 1 + this.lineWidth *
                    2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }
        },
        'stopper': 'stop'
    });
});


var intPoint = 0;
function changeKnobVal() {
    var endPoint = 70;
    
    if (intPoint < endPoint) {
        intPoint = intPoint + 3;
        $('.knob').val(intPoint).trigger('change');
        setTimeout('changeKnobVal()', 25);
    } else {
        return false;
    }
}

$(document).ready(function(){

    var timeStartPoint = $('#countdown-timer').attr("data-startpoint");
    
    // Инициализация таймера
    $('#countdown-timer').timeTo({
        timeTo: new Date(new Date(timeStartPoint)),
        displayDays: 2,
        displayCaptions: true,
        lang: 'ru',
        fontSize: 52,
        captionSize: 14
    });
    
    $('.slider').owlCarousel({
        items: 5,
        autoPlay: 3000,
        paginationSpeed: 500,
        rewindSpeed: 700,
        autoWidth: true
    });
    
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 850) {
                changeKnobVal();
            }
            return false;
        });
    });
    
});