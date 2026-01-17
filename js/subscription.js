const addtoCart = document.getElementById('atcBTN');
const gotoCart = document.getElementById('gtcBTN');

const VARIANTS = {
    single: {
        original: 101,
        lily: 102,
        rose: 103
    },
    double: {
        "original-original": 201,
        "lily-original": 202,
        "original-rose": 203,
        "lily-lily": 204,
        "lily-rose": 205,
        "rose-rose": 206
    }
};

// getting the value selected (helper function)
function getValue(name) {
    const ele = document.querySelector(`input[name="${name}"]:checked`);
    return ele ? ele.value : null;
}

// Disabling cart button and resetting visibility of buttons
function disableCart() {
    addtoCart.dataset.variant = "";
    gotoCart.dataset.variant = "";
    addtoCart.disabled = true;

    // Showing Add to Cart and hiding Go to Cart
    addtoCart.classList.remove('btnHide');
    gotoCart.classList.add('btnHide');
}

// updating the cart based on selection to generate different links
function updateCart() {
    let variantId = null;
    const isSingle = document.getElementById('singleSub').checked;
    const isDouble = document.getElementById('doubleSub').checked;

    if (isSingle) {
        const fragrance = getValue('fragType');
        if (!fragrance) return disableCart();
        variantId = VARIANTS.single[fragrance];
    }

    if (isDouble) {
        const frag1 = getValue('fragType1');
        const frag2 = getValue('fragType2');
        if (!frag1 || !frag2) return disableCart();
        const key = [frag1, frag2].sort().join("-");
        variantId = VARIANTS.double[key];
    }

    if (!variantId) return disableCart();

    // enabling add to cart and setting the variant for go to cart
    addtoCart.disabled = false;
    gotoCart.dataset.variant = variantId;

    // Reseting button visibility whenever selection changes
    addtoCart.classList.remove('btnHide');
    gotoCart.classList.add('btnHide');
}

// Handling Add to Cart click
addtoCart.addEventListener("click", function() {
    this.classList.add('btnHide');
    gotoCart.classList.remove('btnHide');
});

// Handling Go to Cart click
gotoCart.addEventListener("click", function() {
    if (!this.dataset.variant) return;
    const id = this.dataset.variant;
    window.open(`/cart/add?id=${id}`, "_blank");
});

// Listening for changes on all radio buttons
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", updateCart);
});

updateCart();
