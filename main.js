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
const previewButton   = document.getElementById("previewBtn");
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
    if (previewButton) previewButton.addEventListener("click", showPreviewSummary);
    const styleMeBtn = document.getElementById("styleMeBtn");
    const saveLookBtn = document.getElementById("saveLookBtn");
    const vibeSelect = document.getElementById("vibeSelect");
    if (styleMeBtn) styleMeBtn.addEventListener("click", shuffleUnlockedClosetRows);
    if (saveLookBtn) saveLookBtn.addEventListener("click", saveClosetLook);
    if (vibeSelect) vibeSelect.addEventListener("change", () => setClosetVibe(vibeSelect.value));
    const conciergeBtn = document.getElementById("conciergeBtn");
    if (conciergeBtn) conciergeBtn.addEventListener("click", generateStyleConciergeBrief);
    const uploadBtn = document.getElementById("uploadWardrobeBtn");
    if (uploadBtn) uploadBtn.addEventListener("click", () => { window.location.href = "camera.html"; });
    if (clothingDisplay) clothingDisplay.addEventListener("click", handleClothingCardSelection);
    initCameraMode();
    if (clothingDisplay && themeSelect && themeSelect.value) {
        showThemeItems();
    } else if (clothingDisplay) {
        clothingDisplay.innerHTML = "";
    }
    setClosetVibe(vibeSelect?.value || "minimalist");
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
document.addEventListener("DOMContentLoaded", () => setTimeout(initClosetRails, 250));

if (document.readyState !== "loading") {
    initBuilder();
    setTimeout(initClosetRails, 250);
}

window.showThemeItems = showThemeItems;

