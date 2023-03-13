const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.querySelector('.main').appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image =>{
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        if(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
});

lightbox.addEventListener('click', e=> {
    if(e.target !== e.currentTarget) {
        return
    } else {
        lightbox.classList.remove('active');
    }
})