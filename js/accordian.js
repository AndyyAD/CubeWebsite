const accordianItems = document.querySelectorAll('.accordianItem');
const image = document.getElementById('collectionImg');

const subs = document.querySelectorAll('.subs');
const radios = document.querySelectorAll('input[name="subType"]');

// animating the accordian menu for collection section
accordianItems.forEach(item => {
    item.addEventListener('click', () => {
        accordianItems.forEach(i => i.classList.remove('accActive'));
        item.classList.add('accActive');

        const imageSrc = item.getAttribute('data-image');
        image.classList.add('fade-out');
        setTimeout(() => {
            image.src = imageSrc;
            image.classList.remove('fade-out');
        }, 400);
    });
});

// animating the accordian menu for shoping section
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        subs.forEach(sub => sub.classList.remove('activeSubs'));
        radio.closest('.subs').classList.add('activeSubs');
    });
});