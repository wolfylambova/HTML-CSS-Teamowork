$(function(){
    $("#slides").slidesjs({
        width: 940,
        height: 528,
        navigation: {
            active: true,
            effect: "fade"
        },
        pagination: {
            active: false
        }
    });


    $('.login-button').on('click', function() {
        $('.log').css('display','none');
        var uname = $('#username').val();
        $('#username-profile').html(uname);
        var sex = $('#sex').val();
        if (sex == 'm') {
            $('#image-profile').attr('src','images/male.png');
        } else {
            $('#image-profile').attr('src','images/female.png');
        }

        $('.log-user').css('display','block');
    });
    //
    //function getRandomInt(min, max) {
    //    return Math.floor(Math.random() * (max - min)) + min;
    //}

    //$('.news').css('display','none');
    //var randNews = getRandomInt(1,4);
    //console.log(randNews);
    //$('.news:eq(' + randNews + ')').css('display','block');

});