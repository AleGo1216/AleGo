module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabase/server.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-ssr] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://hgwnbwirhfmafokawjei.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnd25id2lyaGZtYWZva2F3amVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NzgzOTQsImV4cCI6MjA3MjQ1NDM5NH0.A-ORaHfKOxRVIr9bY0UiMSjHX-RFzQVc5sa6i8iW-7A"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/app/components/shop/shopLogic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/shop/shopLogic.ts
// ⭐ 迁移自原静态 HTML 中的内联 <script>
// 已移除立即执行函数 IIFE，改为 initShop() 导出
// 全部 DOM 操作在客户端执行，Next.js SSR 不会报错
__turbopack_context__.s([
    "initShop",
    ()=>initShop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-ssr] (ecmascript)");
;
async function initShop() {
    console.log('[shopLogic] 初始化 shop 页面...');
    // ==== 数据源（可替换为 fetch API）====
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const { data } = await supabase.from("products").select();
    const products = data;
    const state = {
        level: 'All',
        status: 'All',
        minPrice: 0,
        maxPrice: 2000,
        sort: 'new',
        perPage: 12,
        page: 1,
        favSet: new Set(JSON.parse(localStorage.getItem('favSet') || '[]')),
        filtersDirty: false
    };
    // ==== DOM 元素 ====
    const gridEl = document.getElementById('grid');
    const resultsCountEl = document.getElementById('resultsCount');
    const paginationEl = document.getElementById('pagination');
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const sortSel = document.getElementById('sortSelect');
    const perPageSel = document.getElementById('perPage');
    const applyBtn = document.getElementById('applyFilters');
    // ==== 工具函数 ====
    function saveFavSet() {
        localStorage.setItem('favSet', JSON.stringify([
            ...state.favSet
        ]));
    }
    function sortProducts(list) {
        switch(state.sort){
            case 'price_asc':
                return list.sort((a, b)=>a.price - b.price);
            case 'price_desc':
                return list.sort((a, b)=>b.price - a.price);
            case 'sales_desc':
                return list.sort((a, b)=>b.sales - a.sales);
            case 'fav_desc':
                return list.sort((a, b)=>b.fav - a.fav);
            case 'release_asc':
                return list.sort((a, b)=>new Date(a.release).getTime() - new Date(b.release).getTime());
            case 'release_desc':
                return list.sort((a, b)=>new Date(b.release).getTime() - new Date(a.release).getTime());
            case 'new':
            default:
                return list;
        }
    }
    function filterProducts() {
        return products.filter((p)=>{
            return (state.level === 'All' || p.level === state.level) && (state.status === 'All' || p.status === state.status) && p.price >= state.minPrice && p.price <= state.maxPrice;
        });
    }
    // ==== 渲染函数 ====
    function render() {
        const filtered = filterProducts();
        const sorted = sortProducts(filtered);
        const total = sorted.length;
        const start = (state.page - 1) * state.perPage;
        const end = start + state.perPage;
        const pageItems = sorted.slice(start, end);
        resultsCountEl.textContent = `${total} result${total !== 1 ? 's' : ''}`;
        // 渲染卡片
        gridEl.innerHTML = '';
        for (const p of pageItems){
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
          <img src="${p.img}" alt="${p.title}" class="thumb" />
          <h3>${p.title}</h3>
          <div class="muted">${p.level} • ${p.status}</div>
          <div>$${p.price}</div>
          <button data-id="${p.id}" class="fav-btn">
            ${state.favSet.has(p.id) ? '♥ Saved' : '♡ Save'}
          </button>
        `;
            gridEl.appendChild(card);
        }
        // 渲染分页
        const totalPages = Math.ceil(total / state.perPage);
        paginationEl.innerHTML = '';
        for(let i = 1; i <= totalPages; i++){
            const btn = document.createElement('button');
            btn.textContent = `${i}`;
            if (i === state.page) btn.classList.add('active');
            btn.addEventListener('click', ()=>{
                state.page = i;
                render();
            });
            paginationEl.appendChild(btn);
        }
        // 给收藏按钮绑定事件
        gridEl.querySelectorAll('.fav-btn').forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                const id = btn.dataset.id;
                if (state.favSet.has(id)) {
                    state.favSet.delete(id);
                } else {
                    state.favSet.add(id);
                }
                saveFavSet();
                render();
            });
        });
    }
    // ==== 初始化 UI 事件 ====
    document.querySelectorAll('#levelOptions .chip').forEach((btn)=>{
        btn.onclick = ()=>{
            state.level = btn.dataset.value || 'All';
            state.page = 1;
            render();
        };
    });
    document.querySelectorAll('#statusOptions .chip').forEach((btn)=>{
        btn.onclick = ()=>{
            state.status = btn.dataset.value || 'All';
            state.page = 1;
            render();
        };
    });
    applyBtn.onclick = ()=>{
        state.minPrice = Number(priceMinInput.value || 0);
        state.maxPrice = Number(priceMaxInput.value || 2000);
        state.sort = sortSel.value;
        state.perPage = Number(perPageSel.value);
        state.page = 1;
        render();
    };
    // ==== 首次渲染 ====
    render();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__206524a7._.js.map