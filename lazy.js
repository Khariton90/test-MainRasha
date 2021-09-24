const images = document.querySelectorAll('img[data-src]');
const descriptions = document.querySelectorAll('.item__description');
const loading = document.querySelector('.loading');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,

}

function handleImg( myImg, observer ){
 myImg.forEach(myImgSingle => {
     if(myImgSingle.intersectionRatio > 0){
         loadImage(myImgSingle.target)
     }
 })
}
function loadImage(image){
let aaaa = image.parentNode.querySelectorAll('.item__description');
image.src = image.getAttribute('data-src');
if(image.src.length > 0){
    aaaa.forEach(el => el.classList.add('active'));
}
}
const observer = new IntersectionObserver(handleImg, options);

images.forEach( img => {
    observer.observe(img);
})

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
       loading.classList.add('hide');
    }
};