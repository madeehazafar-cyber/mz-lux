// ── PROXY URL ──
const PROXY_URL = "https://mz-3i9crjfoy-mz5.vercel.app/api/proxy";

const outfits = {
    oldMoney: {
        tops: [
            { name: "White Button-Up Shirt", image: "images/models/white button up shirt.webp" },
            { name: "Cream Sweater",          image: "images/models/cream sweater cropped.webp" },
            { name: "Navy Polo",              image: "images/models/navy polo.webp" },
            { name: "Beige Blazer",           image: "images/models/beige blazer.webp" },
            { name: "Striped Shirt",          image: "images/models/striped shirt.webp" }
        ],
        bottoms: [
            { name: "Black Pants",       image: "images/models/black pants.webp" },
            { name: "Beige Trousers",    image: "images/models/beige trousers.webp" },
            { name: "White Linen Pants", image: "images/models/white linen pants.webp" },
            { name: "Navy Dress Pants",  image: "images/models/navy dress pants.webp" },
            { name: "Pleated Skirt",     image: "images/models/pleated skirt.webp" }
        ],
        shoes: [
            { name: "Brown Loafers",  image: "images/models/brown loafers.webp" },
            { name: "Black Loafers",  image: "images/models/black loafers.webp" },
            { name: "White Sneakers", image: "images/models/white sneakers.webp" },
            { name: "Ballet Flats",   image: "images/models/ballet flats.webp" },
            { name: "Leather Boots",  image: "images/models/leather boots.webp" }
        ],
        accessories: [
            { name: "Gold Watch",     image: "images/models/gold watch.webp" },
            { name: "Pearl Necklace", image: "images/models/pearl necklace.webp" },
            { name: "Sunglasses",     image: "images/models/sunglasses.webp" },
            { name: "Leather Belt",   image: "images/models/leather belt.webp" },
            { name: "Silk Scarf",     image: "images/models/silk scarf.webp" }
        ]
    },
    streetwear: {
        tops: [
            { name: "Oversized Hoodie", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
            { name: "Graphic Tee",      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80" },
            { name: "Denim Jacket",     image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&q=80" },
            { name: "Crop Hoodie",      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
            { name: "Varsity Jacket",   image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
        ],
        bottoms: [
            { name: "Cargo Pants",    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80" },
            { name: "Baggy Jeans",    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
            { name: "Joggers",        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80" },
            { name: "Denim Skirt",    image: "https://images.unsplash.com/photo-1604176424472-17cd740f0197?w=400&q=80" },
            { name: "Wide Leg Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
        ],
        shoes: [
            { name: "Chunky Sneakers",   image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80" },
            { name: "High Tops",         image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80" },
            { name: "Platform Sneakers", image: "https://images.unsplash.com/photo-1607522370275-f6fd0d31a94a?w=400&q=80" },
            { name: "Combat Boots",      image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80" },
            { name: "Skate Shoes",       image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80" }
        ],
        accessories: [
            { name: "Baseball Cap",  image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
            { name: "Shoulder Bag",  image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
            { name: "Silver Chain",  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
            { name: "Beanie",        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80" },
            { name: "Hoop Earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80" }
        ]
    },
    minimalist: {
        tops: [
            { name: "White Tee",      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
            { name: "Black Tank Top", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80" },
            { name: "Grey Sweater",   image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
            { name: "Cream Blouse",   image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&q=80" },
            { name: "Basic Cardigan", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80" }
        ],
        bottoms: [
            { name: "Straight Jeans",  image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&q=80" },
            { name: "Black Trousers",  image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
            { name: "Neutral Skirt",   image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400&q=80" },
            { name: "Cream Pants",     image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4d04?w=400&q=80" },
            { name: "Grey Wide Pants", image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&q=80" }
        ],
        shoes: [
            { name: "White Flats",     image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80" },
            { name: "Simple Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
            { name: "Black Flats",     image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=400&q=80" },
            { name: "Neutral Sandals", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400&q=80" },
            { name: "Clean Loafers",   image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80" }
        ],
        accessories: [
            { name: "Simple Tote",    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80" },
            { name: "Gold Studs",     image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
            { name: "Thin Belt",      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
            { name: "Minimal Watch",  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
            { name: "Small Necklace", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" }
        ]
    },
    casual: {
        tops: [
            { name: "Basic Hoodie",   image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
            { name: "Plain Tee",      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
            { name: "Flannel Shirt",  image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80" },
            { name: "Zip-Up Sweater", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
            { name: "Casual Blouse",  image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&q=80" }
        ],
        bottoms: [
            { name: "Blue Jeans",   image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
            { name: "Leggings",     image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" },
            { name: "Joggers",      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80" },
            { name: "Denim Shorts", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80" },
            { name: "Casual Skirt", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80" }
        ],
        shoes: [
            { name: "White Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
            { name: "Slip Ons",       image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80" },
            { name: "Casual Boots",   image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&q=80" },
            { name: "Canvas Shoes",   image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80" },
            { name: "Running Shoes",  image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80" }
        ],
        accessories: [
            { name: "Backpack",        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
            { name: "Scrunchie",       image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80" },
            { name: "Crossbody Bag",   image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
            { name: "Casual Cap",      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80" },
            { name: "Simple Bracelet", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" }
        ]
    },
    formal: {
        tops: [
            { name: "White Blouse",    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&q=80" },
            { name: "Black Blazer",    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80" },
            { name: "Satin Shirt",     image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80" },
            { name: "Dressy Top",      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
            { name: "Tailored Jacket", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
        ],
        bottoms: [
            { name: "Dress Pants",       image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
            { name: "Pencil Skirt",      image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400&q=80" },
            { name: "Black Trousers",    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
            { name: "Midi Skirt",        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80" },
            { name: "Wide Leg Trousers", image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&q=80" }
        ],
        shoes: [
            { name: "Black Heels",   image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80" },
            { name: "Nude Heels",    image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=400&q=80" },
            { name: "Pointed Flats", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400&q=80" },
            { name: "Dress Loafers", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80" },
            { name: "Ankle Boots",   image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80" }
        ],
        accessories: [
            { name: "Pearl Earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80" },
            { name: "Clutch Bag",     image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
            { name: "Gold Bracelet",  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
            { name: "Elegant Watch",  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
            { name: "Silk Scarf",     image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80" }
        ]
    }
};

const selectedOutfit = { top: null, bottom: null, shoes: null, accessories: [] };
const themeLabels = { oldMoney: "Old Money", streetwear: "Streetwear", minimalist: "Minimalist", casual: "Casual", formal: "Formal" };
const themeSelect     = document.getElementById("themeSelect");
const clothingDisplay = document.getElementById("clothingDisplay");
const instructionBox  = document.getElementById("instructionBox");
const previewResult   = document.getElementById("previewResult");
const previewBoxes = {
    top:       document.getElementById("previewTop"),
    bottom:    document.getElementById("previewBottom"),
    shoes:     document.getElementById("previewShoes"),
    accessory: document.getElementById("previewAccessory")
};

function getLocalStylistReply(question = "", history = []) {
    const text = (question || "").toLowerCase().trim();

    if (!text) {
        return "I’m here — tell me what you want to style and I’ll make it feel sharper and more intentional.";
    }

    if (/^(erm|erh|uh|um|hmm|hm|idk|i don'?t know|not sure|maybe|sort of|kind of)$/.test(text)) {
        return "No worries — tell me what you’re trying to style and I’ll turn it into something polished and elevated.";
    }

    if (/hello|hi|hey|good morning|good evening/.test(text)) {
        return "Hello — I’m your MZ LUX stylist. Tell me what you’re wearing and I’ll sharpen it into something more polished and elevated.";
    }

    if (/bag|purse|handbag|tote/.test(text)) {
        return "A structured bag in cognac, black, or deep chocolate will feel richer than a loud color. Keep it sleek and polished.";
    }

    if (/shoe|shoes|loafers|sneakers|boots|heels/.test(text)) {
        return "Choose shoes that echo the outfit’s tone: loafers for tailoring, clean sneakers for relaxed polish, and sleek heels for a sculpted finish.";
    }

    if (/color|colour|match|works with|pair|pairing/.test(text)) {
        return "For a luxe look, pair one rich neutral with one soft contrast — cream with camel, navy with ivory, or black with chocolate.";
    }

    if (/accessory|jewelry|jewellery|watch|belt|necklace/.test(text)) {
        return "One strong accessory does the most: a gold watch, sculptural earrings, or a slim belt instantly sharpens the whole look.";
    }

    if (/what should i wear|outfit|styling|style/.test(text)) {
        return "Build the outfit around one anchor piece, then add one elevated contrast: a blazer with relaxed trousers, or a crisp shirt with a sharp skirt.";
    }

    if (/thank|thanks/.test(text)) {
        return "You’re welcome — I’m here to make your wardrobe feel sharper, calmer, and more effortless.";
    }

    return "This is the kind of look that works best when it feels intentional: one strong silhouette, one rich tone, and one polished finish.";
}

async function callAI(systemPrompt, messages) {
    const lastMessage = messages[messages.length - 1]?.content || "";

    try {
        const res = await fetch(PROXY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: systemPrompt, messages })
        });

        if (!res.ok) throw new Error("Proxy unavailable");

        const data = await res.json();
        const text = data.content?.find((b) => b.type === "text")?.text;
        if (text) return text;
        throw new Error("No ai response");
    } catch {
        return getLocalStylistReply(lastMessage, chatHistory);
    }
}

function initBuilder() {
    if (themeSelect)   themeSelect.addEventListener("change", showThemeItems);
    if (clothingDisplay) clothingDisplay.addEventListener("click", handleClothingCardSelection);
    initCameraMode();
    initStylistPopup();
    initRunwayOverlay();
    if (clothingDisplay && themeSelect && themeSelect.value) {
        showThemeItems();
    } else if (clothingDisplay) {
        clothingDisplay.innerHTML = "";
    }
    initScrollEffects();
}

function initScrollEffects() {
    const revealItems = [
        document.querySelector(".controls"),
        document.getElementById("instructionBox"),
        document.querySelector(".preview-box"),
        ...document.querySelectorAll(".category-section")
    ].filter(Boolean);

    const onScroll = () => {
        document.body.classList.toggle("builder-scrolled", window.scrollY > 20);
        revealItems.forEach((item, i) => {
            const r = item.getBoundingClientRect();
            if (r.top < window.innerHeight * 0.9 && r.bottom > 80) {
                item.classList.add("is-visible");
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
                item.style.transitionDelay = `${i * 0.06}s`;
            }
        });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

document.addEventListener("DOMContentLoaded", initBuilder);

if (document.readyState !== "loading") {
    initBuilder();
}

window.showThemeItems = showThemeItems;

function showThemeItems() {
    if (!clothingDisplay) return;
    const theme = themeSelect ? themeSelect.value : "";
    clothingDisplay.innerHTML = "";
    if (!theme) { if (instructionBox) instructionBox.style.display = "block"; return; }
    if (instructionBox) instructionBox.style.display = "none";
    const t = outfits[theme] || outfits.oldMoney;
    const categories = [
        { title: "Tops", type: "top", items: t.tops || [] },
        { title: "Bottoms", type: "bottom", items: t.bottoms || [] },
        { title: "Shoes", type: "shoes", items: t.shoes || [] },
        { title: "Accessories", type: "accessory", items: t.accessories || [] }
    ];
    clothingDisplay.innerHTML = categories.map(c => createCategory(c.title, c.type, c.items, true)).join("");
    clothingDisplay.querySelectorAll(".category-section").forEach((s, i) => {
        s.classList.add("is-visible");
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
        s.style.transitionDelay = `${i * 0.06}s`;
    });
}

function getPlaceholderImage(type) {
    const map = {
        top: "images/placeholders/top-placeholder.svg",
        bottom: "images/placeholders/bottom-placeholder.svg",
        shoes: "images/placeholders/shoe-placeholder.svg",
        accessory: "images/placeholders/accessory-placeholder.svg"
    };
    return map[type] || map.top;
}

function getImageCandidates(item, type) {
    const safeItem = item || {};
    const name = (safeItem.name || "").trim();
    const normalized = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const spaced = name.replace(/\s+/g, " ").trim();
    const roots = {
        top: ["images/models", "images/tops", "images/placeholders"],
        bottom: ["images/models", "images/bottoms", "images/placeholders"],
        shoes: ["images/models", "images/shoes", "images/placeholders"],
        accessory: ["images/models", "images/accessories", "images/placeholders"]
    };
    const extensions = [".webp", ".jpg", ".jpeg", ".png", ".svg"];
    const baseNames = [normalized, normalized.replace(/-/g, " "), normalized.replace(/-/g, "_"), spaced];
    const candidates = [];

    if (safeItem.image) candidates.push(safeItem.image);

    (roots[type] || roots.top).forEach((root) => {
        baseNames.forEach((baseName) => {
            extensions.forEach((ext) => {
                if (baseName) candidates.push(`${root}/${baseName}${ext}`);
            });
        });
    });

    candidates.push(getPlaceholderImage(type));
    return Array.from(new Set(candidates.filter(Boolean)));
}

function tryImageFallback(img, fallbackChain) {
    if (!img) return false;
    const parts = (fallbackChain || "").split(",").filter(Boolean);
    const current = img.getAttribute("data-current-src") || img.src;
    const next = parts.find((candidate) => candidate && candidate !== current);

    if (next) {
        img.setAttribute("data-current-src", next);
        img.src = next;
        return true;
    }

    const fallback = getPlaceholderImage(img.closest(".clothing-card")?.dataset?.type || "top");
    if ((img.getAttribute("data-current-src") || img.src) !== fallback) {
        img.setAttribute("data-current-src", fallback);
        img.src = fallback;
    }
    if (img.parentElement) img.parentElement.classList.add("image-placeholder");
    return false;
}

window.tryImageFallback = tryImageFallback;

function createCategory(title, type, items, compact = false) {
    const cards = (items || []).map((item) => {
        const imageCandidates = getImageCandidates(item, type);
        const imageSrc = imageCandidates[0] || getPlaceholderImage(type);
        const fallbackChain = imageCandidates.slice(1).join(",");
        const sel = type === "accessory"
            ? selectedOutfit.accessories.some((a) => a.name === item.name)
            : selectedOutfit[type]?.name === item.name;

        return `
            <button type="button" class="clothing-card ${sel ? "selected" : ""}"
                data-type="${type}" data-name="${item.name}" data-image="${imageSrc}">
                <div class="clothing-card-media">
                    <img src="${imageSrc}" alt="${item.name}" loading="lazy"
                         onerror="this.onerror=null;window.tryImageFallback && window.tryImageFallback(this,'${fallbackChain}');">
                </div>
                <p>${item.name}</p>
            </button>`;
    }).join("");

    if (compact) {
        return `
            <div class="category-section category-section-compact">
                <div class="category-card-intro">
                    <span class="category-chip">Featured</span>
                    <h2>${title}</h2>
                    <p>Swipe through a curated line of ${title.toLowerCase()} styles without extra scrolling.</p>
                </div>
                <div class="category-rail" aria-label="${title} preview">
                    <div class="category-rail-track">
                        ${cards}${cards}
                    </div>
                </div>
            </div>`;
    }

    return `<div class="category-section"><h2>${title}</h2><div class="clothing-grid">${cards}</div></div>`;
}

function handleClothingCardSelection(e) {
    const card = e.target.closest(".clothing-card");
    if (!card) return;
    selectItem(card.dataset.type, { name: card.dataset.name, image: card.dataset.image });
}

let chatHistory = [];

function initCameraMode() {
    const genBtn = document.getElementById("generateCameraOutfits");
    if (genBtn) genBtn.addEventListener("click", generateCameraOutfits);

    document.querySelectorAll('.camera-field').forEach((field) => {
        const input = field.querySelector('input[type="file"]');
        const preview = field.querySelector('[data-preview]');
        if (!input || !preview) return;
        field.addEventListener('click', () => input.click());
        input.addEventListener('change', () => {
            const file = input.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                preview.innerHTML = `<img src="${event.target?.result}" alt="${field.dataset.label || 'Uploaded image'}">`;
                preview.classList.add('has-image');
            };
            reader.readAsDataURL(file);
        });
    });

    const chatForm     = document.getElementById("chatForm");
    const chatInput    = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    if (!chatForm || !chatInput || !chatMessages) return;

    document.querySelectorAll(".chat-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
            chatInput.value = chip.dataset.prompt || "";
            chatInput.focus();
            chatForm.requestSubmit();
        });
    });

    chatForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const question = chatInput.value.trim();
        if (!question) return;

        const userBubble = document.createElement("div");
        userBubble.className = "chat-bubble user";
        userBubble.innerHTML = `<p>${question}</p>`;
        chatMessages.appendChild(userBubble);
        chatInput.value = "";

        const typingBubble = document.createElement("div");
        typingBubble.className = "chat-bubble assistant typing-indicator";
        typingBubble.innerHTML = `<span></span><span></span><span></span>`;
        chatMessages.appendChild(typingBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const systemPrompt = `You are a luxury fashion stylist for MZ LUX. Give specific, direct, confident advice. Name real brands, styling techniques, and colour pairings. Never be vague. Max 90 words per response.`;
        const messages = chatHistory.slice(-6).flatMap(h => [
            { role: "user",      content: h.question },
            { role: "assistant", content: h.answer   }
        ]);
        messages.push({ role: "user", content: question });

        const answer = await callAI(systemPrompt, messages);
        typingBubble.remove();

        const assistantBubble = document.createElement("div");
        assistantBubble.className = "chat-bubble assistant";
        assistantBubble.innerHTML = `<p>${answer.replace(/\n/g, "<br>")}</p>`;
        chatMessages.appendChild(assistantBubble);
        chatHistory.push({ question, answer });
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}

function getCameraItems(selector, type) {
    return Array.from(document.querySelectorAll(selector)).map((input, i) => {
        const file = input.files?.[0] || null;
        return { label: input.dataset.label || `${type} ${i+1}`, type,
                 preview: file ? URL.createObjectURL(file) : "", fileName: file?.name || "" };
    }).filter(i => i.label);
}

function getOutfitMood(top, bottom) {
    const t = `${top.label} ${bottom.label}`.toLowerCase();
    if (/blazer|satin|tailored|trouser|linen/.test(t)) return "luxury tailoring";
    if (/denim|jean|cargo|casual/.test(t))             return "casual cool";
    if (/sweater|knit|cream|white/.test(t))            return "soft elegance";
    return "polished street style";
}

function getHatOptions(mood) {
    const opts = { "luxury tailoring": ["Structured Fedora","Panama Hat","Vintage Beret"], "casual cool": ["Bucket Hat","Baseball Cap","Canvas Cap"], "soft elegance": ["Wide-Brim Sun Hat","Soft Wool Hat","Minimal Trilby"] };
    return opts[mood] || ["Classic Fedora","Trilby","Satin Headband"];
}

function getOutfitStyleProfile(top, bottom) {
    const c = `${top.label || top.name || ""} ${bottom.label || bottom.name || ""}`.toLowerCase();
    if (/blazer|suit|shirt|trouser|jean|denim|cargo|jacket|sweater|hoodie|polo|jogger|chino/.test(c) && !/dress|skirt|blouse|satin|heel|gown|wrap/.test(c)) return "menswear";
    if (/dress|skirt|blouse|camisole|satin|heel|gown|wrap|peplum|flare/.test(c)) return "womenswear";
    return "neutral";
}

function getOutfitStyleComments(outfit, mood, tone) {
    const top  = outfit.top?.label  || outfit.top?.name  || "this top";
    const bot  = outfit.bottom?.label || outfit.bottom?.name || "these bottoms";
    const shoe = outfit.shoes?.label  || outfit.shoes?.name  || "";
    const accs = (outfit.accessories||[]).map(a => a.name||a.label).filter(Boolean);
    const prof = getOutfitStyleProfile({label:top},{label:bot});
    const t = [];
    if (tone === "luxurious") {
        t.push(`${top} + ${bot} feels polished — they balance each other beautifully.`);
        t.push("A sleek watch, structured bag, or sculptural jewelry lifts this further.");
    } else if (tone === "fun") {
        t.push(`${top} + ${bot} has a playful, confident energy.`);
        t.push("A bright accessory or relaxed layer makes it more expressive.");
    } else if (prof === "womenswear") {
        t.push(`${top} + ${bot} feels chic and balanced with a soft, elevated finish.`);
        t.push("Delicate jewellery or a sleek bag refines it further.");
    } else {
        t.push(`${top} + ${bot} reads sharp and modern with a clean silhouette.`);
        t.push("A simple belt or watch completes the look.");
    }
    if (accs.length) t.push(`The ${accs.join(" and ").toLowerCase()} gives this outfit personality.`);
    if (shoe) t.push(`Especially strong finished with ${shoe.toLowerCase()}.`);
    else t.push(prof === "womenswear" ? "Heels would elevate the silhouette beautifully." : "Clean loafers or sleek sneakers work perfectly.");
    return t.slice(0,4);
}

function generateCameraOutfits() {
    const tops    = getCameraItems('[data-role="top-input"]',    "top");
    const bottoms = getCameraItems('[data-role="bottom-input"]', "bottom");
    const results = document.getElementById("cameraResults");
    if (!results) return;
    const pairs = tops.slice(0,3).flatMap(top => bottoms.slice(0,2).map(bottom => ({ top, bottom, mood: getOutfitMood(top, bottom) })))
        .sort((a,b) => { const s = m => m==="luxury tailoring"?3:m==="soft elegance"?2:m==="casual cool"?1:0; return s(b.mood)-s(a.mood); })
        .slice(0,2).map((p,i) => ({ ...p, hats: getHatOptions(p.mood), comments: getOutfitStyleComments({top:p.top,bottom:p.bottom},p.mood,i===0?"luxurious":"fun") }));
    if (!pairs.length) { results.innerHTML = '<div class="camera-empty">Upload at least one top and one bottom to start styling.</div>'; return; }
    results.innerHTML = `<div class="camera-results-grid">${pairs.map(({top,bottom,mood,hats,comments}) => `
        <article class="camera-outfit-card">
            <div class="camera-outfit-media">
                ${top.preview    ? `<img src="${top.preview}"    alt="${top.label}">` : ""}
                ${bottom.preview ? `<img src="${bottom.preview}" alt="${bottom.label}">` : ""}
            </div>
            <div class="camera-outfit-copy">
                <h4>${top.label} + ${bottom.label}</h4>
                <p class="camera-mood">${mood}</p>
                <div class="camera-ai-comments">${comments.map(c=>`<p>${c}</p>`).join("")}</div>
                <div class="camera-hats"><span>Hat options</span><ul>${hats.map(h=>`<li>${h}</li>`).join("")}</ul></div>
            </div>
        </article>`).join("")}</div>`;
}

function selectItem(type, item) {
    if (type === "accessory") {
        const idx = selectedOutfit.accessories.findIndex(a => a.name === item.name);
        if (idx >= 0) selectedOutfit.accessories.splice(idx, 1);
        else if (selectedOutfit.accessories.length < 2) selectedOutfit.accessories.push(item);
    } else {
        selectedOutfit[type] = item;
    }
    saveCurrentOutfit();
    updatePreview(type, type === "accessory" ? selectedOutfit.accessories : item);
    updateSelectionHighlights();
    showPreviewSummary();
}

function changeGarmentLayer(layerType, imageSrc, name) {
    const canvas = document.getElementById("currentLookCanvas");
    const label = document.getElementById("currentLookLabel");
    if (!canvas) return;

    const layer = canvas.querySelector(`[data-layer="${layerType}"]`);
    if (!layer) return;

    layer.style.opacity = "0";
    setTimeout(() => {
        layer.src = imageSrc || "";
        layer.alt = name || layerType;
        layer.style.opacity = "1";
        if (label) label.textContent = name ? `${name}` : "No garments selected yet";
    }, 180);
}

function updatePreview(type, item) {
    if (!item) return;

    const layerMap = {
        top: "top",
        bottom: "bottom",
        shoes: "outerwear",
        accessory: "outerwear"
    };

    const layerType = layerMap[type] || "top";
    const imageSrc = item.image || "";
    const name = item.name || "";

    changeGarmentLayer(layerType, imageSrc, name);
}

function updateSelectionHighlights() {
    if (!clothingDisplay) return;
    clothingDisplay.querySelectorAll(".clothing-card").forEach(card => {
        const sel = card.dataset.type === "accessory"
            ? selectedOutfit.accessories.some(a => a.name === card.dataset.name)
            : selectedOutfit[card.dataset.type]?.name === card.dataset.name;
        card.classList.toggle("selected", sel);
    });
}

window.changeGarmentLayer = changeGarmentLayer;

function getLabel(type) { return { top:"Top", bottom:"Bottom", shoes:"Shoes", accessory:"Accessory" }[type] || "Style"; }

function saveCurrentOutfit() { localStorage.setItem("currentOutfit", JSON.stringify(selectedOutfit)); }

function saveToFavourites() {
    const outfit = JSON.parse(localStorage.getItem("currentOutfit") || "null");
    if (!outfit?.top || !outfit?.bottom || !outfit?.shoes) return false;
    const saved = JSON.parse(localStorage.getItem("savedOutfits") || "[]");
    saved.unshift({ ...outfit, savedAt: new Date().toLocaleDateString("en-GB", { day:"numeric", month:"short", year:"numeric" }), theme: themeSelect?.value || "" });
    localStorage.setItem("savedOutfits", JSON.stringify(saved));
    return true;
}

function showPreviewSummary() {
    if (!previewResult) return;
    previewResult.innerHTML = "";
}

function loadPreviewPage() {
    const area = document.getElementById("finalPreview");
    if (!area) return;
    const outfit = JSON.parse(localStorage.getItem("currentOutfit") || "null");
    if (!outfit?.top || !outfit?.bottom || !outfit?.shoes) { area.innerHTML = "<p class='empty-message'>Please complete your outfit in the Categories page first.</p>"; return; }
    area.innerHTML = buildVisualPreviewMarkup(outfit, "Your");
    attachSaveBtn(area);
}

function attachSaveBtn(container) {
    const btn = container.querySelector(".save-to-favs-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
        const ok = saveToFavourites();
        btn.textContent = ok ? "✓ Saved to Favourites!" : "Please complete your outfit first";
        btn.disabled = true;
        if (ok) setTimeout(() => { btn.textContent = "Save to Favourites"; btn.disabled = false; }, 2500);
    });
}

function loadFavouritesPage() {
    const list = document.getElementById("favoritesList");
    if (!list) return;
    const saved = JSON.parse(localStorage.getItem("savedOutfits") || "[]");
    if (!saved.length) { list.innerHTML = "<p class='empty-message'>No saved outfits yet. Generate and save an outfit on the builder page.</p>"; return; }
    list.innerHTML = saved.map((outfit, i) => `
        <div class="outfit-card favourite-entry">
            <div class="outfit-card-header">
                <h3>Look ${i+1} — ${themeLabels[outfit.theme] || outfit.theme || "Custom"}</h3>
                <span class="pill">${outfit.savedAt || ""}</span>
                <button class="delete-fav-btn" data-index="${i}" style="background:transparent;border:1px solid rgba(176,141,87,0.3);color:#8a623a;padding:6px 14px;border-radius:999px;cursor:pointer;font-size:0.75rem;letter-spacing:0.1em;">Remove</button>
            </div>
            <div class="outfit-items">
                ${["top","bottom","shoes"].map(k => outfit[k] ? `<div class="outfit-item"><img src="${outfit[k].image}" alt="${outfit[k].name}" onerror="this.onerror=null;this.style.display='none';"><p class="item-label">${k}</p><p class="item-name">${outfit[k].name}</p></div>` : "").join("")}
                ${(outfit.accessories||[]).map(a => `<div class="outfit-item"><img src="${a.image}" alt="${a.name}" onerror="this.onerror=null;this.style.display='none';"><p class="item-label">Accessory</p><p class="item-name">${a.name}</p></div>`).join("")}
            </div>
        </div>`).join("");
    list.querySelectorAll(".delete-fav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const all = JSON.parse(localStorage.getItem("savedOutfits") || "[]");
            all.splice(parseInt(btn.dataset.index), 1);
            localStorage.setItem("savedOutfits", JSON.stringify(all));
            loadFavouritesPage();
        });
    });
}

function buildVisualPreviewMarkup(outfit, themeName) {
    const accs = outfit.accessories || [];
    const accHtml = accs.length ? accs.map(a=>`<div class="preview-accessory-item"><img src="${a.image}" alt="${a.name}" onerror="this.onerror=null;this.style.display='none';"><span>${a.name}</span></div>`).join("") : '<span class="preview-empty-text">No accessories selected</span>';
    const mood  = getOutfitMood({ label: outfit.top?.name||"" }, { label: outfit.bottom?.name||"" });
    const prof  = getOutfitStyleProfile({ label: outfit.top?.name||"" }, { label: outfit.bottom?.name||"" });
    const notes = getOutfitStyleComments(outfit, mood).slice(0, 2);
    const styleLabel = prof==="menswear"?"Structured finish":prof==="womenswear"?"Elevated finish":"Versatile finish";
    return `
        <div class="preview-summary visual-preview-card">
            <div class="visual-preview-title"><p class="preview-kicker">Instant preview</p><h3>${themeName} Look</h3><p>${mood} • ${styleLabel}</p></div>
            <div class="preview-hero-row">
                <div class="preview-chip-row">
                    ${previewChip("Top", outfit.top)}${previewChip("Bottom", outfit.bottom)}${previewChip("Shoes", outfit.shoes)}
                </div>
                <div class="preview-notes-card"><h4>Styling notes</h4><ul>${notes.map(n=>`<li>${n}</li>`).join("")}</ul></div>
            </div>
            <div class="editorial-preview-layout">
                <div class="editorial-preview-stack">
                    ${["top","bottom","shoes"].map(k => outfit[k] ? `<div class="editorial-preview-card"><p class="item-label">${k.charAt(0).toUpperCase()+k.slice(1)}</p><img class="preview-img ${k}-img" src="${outfit[k].image}" alt="${outfit[k].name}" onerror="this.onerror=null;this.style.display='none';"><p class="item-name">${outfit[k].name}</p></div>` : "").join("")}
                </div>
                <div class="preview-accessory-side"><p class="item-label">Accessories</p><div class="preview-accessory-list">${accHtml}</div></div>
            </div>
            <button class="save-to-favs-btn" style="margin-top:10px;width:100%;padding:12px;border-radius:999px;border:1px solid rgba(176,141,87,0.4);background:rgba(212,175,55,0.1);color:#3b2a1a;font-family:inherit;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;font-size:0.8rem;">
                Save to Favourites
            </button>
        </div>`;
}

function initRunwayOverlay() {
    const overlay = document.getElementById("runwayOverlay");
    const trigger = document.querySelector('.nav-runway-link');
    if (!overlay || !trigger) return;

    const open = () => {
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        open();
    });
    overlay.querySelectorAll('[data-close-runway]').forEach((el) => el.addEventListener('click', close));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
}

function initStylistPopup() {
    if (document.getElementById("stylistPopupShell")) return;

    const shell = document.createElement("div");
    shell.id = "stylistPopupShell";
    shell.className = "stylist-popup-shell";
    shell.innerHTML = `
        <button class="stylist-toggle" type="button" aria-label="Open stylist chat">✦ Stylist</button>
        <div class="stylist-popup" role="dialog" aria-label="Stylist assistant">
            <div class="stylist-popup-head">
                <div>
                    <p class="stylist-kicker">MZ LUX</p>
                    <h3>Stylist Assistant</h3>
                </div>
                <button class="stylist-close" type="button" aria-label="Close stylist chat">×</button>
            </div>
            <div class="stylist-messages" id="stylistMessages"></div>
            <form class="stylist-form" id="stylistForm">
                <input id="stylistInput" type="text" placeholder="Ask for a sharper outfit idea" autocomplete="off">
                <button type="submit">Send</button>
            </form>
        </div>`;
    document.body.appendChild(shell);

    const toggle = shell.querySelector(".stylist-toggle");
    const popup = shell.querySelector(".stylist-popup");
    const close = shell.querySelector(".stylist-close");
    const form = shell.querySelector(".stylist-form");
    const input = shell.querySelector("#stylistInput");
    const messages = shell.querySelector("#stylistMessages");

    toggle.addEventListener("click", () => {
        popup.classList.toggle("open");
        if (popup.classList.contains("open")) input.focus();
    });
    close.addEventListener("click", () => popup.classList.remove("open"));

    const addMessage = (text, from = "assistant") => {
        const bubble = document.createElement("div");
        bubble.className = `stylist-bubble ${from}`;
        bubble.textContent = text;
        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const value = input.value.trim();
        if (!value) return;
        addMessage(value, "user");
        input.value = "";
        const reply = await callAI("You are a refined luxury stylist.", [{ role: "user", content: value }]);
        addMessage(reply, "assistant");
    });

    addMessage("Tell me what you want to refine and I’ll keep it short and elevated.", "assistant");
}

function previewChip(label, item) {
    if (!item) return "";
    return `<div class="preview-item-chip"><p class="item-label">${label}</p><p class="item-name">${item.name}</p></div>`;
}

window.addEventListener("load", () => { loadPreviewPage(); loadFavouritesPage(); });

function buildVisualPreviewMarkup(outfit, themeName) {
    const accs = outfit.accessories || [];
    const accHtml = accs.length
        ? accs.map((a, i) => `<div class="preview-accessory-item" style="--item-delay:${i + 4};"><img src="${a.image}" alt="${a.name}" onerror="this.onerror=null;this.style.display='none';"><span>${a.name}</span></div>`).join("")
        : '<span class="preview-empty-text">No accessories selected</span>';
    const mood = getOutfitMood({ label: outfit.top?.name || "" }, { label: outfit.bottom?.name || "" });
    const prof = getOutfitStyleProfile({ label: outfit.top?.name || "" }, { label: outfit.bottom?.name || "" });
    const notes = getOutfitStyleComments(outfit, mood);
    const styleLabel = prof === "menswear" ? "Structured finish" : prof === "womenswear" ? "Elevated finish" : "Versatile finish";
    const lookPieces = [
        ["top", "Top", outfit.top],
        ["bottom", "Bottom", outfit.bottom],
        ["shoes", "Shoes", outfit.shoes]
    ].filter(([, , item]) => item);

    return `
        <div class="preview-summary visual-preview-card full-look-preview">
            <div class="visual-preview-title"><h3>${themeName} Look</h3><p>${mood} / ${styleLabel}</p></div>
            <div class="preview-hero-row">
                <div class="preview-chip-row">
                    ${previewChip("Top", outfit.top)}${previewChip("Bottom", outfit.bottom)}${previewChip("Shoes", outfit.shoes)}
                </div>
                <div class="preview-notes-card"><h4>Styling notes</h4><ul>${notes.map((n) => `<li>${n}</li>`).join("")}</ul></div>
            </div>
            <div class="editorial-preview-layout">
                <section class="look-stage" aria-label="Full outfit preview">
                    <div class="look-stage-orbit"></div>
                    <div class="model-silhouette" aria-hidden="true">
                        <span class="model-head"></span>
                        <span class="model-torso"></span>
                        <span class="model-leg model-leg-left"></span>
                        <span class="model-leg model-leg-right"></span>
                    </div>
                    <div class="look-piece-stack">
                        ${lookPieces.map(([key, label, item], i) => `
                            <article class="look-piece look-piece-${key}" style="--piece-delay:${i};">
                                <p class="item-label">${label}</p>
                                <img class="preview-img ${key}-img" src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.style.display='none';">
                                <p class="item-name">${item.name}</p>
                            </article>
                        `).join("")}
                    </div>
                </section>
                <div class="editorial-preview-stack">
                    ${lookPieces.map(([key, label, item], i) => `<div class="editorial-preview-card" style="--item-delay:${i};"><p class="item-label">${label}</p><img class="preview-img ${key}-img" src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.style.display='none';"><p class="item-name">${item.name}</p></div>`).join("")}
                </div>
                <div class="preview-accessory-side"><p class="item-label">Accessories</p><div class="preview-accessory-list">${accHtml}</div></div>
            </div>
            <button class="save-to-favs-btn">Save to Favourites</button>
        </div>`;
}
