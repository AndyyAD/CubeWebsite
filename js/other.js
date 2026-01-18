const searchIcon = document.getElementById("searchIcon");
const searchContainer = document.querySelector(".search-container");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Makes the search box visible when clicked on search icon
searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("activeSearch");
});

// Search box disappears when clicked anywhere except the search box and icon
document.addEventListener("click", (e) => {
    const clickedInside = searchContainer.contains(e.target) || searchIcon.contains(e.target);

    if (!clickedInside) {
        searchContainer.classList.remove("activeSearch");
    }
});

// Search box disappears when esc is pressed
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        searchContainer.classList.remove("activeSearch");
    }
});

//working of hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});