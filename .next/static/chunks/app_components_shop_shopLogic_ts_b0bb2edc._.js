(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/shop/shopLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/shop/shopLogic.ts
// ⭐ 迁移自原静态 HTML 中的内联 <script>
// 已移除立即执行函数 IIFE，改为 initShop() 导出
// 全部 DOM 操作在客户端执行，Next.js SSR 不会报错
__turbopack_context__.s([
    "initShop",
    ()=>initShop
]);
async function initShop() {
    console.log('[shopLogic] 初始化 shop 页面...');
    let products = [];
    // ==== 数据源（可替换为 fetch API）====
    // ==== 获取数据 ====
    async function loadProducts() {
        try {
            const res = await fetch('/api/getProducts');
            if (!res.ok) throw new Error('获取商品数据失败');
            const data = await res.json();
            products = data || [];
            console.log('[shopLogic] 获取到产品数量:', products.length);
            render();
        } catch (err) {
            console.error(err);
        }
    }
    const statusList = [
        '',
        '预售',
        '现货'
    ];
    const categoryList = [
        '',
        'Q版',
        '精品',
        '收藏'
    ];
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
        resultsCountEl.textContent = "".concat(total, " result").concat(total !== 1 ? 's' : '');
        // 渲染卡片
        gridEl.innerHTML = '';
        for (const p of pageItems){
            console.log(222, p);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = '\n        <a href="/product/'.concat(p.product_id, '"> <img src="').concat(p.image, '" alt="').concat(p.name, '" class="thumb" /></a>\n          <h3>').concat(p.name, '</h3>\n          <div class="muted">').concat(categoryList[p.category_id], " • ").concat(statusList[p.status], "</div>\n          <div>$").concat(p.price, '</div>\n          <button data-id="').concat(p.product_id, '" class="fav-btn">\n            ').concat(state.favSet.has(p.product_id) ? '♥ Saved' : '♡ Save', "\n          </button>\n        ");
            gridEl.appendChild(card);
        }
        // 渲染分页
        const totalPages = Math.ceil(total / state.perPage);
        paginationEl.innerHTML = '';
        for(let i = 1; i <= totalPages; i++){
            const btn = document.createElement('button');
            btn.textContent = "".concat(i);
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
    loadProducts();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_shop_shopLogic_ts_b0bb2edc._.js.map