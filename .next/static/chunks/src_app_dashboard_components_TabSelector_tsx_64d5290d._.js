(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/dashboard/components/TabSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// dashboard/components/TabSelector.tsx
__turbopack_context__.s({
    "default": (()=>TabSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TabSelector({ tab, setTab, contenido }) {
    console.log("Contenido en TabSelector:", contenido);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-4 mb-6",
        children: Object.keys(contenido).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTab(key),
                className: `px-4 py-2 rounded-lg border font-medium transition-all ${tab === key ? "bg-blue-600 text-white" : "bg-white border-blue-300 text-blue-600 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:border-blue-400 dark:hover:bg-gray-700"}`,
                children: key.charAt(0).toUpperCase() + key.slice(1)
            }, key, false, {
                fileName: "[project]/src/app/dashboard/components/TabSelector.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/components/TabSelector.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TabSelector;
var _c;
__turbopack_context__.k.register(_c, "TabSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/components/TabSelector.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/components/TabSelector.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_dashboard_components_TabSelector_tsx_64d5290d._.js.map