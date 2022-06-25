

$(document).ready(function() {
    var $element = $('#bubble-1');
    var newText = 'Это jquery просто, чтобы было!';
    bubbleText({
        element: $element,
        newText: newText,
        speed: 2000,
        repeat: Infinity,
    });
})
