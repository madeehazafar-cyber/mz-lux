const outfits = {
    oldMoney: {
        tops: [
            { name: "White Button-Up Shirt", image: "images/tops/white-shirt.jpg" },
            { name: "Cream Sweater", image: "images/tops/cream-sweater.jpg" },
            { name: "Navy Polo", image: "images/tops/navy-polo.jpg" },
            { name: "Beige Blazer", image: "images/tops/beige-blazer.jpg" },
            { name: "Striped Shirt", image: "images/tops/striped-shirt.jpg" }
        ],
        bottoms: [
            { name: "Black Pants", image: "images/bottoms/black-pants.jpg" },
            { name: "Beige Trousers", image: "images/bottoms/beige-trousers.jpg" },
            { name: "White Linen Pants", image: "images/bottoms/white-linen-pants.jpg" },
            { name: "Navy Dress Pants", image: "images/bottoms/navy-dress-pants.jpg" },
            { name: "Pleated Skirt", image: "images/bottoms/pleated-skirt.jpg" }
        ],
        shoes: [
            { name: "Brown Loafers", image: "images/shoes/brown-loafers.jpg" },
            { name: "Black Loafers", image: "images/shoes/black-loafers.jpg" },
            { name: "White Sneakers", image: "images/shoes/white-sneakers.jpg" },
            { name: "Ballet Flats", image: "images/shoes/ballet-flats.jpg" },
            { name: "Leather Boots", image: "images/shoes/leather-boots.jpg" }
        ],
        accessories: [
            { name: "Gold Watch", image: "images/accessories/gold-watch.jpg" },
            { name: "Pearl Necklace", image: "images/accessories/pearl-necklace.jpg" },
            { name: "Sunglasses", image: "images/accessories/sunglasses.jpg" },
            { name: "Leather Belt", image: "images/accessories/leather-belt.jpg" },
            { name: "Silk Scarf", image: "images/accessories/silk-scarf.jpg" }
        ]
    },

    streetwear: {
        tops: [
            { name: "Oversized Hoodie", image: "images/tops/oversized-hoodie.jpg" },
            { name: "Graphic Tee", image: "images/tops/graphic-tee.jpg" },
            { name: "Denim Jacket", image: "images/tops/denim-jacket.jpg" },
            { name: "Crop Hoodie", image: "images/tops/crop-hoodie.jpg" },
            { name: "Varsity Jacket", image: "images/tops/varsity-jacket.jpg" }
        ],
        bottoms: [
            { name: "Cargo Pants", image: "images/bottoms/cargo-pants.jpg" },
            { name: "Baggy Jeans", image: "images/bottoms/baggy-jeans.jpg" },
            { name: "Joggers", image: "images/bottoms/joggers.jpg" },
            { name: "Denim Skirt", image: "images/bottoms/denim-skirt.jpg" },
            { name: "Wide Leg Jeans", image: "images/bottoms/wide-leg-jeans.jpg" }
        ],
        shoes: [
            { name: "Chunky Sneakers", image: "images/shoes/chunky-sneakers.jpg" },
            { name: "High Tops", image: "images/shoes/high-tops.jpg" },
            { name: "Platform Sneakers", image: "images/shoes/platform-sneakers.jpg" },
            { name: "Combat Boots", image: "images/shoes/combat-boots.jpg" },
            { name: "Skate Shoes", image: "images/shoes/skate-shoes.jpg" }
        ],
        accessories: [
            { name: "Baseball Cap", image: "images/accessories/baseball-cap.jpg" },
            { name: "Shoulder Bag", image: "images/accessories/shoulder-bag.jpg" },
            { name: "Silver Chain", image: "images/accessories/silver-chain.jpg" },
            { name: "Beanie", image: "images/accessories/beanie.jpg" },
            { name: "Hoop Earrings", image: "images/accessories/hoop-earrings.jpg" }
        ]
    },

    minimalist: {
        tops: [
            { name: "White Tee", image: "images/tops/white-tee.jpg" },
            { name: "Black Tank Top", image: "images/tops/black-tank.jpg" },
            { name: "Grey Sweater", image: "images/tops/grey-sweater.jpg" },
            { name: "Cream Blouse", image: "images/tops/cream-blouse.jpg" },
            { name: "Basic Cardigan", image: "images/tops/basic-cardigan.jpg" }
        ],
        bottoms: [
            { name: "Straight Jeans", image: "images/bottoms/straight-jeans.jpg" },
            { name: "Black Trousers", image: "images/bottoms/black-trousers.jpg" },
            { name: "Neutral Skirt", image: "images/bottoms/neutral-skirt.jpg" },
            { name: "Cream Pants", image: "images/bottoms/cream-pants.jpg" },
            { name: "Grey Wide Pants", image: "images/bottoms/grey-wide-pants.jpg" }
        ],
        shoes: [
            { name: "White Flats", image: "images/shoes/white-flats.jpg" },
            { name: "Simple Sneakers", image: "images/shoes/simple-sneakers.jpg" },
            { name: "Black Flats", image: "images/shoes/black-flats.jpg" },
            { name: "Neutral Sandals", image: "images/shoes/neutral-sandals.jpg" },
            { name: "Clean Loafers", image: "images/shoes/clean-loafers.jpg" }
        ],
        accessories: [
            { name: "Simple Tote", image: "images/accessories/simple-tote.jpg" },
            { name: "Gold Studs", image: "images/accessories/gold-studs.jpg" },
            { name: "Thin Belt", image: "images/accessories/thin-belt.jpg" },
            { name: "Minimal Watch", image: "images/accessories/minimal-watch.jpg" },
            { name: "Small Necklace", image: "images/accessories/small-necklace.jpg" }
        ]
    },

    casual: {
        tops: [
            { name: "Basic Hoodie", image: "images/tops/basic-hoodie.jpg" },
            { name: "Plain Tee", image: "images/tops/plain-tee.jpg" },
            { name: "Flannel Shirt", image: "images/tops/flannel-shirt.jpg" },
            { name: "Zip-Up Sweater", image: "images/tops/zip-up-sweater.jpg" },
            { name: "Casual Blouse", image: "images/tops/casual-blouse.jpg" }
        ],
        bottoms: [
            { name: "Blue Jeans", image: "images/bottoms/blue-jeans.jpg" },
            { name: "Leggings", image: "images/bottoms/leggings.jpg" },
            { name: "Joggers", image: "images/bottoms/joggers.jpg" },
            { name: "Denim Shorts", image: "images/bottoms/denim-shorts.jpg" },
            { name: "Casual Skirt", image: "images/bottoms/casual-skirt.jpg" }
        ],
        shoes: [
            { name: "White Sneakers", image: "images/shoes/white-sneakers.jpg" },
            { name: "Slip Ons", image: "images/shoes/slip-ons.jpg" },
            { name: "Casual Boots", image: "images/shoes/casual-boots.jpg" },
            { name: "Canvas Shoes", image: "images/shoes/canvas-shoes.jpg" },
            { name: "Running Shoes", image: "images/shoes/running-shoes.jpg" }
        ],
        accessories: [
            { name: "Backpack", image: "images/accessories/backpack.jpg" },
            { name: "Scrunchie", image: "images/accessories/scrunchie.jpg" },
            { name: "Crossbody Bag", image: "images/accessories/crossbody-bag.jpg" },
            { name: "Casual Cap", image: "images/accessories/casual-cap.jpg" },
            { name: "Simple Bracelet", image: "images/accessories/simple-bracelet.jpg" }
        ]
    },

    formal: {
        tops: [
            { name: "White Blouse", image: "images/tops/white-blouse.jpg" },
            { name: "Black Blazer", image: "images/tops/black-blazer.jpg" },
            { name: "Satin Shirt", image: "images/tops/satin-shirt.jpg" },
            { name: "Dressy Top", image: "images/tops/dressy-top.jpg" },
            { name: "Tailored Jacket", image: "images/tops/tailored-jacket.jpg" }
        ],
        bottoms: [
            { name: "Dress Pants", image: "images/bottoms/dress-pants.jpg" },
            { name: "Pencil Skirt", image: "images/bottoms/pencil-skirt.jpg" },
            { name: "Black Trousers", image: "images/bottoms/black-trousers.jpg" },
            { name: "Midi Skirt", image: "images/bottoms/midi-skirt.jpg" },
            { name: "Wide Leg Trousers", image: "images/bottoms/wide-leg-trousers.jpg" }
        ],
        shoes: [
            { name: "Black Heels", image: "images/shoes/black-heels.jpg" },
            { name: "Nude Heels", image: "images/shoes/nude-heels.jpg" },
            { name: "Pointed Flats", image: "images/shoes/pointed-flats.jpg" },
            { name: "Dress Loafers", image: "images/shoes/dress-loafers.jpg" },
            { name: "Ankle Boots", image: "images/shoes/ankle-boots.jpg" }
        ],
        accessories: [
            { name: "Pearl Earrings", image: "images/accessories/pearl-earrings.jpg" },
            { name: "Clutch Bag", image: "images/accessories/clutch-bag.jpg" },
            { name: "Gold Bracelet", image: "images/accessories/gold-bracelet.jpg" },
            { name: "Elegant Watch", image: "images/accessories/elegant-watch.jpg" },
            { name: "Silk Scarf", image: "images/accessories/silk-scarf.jpg" }
        ]
    }
};

