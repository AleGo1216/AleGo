(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/product/productLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initProductPage",
    ()=>initProductPage
]);
function initProductPage() {
    var _$, _$1, _$2, // 顾问按钮
    _$3;
    const $ = (s)=>document.querySelector(s);
    const $$ = (s)=>Array.from(document.querySelectorAll(s));
    const slidesEl = $("#slides");
    const thumbs = $$(".thumb");
    let index = 0;
    const total = thumbs.length;
    function updateCarousel() {
        if (!slidesEl) return;
        slidesEl.style.transform = "translateX(-".concat(index * 100, "%)");
        $("#indicator").textContent = "".concat(index + 1, " / ").concat(total);
        thumbs.forEach((t, i)=>t.classList.toggle("active", i === index));
    }
    function next() {
        index = (index + 1) % total;
        updateCarousel();
    }
    function prev() {
        index = (index - 1 + total) % total;
        updateCarousel();
    }
    (_$ = $("#nextBtn")) === null || _$ === void 0 ? void 0 : _$.addEventListener("click", next);
    (_$1 = $("#prevBtn")) === null || _$1 === void 0 ? void 0 : _$1.addEventListener("click", prev);
    thumbs.forEach((t, i)=>t.addEventListener("click", ()=>{
            index = i;
            updateCarousel();
        }));
    updateCarousel();
    // Tabs
    const tabs = $$(".tab");
    const panes = $$(".tab-pane");
    function activateTab(key) {
        tabs.forEach((t)=>t.classList.toggle("active", t.dataset.tab === key));
        panes.forEach((p)=>p.classList.toggle("show", p.dataset.content === key));
    }
    tabs.forEach((t)=>t.addEventListener("click", ()=>activateTab(t.dataset.tab || "details")));
    // 收藏逻辑
    const saveBtn = $("#saveToggle");
    if (saveBtn) {
        let saved = false;
        saveBtn.onclick = ()=>{
            saved = !saved;
            saveBtn.classList.toggle("active", saved);
        };
    }
    // 数量选择器
    const qtyVal = $("#qtyVal");
    const qtyInc = $("#qtyInc");
    const qtyDec = $("#qtyDec");
    let qty = 1;
    qtyInc === null || qtyInc === void 0 ? void 0 : qtyInc.addEventListener("click", ()=>{
        qty = Math.min(3, qty + 1);
        qtyVal.textContent = qty.toString();
    });
    qtyDec === null || qtyDec === void 0 ? void 0 : qtyDec.addEventListener("click", ()=>{
        qty = Math.max(1, qty - 1);
        qtyVal.textContent = qty.toString();
    });
    // 模态查看
    const modal = $("#modal");
    const modalImg = $("#modalImg");
    const modalThumbs = $("#modalThumbs");
    const images = [
        "/images/product-1.jpg",
        "/images/product-2.jpg",
        "/images/product-3.jpg",
        "/images/product-4.jpg",
        "/images/product-5.jpg"
    ];
    thumbs.forEach((t, i)=>{
        var _t_querySelector;
        return (_t_querySelector = t.querySelector("img")) === null || _t_querySelector === void 0 ? void 0 : _t_querySelector.addEventListener("click", ()=>{
            modal === null || modal === void 0 ? void 0 : modal.classList.add("open");
            renderModal(i);
        });
    });
    function renderModal(idx) {
        if (!modalImg || !modalThumbs) return;
        modalImg.src = images[idx];
        modalThumbs.innerHTML = images.map((src, i)=>'<img src="'.concat(src, '" class="').concat(i === idx ? "active" : "", '" style="cursor:pointer">')).join("");
        modalThumbs.querySelectorAll("img").forEach((i, j)=>i.addEventListener("click", ()=>renderModal(j)));
    }
    (_$2 = $("#modalClose")) === null || _$2 === void 0 ? void 0 : _$2.addEventListener("click", ()=>modal === null || modal === void 0 ? void 0 : modal.classList.remove("open"));
    (_$3 = $("#consultFloat")) === null || _$3 === void 0 ? void 0 : _$3.addEventListener("click", ()=>alert("Chat with studio specialist placeholder"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_product_productLogic_ts_b89ef1a3._.js.map