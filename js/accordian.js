const accordianItems = document.querySelectorAll('.accordianItem');
const image = document.getElementById('collectionImg');

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
})