const selectedOutfit = {
    top: null,
    bottom: null,
    shoes: null,
    accessory: null
};

const themeSelect = document.getElementById("themeSelect");
const clothingDisplay = document.getElementById("clothingDisplay");
const instructionBox = document.getElementById("instructionBox");

if (themeSelect) {
    themeSelect.addEventListener("change", showThemeItems);
}

function showThemeItems() {
    const theme = themeSelect.value;

    clothingDisplay.innerHTML = "";

    if (theme === "") {
        instructionBox.style.display = "block";
        return;
    }

    instructionBox.style.display = "none";

    const themeItems = outfits[theme];

    clothingDisplay.innerHTML = `
        ${createCategory("Tops", "top", themeItems.tops)}
        ${createCategory("Bottoms", "bottom", themeItems.bottoms)}
        ${createCategory("Shoes", "shoes", themeItems.shoes)}
        ${createCategory("Accessories", "accessory", themeItems.accessories)}
    `;
}

function createCategory(title, type, items) {
    let cards = items.map(item => `
        <div class="clothing-card" onclick='selectItem("${type}", ${JSON.stringify(item)})'>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        </div>
    `).join("");

    return `
        <div class="category-section">
            <h2>${title}</h2>
            <div class="clothing-grid">
                ${cards}
            </div>
        </div>
    `;
}

