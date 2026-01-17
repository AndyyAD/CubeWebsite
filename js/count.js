const counters = document.querySelectorAll(".number");
let started = false;

// code for animating the counters
function animateCounter(counter) {
    const target = +counter.dataset.target;
    let current = 0;
    const increment = target / 250; // set the timing of the animation

    function update() {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(update); // makes the count smoother
        } else {
            counter.textContent = target;
        }
    }

    update();
}

// Animating all the counters
function animateCounters() {
    counters.forEach(animateCounter);
}

// to trigger animation once it appears on the screen
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
        started = true;
        animateCounters();
    }
}, { threshold: 0.5 });

observer.observe(document.getElementById("stats"));
