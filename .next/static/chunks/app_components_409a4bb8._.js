(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Banner.tsx
__turbopack_context__.s([
    "default",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$carousel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/carousel/index.js [app-client] (ecmascript) <export default as Carousel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/image/index.js [app-client] (ecmascript) <export default as Image>");
'use client';
;
;
const { Title, Paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const slides = [
    {
        id: 's1',
        title: 'Limited Edition Sculptures',
        subtitle: 'Hand-painted, numbered, and certified — a collector’s dream.',
        img: '../images/banner1.jpg',
        cta: {
            label: 'Shop Now',
            href: '/shop'
        }
    },
    {
        id: 's2',
        title: 'Artisan Craftsmanship',
        subtitle: 'Each piece is inspected and finished by master painters.',
        img: '../images/banner2.jpg',
        cta: {
            label: 'Shop Now',
            href: '/shop'
        }
    },
    {
        id: 's3',
        title: 'Exclusive Drops',
        subtitle: 'Subscribe for notifications about upcoming limited releases.',
        img: '../images/banner3.jpg',
        cta: {
            label: 'Shop Now',
            href: '/shop'
        }
    }
];
const overlayStyle = {
    position: 'absolute',
    left: '8%',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    maxWidth: 720,
    zIndex: 2
};
function Banner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Hero banner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$carousel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__["Carousel"], {
            autoplay: true,
            autoplaySpeed: 6000,
            fade: true,
            speed: 1500,
            easing: 'linear',
            dots: true,
            adaptiveHeight: false,
            children: slides.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "banner-slide",
                    style: {
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            src: s.img,
                            alt: s.title,
                            preview: false,
                            style: {
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Banner.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            style: {
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)',
                                zIndex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Banner.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "banner-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: s.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Banner.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: s.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Banner.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                s.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "primary",
                                    size: "large",
                                    onClick: ()=>{
                                        var _s_cta;
                                        if ((_s_cta = s.cta) === null || _s_cta === void 0 ? void 0 : _s_cta.href) {
                                            // 保持为单页内导航或外部跳转按需替换
                                            window.location.href = s.cta.href;
                                        }
                                    },
                                    children: s.cta.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Banner.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Banner.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, s.id, true, {
                    fileName: "[project]/app/components/Banner.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/Banner.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Banner.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ReviewsCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REVIEWS",
    ()=>REVIEWS
]);
'use client';
const REVIEWS = [
    {
        text: "Absolutely stunning craftsmanship. The detail is beyond anything I've seen. A true centerpiece!",
        author: "Alex Johnson"
    },
    {
        text: "The quality of materials and the artistic vision are exceptional. Worth every penny.",
        author: "Sarah Chen"
    },
    {
        text: "ALeToys delivered on their promise of premium. This statue is a work of art.",
        author: "Michael Rodriguez"
    },
    {
        text: "Impressed by the limited edition aspect and the unique designs. Highly recommend!",
        author: "Emily Carter"
    },
    {
        text: "Fast shipping and excellent packaging. The statue arrived in perfect condition.",
        author: "David Lee"
    },
    {
        text: "The level of detail and the hand-painted finish are incredible. A treasure for any collector.",
        author: "Jessica Kim"
    },
    {
        text: "This is my third purchase, and I'm consistently blown away by the artistry and quality.",
        author: "Christopher Davis"
    },
    {
        text: "The 'wow' factor is undeniable. The statues truly elevate my collection.",
        author: "Olivia Brown"
    },
    {
        text: "A must-have for any serious collector of high-end statues.",
        author: "William Taylor"
    },
    {
        text: "Exquisite. The balance of design and execution is perfect. Thank you, ALeToys!",
        author: "Sophia Wilson"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ReviewsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReviewsCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReviewsCarousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ReviewsClient() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsClient.useEffect": ()=>{
            startAuto();
            return ({
                "ReviewsClient.useEffect": ()=>stopAuto()
            })["ReviewsClient.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ReviewsClient.useEffect"], []);
    const startAuto = ()=>{
        stopAuto();
        intervalRef.current = window.setInterval(()=>{
            setCurrent((i)=>(i + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReviewsCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"].length);
        }, 2000);
    };
    const stopAuto = ()=>{
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    // const prev = () => setCurrent(i => (i - 1 + REVIEWS.length) % REVIEWS.length);
    // const next = () => setCurrent(i => (i + 1) % REVIEWS.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "reviews-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reviews-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "reviews-title",
                        children: "Customer Spotlight"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReviewsClient.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "reviews-subtitle",
                        children: "Hear from our valued collectors."
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReviewsClient.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReviewsClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reviews-carousel",
                ref: carouselRef,
                onMouseEnter: stopAuto,
                onMouseLeave: startAuto,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReviewsCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEWS"].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "review-item ".concat(i === current ? 'active' : ''),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-quote-left"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReviewsClient.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: r.text
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReviewsClient.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reviewer",
                                children: [
                                    "- ",
                                    r.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ReviewsClient.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/components/ReviewsClient.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ReviewsClient.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ReviewsClient.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ReviewsClient, "F/eLPLP9cP0lTiMhrYzOgERdKx4=");
_c = ReviewsClient;
var _c;
__turbopack_context__.k.register(_c, "ReviewsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ConsultationIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsultationIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript) <export default as MessageOutlined>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConsultationIcon() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsultationIcon.useEffect": ()=>{
            function onScroll() {
                setVisible(window.scrollY > 200);
            }
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ConsultationIcon.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ConsultationIcon.useEffect"];
        }
    }["ConsultationIcon.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            right: 28,
            bottom: 28,
            zIndex: 1200
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
            type: "primary",
            shape: "circle",
            size: "large",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {}, void 0, false, {
                fileName: "[project]/app/components/ConsultationIcon.tsx",
                lineNumber: 24,
                columnNumber: 15
            }, void 0),
            className: "consultation ".concat(visible ? "show" : ""),
            "aria-label": "Consultation",
            onClick: ()=>{
                // 这里可以触发打开聊天窗或滚动至联系表单
                const el = document.querySelector("#contact");
                if (el && el instanceof HTMLElement) el.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, void 0, false, {
            fileName: "[project]/app/components/ConsultationIcon.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ConsultationIcon.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ConsultationIcon, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = ConsultationIcon;
var _c;
__turbopack_context__.k.register(_c, "ConsultationIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_409a4bb8._.js.map