const animationItmes = document.querySelectorAll('.animation');

function getScrollPos(elem){
    if(elem.offsetTop - window.innerHeight + (elem.offsetHeight * 0.5) < 1) {
        return 0
    }
    return elem.offsetTop - window.innerHeight + (elem.offsetHeight * 0.5)
}

animationItmes.forEach(item => {
    if ((getScrollPos(item) === 0) && (!item.classList.contains('animated'))) {
        item.classList.add('animated')
    }
});

document.addEventListener('scroll', ()=> {
    animationItmes.forEach(item => {
        if ((getScrollPos(item) < scrollY) && (!item.classList.contains('animated'))) {
            item.classList.add('animated')
        }
    });
})