// Hide scroll button when on top
const arrowButton = document.querySelector(".scroll-btn");

let hidden = true;

window.onscroll = function(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // when not at top
        if (arrowButton.classList.contains('hide-btn')) {
            arrowButton.classList.remove('hide-btn');
        } 
        
    } else {
        // when at top
        if (!arrowButton.classList.contains('hide-btn')) {
            arrowButton.classList.add('hide-btn');
        } 
    }
}