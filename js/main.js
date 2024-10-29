/*========== Cars Page - Page 2 ==========*/

let mixercars = mixitup('.car_content', {
    selectors: {
        target: '.card'
    },
    animation: {
        duration: 300
    }
});

const linkCars=document.querySelectorAll('.car_item');

function activeCars(){
    linkCars.forEach(l=> l.classList.remove('active-cars'));
    this.classList.add('active-cars');
}

linkCars.forEach(l=> l.addEventListener('click',activeCars));