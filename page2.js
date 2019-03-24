const carousel =document.querySelector('.carousel')
const image=document.querySelectorAll('.carousel img')
function next(){
    
}
// $('#prev')
$('#next').on('click',function(){
    if(counter>=image.length-1) return
    carousel.style.transition='transform 0.4s ease-in-out'
    counter++
    carousel.style.transform='translateX('+(-size*counter)+'px)'    
})
$('#prev').on('click',function(){
    if(counter<=0) return 
    carousel.style.transition='transform 0.4s ease-in-out'
    counter--
    carousel.style.transform='translateX('+(-size*counter)+'px)'
})
carousel.addEventListener('transitionend',function(){
    if(image[counter].id==='last'){
        carousel.style.transition='none'
        counter=image.length-2
        carousel.style.transform='translateX('+(-size*counter)+'px)'
    }
    if(image[counter].id==='first'){
        carousel.style.transition='none'
        counter=image.length-counter
        carousel.style.transform='translateX('+(-size*counter)+'px)'
    }
})
let counter =1;
const size =image[0].clientWidth
carousel.style.transform='translate('+(-size*counter)+'px)'

$('document').ready(function(){
    setInterval(function(){
        if(counter>=image.length-1) return
        carousel.style.transition='transform 0.4s ease-in-out'
        counter++
        carousel.style.transform='translateX('+(-size*counter)+'px)'
    },3000)
})
