(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/product/SubHeroClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/product/[id]/components/SubHeroClient.tsx
__turbopack_context__.s([
    "default",
    ()=>SubHeroClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SubHeroClient(param) {
    let { breadcrumbs, pills = [], authTitle = 'Buy with confidence', authSubtitle = "Numbered certificate • Artist's note • Transit protection" } = param;
    _s();
    // 初始所有 pill 都是未按下状态
    const [pressed, setPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pills.map({
        "SubHeroClient.useState": ()=>false
    }["SubHeroClient.useState"]));
    const toggle = (idx)=>{
        setPressed((prev)=>{
            const next = [
                ...prev
            ];
            next[idx] = !next[idx];
            return next;
        });
    };
    const onKeyToggle = (e, idx)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle(idx);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sub-hero",
        role: "region",
        "aria-label": "Product breadcrumb and quick actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "breadcrumbs",
                children: breadcrumbs
            }, void 0, false, {
                fileName: "[project]/app/components/product/SubHeroClient.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sub-cta",
                children: [
                    pills.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pill interactive ".concat(pressed[i] ? 'active' : ''),
                            tabIndex: 0,
                            role: "button",
                            "aria-pressed": pressed[i],
                            onClick: ()=>toggle(i),
                            onKeyDown: (e)=>onKeyToggle(e, i),
                            children: p
                        }, i, false, {
                            fileName: "[project]/app/components/product/SubHeroClient.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-chip interactive",
                        role: "status",
                        "aria-live": "polite",
                        tabIndex: 0,
                        title: "Authenticity guaranteed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "auth-badge",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2l6 4v5c0 5-3.5 9-6 11-2.5-2-6-6-6-11V6l6-4z",
                                            fill: "#071018"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/product/SubHeroClient.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/SubHeroClient.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    "AUTHENTIC"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/product/SubHeroClient.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    lineHeight: 1.05,
                                    marginLeft: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            color: 'var(--text)'
                                        },
                                        children: authTitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/SubHeroClient.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            display: 'block',
                                            color: 'var(--muted)'
                                        },
                                        children: authSubtitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/SubHeroClient.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/product/SubHeroClient.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/SubHeroClient.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/SubHeroClient.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/product/SubHeroClient.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(SubHeroClient, "OKBSjUafAnvTBkDJkvpb1surJM8=");
_c = SubHeroClient;
var _c;
__turbopack_context__.k.register(_c, "SubHeroClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/product/ProductGalleryClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/product/[id]/components/CarouselClient.tsx
__turbopack_context__.s([
    "default",
    ()=>CarouselClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CarouselClient(param) {
    let { images } = param;
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const total = images.length;
    const slidesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const AUTO_INTERVAL = 4500;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselClient.useEffect": ()=>{
            // update transform whenever index changes
            if (slidesRef.current) {
                slidesRef.current.style.transform = "translateX(-".concat(index * 100, "%)");
            }
        }
    }["CarouselClient.useEffect"], [
        index
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselClient.useEffect": ()=>{
            startAuto();
            return stopAuto;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CarouselClient.useEffect"], []);
    function startAuto() {
        stopAuto();
        autoTimerRef.current = window.setInterval(()=>{
            setIndex((i)=>(i + 1) % total);
        }, AUTO_INTERVAL);
    }
    function stopAuto() {
        if (autoTimerRef.current) {
            clearInterval(autoTimerRef.current);
            autoTimerRef.current = null;
        }
    }
    function restartAuto() {
        stopAuto();
        startAuto();
    }
    // normalize image fit on load/resize: use onLoad handlers per <img>
    const handleImageLoad = (e)=>{
        const img = e.currentTarget;
        const wrap = img.closest('.image-wrap');
        if (!wrap) return;
        const containerRatio = wrap.clientWidth / Math.max(1, wrap.clientHeight);
        const naturalW = img.naturalWidth || img.width;
        const naturalH = img.naturalHeight || img.height;
        const imgRatio = naturalW / Math.max(1, naturalH);
        if (imgRatio < containerRatio * 0.8 || imgRatio > containerRatio * 1.25) {
            img.classList.add('contain');
        } else {
            img.classList.remove('contain');
        }
    };
    // open modal by dispatching a custom Browser event (Modal is separate client component listening)
    const openModal = function() {
        let startIdx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        const ev = new CustomEvent('open-product-modal', {
            detail: {
                index: startIdx,
                images
            }
        });
        window.dispatchEvent(ev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousel",
                id: "carousel",
                "aria-hidden": "false",
                onMouseEnter: stopAuto,
                onMouseLeave: startAuto,
                onFocus: stopAuto,
                onBlur: restartAuto,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-contact-cta interactive",
                        role: "region",
                        "aria-label": "Contact our studio about this piece",
                        tabIndex: 0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pc-cta-text",
                                children: "Curious about finish or framing?"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "pc-contact-link interactive",
                                href: "#",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    window.dispatchEvent(new CustomEvent('consult-click'));
                                },
                                "aria-label": "Contact the studio",
                                children: "Ask our studio"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "slides-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slides",
                            id: "slides",
                            ref: slidesRef,
                            "aria-live": "polite",
                            style: {
                                width: "100%"
                            },
                            children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "slide",
                                    style: {
                                        flex: '1 0 100%'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "image-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: "Product image ".concat(i + 1),
                                            "data-index": i,
                                            style: {
                                                cursor: 'zoom-in',
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover'
                                            },
                                            onLoad: handleImageLoad,
                                            onClick: ()=>openModal(i)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "indicator",
                        id: "indicator",
                        children: [
                            index + 1,
                            " / ",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-arrow arrow-left interactive accent-hover",
                        "aria-label": "Previous image",
                        onClick: ()=>{
                            setIndex((i)=>(i - 1 + total) % total);
                            restartAuto();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 18l-6-6 6-6",
                                stroke: "#eaf6f0",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                lineNumber: 102,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-arrow arrow-right interactive accent-hover",
                        "aria-label": "Next image",
                        onClick: ()=>{
                            setIndex((i)=>(i + 1) % total);
                            restartAuto();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 6l6 6-6 6",
                                stroke: "#eaf6f0",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                                lineNumber: 106,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "thumbs",
                style: {
                    marginTop: 14
                },
                children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "thumb ".concat(i === index ? 'active' : ''),
                        "data-index": i,
                        tabIndex: 0,
                        "aria-label": "View image ".concat(i + 1),
                        onClick: ()=>{
                            setIndex(i);
                            restartAuto();
                        },
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setIndex(i);
                                restartAuto();
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 14,
                    color: 'var(--muted)',
                    fontSize: 13
                },
                children: "Click an image to enlarge. Studio photography favors composition and texture — each edition is hand‑finished."
            }, void 0, false, {
                fileName: "[project]/app/components/product/ProductGalleryClient.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CarouselClient, "xIgo6fkwxSAX49jC7hjKsoQ/MZk=");
_c = CarouselClient;
var _c;
__turbopack_context__.k.register(_c, "CarouselClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/types/product.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// types/product.ts
__turbopack_context__.s([
    "categoryList",
    ()=>categoryList,
    "reviewList",
    ()=>reviewList,
    "statusList",
    ()=>statusList
]);
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
const reviewList = [
    {
        author: 'Marina, CA',
        rating: 5,
        when: '2 weeks ago',
        text: 'I own several ALeToys pieces and this is one of the most refined. The finish and presentation felt gallery‑level — the certificate and artist note made the experience personal.'
    },
    {
        author: 'James, UK',
        when: '1 month ago',
        rating: 4.5,
        text: "Beautiful sculpt and attentive studio support. A minor paint variance was handled quickly by customer care — they treated it like a collector's issue, not a return."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/product/PurchaseCardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/product/[id]/components/PurchaseCardClient.tsx
__turbopack_context__.s([
    "default",
    ()=>PurchaseCardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartOutlined.js [app-client] (ecmascript) <export default as HeartOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ShoppingCartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ShoppingCartOutlined.js [app-client] (ecmascript) <export default as ShoppingCartOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/product.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PurchaseCardClient(param) {
    let { product } = param;
    _s();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var _product_favCount;
    const [favCount, setFavCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_product_favCount = product.favCount) !== null && _product_favCount !== void 0 ? _product_favCount : 0);
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    function toggleSave() {
        setSaved((s)=>{
            const next = !s;
            setFavCount((c)=>Math.max(0, c + (next ? 1 : -1)));
            return next;
        });
    }
    async function handleBuy() {
        // simulate processing
        try {
            // Replace with your checkout integration
            alert("Checkout simulated:\n• Item: ".concat(product.name, "\n• Qty: ").concat(qty, "\n• Item total: $").concat(product.price * qty));
        } catch (err) {
            console.error(err);
            alert('Failed to checkout');
        }
    }
    var _product_maxAvailable;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subtitle",
                children: product.subtitle
            }, void 0, false, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "meta",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tag",
                        children: [
                            "Grade: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    marginLeft: 8,
                                    color: 'var(--text)'
                                },
                                children: product.category_id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryList"][product.category_id] : 'Collector'
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 39,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tag",
                        children: [
                            "Status: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    marginLeft: 8,
                                    color: '#b7ffef'
                                },
                                children: product.status ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusList"][product.status] : 'In Stock'
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 40,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tag",
                        children: "Hand-finished"
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "price-row",
                style: {
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "price",
                        children: [
                            "$",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    (product.msrp || product.price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "msrp",
                        children: [
                            "$",
                            product.msrp || product.price * 2
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 47,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "icon-small",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                width: "16",
                                height: "16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 21s-7.2-4.9-9.1-8.1a5.8 5.8 0 010-5.8 7.6 7.6 0 0113.4 0 5.8 5.8 0 010 5.8C19.2 16.1 12 21 12 21z",
                                    stroke: "#cfedf1",
                                    strokeWidth: "1.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                    lineNumber: 50,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 50,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "favCount",
                                children: "128"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 50,
                                columnNumber: 315
                            }, this),
                            " favorites"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "icon-small",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                width: "16",
                                height: "16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 7h18M3 12h12M3 17h18",
                                    stroke: "#cfedf1",
                                    strokeWidth: "1.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                    lineNumber: 51,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 51,
                                columnNumber: 33
                            }, this),
                            " 4.1k views"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "icon-small",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                width: "16",
                                height: "16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 3h18v6H3zM7 9v12h10V9",
                                    stroke: "#cfedf1",
                                    strokeWidth: "1.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                    lineNumber: 52,
                                    columnNumber: 116
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 52,
                                columnNumber: 33
                            }, this),
                            " 620 sold"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "save-icon interactive ".concat(saved ? 'active' : ''),
                        "aria-pressed": saved,
                        onClick: toggleSave,
                        title: "Save to wishlist",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__["HeartOutlined"], {
                            style: {
                                color: saved ? '#071018' : "var(--muted)",
                                fontSize: 18
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "primary",
                        className: "btn btn-primary interactive",
                        onClick: handleBuy,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ShoppingCartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartOutlined$3e$__["ShoppingCartOutlined"], {}, void 0, false, {
                            fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                            lineNumber: 65,
                            columnNumber: 99
                        }, void 0),
                        children: "Buy Now"
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginTop: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "qty",
                        "aria-label": "Quantity selector",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQty((q)=>Math.max(1, q - 1)),
                                children: "−"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    minWidth: 28,
                                    textAlign: 'center'
                                },
                                children: qty
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQty((q)=>{
                                        var _product_maxAvailable;
                                        return Math.min((_product_maxAvailable = product.maxAvailable) !== null && _product_maxAvailable !== void 0 ? _product_maxAvailable : 10, q + 1);
                                    }),
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'var(--muted)',
                            fontSize: 13
                        },
                        children: [
                            "Max available: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: 'var(--text)'
                                },
                                children: (_product_maxAvailable = product.maxAvailable) !== null && _product_maxAvailable !== void 0 ? _product_maxAvailable : 3
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                                lineNumber: 77,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shipping",
                children: [
                    "Ships from: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "China Warehouse"
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 81,
                        columnNumber: 23
                    }, this),
                    " • Estimated delivery: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "3–7 business days"
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 81,
                        columnNumber: 78
                    }, this),
                    ". For bespoke packaging or insurance, contact us before ordering."
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "consult-note",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21 15v4a1 1 0 01-1 1H6l-5 3V6a1 1 0 011-1h2",
                            stroke: "#9aa6b2",
                            strokeWidth: "1.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                            lineNumber: 86,
                            columnNumber: 71
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Worldwide shipping • Certificate of authenticity included • Bespoke packaging and framing available on request."
                    }, void 0, false, {
                        fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "each-note",
                children: "Each Kitsune begins as an original sculpture, is cast with care, then finished by hand — layered paints, selective highlights and a protective varnish. Minor brush marks and tonal shifts are the proof of a human hand, and they carry the story of the studio."
            }, void 0, false, {
                fileName: "[project]/app/components/product/PurchaseCardClient.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PurchaseCardClient, "GROFTFTbGlqW6B3A2wnZyN7LLKQ=");
_c = PurchaseCardClient;
var _c;
__turbopack_context__.k.register(_c, "PurchaseCardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/product/ProductTabsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/product/[id]/components/ProductTabsClient.tsx
__turbopack_context__.s([
    "default",
    ()=>ProductTabsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tabs/index.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$rate$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rate$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/rate/index.js [app-client] (ecmascript) <export default as Rate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/product.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ProductTabsClient(param) {
    let { product } = param;
    var _reviewList_length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
        className: "productTabs",
        defaultActiveKey: "details",
        items: [
            {
                key: 'details',
                label: 'Details & Gallery',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginTop: 0
                            },
                            children: "A story in every brushstroke"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted-note",
                            children: product.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vertical-gallery",
                            style: {
                                marginTop: 14
                            },
                            children: (product.product_image.image_list || []).slice(0, 4).map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vg-img",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                        lineNumber: 20,
                                        columnNumber: 51
                                    }, void 0)
                                }, src, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true)
            },
            {
                key: 'specs',
                label: 'Specifications',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spec-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spec",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Artist"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 31,
                                    columnNumber: 35
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--text)',
                                        marginTop: 6
                                    },
                                    children: product.artist
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 31,
                                    columnNumber: 58
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spec",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Edition"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 32,
                                    columnNumber: 35
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--text)',
                                        marginTop: 6
                                    },
                                    children: product.edition
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 32,
                                    columnNumber: 59
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spec",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Material"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 33,
                                    columnNumber: 35
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--text)',
                                        marginTop: 6
                                    },
                                    children: product.material
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 33,
                                    columnNumber: 60
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spec",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Size"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 34,
                                    columnNumber: 35
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--text)',
                                        marginTop: 6
                                    },
                                    children: product.size
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 34,
                                    columnNumber: 56
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spec",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 35,
                                    columnNumber: 35
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--text)',
                                        marginTop: 6
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusList"][product.status]
                                }, void 0, false, {
                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                    lineNumber: 35,
                                    columnNumber: 58
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, void 0)
            },
            {
                key: 'reviews',
                label: "Reviews (".concat((_reviewList_length = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewList"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewList"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewList"].length) !== null && _reviewList_length !== void 0 ? _reviewList_length : 0, ")"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginBottom: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    fontSize: 18
                                },
                                children: "Collectors' voices"
                            }, void 0, false, {
                                fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                lineNumber: 44,
                                columnNumber: 46
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, void 0),
                        (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewList"] || []).map((r, i)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "review",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rating",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$rate$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rate$3e$__["Rate"], {
                                                    allowHalf: true,
                                                    disabled: true,
                                                    value: r.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 83
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                                lineNumber: 48,
                                                columnNumber: 39
                                            }, void 0),
                                            " • ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: r.author
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                                lineNumber: 48,
                                                columnNumber: 144
                                            }, void 0),
                                            " • ",
                                            r.when
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text",
                                        children: r.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, void 0);
                        })
                    ]
                }, void 0, true)
            },
            {
                key: 'returns',
                label: 'Returns & Care',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontWeight: 600
                            },
                            children: "Returns & Care"
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted-note",
                            children: "Because each piece is hand‑finished, subtle variations are part of the story and are not considered defects. If an item is damaged in transit, contact us within 7 days for repair or replacement."
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted-note",
                            children: "Care tips: avoid prolonged direct sunlight; dust gently with a soft brush; never use solvents or abrasive cleaners. For long‑term preservation, our studio can advise on custom framing and controlled display solutions."
                        }, void 0, false, {
                            fileName: "[project]/app/components/product/ProductTabsClient.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true)
            }
        ]
    }, void 0, false, {
        fileName: "[project]/app/components/product/ProductTabsClient.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ProductTabsClient;
var _c;
__turbopack_context__.k.register(_c, "ProductTabsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/product/FloatingConsult.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/product/[id]/components/FloatingConsult.tsx
__turbopack_context__.s([
    "default",
    ()=>FloatingConsult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FloatingConsult() {
    function handleClick() {
        const open = confirm('Chat with our studio specialist via WhatsApp?\n\n(OK: open chat • Cancel: copy support email)');
        if (open) {
            window.open('https://wa.me/1234567890', '_blank');
        } else {
            var _navigator_clipboard_writeText, _navigator_clipboard;
            (_navigator_clipboard = navigator.clipboard) === null || _navigator_clipboard === void 0 ? void 0 : (_navigator_clipboard_writeText = _navigator_clipboard.writeText('support@aletoys.example')) === null || _navigator_clipboard_writeText === void 0 ? void 0 : _navigator_clipboard_writeText.then(()=>alert('Support email copied: support@aletoys.example'));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "consult-floating interactive",
        onClick: handleClick,
        "aria-label": "Chat with our specialist",
        title: "Chat with our specialist",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ring r1",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/components/product/FloatingConsult.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ring r2",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/components/product/FloatingConsult.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ring r3",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/components/product/FloatingConsult.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15a2 2 0 01-2 2H8l-4 3V5a2 2 0 012-2h14a2 2 0 012 2z"
                }, void 0, false, {
                    fileName: "[project]/app/components/product/FloatingConsult.tsx",
                    lineNumber: 20,
                    columnNumber: 51
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/product/FloatingConsult.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/product/FloatingConsult.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = FloatingConsult;
var _c;
__turbopack_context__.k.register(_c, "FloatingConsult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_f3bf0fcf._.js.map