function selectItem(type, item) {
    selectedOutfit[type] = item;

    if (type === "top") {
        updatePreview("previewTop", item);
    } else if (type === "bottom") {
        updatePreview("previewBottom", item);
    } else if (type === "shoes") {
        updatePreview("previewShoes", item);
    } else if (type === "accessory") {
        updatePreview("previewAccessory", item);
    }
}

function updatePreview(elementId, item) {
    const previewBox = document.getElementById(elementId);

    if (!previewBox) return;

    previewBox.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
    `;
}

function saveCurrentOutfit() {
    localStorage.setItem("currentOutfit", JSON.stringify(selectedOutfit));
}

function loadPreviewPage() {
    const previewArea = document.getElementById("finalPreview");

    if (!previewArea) return;

    const outfit = JSON.parse(localStorage.getItem("currentOutfit"));

    if (!outfit || !outfit.top || !outfit.bottom || !outfit.shoes || !outfit.accessory) {
        previewArea.innerHTML = "<p>Please complete your outfit in the Categories page first.</p>";
        return;
    }

    previewArea.innerHTML = `
        ${previewItem("Top", outfit.top)}
        ${previewItem("Bottom", outfit.bottom)}
        ${previewItem("Shoes", outfit.shoes)}
        ${previewItem("Accessory", outfit.accessory)}
    `;
}

function previewItem(label, item) {
    return `
        <div class="preview-card">
            <h3>${label}</h3>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        </div>
    `;
}

window.addEventListener("load", loadPreviewPage);