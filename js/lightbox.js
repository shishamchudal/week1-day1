$(document).ready(function(){
    /* Open lightbox on image click */
    $('#album').on('click', '#photo img', function(){
        var imgSrc = $(this).attr('src'); // Get the clicked image source
        
        // Show backdrop and lightbox with proper z-index
        $('.backdrop').css({'display': 'block', 'z-index': '998'}).animate({'opacity':'.50'}, 300, 'linear');
        $('.box').css({'z-index': '999'}).fadeIn();
        
        // Check if lightbox already has an image
        if ($('.box img').length) {
            $('.box img').attr('src', imgSrc); // Update existing image source
        } else {
            var img = $('<img>').attr('src', imgSrc); // Create new image element
            $('.box').append(img); // Append image to lightbox
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});
