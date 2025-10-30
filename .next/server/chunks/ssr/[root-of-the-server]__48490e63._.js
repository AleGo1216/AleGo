module.exports = [
"[project]/.next-internal/server/app/shop/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/twitter-image.png.mjs { IMAGE => \"[project]/app/twitter-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/twitter-image.png.mjs { IMAGE => \"[project]/app/twitter-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/shop/lib/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/products.ts
__turbopack_context__.s([
    "getAllProducts",
    ()=>getAllProducts
]);
(()=>{
    const e = new Error("Cannot find module '../data/products.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function getAllProducts() {
    // productsData 是静态 JSON 导入（位于 data/products.json）
    return productsData.slice();
}
}),
"[project]/app/shop/lib/util.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/util.ts
__turbopack_context__.s([
    "applyFilters",
    ()=>applyFilters
]);
function applyFilters(products, opts) {
    const min = Number(opts.minPrice || 0);
    const max = Number(opts.maxPrice || Infinity);
    const perPage = Number(opts.perPage) || 12;
    let list = products.filter((p)=>p.price >= min && p.price <= max);
    if (opts.sort === 'price-asc') list = list.slice().sort((a, b)=>a.price - b.price);
    if (opts.sort === 'price-desc') list = list.slice().sort((a, b)=>b.price - a.price);
    const total = list.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const page = Math.min(Math.max(1, Number(opts.page || 1)), totalPages);
    const start = (page - 1) * perPage;
    const items = list.slice(start, start + perPage);
    return {
        items,
        total,
        totalPages,
        page,
        perPage
    };
}
}),
"[project]/app/shop/shop.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "shop-module__-mQgjq__active",
  "apply-btn": "shop-module__-mQgjq__apply-btn",
  "badge": "shop-module__-mQgjq__badge",
  "btn": "shop-module__-mQgjq__btn",
  "card": "shop-module__-mQgjq__card",
  "card-actions": "shop-module__-mQgjq__card-actions",
  "card-body": "shop-module__-mQgjq__card-body",
  "chip": "shop-module__-mQgjq__chip",
  "close-btn": "shop-module__-mQgjq__close-btn",
  "controls-row": "shop-module__-mQgjq__controls-row",
  "double-range": "shop-module__-mQgjq__double-range",
  "fav": "shop-module__-mQgjq__fav",
  "fill": "shop-module__-mQgjq__fill",
  "footer-brand": "shop-module__-mQgjq__footer-brand",
  "footer-desc": "shop-module__-mQgjq__footer-desc",
  "footer-inner": "shop-module__-mQgjq__footer-inner",
  "footer-left": "shop-module__-mQgjq__footer-left",
  "footer-links": "shop-module__-mQgjq__footer-links",
  "grid": "shop-module__-mQgjq__grid",
  "icon-btn": "shop-module__-mQgjq__icon-btn",
  "layout": "shop-module__-mQgjq__layout",
  "left": "shop-module__-mQgjq__left",
  "legal-small": "shop-module__-mQgjq__legal-small",
  "logo": "shop-module__-mQgjq__logo",
  "logo-a": "shop-module__-mQgjq__logo-a",
  "logo-rest": "shop-module__-mQgjq__logo-rest",
  "logo-sub": "shop-module__-mQgjq__logo-sub",
  "media": "shop-module__-mQgjq__media",
  "meta": "shop-module__-mQgjq__meta",
  "meta-small": "shop-module__-mQgjq__meta-small",
  "modal": "shop-module__-mQgjq__modal",
  "modal-backdrop": "shop-module__-mQgjq__modal-backdrop",
  "muted": "shop-module__-mQgjq__muted",
  "nav-item": "shop-module__-mQgjq__nav-item",
  "newsletter": "shop-module__-mQgjq__newsletter",
  "option-list": "shop-module__-mQgjq__option-list",
  "page-btn": "shop-module__-mQgjq__page-btn",
  "page-title": "shop-module__-mQgjq__page-title",
  "pagination": "shop-module__-mQgjq__pagination",
  "panel": "shop-module__-mQgjq__panel",
  "price": "shop-module__-mQgjq__price",
  "primary": "shop-module__-mQgjq__primary",
  "range-controls": "shop-module__-mQgjq__range-controls",
  "range-track": "shop-module__-mQgjq__range-track",
  "range-wrap": "shop-module__-mQgjq__range-wrap",
  "search": "shop-module__-mQgjq__search",
  "site-footer": "shop-module__-mQgjq__site-footer",
  "social-btn": "shop-module__-mQgjq__social-btn",
  "social-row": "shop-module__-mQgjq__social-row",
  "sort": "shop-module__-mQgjq__sort",
  "sr-only": "shop-module__-mQgjq__sr-only",
  "subtitle": "shop-module__-mQgjq__subtitle",
  "title": "shop-module__-mQgjq__title",
  "top-controls": "shop-module__-mQgjq__top-controls",
  "topbar": "shop-module__-mQgjq__topbar",
  "utils": "shop-module__-mQgjq__utils",
});
}),
"[project]/app/shop/components/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$shop$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/shop/shop.module.css [app-rsc] (css module)");
;
;
function ProductCard({ product, onToggleFav, onOpenModal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$shop$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$shop$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].favBtn} ${product.fav ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$shop$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].active : ""}`,
                onClick: ()=>onToggleFav(product.id),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: product.fav ? "ri-heart-fill" : "ri-heart-line"
                }, void 0, false, {
                    fileName: "[project]/app/shop/components/ProductCard.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/shop/components/ProductCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: product.img,
                alt: product.title,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$shop$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].productImg,
                onClick: ()=>onOpenModal(product)
            }, void 0, false, {
                fileName: "[project]/app/shop/components/ProductCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$shop$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cardInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/app/shop/components/ProductCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: product.artist
                    }, void 0, false, {
                        fileName: "[project]/app/shop/components/ProductCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "$",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/shop/components/ProductCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/components/ProductCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/components/ProductCard.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/shop/components/ControlsView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/shop/components/ShopClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/shop/components/ShopClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/shop/components/ShopClient.tsx <module evaluation>", "default");
}),
"[project]/app/shop/components/ShopClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/shop/components/ShopClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/shop/components/ShopClient.tsx", "default");
}),
"[project]/app/shop/components/ShopClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ShopClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/shop/components/ShopClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ShopClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/shop/components/ShopClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ShopClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/shop/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/shop/lib/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$lib$2f$util$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/shop/lib/util.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/shop/components/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ControlsView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/shop/components/ControlsView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ShopClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/shop/components/ShopClient.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Page() {
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProducts"])();
    const initialOpts = {
        minPrice: 0,
        maxPrice: 9999999,
        sort: 'default',
        perPage: 12,
        page: 1
    };
    const initialPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$lib$2f$util$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyFilters"])(products, initialOpts);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shop-wrapper container-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "filters-area",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ControlsView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            opts: initialOpts
                        }, void 0, false, {
                            fileName: "[project]/app/shop/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/shop/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "product-area",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "product-list",
                                className: "product-grid",
                                children: initialPage.items.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        p: p
                                    }, p.id, false, {
                                        fileName: "[project]/app/shop/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/shop/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "pagination",
                                className: "pagination-wrap",
                                children: initialPage.totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "pagination",
                                    children: Array.from({
                                        length: initialPage.totalPages
                                    }, (_, i)=>{
                                        const n = i + 1;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `page-btn${n === initialPage.page ? ' active' : ''}`,
                                            "aria-current": n === initialPage.page ? 'page' : undefined,
                                            children: n
                                        }, n, false, {
                                            fileName: "[project]/app/shop/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/shop/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/shop/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$shop$2f$components$2f$ShopClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                allProducts: products,
                initialOpts: initialOpts,
                initialPageResult: initialPage
            }, void 0, false, {
                fileName: "[project]/app/shop/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/shop/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/shop/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48490e63._.js.map