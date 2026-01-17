const carousal = document.querySelector('.carousal');
const track = document.querySelector('.carousalTrack');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const thumbnail = document.querySelector('.thumbnail');
const thumbs = document.querySelectorAll('.thumb');
const prev = document.querySelector('.leftArrow');
const next = document.querySelector('.rightArrow');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;

function updateCarousal() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Changes the dots highlighted according to the image
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('activeDot');
        } else {
            dot.classList.remove('activeDot');
        }
    });

    // Changes the thumbnail highlighted according to the image
    thumbs.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('activeThumbnail');
        } else {
            thumb.classList.remove('activeThumbnail');
        }
    });
}

// changes the carousal images when clicked on next button
next.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateCarousal();
    } else {
        currentIndex = 0;
        updateCarousal();
    }
});

// changes the carousal images when clicked on previous button
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousal();
    } else {
        currentIndex = totalSlides - 1;
        updateCarousal();
    }
})

// changes the carousal images according to dot clicked
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousal();
    });
});

// changes the carousal images according to thumbnail clicked
thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateCarousal();
    })
})

updateCarousal();