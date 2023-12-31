document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.responsive-image');
    
    function fadeIn(element) {
        let opacity = 0;
        const interval = 50;
        const targetOpacity = 1;
        
        const fade = setInterval(function() {
            if (opacity >= targetOpacity) {
                clearInterval(fade);
            } else {
                opacity += 0.05;
                element.style.opacity = opacity;
            }
        }, interval);
    }

    setTimeout(function() {
        fadeIn(image);
    }, 1000);
});
