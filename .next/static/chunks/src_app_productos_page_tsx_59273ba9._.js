(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/productos/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Producto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$contenido$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/contenido.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const productos = __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$contenido$2e$json__$28$json$29$__["default"].productos.map((p)=>({
        Clasificación: p.Clasificación,
        Nombre: p.Nombre,
        DescripciónFuncional: p["Descripción Funcional"],
        ClienteIdeal: p["Cliente Ideal"],
        ObjetivoPrincipal: p["Objetivo Principal"],
        RequerimientosTécnicos: p["Requerimientos Técnicos"],
        PrecioTrimestral: p["Precio Trimestral (COP)"],
        PrecioSemestral: p["Precio Semestral (COP)"],
        PrecioAnual: p["Precio Anual (COP)"],
        PrecioVentaUnico: p["Precio de Venta Único (COP)"]
    }));
function Producto() {
    _s();
    const [filtro, setFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todos");
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productoSeleccionado, setProductoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Producto.useEffect": ()=>{
            const styleId = "pulse-shadow-style";
            if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 12px #3B82F6; }
          50% { box-shadow: 0 0 12px #F0ABFC; }
          100% { box-shadow: 0 0 12px #3B82F6; }
        }
        .hover\\:animate-pulse-shadow:hover {
          animation: pulse-shadow 2s infinite;
        }
      `;
                document.head.appendChild(style);
            }
        }
    }["Producto.useEffect"], []);
    const clasificaciones = [
        "Todos",
        ...Array.from(new Set(productos.map((p)=>p.Clasificación)))
    ];
    const filtrados = filtro === "Todos" ? productos : productos.filter((p)=>p.Clasificación === filtro);
    const abrirModal = (producto)=>{
        setProductoSeleccionado(producto);
        setModalOpen(true);
    };
    const cerrarModal = ()=>{
        setModalOpen(false);
        setProductoSeleccionado(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen",
        id: "productos",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400 font-poppins",
                children: "Nuestros Productos"
            }, void 0, false, {
                fileName: "[project]/src/app/productos/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-3 mb-12",
                children: clasificaciones.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFiltro(c),
                        className: `px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200
              ${filtro === c ? "bg-blue-500 text-white border-blue-500" : "bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-300 border-blue-300 hover:bg-fuchsia-500 hover:text-white"}`,
                        children: c
                    }, i, false, {
                        fileName: "[project]/src/app/productos/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/productos/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                children: filtrados.map((p, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>abrirModal(p),
                        className: "bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-blue-100 dark:border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer hover:animate-pulse-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 font-poppins",
                                children: p.Nombre
                            }, void 0, false, {
                                fileName: "[project]/src/app/productos/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 dark:text-gray-300 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clasificación:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/productos/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.Clasificación
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/productos/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 mb-2",
                                children: p.DescripciónFuncional
                            }, void 0, false, {
                                fileName: "[project]/src/app/productos/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Cliente Ideal:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/productos/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.ClienteIdeal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/productos/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Objetivo:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/productos/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.ObjetivoPrincipal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/productos/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/productos/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/productos/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            modalOpen && productoSeleccionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex justify-center items-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-xl w-full p-6 rounded-2xl shadow-2xl relative animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-4 right-4 text-xl text-gray-600 dark:text-gray-300 hover:text-red-500",
                            onClick: cerrarModal,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4",
                            children: productoSeleccionado.Nombre
                        }, void 0, false, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Clasificación:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 41
                                }, this),
                                " ",
                                productoSeleccionado.Clasificación
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2",
                            children: productoSeleccionado.DescripciónFuncional
                        }, void 0, false, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Cliente Ideal:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 41
                                }, this),
                                " ",
                                productoSeleccionado.ClienteIdeal
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Objetivo:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 41
                                }, this),
                                " ",
                                productoSeleccionado.ObjetivoPrincipal
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Requisitos Técnicos:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 41
                                }, this),
                                " ",
                                productoSeleccionado.RequerimientosTécnicos
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-sm font-mono space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Trimestral:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/productos/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        productoSeleccionado.PrecioTrimestral
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Semestral:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/productos/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        productoSeleccionado.PrecioSemestral
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Anual:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/productos/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        productoSeleccionado.PrecioAnual
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Venta Única:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/productos/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        productoSeleccionado.PrecioVentaUnico
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/productos/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/productos/page.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/productos/page.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/productos/page.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/productos/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(Producto, "0XSdOTiQFZ7h987Vy88jZDPKVQo=");
_c = Producto;
var _c;
__turbopack_context__.k.register(_c, "Producto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_productos_page_tsx_59273ba9._.js.map