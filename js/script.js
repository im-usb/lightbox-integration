const lightbox = document.querySelector('#lightbox');
const imageArea = document.querySelector('.image-area');
const cross = document.querySelector('.cross');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
// lightbox.id = 'lightbox';
// document.querySelector('.main').appendChild(lightbox);

const images = document.querySelectorAll('.landscape');
let currentIndex = 0; // Keep track of the current image index

images.forEach(image =>{
    image.addEventListener('click', e=> {
        lightbox.classList.add('active');
        const img = document.querySelector('.lightbox-img');
        img.src = image.src;
        currentIndex = image.getAttribute('value');
        console.log(currentIndex);
        imageArea.prepend(img);
    })
});

cross.addEventListener('click', e=> {
    lightbox.classList.remove('active');
})

next.addEventListener('click', e=> {
    currentIndex++;
    console.log(currentIndex);
    if (currentIndex > images.length-1) {
        currentIndex = 0;
    }
    const img = document.querySelector('.lightbox-img');
    img.src = images[currentIndex].src;
});

prev.addEventListener('click', e=> {
    currentIndex--;
    console.log(currentIndex);
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    const img = document.querySelector('.lightbox-img');
    img.src = images[currentIndex].src;
});

lightbox.addEventListener('click', e=> {
    if(e.target !== e.currentTarget) {
        return
    } else {
        lightbox.classList.remove('active');
    }
})