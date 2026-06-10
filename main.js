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

    const uploadButton = document.getElementById("uploadWardrobeBtn");
    if (uploadButton) {
        uploadButton.addEventListener("click", handleWardrobeUpload);
    }

    if (clothingDisplay) {
        clothingDisplay.addEventListener("click", handleClothingCardSelection);
    }

    initCameraMode();

    if (themeSelect && themeSelect.value) {
        showThemeItems();
    }

    initScrollEffects();
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

            if (inView || item.classList.contains("category-section")) {
                item.classList.add("is-visible");
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
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

    const themeItems = outfits[theme] || outfits.oldMoney;
    const categoryData = [
        { title: "Tops", type: "top", items: themeItems.tops || [] },
        { title: "Bottoms", type: "bottom", items: themeItems.bottoms || [] },
        { title: "Shoes", type: "shoes", items: themeItems.shoes || [] },
        { title: "Accessories", type: "accessory", items: themeItems.accessories || [] }
    ];

    clothingDisplay.innerHTML = categoryData.map(({ title, type, items }) => createCategory(title, type, items)).join("");

    clothingDisplay.querySelectorAll(".category-section").forEach((section, index) => {
        section.classList.add("is-visible");
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
        section.style.transitionDelay = `${index * 0.06}s`;
    });
}

function getImageCandidates(item, type) {
    const fallback = "images/models/model-1.svg";
    const safeItem = item || {};
    const name = (safeItem.name || "").trim();
    const normalized = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const spaced = name.replace(/\s+/g, " ").trim();
    const roots = {
        top: ["images/models", "images/tops"],
        bottom: ["images/models", "images/bottoms"],
        shoes: ["images/models", "images/shoes"],
        accessory: ["images/models", "images/accessories"]
    };
    const extensions = [".webp", ".jpg", ".jpeg", ".png", ".svg"];
    const baseNames = [normalized, normalized.replace(/-/g, " "), normalized.replace(/-/g, "_"), spaced];
    const candidates = [];

    if (safeItem.image) {
        candidates.push(safeItem.image);
    }

    roots[type] && roots[type].forEach((root) => {
        baseNames.forEach((baseName) => {
            extensions.forEach((ext) => {
                if (baseName) {
                    candidates.push(`${root}/${baseName}${ext}`);
                }
            });
        });
    });

    return Array.from(new Set(candidates.filter(Boolean).concat([fallback])));
}

function tryImageFallback(img, fallbackChain) {
    if (!img) return false;

    const parts = (fallbackChain || "").split(",").filter(Boolean);
    const currentSrc = img.getAttribute("data-current-src") || img.src;
    const nextCandidate = parts.find((candidate) => candidate && candidate !== currentSrc);

    if (nextCandidate) {
        img.setAttribute("data-current-src", nextCandidate);
        img.src = nextCandidate;
        return true;
    }

    const fallback = "images/models/model-1.svg";
    if ((img.getAttribute("data-current-src") || img.src) !== fallback) {
        img.setAttribute("data-current-src", fallback);
        img.src = fallback;
    }

    if (img.parentElement) {
        img.parentElement.classList.add("image-placeholder");
    }

    return false;
}

window.tryImageFallback = tryImageFallback;