function showThemeItems() {
    if (!clothingDisplay) return;
    const theme = themeSelect ? themeSelect.value : "";
    clothingDisplay.innerHTML = "";
    if (!theme) { if (instructionBox) instructionBox.style.display = "block"; return; }
    if (instructionBox) instructionBox.style.display = "none";
    const t = outfits[theme] || outfits.oldMoney;
    const cats = [
        { title: "Tops",        type: "top",       items: t.tops        },
        { title: "Bottoms",     type: "bottom",    items: t.bottoms     },
        { title: "Shoes",       type: "shoes",     items: t.shoes       },
        { title: "Accessories", type: "accessory", items: t.accessories }
    ];
    clothingDisplay.innerHTML = cats.map(c => createCategory(c.title, c.type, c.items)).join("");
    clothingDisplay.querySelectorAll(".category-section").forEach((s, i) => {
        s.classList.add("is-visible");
        s.style.opacity = "1";
        s.style.transform = "translateY(0)";
        s.style.transitionDelay = `${i * 0.06}s`;
    });
    initClosetRails();
    requestAnimationFrame(syncCenteredClosetSelections);
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

function createCategory(title, type, items) {
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
                <span class="closet-card-lock" role="button" tabindex="0" aria-label="Lock item" title="Lock item"></span>
                <div class="clothing-card-media">
                    <img src="${imageSrc}" alt="${item.name}" loading="lazy"
                         onerror="this.onerror=null;window.tryImageFallback && window.tryImageFallback(this,'${fallbackChain}');">
                </div>
                <p>${item.name}</p>
            </button>`;
    }).join("");

    return `<div class="category-section closet-row" data-row-type="${type}">
        <h2>${title}</h2>
        <div class="clothing-grid closet-track" data-row-type="${type}" tabindex="0">${cards}</div>
    </div>`;
}

function initAutoSlidingCategoryRails() {
    initClosetRails();
}

function initClosetRails() {
    if (!clothingDisplay) return;
    clothingDisplay.querySelectorAll(".clothing-grid").forEach((grid) => {
        if (grid.dataset.closetReady) return;
        grid.dataset.closetReady = "true";
        let isDown = false;
        let startX = 0;
        let startScroll = 0;

        grid.addEventListener("pointerdown", (event) => {
            if (event.target.closest(".closet-card-lock")) return;
            if (grid.classList.contains("is-row-locked")) {
                event.preventDefault();
                return;
            }
            isDown = true;
            startX = event.clientX;
            startScroll = grid.scrollLeft;
            grid.classList.add("is-dragging");
            grid.setPointerCapture?.(event.pointerId);
        });

        grid.addEventListener("pointermove", (event) => {
            if (!isDown) return;
            grid.scrollLeft = startScroll - (event.clientX - startX);
        });

        ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
            grid.addEventListener(eventName, () => {
                if (!isDown) return;
                isDown = false;
                grid.classList.remove("is-dragging");
                setTimeout(() => syncCenteredClosetSelections(grid), 90);
            });
        });

        grid.addEventListener("scroll", debounce(() => syncCenteredClosetSelections(grid), 100), { passive: true });
        grid.addEventListener("wheel", (event) => {
            if (!grid.classList.contains("is-row-locked")) return;
            event.preventDefault();
        }, { passive: false });
    });
}

function handleClothingCardSelection(e) {
    const lock = e.target.closest(".closet-card-lock");
    if (lock) {
        e.preventDefault();
        e.stopPropagation();
        const card = lock.closest(".clothing-card");
        const grid = card?.closest(".closet-track");
        if (!card || !grid) return;
        const shouldLock = !card.classList.contains("is-locked");
        grid.querySelectorAll(".clothing-card.is-locked").forEach((lockedCard) => {
            lockedCard.classList.remove("is-locked");
            const lockedIcon = lockedCard.querySelector(".closet-card-lock");
            lockedIcon?.setAttribute("aria-label", "Lock item");
            lockedIcon?.setAttribute("title", "Lock item");
        });
        card.classList.toggle("is-locked", shouldLock);
        grid.classList.toggle("is-row-locked", shouldLock);
        grid.closest(".category-section")?.classList.toggle("is-row-locked", shouldLock);
        lock.setAttribute("aria-label", shouldLock ? "Unlock item" : "Lock item");
        lock.setAttribute("title", shouldLock ? "Unlock item" : "Lock item");
        if (shouldLock) {
            selectCenteredClosetItem(card.dataset.type, { name: card.dataset.name, image: card.dataset.image });
            card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
        return;
    }
    const card = e.target.closest(".clothing-card");
    if (!card) return;
    selectItem(card.dataset.type, { name: card.dataset.name, image: card.dataset.image });
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

document.addEventListener("keydown", (event) => {
    if (!event.target.closest?.(".closet-card-lock")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    event.target.click();
});

function debounce(fn, wait) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), wait);
    };
}

function syncCenteredClosetSelections(track) {
    const tracks = track?.querySelectorAll ? [track] : [...document.querySelectorAll(".closet-track")];
    tracks.forEach((grid) => {
        const cards = [...grid.querySelectorAll(".clothing-card")];
        if (!cards.length) return;
        const gridBox = grid.getBoundingClientRect();
        const center = gridBox.left + gridBox.width / 2;
        const active = cards.reduce((closest, card) => {
            const box = card.getBoundingClientRect();
            const distance = Math.abs(center - (box.left + box.width / 2));
            return distance < closest.distance ? { card, distance } : closest;
        }, { card: cards[0], distance: Infinity }).card;
        cards.forEach((card) => card.classList.toggle("in-viewfinder", card === active));
        if (active) selectCenteredClosetItem(active.dataset.type, { name: active.dataset.name, image: active.dataset.image });
    });
    evaluateClosetMatch();
}

function selectCenteredClosetItem(type, item) {
    if (type === "accessory") {
        selectedOutfit.accessories = [item];
        saveCurrentOutfit();
        updatePreview(type, selectedOutfit.accessories);
        updateSelectionHighlights();
        return;
    }
    selectItem(type, item);
}

function shuffleUnlockedClosetRows() {
    const tracks = [...document.querySelectorAll(".closet-track")];
    tracks.forEach((grid, rowIndex) => {
        const locked = grid.querySelector(".clothing-card.is-locked");
        if (locked) {
            locked.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            return;
        }
        const cards = [...grid.querySelectorAll(".clothing-card")];
        if (!cards.length) return;
        const target = cards[Math.floor(Math.random() * cards.length)];
        grid.classList.add("is-spinning");
        const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
        const start = grid.scrollLeft;
        const targetLeft = target.offsetLeft - (grid.clientWidth - target.offsetWidth) / 2;
        const finalScroll = Math.max(0, Math.min(maxScroll, targetLeft));
        const duration = 900 + rowIndex * 180;
        const startTime = performance.now();

        function step(now) {
            const elapsed = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - elapsed, 4);
            const wobble = Math.sin(elapsed * Math.PI * 18) * (1 - elapsed) * 38;
            grid.scrollLeft = start + (finalScroll - start) * eased + wobble;
            if (elapsed < 1) {
                requestAnimationFrame(step);
            } else {
                grid.scrollLeft = finalScroll;
                grid.classList.remove("is-spinning");
                syncCenteredClosetSelections(grid);
            }
        }

        requestAnimationFrame(step);
    });
}

function setClosetVibe(vibe) {
    const page = document.querySelector(".clueless-closet");
    if (!page) return;
    page.dataset.vibe = vibe || "minimalist";
}

function evaluateClosetMatch() {
    const text = [
        selectedOutfit.top?.name,
        selectedOutfit.bottom?.name,
        selectedOutfit.shoes?.name,
        ...selectedOutfit.accessories.map((item) => item.name)
    ].filter(Boolean).join(" ").toLowerCase();
    const banner = document.getElementById("clashBanner");
    if (!banner) return;
    const clash =
        /graphic|hoodie|varsity|cargo|chunky|combat|baseball|beanie/.test(text) &&
        /pearl|satin|blazer|pleated|ballet|clutch|formal|heels/.test(text);
    banner.classList.toggle("is-visible", clash);
    if (clash) setTimeout(() => banner.classList.remove("is-visible"), 4200);
}

function saveClosetLook() {
    const btn = document.getElementById("saveLookBtn");
    const ok = saveToFavourites();
    if (!btn) return;
    btn.textContent = ok ? "Saved" : "Complete Look";
    btn.classList.toggle("is-saved", ok);
    btn.classList.toggle("needs-look", !ok);
    setTimeout(() => {
        btn.textContent = "Save Look";
        btn.classList.remove("is-saved", "needs-look");
    }, 2200);
}

let chatHistory = [];

function initCameraMode() {
    const genBtn = document.getElementById("generateCameraOutfits");
    if (genBtn) genBtn.addEventListener("click", generateCameraOutfits);

    document.querySelectorAll(".camera-field input[type='file']").forEach((input) => {
        input.addEventListener("change", () => {
            const file = input.files?.[0];
            const field = input.closest(".camera-field");
            const preview = field?.querySelector("[data-preview]");
            if (!preview || !file) return;
            preview.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="${field?.dataset.label || "Uploaded garment"}">`;
            field.classList.add("has-image");
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

        const wardrobeContext = getCameraWardrobeContext();
        const systemPrompt = `You are a luxury fashion stylist for MZ LUX. Give specific, direct, confident advice based on the user's uploaded wardrobe context. Be practical for real life: mention occasion, fit, color, shoes, accessories, and what to avoid. Max 95 words. Wardrobe context: ${wardrobeContext}`;
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

function getCameraWardrobeContext() {
    const tops = getCameraItems('[data-role="top-input"] input', "top").filter((item) => item.fileName);
    const bottoms = getCameraItems('[data-role="bottom-input"] input', "bottom").filter((item) => item.fileName);
    if (!tops.length && !bottoms.length) return "No uploaded pieces yet. Ask one quick question if needed, then give strong general luxury styling advice.";
    const topText = tops.map((item) => `${item.label}: ${item.fileName}`).join(", ") || "no tops uploaded";
    const bottomText = bottoms.map((item) => `${item.label}: ${item.fileName}`).join(", ") || "no bottoms uploaded";
    return `Uploaded tops: ${topText}. Uploaded bottoms: ${bottomText}.`;
}

function getCameraItems(selector, type) {
    return Array.from(document.querySelectorAll(selector)).map((node, i) => {
        const input = node.matches?.("input") ? node : node.querySelector?.("input[type='file']");
        const file = input?.files?.[0] || null;
        return { label: node.dataset?.label || input?.closest(".camera-field")?.dataset?.label || `${type} ${i+1}`, type,
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
}

function updatePreview(type, item) {
    updateCurrentLookPreview();
    const box = previewBoxes[type === "accessory" ? "accessory" : type];
    if (!box) return;
    if (type === "accessory") {
        const accs = Array.isArray(item) ? item : [];
        box.innerHTML = `<div class="preview-card-content preview-card-visual"><p class="preview-label">Accessories</p>${accs.length ? accs.map(a=>`<div class="preview-thumb-row"><img src="${a.image}" alt="${a.name}" onerror="this.onerror=null;this.style.display='none';"><h3>${a.name}</h3></div>`).join("") : "<h3>No accessories selected</h3>"}</div>`;
        return;
    }
    if (!item) { box.innerHTML = `<span class="preview-label">${getLabel(type)}</span>`; return; }
    box.innerHTML = `<div class="preview-card-content preview-card-visual"><p class="preview-label">${getLabel(type)}</p><img class="preview-img ${type}-img" src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.style.display='none';"><h3>${item.name}</h3></div>`;
}

function updateCurrentLookPreview() {
    const canvas = document.getElementById("currentLookCanvas");
    if (canvas) {
        const placeholders = {
            top: "images/placeholders/top-placeholder.svg",
            bottom: "images/placeholders/bottom-placeholder.svg",
            shoes: "images/placeholders/shoe-placeholder.svg"
        };

        ["top", "bottom", "shoes"].forEach((type) => {
            const img = canvas.querySelector(`[data-layer="${type}"]`);
            if (!img) return;
            const selected = selectedOutfit[type];
            img.src = selected?.image || placeholders[type];
            img.alt = selected?.name || `${getLabel(type)} placeholder`;
            img.classList.toggle("is-selected", Boolean(selected));
        });
    }

    const label = document.getElementById("currentLookLabel");
    if (label) {
        const names = [selectedOutfit.top, selectedOutfit.bottom, selectedOutfit.shoes]
            .filter(Boolean)
            .map((item) => item.name);
        label.textContent = names.length ? names.join(" / ") : "No garments selected yet";
    }

    const accessoryArea = document.getElementById("currentLookAccessories");
    if (accessoryArea) {
        accessoryArea.innerHTML = selectedOutfit.accessories.length
            ? selectedOutfit.accessories.map((item) => `<span>${item.name}</span>`).join("")
            : "<span>No accessories</span>";
    }
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

function getLabel(type) { return { top:"Top", bottom:"Bottom", shoes:"Shoes", accessory:"Accessory" }[type] || "Style"; }

function saveCurrentOutfit() { localStorage.setItem("currentOutfit", JSON.stringify(selectedOutfit)); }

function generateStyleConciergeBrief() {
    const result = document.getElementById("conciergeResult");
    const occasion = document.getElementById("occasionSelect")?.value || "day";
    if (!result) return;

    const top = selectedOutfit.top?.name || "";
    const bottom = selectedOutfit.bottom?.name || "";
    const shoes = selectedOutfit.shoes?.name || "";
    const accessories = selectedOutfit.accessories.map((item) => item.name);

    if (!top || !bottom || !shoes) {
        result.innerHTML = `
            <p class="concierge-empty">Choose a top, bottom, and shoes first.</p>
        `;
        return;
    }

    const outfitText = `${top} ${bottom} ${shoes} ${accessories.join(" ")}`.toLowerCase();
    const palette = getConciergePalette(outfitText);
    const occasionCopy = {
        day: "polished daytime",
        school: "clean school-ready",
        dinner: "evening dinner",
        event: "statement event",
        travel: "comfortable travel"
    }[occasion] || "polished daytime";
    const score = Math.min(98, 78 + accessories.length * 4 + (/(blazer|button|trouser|loafer|watch|pearl)/.test(outfitText) ? 10 : 4));
    const addOn = /(loafer|boot|heel)/.test(outfitText)
        ? "Add a structured mini bag or a slim belt to sharpen the silhouette."
        : "Swap in loafers, boots, or sleek flats for a more finished base.";
    const avoid = /(striped|graphic|hoodie|sneaker)/.test(outfitText)
        ? "Avoid adding another loud piece; keep the accessory quiet and expensive-looking."
        : "Avoid over-accessorizing; one strong detail is enough.";

    result.innerHTML = `
        <div class="concierge-score">
            <span>${score}</span>
            <p>Luxury fit score</p>
        </div>
        <div class="concierge-copy">
            <h4>${occasionCopy} brief</h4>
            <p><strong>Palette:</strong> ${palette.label}</p>
            <div class="concierge-swatches">${palette.colors.map((color) => `<i style="background:${color}"></i>`).join("")}</div>
            <p><strong>Add:</strong> ${addOn}</p>
            <p><strong>Avoid:</strong> ${avoid}</p>
        </div>
    `;
}

function getConciergePalette(text) {
    if (/black|navy|dress/.test(text)) return { label: "noir, ivory, warm gold", colors: ["#17120f", "#fff8ea", "#b99145"] };
    if (/beige|cream|linen|brown|loafer/.test(text)) return { label: "camel, cream, espresso", colors: ["#c4a06d", "#fff5e4", "#4b3324"] };
    if (/white|pearl|sneaker/.test(text)) return { label: "optic white, soft grey, champagne", colors: ["#ffffff", "#d9d4cc", "#d7b665"] };
    return { label: "ivory, chocolate, antique gold", colors: ["#fff8ea", "#3a281d", "#b99145"] };
}

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
    if (![selectedOutfit.top, selectedOutfit.bottom, selectedOutfit.shoes].every(Boolean)) {
        previewResult.innerHTML = `<div class="preview-summary empty"><p>Select a top, bottom, and shoes to preview your full outfit.</p></div>`;
        return;
    }
    const themeName = themeSelect?.value ? themeLabels[themeSelect.value] : "Your";
    previewResult.innerHTML = buildVisualPreviewMarkup(selectedOutfit, themeName);
    attachSaveBtn(previewResult);
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
    const notes = getOutfitStyleComments(outfit, mood);
    const styleLabel = prof==="menswear"?"Structured finish":prof==="womenswear"?"Elevated finish":"Versatile finish";
    return `
        <div class="preview-summary visual-preview-card">
            <div class="visual-preview-title"><h3>${themeName} Look</h3><p>${mood} • ${styleLabel}</p></div>
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
            <button class="save-to-favs-btn" style="margin-top:16px;width:100%;padding:14px;border-radius:999px;border:1px solid rgba(176,141,87,0.4);background:rgba(212,175,55,0.1);color:#3b2a1a;font-family:inherit;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;font-size:0.85rem;">
                Save to Favourites
            </button>
        </div>`;
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
        <div class="preview-summary visual-preview-card full-look-preview compact-preview">
            <div class="visual-preview-title">
                <h3>${themeName} Look</h3>
                <p>${mood} / ${styleLabel}</p>
            </div>
            <section class="compact-preview-layout" aria-label="Compact outfit preview">
                <div class="outfit-board">
                    ${lookPieces.map(([key, label, item], i) => `
                        <article class="outfit-board-piece outfit-board-${key}" style="--piece-delay:${i};">
                            <img class="preview-img ${key}-img" src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.style.display='none';">
                            <div>
                                <p class="item-label">${label}</p>
                                <p class="item-name">${item.name}</p>
                            </div>
                        </article>
                    `).join("")}
                </div>
                <aside class="preview-fit-panel">
                    <div class="preview-chip-row">
                        ${previewChip("Top", outfit.top)}${previewChip("Bottom", outfit.bottom)}${previewChip("Shoes", outfit.shoes)}
                    </div>
                    <div class="preview-accessory-side"><p class="item-label">Accessories</p><div class="preview-accessory-list">${accHtml}</div></div>
                    <div class="preview-notes-card"><h4>Styling notes</h4><ul>${notes.slice(0, 3).map((n) => `<li>${n}</li>`).join("")}</ul></div>
                </aside>
            </section>
            <button class="save-to-favs-btn">Save to Favourites</button>
        </div>`;
}
