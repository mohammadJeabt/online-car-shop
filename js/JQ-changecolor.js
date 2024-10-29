/*========== Info Cars Page - Page 3 ==========*/
/* Change image with jquery */

$(document).ready(function(){
    $('#button1').click(function(){
        $('#myImage').attr('src','../images/car_info_images/black.png');
    });
    $('#button2').click(function(){
        $('#myImage').attr('src','../images/car_info_images/white.png');
    });
    $('#button3').click(function(){
        $('#myImage').attr('src','../images/car_info_images/blue.png');
    });
    $('#button4').click(function(){
        $('#myImage').attr('src','../images/car_info_images/red.png');
    });
    $('#button5').click(function(){
        $('#myImage').attr('src','../images/car_info_images/silver.png');
    });
});