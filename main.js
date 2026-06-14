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
    applyStoredThemeSelection();
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
document.addEventListener("DOMContentLoaded", initFeaturedCollectionIntro);
document.addEventListener("DOMContentLoaded", initStylePreferencePopup);
document.addEventListener("DOMContentLoaded", initThemeQuiz);
document.addEventListener("DOMContentLoaded", initOpeningClosetCalendar);

if (document.readyState !== "loading") {
    initBuilder();
    setTimeout(initClosetRails, 250);
}

window.showThemeItems = showThemeItems;

function initFeaturedCollectionIntro() {
    const grid = document.querySelector(".cinematic-featured-grid");
    const primaryCard = grid?.querySelector(".cinematic-card-primary");
    if (!grid || !primaryCard || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.body.classList.add("featured-intro-complete");
        return;
    }

    let hasPlayed = false;
    const playIntro = () => {
        if (hasPlayed) return;
        hasPlayed = true;
        const rect = primaryCard.getBoundingClientRect();
        const gap = parseFloat(getComputedStyle(grid).columnGap || "22") || 22;
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        const translateX = (window.innerWidth / 2) - (rect.left + rect.width / 2);
        const translateY = (window.innerHeight / 2) - (rect.top + rect.height / 2);

        primaryCard.style.setProperty("--featured-card-x", `${translateX}px`);
        primaryCard.style.setProperty("--featured-card-y", `${translateY}px`);
        primaryCard.style.setProperty("--featured-card-scale-x", scaleX.toFixed(4));
        primaryCard.style.setProperty("--featured-card-scale-y", scaleY.toFixed(4));
        grid.style.setProperty("--featured-gap", `${gap}px`);

        document.body.classList.add("featured-intro-running");
        document.body.classList.remove("featured-intro-complete");

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.body.classList.remove("featured-intro-running");
                document.body.classList.add("featured-intro-complete");
            });
        });
    };

    const observeFeaturedSection = () => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (!entry?.isIntersecting) return;
            observer.disconnect();
            setTimeout(playIntro, 120);
        }, { threshold: 0.28 });

        observer.observe(grid);
    };

    const startWhenPageReady = () => {
        if (!document.body.classList.contains("home-page")) {
            observeFeaturedSection();
            return;
        }

        if (document.body.classList.contains("collection-live")) {
            observeFeaturedSection();
            return;
        }

        const observer = new MutationObserver(() => {
            if (!document.body.classList.contains("collection-live")) return;
            observer.disconnect();
            observeFeaturedSection();
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    };

    if (document.fonts?.ready) {
        document.fonts.ready.then(startWhenPageReady);
    } else {
        startWhenPageReady();
    }
}

function showThemeItems() {
    if (!clothingDisplay) return;
    const theme = themeSelect ? themeSelect.value : "";
    clothingDisplay.innerHTML = "";
    if (!theme) { if (instructionBox) instructionBox.style.display = "block"; return; }
    if (instructionBox) instructionBox.style.display = "none";
    const t = getPersonalizedThemeOutfits(outfits[theme] || outfits.oldMoney);
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

function applyStoredThemeSelection() {
    if (!themeSelect) return;
    const params = new URLSearchParams(window.location.search);
    const urlTheme = params.get("theme");
    const storedTheme = localStorage.getItem("selectedTheme");
    const nextTheme = urlTheme || storedTheme;
    if (nextTheme && outfits[nextTheme]) {
        themeSelect.value = nextTheme;
        localStorage.setItem("selectedTheme", nextTheme);
    }
}

function getPersonalizedThemeOutfits(themeData) {
    const preference = localStorage.getItem("mzLuxStylePreference") || "neutral";
    const priority = localStorage.getItem("mzLuxStylePriority") || "tailored";
    const sortItems = (items, type) => [...items].sort((a, b) => getPreferenceScore(b, type, preference, priority) - getPreferenceScore(a, type, preference, priority));
    return {
        tops: sortItems(themeData.tops || [], "top"),
        bottoms: sortItems(themeData.bottoms || [], "bottom"),
        shoes: sortItems(themeData.shoes || [], "shoes"),
        accessories: sortItems(themeData.accessories || [], "accessory")
    };
}

function getPreferenceScore(item, type, preference, priority = "tailored") {
    if (!item) return 0;
    const text = `${item.name || ""} ${type}`.toLowerCase();
    const feminine = /(skirt|blouse|ballet|heel|pearl|clutch|earring|necklace|camisole|flats|satin)/;
    const masculine = /(shirt|polo|blazer|trouser|pants|loafer|boot|watch|belt|jacket|cargo|suit)/;
    const tailored = /(blazer|trouser|shirt|loafer|watch|belt|formal|satin|pleated)/;
    const comfort = /(hoodie|tee|sweater|sneaker|jogger|denim|casual|flannel)/;
    const statement = /(graphic|varsity|cargo|chunky|combat|pearl|clutch|striped|sunglasses)/;
    let score = 0;
    if (preference === "female") score += feminine.test(text) ? 3 : masculine.test(text) ? 1 : 2;
    if (preference === "male") score += masculine.test(text) ? 3 : feminine.test(text) ? 1 : 2;
    if (priority === "tailored") score += tailored.test(text) ? 2 : 0;
    if (priority === "comfort") score += comfort.test(text) ? 2 : 0;
    if (priority === "statement") score += statement.test(text) ? 2 : 0;
    return score;
}

function initStylePreferencePopup() {
    if (localStorage.getItem("mzLuxStylePreference") && localStorage.getItem("mzLuxStylePriority")) return;
    const modal = document.createElement("section");
    modal.className = "style-preference-modal style-preference-drawer";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Customize your outfits");
    modal.innerHTML = `
        <div class="style-preference-card">
            <span>Personalize MZ LUX</span>
            <h2>Would you like us to customize your experience?</h2>
            <p>Answer two quick questions so your outfit rows feel more personal.</p>
            <form class="style-preference-form">
                <fieldset>
                    <legend>Gender</legend>
                    <label><input type="radio" name="stylePreference" value="female" checked> Female</label>
                    <label><input type="radio" name="stylePreference" value="male"> Male</label>
                    <label><input type="radio" name="stylePreference" value="neutral"> Prefer not to say</label>
                </fieldset>
                <fieldset>
                    <legend>Outfit priority</legend>
                    <label><input type="radio" name="stylePriority" value="tailored" checked> Tailored and polished</label>
                    <label><input type="radio" name="stylePriority" value="comfort"> Comfortable everyday</label>
                    <label><input type="radio" name="stylePriority" value="statement"> Statement pieces</label>
                </fieldset>
                <button type="submit">Customize</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add("is-visible"));
    modal.querySelector(".style-preference-form")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        localStorage.setItem("mzLuxStylePreference", data.get("stylePreference") || "neutral");
        localStorage.setItem("mzLuxStylePriority", data.get("stylePriority") || "tailored");
        modal.classList.remove("is-visible");
        setTimeout(() => modal.remove(), 360);
        if (themeSelect && clothingDisplay) showThemeItems();
    });
}

function initThemeQuiz() {
    const form = document.getElementById("themeQuiz");
    const result = document.getElementById("themeQuizResult");
    if (!form || !result) return;

    const themeCopy = {
        oldMoney: ["Old Money", "Quiet polish, refined proportions, and expensive-looking basics."],
        streetwear: ["Streetwear", "Bold shape, sneaker energy, and expressive statement styling."],
        minimalist: ["Minimalist", "Clean lines, controlled color, and calm modern pieces."],
        casual: ["Casual", "Comfortable, relaxed, and still intentionally styled."],
        formal: ["Formal", "Sharp tailoring, evening polish, and a more dressed-up finish."]
    };

    function scoreQuiz() {
        const data = new FormData(form);
        const scores = { oldMoney: 0, streetwear: 0, minimalist: 0, casual: 0, formal: 0 };
        const occasion = data.get("occasion");
        const energy = data.get("energy");
        const priority = data.get("priority");

        if (occasion === "school") scores.casual += 2, scores.minimalist += 1;
        if (occasion === "dinner") scores.formal += 2, scores.oldMoney += 2;
        if (occasion === "city") scores.streetwear += 2, scores.oldMoney += 1;
        if (energy === "quiet") scores.oldMoney += 3;
        if (energy === "bold") scores.streetwear += 3;
        if (energy === "clean") scores.minimalist += 3;
        if (priority === "comfort") scores.casual += 3;
        if (priority === "tailored") scores.formal += 2, scores.oldMoney += 2;
        if (priority === "statement") scores.streetwear += 2, scores.formal += 1;

        return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    }

    function updateResult(theme) {
        const [name, copy] = themeCopy[theme] || themeCopy.oldMoney;
        localStorage.setItem("selectedTheme", theme);
        result.innerHTML = `
            <span>Recommendation</span>
            <h4>${name}</h4>
            <p>${copy}</p>
            <a href="categories.html?theme=${theme}">Style this theme</a>
        `;
        result.classList.add("is-active");
    }

    form.addEventListener("change", () => updateResult(scoreQuiz()));
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateResult(scoreQuiz());
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

    updateOpeningCalendarSelection();
}

function initOpeningClosetCalendar() {
    const calendar = document.getElementById("openingCalendar");
    if (!calendar) return;

    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    updateOpeningCalendarSelection();
    hydrateOpeningCalendarWeather();
    requestAnimationFrame(() => {
        setTimeout(() => calendar.classList.add("is-visible"), 120);
    });

    let canDismiss = false;
    setTimeout(() => {
        canDismiss = true;
    }, 480);

    const dismissCalendar = () => {
        if (!canDismiss) return;
        if (calendar.classList.contains("is-hidden")) return;
        calendar.classList.add("is-hidden");
        calendar.setAttribute("aria-hidden", "true");
        window.removeEventListener("scroll", dismissCalendar);
        window.removeEventListener("wheel", dismissCalendar);
        window.removeEventListener("touchmove", dismissCalendar);
    };

    window.addEventListener("scroll", dismissCalendar, { passive: true });
    window.addEventListener("wheel", dismissCalendar, { passive: true, once: true });
    window.addEventListener("touchmove", dismissCalendar, { passive: true, once: true });
}

function updateOpeningCalendarSelection() {
    const lookLine = document.getElementById("openingCalendarLook");
    if (!lookLine) return;
    const names = [selectedOutfit.top, selectedOutfit.bottom, selectedOutfit.shoes]
        .filter(Boolean)
        .map((item) => item.name);
    lookLine.textContent = names.length
        ? `Today: ${names.join(" / ")}`
        : "Build a look in the frame, then scroll to continue styling.";
}

async function hydrateOpeningCalendarWeather() {
    const tiles = [...document.querySelectorAll("[data-weather-day]")];
    if (!tiles.length) return;

    try {
        const coords = await getForecastCoordinates();
        const url = new URL("https://api.open-meteo.com/v1/forecast");
        url.search = new URLSearchParams({
            latitude: coords.latitude,
            longitude: coords.longitude,
            daily: "weather_code,precipitation_probability_max",
            forecast_days: "7",
            timezone: "auto"
        }).toString();

        const response = await fetch(url);
        if (!response.ok) throw new Error("Forecast unavailable");
        const data = await response.json();
        const dates = data.daily?.time || [];
        const codes = data.daily?.weather_code || [];
        const rainChance = data.daily?.precipitation_probability_max || [];

        tiles.forEach((tile, index) => {
            const code = Number(codes[index]);
            const chance = Number(rainChance[index] || 0);
            const rainy = isRainyForecast(code, chance);
            const dayName = tile.querySelector("span");
            const label = tile.querySelector("em");
            if (dayName) dayName.textContent = getForecastDayLabel(dates[index], index);
            tile.classList.toggle("is-rainy", rainy);
            tile.classList.toggle("is-cloudy", !rainy && isCloudyForecast(code));
            if (label) label.textContent = rainy ? (chance >= 20 ? `${chance}% rain` : "Showers") : getForecastLabel(code, chance);
        });
    } catch (error) {
        tiles.forEach((tile, index) => {
            const dayName = tile.querySelector("span");
            const label = tile.querySelector("em");
            const rainy = index === 2 || index === 4;
            if (dayName) dayName.textContent = getForecastDayLabel("", index);
            tile.classList.toggle("is-rainy", rainy);
            tile.classList.toggle("is-cloudy", !rainy);
            if (label) label.textContent = rainy ? "Rain likely" : "Soft clouds";
        });
    }
}

function getForecastCoordinates() {
    const fallback = { latitude: 43.6532, longitude: -79.3832 };
    if (!navigator.geolocation) return Promise.resolve(fallback);
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            () => resolve(fallback),
            { enableHighAccuracy: false, timeout: 1800, maximumAge: 1000 * 60 * 30 }
        );
    });
}

function getForecastDayLabel(dateText, index) {
    if (index === 0) return "Today";
    if (!dateText) {
        const fallbackDate = new Date();
        fallbackDate.setDate(fallbackDate.getDate() + index);
        return fallbackDate.toLocaleDateString(undefined, { weekday: "short" });
    }
    const date = new Date(`${dateText}T12:00:00`);
    return date.toLocaleDateString(undefined, { weekday: "short" });
}

function isRainyForecast(code, chance) {
    return chance >= 45 || [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code);
}

function isCloudyForecast(code) {
    return [2, 3, 45, 48].includes(code);
}

function getForecastLabel(code, chance) {
    if (isCloudyForecast(code)) return "Cloud layer";
    if (chance >= 25) return `${chance}% mist`;
    if (code === 0 || code === 1) return "Clear sky";
    return "Calm sky";
}

function initStylistSuite() {
    const occasionBtn = document.getElementById("occasionPlanBtn");
    const occasionSelect = document.getElementById("suiteOccasion");
    const packBtn = document.getElementById("packBagBtn");
    const calendarBtn = document.getElementById("saveCalendarBtn");
    const askBtn = document.getElementById("stylistAskBtn");
    const suiteBtn = document.getElementById("openSuiteBtn");

    if (occasionBtn) occasionBtn.addEventListener("click", generateOccasionPlan);
    if (occasionSelect) occasionSelect.addEventListener("change", generateOccasionPlan);
    if (packBtn) packBtn.addEventListener("click", generatePackList);
    if (calendarBtn) calendarBtn.addEventListener("click", saveOutfitToCalendar);
    if (askBtn) askBtn.addEventListener("click", answerStylistQuestion);
    if (suiteBtn) suiteBtn.addEventListener("click", () => openSuiteDrawer("menu"));
    document.querySelectorAll("[data-suite-tool]").forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("button, input, select, label, a")) return;
            openSuiteDrawer(card.dataset.suiteTool);
        });
        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            openSuiteDrawer(card.dataset.suiteTool);
        });
    });
    document.getElementById("suiteDrawerClose")?.addEventListener("click", closeSuiteDrawer);
    document.getElementById("suiteDrawer")?.addEventListener("click", (event) => {
        if (event.target.id === "suiteDrawer") closeSuiteDrawer();
    });
    document.getElementById("suiteDrawerContent")?.addEventListener("click", (event) => {
        const toolButton = event.target.closest("[data-open-suite-tool]");
        if (!toolButton) return;
        openSuiteDrawer(toolButton.dataset.openSuiteTool || "score");
    });
    document.querySelectorAll("[data-palette]").forEach((button) => {
        button.addEventListener("click", () => showPalette(button.dataset.palette || "cream"));
    });
    renderClosetCalendar();
    generateOccasionPlan();
    updateStylistSuite();
}

function openSuiteDrawer(tool = "score") {
    const drawer = document.getElementById("suiteDrawer");
    const content = document.getElementById("suiteDrawerContent");
    if (!drawer || !content) return;
    content.innerHTML = getSuiteDrawerMarkup(tool);
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    bindSuiteDrawerControls(tool);
}

function closeSuiteDrawer() {
    const drawer = document.getElementById("suiteDrawer");
    if (!drawer) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
}

function getSuiteDrawerMarkup(tool) {
    const names = getCurrentOutfitNames();
    const complete = isCompleteOutfit();
    const incomplete = `<div class="drawer-empty"><h3>Finish your outfit first</h3><p>Select a top, bottom, and shoes so this tool can give better advice.</p></div>`;
    const toolNames = {
        menu: "Stylist Suite",
        profile: "Style Profile",
        score: "AI Outfit Score",
        occasion: "Occasion Planner",
        palette: "Color Match Studio",
        checklist: "Before You Leave",
        pack: "Pack My Bag",
        calendar: "Closet Calendar",
        note: "Personal Stylist Note",
        ask: "Ask Stylist"
    };
    const header = `<span>${toolNames[tool] || "Stylist Tool"}</span>`;

    if (tool === "menu") {
        return `
            ${header}
            <h2>Choose a styling tool</h2>
            <p class="drawer-intro">Open a focused tool without scrolling through the full page.</p>
            <div class="suite-tool-menu">
                <button type="button" data-open-suite-tool="profile" onclick="openSuiteDrawer('profile')"><span>01</span>Style Profile</button>
                <button type="button" data-open-suite-tool="score" onclick="openSuiteDrawer('score')"><span>02</span>AI Outfit Score</button>
                <button type="button" data-open-suite-tool="occasion" onclick="openSuiteDrawer('occasion')"><span>03</span>Occasion Planner</button>
                <button type="button" data-open-suite-tool="palette" onclick="openSuiteDrawer('palette')"><span>04</span>Color Match Studio</button>
                <button type="button" data-open-suite-tool="checklist" onclick="openSuiteDrawer('checklist')"><span>05</span>Before You Leave</button>
                <button type="button" data-open-suite-tool="pack" onclick="openSuiteDrawer('pack')"><span>06</span>Pack My Bag</button>
                <button type="button" data-open-suite-tool="calendar" onclick="openSuiteDrawer('calendar')"><span>07</span>Closet Calendar</button>
                <button type="button" data-open-suite-tool="note" onclick="openSuiteDrawer('note')"><span>08</span>Stylist Note</button>
                <button type="button" data-open-suite-tool="ask" onclick="openSuiteDrawer('ask')"><span>09</span>Ask Stylist</button>
            </div>
        `;
    }

    if (tool === "profile") {
        return `${header}<h2 id="drawerProfileTitle">${document.getElementById("styleProfileTitle")?.textContent || "Style Profile"}</h2><p>${document.getElementById("styleProfileSummary")?.textContent || ""}</p>`;
    }
    if (tool === "score") {
        return `${header}${complete ? `<strong class="drawer-score">${document.getElementById("luxuryScore")?.textContent || "--"}</strong><p>${document.getElementById("luxuryScoreText")?.textContent || ""}</p>` : incomplete}`;
    }
    if (tool === "occasion") {
        return `${header}<h2>Plan by destination</h2><select id="drawerOccasion"><option value="school">School</option><option value="brunch">Brunch</option><option value="dinner">Dinner</option><option value="travel">Travel</option><option value="interview">Interview</option><option value="party">Party</option></select><p id="drawerOccasionResult">${complete ? "Choose a destination for specific styling direction." : "You can choose a destination now, then complete your outfit."}</p>`;
    }
    if (tool === "palette") {
        return `${header}<h2>Build a luxury palette</h2><div class="drawer-palette-actions"><button data-drawer-palette="cream">Cream</button><button data-drawer-palette="noir">Noir</button><button data-drawer-palette="espresso">Espresso</button><button data-drawer-palette="navy">Navy</button></div><div id="drawerPaletteResult" class="palette-result">Select a color direction.</div>`;
    }
    if (tool === "checklist") {
        return `${header}<h2>Final check</h2><ul class="leave-checklist drawer-checklist"><li><label><input type="checkbox"> Shoes match the formality</label></li><li><label><input type="checkbox"> One polished accessory</label></li><li><label><input type="checkbox"> Weather layer considered</label></li><li><label><input type="checkbox"> Bag or pocket plan ready</label></li></ul>`;
    }
    if (tool === "pack") {
        if (!complete) return `${header}${incomplete}`;
        const items = [names.top, names.bottom, names.shoes, names.accessories[0] || "One polished accessory", "Lint roller or mini steamer", "Backup layer"];
        return `${header}<h2>Pack this look</h2><ul class="suite-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }
    if (tool === "calendar") {
        return `${header}<h2>Schedule a look</h2>${complete ? "" : "<p>Complete an outfit before saving it to a day.</p>"}<div class="calendar-actions"><select id="drawerCalendarDay"><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option></select><button id="drawerSaveCalendar" type="button">Save Day</button></div><div id="drawerCalendarResult" class="calendar-result">${getCalendarMarkup()}</div>`;
    }
    if (tool === "note") {
        return `${header}${complete ? `<h2>Stylist note</h2><p>${document.getElementById("stylistNote")?.textContent || ""}</p>` : incomplete}`;
    }
    if (tool === "ask") {
        return `${header}<h2>Ask the stylist</h2><input id="drawerStylistQuestion" type="text" placeholder="What should I wear to dinner?"><button id="drawerStylistAsk" type="button">Ask</button><p id="drawerStylistAnswer">${complete ? "Ask for quick outfit advice based on this look." : "Complete an outfit first so the answer can be specific."}</p>`;
    }
    return `${header}${incomplete}`;
}

function bindSuiteDrawerControls(tool) {
    if (tool === "menu") {
        return;
    }
    if (tool === "occasion") {
        const select = document.getElementById("drawerOccasion");
        const update = () => {
            const original = document.getElementById("suiteOccasion");
            if (original && select) original.value = select.value;
            generateOccasionPlan();
            const result = document.getElementById("drawerOccasionResult");
            if (result) result.textContent = document.getElementById("occasionPlanResult")?.textContent || "";
        };
        select?.addEventListener("change", update);
        update();
    }
    if (tool === "palette") {
        document.querySelectorAll("[data-drawer-palette]").forEach((button) => {
            button.addEventListener("click", () => {
                showPalette(button.dataset.drawerPalette || "cream");
                const drawerResult = document.getElementById("drawerPaletteResult");
                const pageResult = document.getElementById("paletteResult");
                if (drawerResult && pageResult) drawerResult.innerHTML = pageResult.innerHTML;
            });
        });
    }
    if (tool === "calendar") {
        document.getElementById("drawerSaveCalendar")?.addEventListener("click", () => {
            const pageDay = document.getElementById("calendarDay");
            const drawerDay = document.getElementById("drawerCalendarDay");
            if (pageDay && drawerDay) pageDay.value = drawerDay.value;
            saveOutfitToCalendar();
            const result = document.getElementById("drawerCalendarResult");
            if (result) result.innerHTML = getCalendarMarkup();
        });
    }
    if (tool === "ask") {
        document.getElementById("drawerStylistAsk")?.addEventListener("click", () => {
            const pageInput = document.getElementById("stylistQuestion");
            const drawerInput = document.getElementById("drawerStylistQuestion");
            if (pageInput && drawerInput) pageInput.value = drawerInput.value;
            answerStylistQuestion();
            const drawerAnswer = document.getElementById("drawerStylistAnswer");
            if (drawerAnswer) drawerAnswer.textContent = document.getElementById("stylistAnswer")?.textContent || "";
        });
    }
}

function getCurrentOutfitNames() {
    return {
        top: selectedOutfit.top?.name || "",
        bottom: selectedOutfit.bottom?.name || "",
        shoes: selectedOutfit.shoes?.name || "",
        accessories: selectedOutfit.accessories.map((item) => item.name).filter(Boolean)
    };
}

function isCompleteOutfit() {
    return Boolean(selectedOutfit.top && selectedOutfit.bottom && selectedOutfit.shoes);
}

function updateStylistSuite() {
    updateStyleProfileCard();
    updateLuxuryScore();
    updateStylistNote();
}

function updateStyleProfileCard() {
    const title = document.getElementById("styleProfileTitle");
    const summary = document.getElementById("styleProfileSummary");
    if (!title || !summary) return;
    const preference = localStorage.getItem("mzLuxStylePreference") || "neutral";
    const priority = localStorage.getItem("mzLuxStylePriority") || "tailored";
    const labels = {
        female: "Feminine styling",
        male: "Masculine styling",
        neutral: "Neutral styling",
        tailored: "tailored and polished",
        comfort: "comfortable everyday",
        statement: "statement-focused"
    };
    title.textContent = labels[preference] || "Neutral styling";
    summary.textContent = `Your rows prioritize ${labels[priority] || "tailored and polished"} pieces first.`;
}

function updateLuxuryScore() {
    const scoreEl = document.getElementById("luxuryScore");
    const textEl = document.getElementById("luxuryScoreText");
    if (!scoreEl || !textEl) return;
    if (!isCompleteOutfit()) {
        scoreEl.textContent = "--";
        textEl.textContent = "Build a full look to receive color, silhouette, and styling feedback.";
        return;
    }

    const names = getCurrentOutfitNames();
    const outfitText = `${names.top} ${names.bottom} ${names.shoes} ${names.accessories.join(" ")}`.toLowerCase();
    let score = 72 + names.accessories.length * 4;
    if (/(blazer|button|trouser|loafer|watch|pearl|satin|pleated)/.test(outfitText)) score += 12;
    if (/(hoodie|graphic|cargo|chunky|combat)/.test(outfitText)) score += 4;
    if (/(black|white|cream|beige|navy|brown)/.test(outfitText)) score += 8;
    score = Math.min(98, score);

    scoreEl.textContent = `${score}%`;
    textEl.textContent = score >= 90
        ? "Excellent balance. The palette feels expensive and the silhouette is intentional."
        : "Strong base. Add one refined accessory or cleaner shoe choice to lift the look.";
}

function updateStylistNote() {
    const note = document.getElementById("stylistNote");
    if (!note) return;
    if (!isCompleteOutfit()) {
        note.textContent = "Select a complete outfit and MZ LUX will give you a direct styling note.";
        return;
    }
    const names = getCurrentOutfitNames();
    const accessory = names.accessories[0] ? ` The ${names.accessories[0].toLowerCase()} adds a finished detail.` : " Add one accessory to make it feel complete.";
    note.textContent = `${names.top} with ${names.bottom} and ${names.shoes} reads polished without trying too hard.${accessory}`;
}

function generateOccasionPlan() {
    const result = document.getElementById("occasionPlanResult");
    const occasion = document.getElementById("suiteOccasion")?.value || "school";
    if (!result) return;
    const copy = {
        school: "Keep it clean and comfortable: choose one polished piece, then keep shoes practical.",
        brunch: "Go warm and camera-ready: soft neutrals, a refined accessory, and relaxed structure.",
        dinner: "Push the look sharper: darker tones, sleeker shoes, and one statement finish.",
        travel: "Prioritize comfort with structure: layerable top, easy shoes, and a practical bag.",
        interview: "Make it precise: tailored lines, closed shoes, and minimal accessories.",
        party: "Let one piece speak: statement accessory or shoe, with the rest controlled."
    };
    result.textContent = copy[occasion] || copy.school;
}

function showPalette(key) {
    const result = document.getElementById("paletteResult");
    if (!result) return;
    const palettes = {
        cream: { label: "Cream / Camel / Warm Gold", colors: ["#fff4df", "#c5a06a", "#ddb865"] },
        noir: { label: "Noir / Ivory / Champagne", colors: ["#070605", "#fff8ea", "#d8bd7a"] },
        espresso: { label: "Espresso / Oat / Bronze", colors: ["#3a2418", "#eadcc7", "#9d6a32"] },
        navy: { label: "Navy / Pearl / Cognac", colors: ["#111d31", "#f4efe6", "#8f542d"] }
    };
    const palette = palettes[key] || palettes.cream;
    result.innerHTML = `
        <strong>${palette.label}</strong>
        <div class="suite-swatches">${palette.colors.map((color) => `<i style="background:${color}"></i>`).join("")}</div>
        <p>Use one dominant shade, one soft contrast, and one metallic or leather accent.</p>
    `;
}

function generatePackList() {
    const result = document.getElementById("packBagResult");
    if (!result) return;
    if (!isCompleteOutfit()) {
        result.innerHTML = "<li>Complete an outfit first.</li>";
        return;
    }
    const names = getCurrentOutfitNames();
    const items = [names.top, names.bottom, names.shoes, names.accessories[0] || "One polished accessory", "Lint roller or mini steamer", "Backup layer"];
    result.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function saveOutfitToCalendar() {
    const day = document.getElementById("calendarDay")?.value || "Monday";
    const result = document.getElementById("calendarResult");
    if (!result) return;
    if (!isCompleteOutfit()) {
        result.textContent = "Complete an outfit before scheduling it.";
        return;
    }
    const names = getCurrentOutfitNames();
    const calendar = JSON.parse(localStorage.getItem("mzLuxCalendar") || "{}");
    calendar[day] = `${names.top} / ${names.bottom} / ${names.shoes}`;
    localStorage.setItem("mzLuxCalendar", JSON.stringify(calendar));
    renderClosetCalendar();
}

function renderClosetCalendar() {
    const result = document.getElementById("calendarResult");
    if (!result) return;
    const calendar = JSON.parse(localStorage.getItem("mzLuxCalendar") || "{}");
    const entries = Object.entries(calendar);
    result.innerHTML = getCalendarMarkup();
}

function getCalendarMarkup() {
    const calendar = JSON.parse(localStorage.getItem("mzLuxCalendar") || "{}");
    const entries = Object.entries(calendar);
    return entries.length
        ? entries.map(([day, look]) => `<p><strong>${day}</strong> ${look}</p>`).join("")
        : "No outfit scheduled yet.";
}

function answerStylistQuestion() {
    const input = document.getElementById("stylistQuestion");
    const answer = document.getElementById("stylistAnswer");
    if (!input || !answer) return;
    const question = input.value.trim().toLowerCase();
    if (!question) {
        answer.textContent = "Ask a quick styling question first.";
        return;
    }
    if (!isCompleteOutfit()) {
        answer.textContent = "Complete an outfit first so the advice can be specific.";
        return;
    }
    const names = getCurrentOutfitNames();
    if (/dinner|date|evening/.test(question)) {
        answer.textContent = `For dinner, keep ${names.top.toLowerCase()} and ${names.bottom.toLowerCase()}, then make the shoes feel sleek. Add one metallic or structured accessory.`;
    } else if (/school|class|campus/.test(question)) {
        answer.textContent = `For school, this works best if you keep it comfortable: ${names.shoes.toLowerCase()} should feel practical, and the accessory should stay minimal.`;
    } else if (/interview|office|work/.test(question)) {
        answer.textContent = `For a polished setting, sharpen the outfit with clean lines and avoid loud extras. ${names.top} should be the anchor.`;
    } else if (/party|event/.test(question)) {
        answer.textContent = `For an event, make one piece the focus and keep everything else controlled. The current look can handle one stronger accessory.`;
    } else {
        answer.textContent = `${names.top}, ${names.bottom}, and ${names.shoes} already form the base. Improve it with one intentional accessory and a cleaner color story.`;
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
        <article class="outfit-card favourite-entry lookbook-entry">
            <div class="outfit-card-header">
                <h3>Look ${i+1} — ${themeLabels[outfit.theme] || outfit.theme || "Custom"}</h3>
                <span class="pill">${outfit.savedAt || ""}</span>
                <button class="delete-fav-btn" data-index="${i}" style="background:transparent;border:1px solid rgba(176,141,87,0.3);color:#8a623a;padding:6px 14px;border-radius:999px;cursor:pointer;font-size:0.75rem;letter-spacing:0.1em;">Remove</button>
            </div>
            <div class="outfit-items">
                ${["top","bottom","shoes"].map(k => outfit[k] ? `<div class="outfit-item"><img src="${outfit[k].image}" alt="${outfit[k].name}" onerror="this.onerror=null;this.style.display='none';"><p class="item-label">${k}</p><p class="item-name">${outfit[k].name}</p></div>` : "").join("")}
                ${(outfit.accessories||[]).map(a => `<div class="outfit-item"><img src="${a.image}" alt="${a.name}" onerror="this.onerror=null;this.style.display='none';"><p class="item-label">Accessory</p><p class="item-name">${a.name}</p></div>`).join("")}
            </div>
        </article>`).join("");
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
