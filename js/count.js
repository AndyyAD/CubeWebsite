const counters = document.querySelectorAll(".number");
let started = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const speed = 20;

        const updateCount = () => {
            const increment = target / 100;

            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCount, speed);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
}

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
        started = true;
        animateCounters();
    }
}, { threshold: 0.5 });

observer.observe(document.getElementById("stats"));