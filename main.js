const outfits = {
    oldMoney: {
        tops: [
            { name: "White Button-Up Shirt", image: "images/models/white button up shirt.webp" },
            { name: "Cream Sweater", image: "images/models/cream sweater cropped.webp" },
            { name: "Navy Polo", image: "images/models/navy polo.webp" },
            { name: "Beige Blazer", image: "images/models/beige blazer.webp" },
            { name: "Striped Shirt", image: "images/models/striped shirt.webp" }
        ],
        bottoms: [
            { name: "Black Pants", image: "images/models/black pants.webp" },
            { name: "Beige Trousers", image: "images/models/beige trousers.webp" },
            { name: "White Linen Pants", image: "images/models/white linen pants.webp" },
            { name: "Navy Dress Pants", image: "images/models/navy dress pants.webp" },
            { name: "Pleated Skirt", image: "images/models/pleated skirt.webp" }
        ],
        shoes: [
            { name: "Brown Loafers", image: "images/models/brown loafers.webp" },
            { name: "Black Loafers", image: "images/models/black loafers.webp" },
            { name: "White Sneakers", image: "images/models/white sneakers.webp" },
            { name: "Ballet Flats", image: "images/models/ballet flats.webp" },
            { name: "Leather Boots", image: "images/models/leather boots.webp" }
        ],
        accessories: [
            { name: "Gold Watch", image: "images/models/gold watch.webp" },
            { name: "Pearl Necklace", image: "images/models/pearl necklace.webp" },
            { name: "Sunglasses", image: "images/models/sunglasses.webp" },
            { name: "Leather Belt", image: "images/models/leather belt.webp" },
            { name: "Silk Scarf", image: "images/models/silk scarf.webp" }
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
    accessories: []
};

const themeLabels = {
    oldMoney: "Old Money",
    streetwear: "Streetwear",
    minimalist: "Minimalist",
    casual: "Casual",
    formal: "Formal"
};

const themeSelect = document.getElementById("themeSelect");
const clothingDisplay = document.getElementById("clothingDisplay");
const instructionBox = document.getElementById("instructionBox");
const previewButton = document.getElementById("previewBtn");
const previewResult = document.getElementById("previewResult");
const previewBoxes = {
    top: document.getElementById("previewTop"),
    bottom: document.getElementById("previewBottom"),
    shoes: document.getElementById("previewShoes"),
    accessory: document.getElementById("previewAccessory")
};

function initBuilder() {
    if (themeSelect) {
        themeSelect.addEventListener("change", showThemeItems);
    }

    if (previewButton) {
        previewButton.addEventListener("click", showPreviewSummary);
    }

    if (clothingDisplay) {
        clothingDisplay.addEventListener("click", handleClothingCardSelection);
    }

    initScrollEffects();

    if (themeSelect && themeSelect.value) {
        showThemeItems();
    }
}

function initScrollEffects() {
    const builderIntro = document.querySelector(".builder-intro");
    const controls = document.querySelector(".controls");
    const instructionBox = document.getElementById("instructionBox");
    const categorySections = document.querySelectorAll(".category-section");
    const previewBox = document.querySelector(".preview-box");

    if (!builderIntro && !controls && !instructionBox && !previewBox && categorySections.length === 0) return;

    const revealItems = [controls, instructionBox, previewBox, ...categorySections].filter(Boolean);

    const onScroll = () => {
        const shouldShrink = window.scrollY > 20;
        document.body.classList.toggle("builder-scrolled", shouldShrink);

        revealItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 80;

            if (inView) {
                item.classList.add("is-visible");
                item.style.transitionDelay = `${index * 0.06}s`;
            }
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

document.addEventListener("DOMContentLoaded", initBuilder);

function showThemeItems() {
    if (!clothingDisplay) return;

    const theme = themeSelect ? themeSelect.value : "";
    clothingDisplay.innerHTML = "";

    if (!theme) {
        if (instructionBox) {
            instructionBox.style.display = "block";
        }
        return;
    }

    if (instructionBox) {
        instructionBox.style.display = "none";
    }

    const themeItems = outfits[theme];
    clothingDisplay.innerHTML = `
        ${createCategory("Tops", "top", themeItems.tops)}
        ${createCategory("Bottoms", "bottom", themeItems.bottoms)}
        ${createCategory("Shoes", "shoes", themeItems.shoes)}
        ${createCategory("Accessories", "accessory", themeItems.accessories)}
    `;
}

function createCategory(title, type, items) {
    const cards = items.map((item) => {
        const isSelected = type === "accessory"
            ? selectedOutfit.accessories.some((selectedItem) => selectedItem.name === item.name)
            : selectedOutfit[type] && selectedOutfit[type].name === item.name;

        return `
            <button type="button" class="clothing-card ${isSelected ? "selected" : ""}" data-type="${type}" data-name="${item.name}" data-image="${item.image}">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                <p>${item.name}</p>
            </button>
        `;
    }).join("");

    return `
        <div class="category-section">
            <h2>${title}</h2>
            <div class="clothing-grid">
                ${cards}
            </div>
        </div>
    `;
}

function handleClothingCardSelection(event) {
    const card = event.target.closest(".clothing-card");

    if (!card) return;

    selectItem(card.dataset.type, {
        name: card.dataset.name,
        image: card.dataset.image
    });
}

function selectItem(type, item) {
    if (type === "accessory") {
        const existingIndex = selectedOutfit.accessories.findIndex((selectedItem) => selectedItem.name === item.name);

        if (existingIndex >= 0) {
            selectedOutfit.accessories.splice(existingIndex, 1);
        } else if (selectedOutfit.accessories.length < 2) {
            selectedOutfit.accessories.push(item);
        }
    } else {
        selectedOutfit[type] = item;
    }

    saveCurrentOutfit();
    updatePreview(type, type === "accessory" ? selectedOutfit.accessories : item);
    updateSelectionHighlights();
}

function updatePreview(type, item) {
    const previewBox = previewBoxes[type === "accessory" ? "accessory" : type];

    if (!previewBox) return;

    if (type === "accessory") {
        const accessories = Array.isArray(item) ? item : [];

        previewBox.innerHTML = `
            <div class="preview-card-content preview-card-visual">
                <p class="preview-label">Accessories</p>
                ${accessories.length ? accessories.map((accessory) => `
                    <div class="preview-thumb-row">
                        <img src="${accessory.image}" alt="${accessory.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                        <h3>${accessory.name}</h3>
                    </div>
                `).join("") : '<h3>No accessories selected</h3>'}
            </div>
        `;
        return;
    }

    if (!item) {
        previewBox.innerHTML = `<span class="preview-label">${getLabel(type)}</span>`;
        return;
    }

    previewBox.innerHTML = `
        <div class="preview-card-content preview-card-visual">
            <p class="preview-label">${getLabel(type)}</p>
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
            <h3>${item.name}</h3>
        </div>
    `;
}

function updateSelectionHighlights() {
    if (!clothingDisplay) return;

    clothingDisplay.querySelectorAll(".clothing-card").forEach((card) => {
        const type = card.dataset.type;
        const name = card.dataset.name;
        const isSelected = type === "accessory"
            ? selectedOutfit.accessories.some((selectedItem) => selectedItem.name === name)
            : selectedOutfit[type] && selectedOutfit[type].name === name;

        card.classList.toggle("selected", isSelected);
    });
}

function getLabel(type) {
    const labels = {
        top: "Top",
        bottom: "Bottom",
        shoes: "Shoes",
        accessory: "Accessory"
    };
    return labels[type] || "Style";
}

function saveCurrentOutfit() {
    localStorage.setItem("currentOutfit", JSON.stringify(selectedOutfit));
}

function showPreviewSummary() {
    if (!previewResult) return;

    const incomplete = [selectedOutfit.top, selectedOutfit.bottom, selectedOutfit.shoes].filter((item) => !item);

    if (incomplete.length) {
        previewResult.innerHTML = `
            <div class="preview-summary empty">
                <p>Select a top, bottom, and shoes to preview your full outfit.</p>
            </div>
        `;
        return;
    }

    const themeName = themeSelect && themeSelect.value ? themeLabels[themeSelect.value] : "Your";
    previewResult.innerHTML = buildVisualPreviewMarkup(selectedOutfit, themeName);
}

function loadPreviewPage() {
    const previewArea = document.getElementById("finalPreview");

    if (!previewArea) return;

    const outfit = JSON.parse(localStorage.getItem("currentOutfit") || "null");

    if (!outfit || !outfit.top || !outfit.bottom || !outfit.shoes) {
        previewArea.innerHTML = "<p class='empty-message'>Please complete your outfit in the Categories page first.</p>";
        return;
    }

    previewArea.innerHTML = buildVisualPreviewMarkup(outfit, "Your");
}

function buildVisualPreviewMarkup(outfit, themeName) {
    const accessories = Array.isArray(outfit.accessories) ? outfit.accessories : [];
    const accessoryItems = accessories.length
        ? accessories.map((item) => `
            <div class="preview-accessory-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                <span>${item.name}</span>
            </div>
        `).join("")
        : '<span class="preview-empty-text">No accessories selected</span>';

    return `
        <div class="preview-summary visual-preview-card">
            <div class="visual-preview-title">
                <h3>${themeName} Look</h3>
                <p>Editorial outfit preview</p>
            </div>
            <div class="editorial-preview-layout">
                <div class="editorial-preview-stack">
                    ${outfit.top ? `
                        <div class="editorial-preview-card">
                            <p class="item-label">Top</p>
                            <img src="${outfit.top.image}" alt="${outfit.top.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                            <p class="item-name">${outfit.top.name}</p>
                        </div>
                    ` : ""}
                    ${outfit.bottom ? `
                        <div class="editorial-preview-card">
                            <p class="item-label">Bottom</p>
                            <img src="${outfit.bottom.image}" alt="${outfit.bottom.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                            <p class="item-name">${outfit.bottom.name}</p>
                        </div>
                    ` : ""}
                    ${outfit.shoes ? `
                        <div class="editorial-preview-card">
                            <p class="item-label">Shoes</p>
                            <img src="${outfit.shoes.image}" alt="${outfit.shoes.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                            <p class="item-name">${outfit.shoes.name}</p>
                        </div>
                    ` : ""}
                </div>
                <div class="preview-accessory-side">
                    <p class="item-label">Accessories</p>
                    <div class="preview-accessory-list">${accessoryItems}</div>
                </div>
            </div>
        </div>
    `;
}

function previewChip(label, item) {
    if (!item) return "";
    return `
        <div class="preview-item-chip">
            <p class="item-label">${label}</p>
            <p class="item-name">${item.name}</p>
        </div>
    `;
}

window.addEventListener("load", loadPreviewPage);