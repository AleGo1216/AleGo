module.exports = [
"[project]/app/components/product/productLogic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initProductPage",
    ()=>initProductPage
]);
function initProductPage() {
    const $ = (s)=>document.querySelector(s);
    const $$ = (s)=>Array.from(document.querySelectorAll(s));
    const slidesEl = $("#slides");
    const thumbs = $$(".thumb");
    let index = 0;
    const total = thumbs.length;
    function updateCarousel() {
        if (!slidesEl) return;
        slidesEl.style.transform = `translateX(-${index * 100}%)`;
        $("#indicator").textContent = `${index + 1} / ${total}`;
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
    $("#nextBtn")?.addEventListener("click", next);
    $("#prevBtn")?.addEventListener("click", prev);
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
    qtyInc?.addEventListener("click", ()=>{
        qty = Math.min(3, qty + 1);
        qtyVal.textContent = qty.toString();
    });
    qtyDec?.addEventListener("click", ()=>{
        qty = Math.max(1, qty - 1);
        qtyVal.textContent = qty.toString();
    });
    // 模态查看
    const modal = $("#modal");
    const modalImg = $("#modalImg");
    const modalThumbs = $("#modalThumbs");
    const images = [
        `/images/product-1.jpg`,
        `/images/product-2.jpg`,
        `/images/product-3.jpg`,
        `/images/product-4.jpg`,
        `/images/product-5.jpg`
    ];
    thumbs.forEach((t, i)=>t.querySelector("img")?.addEventListener("click", ()=>{
            modal?.classList.add("open");
            renderModal(i);
        }));
    function renderModal(idx) {
        if (!modalImg || !modalThumbs) return;
        modalImg.src = images[idx];
        modalThumbs.innerHTML = images.map((src, i)=>`<img src="${src}" class="${i === idx ? "active" : ""}" style="cursor:pointer">`).join("");
        modalThumbs.querySelectorAll("img").forEach((i, j)=>i.addEventListener("click", ()=>renderModal(j)));
    }
    $("#modalClose")?.addEventListener("click", ()=>modal?.classList.remove("open"));
    // 顾问按钮
    $("#consultFloat")?.addEventListener("click", ()=>alert("Chat with studio specialist placeholder"));
}
}),
];

//# sourceMappingURL=app_components_product_productLogic_ts_5d21cab3._.js.map