function createCategory(title, type, items) {
    const safeItems = Array.isArray(items) ? items : [];
    const cards = safeItems.map((item) => {
        const imageCandidates = getImageCandidates(item, type);
        const imageSrc = imageCandidates[0];
        const fallbackChain = imageCandidates.slice(1).join(",");
        const isSelected = type === "accessory"
            ? selectedOutfit.accessories.some((selectedItem) => selectedItem.name === item.name)
            : selectedOutfit[type] && selectedOutfit[type].name === item.name;

        return `
            <button type="button" class="clothing-card ${isSelected ? "selected" : ""}" data-type="${type}" data-name="${item.name}" data-image="${imageSrc}">
                <div class="clothing-card-media">
                    <img src="${imageSrc}" alt="${item.name}" onerror="this.onerror=null;window.tryImageFallback(this,'${fallbackChain}');">
                </div>
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

let chatHistory = [];

function initCameraMode() {
    const generateButton = document.getElementById("generateCameraOutfits");
    if (!generateButton) return;

    generateButton.addEventListener("click", generateCameraOutfits);

    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    if (chatForm && chatInput && chatMessages) {
        chatForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const question = chatInput.value.trim();

            if (!question) return;

            const userBubble = document.createElement("div");
            userBubble.className = "chat-bubble user";
            userBubble.innerHTML = `<p>${question}</p>`;
            chatMessages.appendChild(userBubble);

            const answer = getChatAnswer(question, chatHistory);
            const assistantBubble = document.createElement("div");
            assistantBubble.className = "chat-bubble assistant";
            assistantBubble.innerHTML = `<p>${answer.replace(/\n/g, "<br>")}</p>`;
            chatMessages.appendChild(assistantBubble);
            chatHistory.push({ question, answer });
            chatMessages.scrollTop = chatMessages.scrollHeight;
            chatInput.value = "";
        });
    }
}

function getChatAnswer(question, history = []) {
    const normalized = question.toLowerCase().trim();

    if (normalized.includes('bag') || normalized.includes('colo')) {
        return `[Direct Verdict]: For a neutral base, a bag can anchor the outfit or add a pop.\n\n[How to Style It]:\n- Tan or Cognac: Adds a classic, warm finish.\n- Black: Instantly builds high contrast.\n- Olive Green: Introduces rich color without clashing.`;
    }

    if (normalized.includes('shoe') || normalized.includes('boot') || normalized.includes('heel') || normalized.includes('loafer')) {
        return `[Direct Verdict]: Footwear completely defines the final vibe.\n\n[How to Style It]:\n- White Sneakers / Loafers: Ideal for a relaxed, casual smart appearance.\n- Nude or Black Heels: Instantly elevates the outfit for work or dinner events.`;
    }

    if (/^(hi|hello|hey|hey there|good morning|hi there)/.test(normalized)) {
        return `Hi! I can help you style your wardrobe pieces and suggest what accessories or options work best. What are you styling today?`;
    }

    return `[Direct Verdict]: Yes, this combination can work well when the shape and texture are balanced.\n\n[How to Style It]:\n- Style top with a clean, well-fitted base layer.\n- Add one strong accessory like a belt, bag, or jewelry.\n- Finish with shoes that match the mood, such as loafers, boots, or heels.`;
}

function createPreviewUrl(file) {
    if (!file) return "images/models/model-1.svg";
    return window.URL.createObjectURL(file);
}

function getCameraItems(selector, type) {
    const inputs = Array.from(document.querySelectorAll(selector));

    return inputs.map((input, index) => {
        const file = input.files && input.files[0] ? input.files[0] : null;
        const label = input.dataset.label || `${type} ${index + 1}`;
        return {
            label,
            type,
            preview: createPreviewUrl(file),
            fileName: file ? file.name : "placeholder"
        };
    }).filter((item) => item.label);
}

function getOutfitMood(top, bottom) {
    const text = `${top.label} ${bottom.label}`.toLowerCase();
    if (text.includes("blazer") || text.includes("satin") || text.includes("tailored") || text.includes("trouser") || text.includes("linen")) {
        return "luxury tailoring";
    }
    if (text.includes("denim") || text.includes("jean") || text.includes("cargo") || text.includes("casual")) {
        return "casual cool";
    }
    if (text.includes("sweater") || text.includes("knit") || text.includes("cream") || text.includes("white")) {
        return "soft elegance";
    }
    return "polished street style";
}

function getHatOptions(mood) {
    if (mood === "luxury tailoring") {
        return ["Structured Fedora", "Panama Hat", "Vintage Beret"];
    }
    if (mood === "casual cool") {
        return ["Bucket Hat", "Baseball Cap", "Canvas Cap"];
    }
    if (mood === "soft elegance") {
        return ["Wide-Brim Sun Hat", "Soft Wool Hat", "Minimal Trilby"];
    }
    return ["Classic Fedora", "Trilby", "Satin Headband"];
}

function getOutfitStyleProfile(top, bottom) {
    const combined = `${top.label || top.name || ""} ${bottom.label || bottom.name || ""}`.toLowerCase();
    const menswearKeywords = /blazer|suit|shirt|tie|trouser|trousers|jean|denim|cargo|jacket|sweater|knit|hoodie|polo|overshirt|bomber|jogger|chino|coat|overcoat/;
    const womenswearKeywords = /dress|skirt|blouse|camisole|mini|maxi|satin|heel|heels|silk|gown|wrap|slip|peplum|flare/;

    if (menswearKeywords.test(combined) && !womenswearKeywords.test(combined)) {
        return "menswear";
    }

    if (womenswearKeywords.test(combined) && !menswearKeywords.test(combined)) {
        return "womenswear";
    }

    return "neutral";
}

function getOutfitStyleComments(outfit, mood, tone) {
    const topName = (outfit.top && (outfit.top.label || outfit.top.name)) || "this top";
    const bottomName = (outfit.bottom && (outfit.bottom.label || outfit.bottom.name)) || "these bottoms";
    const shoeName = (outfit.shoes && (outfit.shoes.label || outfit.shoes.name)) || "";
    const accessoryNames = Array.isArray(outfit.accessories)
        ? outfit.accessories.map((item) => item.name || item.label || "accessory").filter(Boolean)
        : [];
    const profile = getOutfitStyleProfile({ label: topName }, { label: bottomName });
    const templates = [];

    const topPhrase = topName.toLowerCase();
    const bottomPhrase = bottomName.toLowerCase();
    const comboPhrase = `${topName} + ${bottomName}`;

    if (tone === "luxurious") {
        templates.push(`${comboPhrase} feels especially polished because the ${topPhrase} and ${bottomPhrase} balance each other beautifully.`);
        templates.push(`A sleek watch, structured bag, or sculptural jewelry would make this feel more high-end.`);
        templates.push(`This version is stronger if you keep the styling refined and intentional.`);
    } else if (tone === "fun") {
        templates.push(`${comboPhrase} has a playful edge, and the ${topPhrase} gives it a confident lift.`);
        templates.push(`A bright accessory or a more relaxed layer would make this feel more youthful and energetic.`);
        templates.push(`This one works best when the styling feels a little more expressive.`);
    } else {
        if (profile === "menswear") {
            templates.push(`${comboPhrase} reads sharp and modern, especially with a clean silhouette.`);
            templates.push(`A simple belt or watch would make the outfit feel more complete.`);
        } else if (profile === "womenswear") {
            templates.push(`${comboPhrase} feels chic and balanced, with a soft but elevated finish.`);
            templates.push(`Delicate jewelry or a sleek bag would make it look even more refined.`);
        } else {
            templates.push(`${comboPhrase} feels easy to style and very wearable.`);
            templates.push(`A polished accessory would make the whole look feel more curated.`);
        }
    }

    if (accessoryNames.length) {
        templates.push(`The ${accessoryNames.join(" and ").toLowerCase()} already gives this outfit personality, so the rest can stay simple.`);
    }

    if (shoeName) {
        templates.push(`It would look especially strong with ${shoeName.toLowerCase()} to finish the look.`);
    } else if (profile === "womenswear") {
        templates.push(`Heels would work beautifully here for a more elevated silhouette.`);
    } else {
        templates.push(`Clean loafers or sleek sneakers would work really well with this outfit.`);
    }

    return templates.slice(0, 4);
}

function generateCameraOutfits() {
    const tops = getCameraItems('[data-role="top-input"]', "top");
    const bottoms = getCameraItems('[data-role="bottom-input"]', "bottom");
    const resultsContainer = document.getElementById("cameraResults");

    if (!resultsContainer) return;

    const pairs = [];
    tops.slice(0, 3).forEach((top) => {
        bottoms.slice(0, 2).forEach((bottom) => {
            const mood = getOutfitMood(top, bottom);
            pairs.push({ top, bottom, mood, hats: getHatOptions(mood) });
        });
    });

    const rankedPairs = pairs
        .sort((a, b) => {
            const moodScore = (mood) => mood === "luxury tailoring" ? 3 : mood === "soft elegance" ? 2 : mood === "casual cool" ? 1 : 0;
            return moodScore(b.mood) - moodScore(a.mood);
        })
        .slice(0, 2)
        .map((pair, index) => {
            const tone = index === 0 ? "luxurious" : "fun";
            const comments = getOutfitStyleComments({ top: pair.top, bottom: pair.bottom }, pair.mood, tone);
            return { ...pair, comments };
        });

    if (!rankedPairs.length) {
        resultsContainer.innerHTML = '<div class="camera-empty">Upload at least one top and one bottom to start styling.</div>';
        return;
    }

    resultsContainer.innerHTML = `
        <div class="camera-results-grid">
            ${rankedPairs.map(({ top, bottom, mood, hats, comments }) => `
                <article class="camera-outfit-card">
                    <div class="camera-outfit-media">
                        <img src="${top.preview}" alt="${top.label}">
                        <img src="${bottom.preview}" alt="${bottom.label}">
                    </div>
                    <div class="camera-outfit-copy">
                        <h4>${top.label} + ${bottom.label}</h4>
                        <p class="camera-mood">${mood}</p>
                        <p class="camera-description">A refined pairing with balanced structure and effortless confidence.</p>
                        <div class="camera-ai-comments">
                            ${comments.map((comment) => `<p>${comment}</p>`).join("")}
                        </div>
                        <div class="camera-hats">
                            <span>Hat options</span>
                            <ul>
                                ${hats.map((hat) => `<li>${hat}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function handleWardrobeUpload() {
    window.location.href = "camera.html";
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

    const imageCandidates = getImageCandidates(item, type);
    const imageSrc = imageCandidates[0];
    const fallbackChain = imageCandidates.slice(1).join(",");

    previewBox.innerHTML = `
        <div class="preview-card-content preview-card-visual">
            <p class="preview-label">${getLabel(type)}</p>
            <img class="preview-img ${type}-img" src="${imageSrc}" alt="${item.name}" onerror="this.onerror=null;window.tryImageFallback(this,'${fallbackChain}');">
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

    const topLabel = outfit.top ? outfit.top.name : "Top";
    const bottomLabel = outfit.bottom ? outfit.bottom.name : "Bottom";
    const mood = getOutfitMood({ label: topLabel }, { label: bottomLabel });
    const profile = getOutfitStyleProfile({ label: topLabel }, { label: bottomLabel });
    const styleLabel = profile === "menswear" ? "Structured finish" : profile === "womenswear" ? "Elevated finish" : "Versatile finish";
    const styleNotes = getOutfitStyleComments(outfit, mood);

    return `
        <div class="preview-summary visual-preview-card">
            <div class="visual-preview-title">
                <h3>${themeName} Look</h3>
                <p>${mood} • ${styleLabel}</p>
            </div>
            <div class="preview-hero-row">
                <div class="preview-chip-row">
                    ${previewChip("Top", outfit.top)}
                    ${previewChip("Bottom", outfit.bottom)}
                    ${previewChip("Shoes", outfit.shoes)}
                </div>
                <div class="preview-notes-card">
                    <h4>Styling notes</h4>
                    <ul>
                        ${styleNotes.map((note) => `<li>${note}</li>`).join("")}
                    </ul>
                </div>
            </div>
            <div class="editorial-preview-layout">
                <div class="editorial-preview-stack">
                    ${outfit.top ? `
                        <div class="editorial-preview-card">
                            <p class="item-label">Top</p>
                            <img class="preview-img top-img" src="${outfit.top.image}" alt="${outfit.top.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                            <p class="item-name">${outfit.top.name}</p>
                        </div>
                    ` : ""}
                    ${outfit.bottom ? `
                        <div class="editorial-preview-card">
                            <p class="item-label">Bottom</p>
                            <img class="preview-img bottom-img" src="${outfit.bottom.image}" alt="${outfit.bottom.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
                            <p class="item-name">${outfit.bottom.name}</p>
                        </div>
                    ` : ""}
                    ${outfit.shoes ? `
                        <div class="editorial-preview-card">
                            <p class="item-label">Shoes</p>
                            <img class="preview-img shoes-img" src="${outfit.shoes.image}" alt="${outfit.shoes.name}" onerror="this.onerror=null;this.src='images/models/model-1.svg';">
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
// =========================================================================
// MZ LUX REAL-TIME LIVE AI CHAT ENGINE
// =========================================================================

// 1. PASTE YOUR GROQ KEY INSIDE THESE QUOTES
const GROQ_API_SECRET_KEY = "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";

// 2. The Core Function that talks to the live AI model

return "Stylist connection error. Double check your API key connection!";
}
}

// 3. Connect to your actual website UI elements
// (Make sure these selectors or IDs match your HTML layout!)
const chatInputBox = document.querySelector('.chat-card input') || document.getElementById('chat-input');
const chatSendButton = document.querySelector('.chat-card button') || document.getElementById('btn-send');
const chatMessageArea = document.querySelector('.chat-card div') || document.getElementById('chat-box-display');

if (chatSendButton && chatInputBox && chatMessageArea) {
chatSendButton.addEventListener('click', async () => {
const messageText = chatInputBox.value.trim();
if (!messageText) return;

// Display user's text on the screen instantly
chatMessageArea.innerHTML += `<div style="text-align: right; background: #e2dcd5; padding: 10px; border-radius: 12px; margin-bottom: 10px; display: inline-block; float: right; clear: both; font-family: 'Montserrat'; max-width: 80%;">${messageText}</div>`;
chatInputBox.value = ''; // Clear out the input bar

// Display a sleek luxury loading message
const temporaryLoaderId = "loader-" + Date.now();
chatMessageArea.innerHTML += `<div id="${temporaryLoaderId}" style="text-align: left; background: #fff; border: 1px solid #e2dcd5; padding: 10px; border-radius: 12px; margin-bottom: 10px; display: inline-block; float: left; clear: both; font-family: 'Montserrat'; max-width: 80%; color: #888; font-style: italic;">MZ Stylist is curation layout...</div>`;
chatMessageArea.scrollTop = chatMessageArea.scrollHeight;

// Get live custom answer back from the real AI
const realAiAnswer = await fetchStylistResponse(messageText);

// Swap out the placeholder text with the actual stylish response
const loaderContainer = document.getElementById(temporaryLoaderId);
if (loaderContainer) {
loaderContainer.style.color = "#000";
loaderContainer.style.fontStyle = "normal";
loaderContainer.innerHTML = realAiAnswer;
}
chatMessageArea.scrollTop = chatMessageArea.scrollHeight;
});
}
