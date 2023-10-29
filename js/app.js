// For Search bar
$(document).on('click','.search',function (){
    $('.search-bar').addClass('search-bar-active')
});
$(document).on('click','.search-cancel',function (){
   $('.search-bar').removeClass('search-bar-active')
});
// --login-sign-up-form
$(document).on('click','.user,.already-acount',function (){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});
$(document).on('click','.ign-up-btn',function (){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});
$(document).on('click','.form-cancel',function (){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});
// Slider
const slides = document.querySelector('.slider-item').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlides = slides.length;
let index = 0;
let duration = 6000;

prev.onclick = function (){
    slide('prev')
}

next.onclick = function (){
    slide('next');
}

function slide(direction){
    progress()
    if(direction=='next'){
        if (index == totalSlides-1){
            index = 0;
        }else {
            index++
        }
        console.log(index)
    }

    if(direction=='prev'){
        if (index == 0){
            index = totalSlides-1;
        }else {
            index--
        }
        console.log(index)
    }

    clearInterval(timer);

    timer = setInterval(autoSlide, duration)

    for (let i=0;i <slides.length;i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function progress(){
    document.querySelector('.progress').innerHTML = ""
    const div = document.createElement('div');
    div.style.width = "0";
    div.style.height = "5px";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.backgroundColor = "#c00";
    div.style.animation = "progress " + duration/1000 + "s linear";
    document.querySelector('.progress').appendChild(div)
}

function autoSlide(){
    slide('next');
}

let timer = setInterval(autoSlide, duration)

progress()

