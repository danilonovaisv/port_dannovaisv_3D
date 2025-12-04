module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/config/brand.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND_ASSETS",
    ()=>BRAND_ASSETS
]);
const BRAND_ASSETS = {
    logo: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/logo.svg",
    favicons: {
        color: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/faivcon.svg",
        white: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/faivcon-02.svg"
    }
};
}),
"[project]/src/config/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAIN_ROUTES",
    ()=>MAIN_ROUTES
]);
const MAIN_ROUTES = [
    {
        id: "home",
        path: "/",
        label: "home",
        anchor: "#hero"
    },
    {
        id: "sobre",
        path: "/sobre",
        label: "sobre",
        anchor: "#about"
    },
    {
        id: "portfolio",
        path: "/portfolio",
        label: "portfólio showcase",
        anchor: "#portfolio-showcase"
    },
    {
        id: "contato",
        path: "/",
        label: "contato",
        anchor: "#contact"
    }
];
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/navigation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Header = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleAnchorClick = (anchor)=>(e)=>{
            if (!anchor) return;
            if (pathname !== "/") return;
            e.preventDefault();
            const el = document.querySelector(anchor);
            if (el) el.scrollIntoView({
                behavior: "smooth"
            });
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 border-b border-zinc-200/60 bg-[#F4F5F7]/80 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND_ASSETS"].logo,
                        alt: "Danilo Novais",
                        width: 120,
                        height: 32,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-7 text-xs font-medium text-zinc-700 sm:flex",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAIN_ROUTES"].map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: route.path + (route.anchor && pathname !== "/" ? route.anchor : ""),
                            onClick: handleAnchorClick(route.anchor),
                            className: "relative uppercase tracking-[0.2em] transition hover:text-[#0057FF]",
                            children: route.label
                        }, route.id, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/config/homepageContent.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOMEPAGE_CONTENT",
    ()=>HOMEPAGE_CONTENT
]);
const HOMEPAGE_CONTENT = {
    hero: {
        tag: "[BRAND AWARENESS]",
        title: "Design, não é só estética.",
        subtitle: "[É intenção, é estratégia, é experiência.]",
        ctaLabel: "get to know me better →",
        ctaTargetId: "about"
    },
    about: {
        videoUrl: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-videos/VIDEO-APRESENTACAO-PORTFOLIO.mp4"
    },
    portfolioShowcase: {
        title: "portfólio showcase",
        categories: [
            {
                id: "brand-campaigns",
                label: "Brand & Campaigns",
                thumbnailUrl: "https://loandbehold.studio/app/uploads/2025/04/Magic-1.png"
            },
            {
                id: "videos-motions",
                label: "Videos & Motions",
                thumbnailUrl: "https://loandbehold.studio/app/uploads/2025/04/Epic.png"
            },
            {
                id: "websites-webcampaigns-tech",
                label: "Web Campaigns, Websites & Tech",
                thumbnailUrl: "https://loandbehold.studio/app/uploads/2025/04/Unilever.png"
            }
        ],
        finalCtaLabel: "VEJA MAIS →",
        finalCtaHref: "/portfolio"
    },
    projectCards: [
        {
            slug: "magic-radio-branding",
            title: "Bringing the Magic Back to Radio",
            category: "branding",
            client: "Magic",
            year: 2023,
            imageUrl: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/Brand-Identity%20copy.webp"
        },
        {
            slug: "branding-project-01",
            title: "Shaping a Bold New Brand",
            category: "branding",
            client: "Client Name",
            year: 2022,
            imageUrl: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/Branding-Project.webp"
        },
        {
            slug: "key-visual-campaign",
            title: "Key Visual for Seasonal Campaign",
            category: "campaign",
            client: "Client Name",
            year: 2021,
            imageUrl: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/Key-Visual.webp"
        },
        {
            slug: "webdesigner-motion",
            title: "Web Experience in Motion",
            category: "web/motion",
            client: "Client Name",
            year: 2023,
            imageUrl: "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/webdesigner-2%202.gif"
        }
    ],
    clients: {
        title: "Marcas com quem colaborei",
        logos: [
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client1.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client2.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client3.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client4.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client5.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client6.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client7.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client8.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client9.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client10.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client11.svg",
            "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client12.svg"
        ]
    },
    contact: {
        title: "Entre em Contato",
        subtitle: "Tem uma pergunta ou quer trabalhar junto?",
        form: {
            action: "https://formsubmit.co/danilo@portfoliodanilo.com",
            buttonLabel: "Enviar Mensagem"
        },
        links: {
            phone: "tel:+5511983966838",
            emailPrimary: "mailto:dannovaisv@gmail.com",
            emailSecondary: "mailto:danilo@portfoliodanilo.com",
            instagram: "https://instagram.com/danilo_novais",
            facebook: "https://facebook.com/danilonovaisvilela",
            linkedin: "https://linkedin.com/in/danilonovais",
            portfolio: "https://portfoliodanilo.com",
            twitter: "https://twitter.com/danilo_novais"
        }
    },
    footer: {
        copyright: "© 2025 Danilo Novais Vilela — Todos os direitos reservados.",
        links: [
            {
                label: "Home",
                href: "#hero"
            },
            {
                label: "Sobre",
                href: "#about"
            },
            {
                label: "Portfolio",
                href: "#portfolio-showcase"
            },
            {
                label: "Contact",
                href: "#contact"
            }
        ]
    }
};
}),
"[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$homepageContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/homepageContent.ts [app-ssr] (ecmascript)");
"use client";
;
;
const Footer = ()=>{
    const { footer } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$homepageContent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOMEPAGE_CONTENT"];
    const handleLinkClick = (href)=>(e)=>{
            if (!href.startsWith("#")) return;
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({
                behavior: "smooth"
            });
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-zinc-200/60 bg-[#F4F5F7] py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-[11px] text-zinc-500 sm:flex-row sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: footer.copyright
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-wrap items-center gap-4",
                    children: footer.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: handleLinkClick(link.href),
                            className: "uppercase tracking-[0.25em] transition hover:text-[#0057FF]",
                            children: link.label
                        }, link.label, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e8bd21f._.js.map