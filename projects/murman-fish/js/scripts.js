$(document).ready(function(){

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
    
    $('#user-auth').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn();
        $('.popup-authorized').fadeIn();
    });
    
    $('.popup-close, .popup-bg').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeOut();
        $('.popup').fadeOut();
    })

});