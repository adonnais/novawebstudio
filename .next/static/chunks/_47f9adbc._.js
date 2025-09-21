(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/component/navbar/navbarUser.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavbarUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NavbarUser({ name, links }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavbarUser.useEffect": ()=>{
            const styleId = "animated-shadow-style";
            if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 15px #3B82F6; }
          50% { box-shadow: 0 0 15px #F0ABFC; }
          100% { box-shadow: 0 0 15px #3B82F6; }
        }
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
      `;
                document.head.appendChild(style);
            }
        }
    }["NavbarUser.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-4 left-4 right-4 z-50 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-3 px-6 rounded-full flex justify-between items-center shadow-lg",
                style: {
                    animation: "pulse-shadow 3s ease-in-out infinite"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icono.png",
                                alt: "Logo",
                                width: 36,
                                height: 36,
                                priority: true,
                                onError: ()=>setImageError(true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center text-sm text-gray-600",
                                children: "🌀"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg text-blue-600 dark:text-blue-400 font-bold",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden lg:flex gap-6",
                        children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "font-bold text-fuchsia-500 dark:text-fuchsia-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all",
                                    children: link.nombre
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden text-3xl text-blue-600 dark:text-blue-400 font-bold",
                        onClick: ()=>setIsOpen(true),
                        children: "☰"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-2xl p-6 animate-slide-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-blue-600 dark:text-blue-400 font-bold text-lg",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-xl text-gray-500 dark:text-gray-300 hover:text-red-500",
                                    onClick: ()=>setIsOpen(false),
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4",
                            children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-lg font-medium hover:text-blue-500 dark:hover:text-blue-300 transition",
                                        children: link.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/navbar/navbarUser.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(NavbarUser, "bRPq2wOVCF+s0jXcuc59Y1vK4G8=");
_c = NavbarUser;
var _c;
__turbopack_context__.k.register(_c, "NavbarUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/contenido.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"navbar\":{\"links\":[{\"nombre\":\"Inicio\",\"href\":\"/\"},{\"nombre\":\"Productos\",\"href\":\"productos\"},{\"nombre\":\"Contacto\",\"href\":\"contacto\"}]},\"empresa\":{\"nombre\":\"Nova Web Studio\",\"quienes_somos\":\"Somos una agencia dedicada al desarrollo web, diseño gráfico y posicionamiento SEO. Ayudamos a empresas y emprendedores a construir su presencia digital con soluciones modernas y efectivas.\",\"mision\":\"Empoderar a nuestros clientes con herramientas digitales innovadoras que potencien su crecimiento en línea.\",\"vision\":\"Ser líderes en soluciones web integrales en Latinoamérica, destacándonos por la calidad, creatividad e impacto de nuestros servicios.\"},\"definiciones\":{\"pagina_web\":\"Una página web es un documento digital accesible a través de un navegador, donde se presenta información, servicios o productos. Es la cara visible de una empresa en Internet.\",\"landing_page\":\"Una landing page es una página web diseñada específicamente para convertir visitantes en clientes, enfocada en una sola oferta o llamado a la acción.\",\"app_web\":\"Una app web es una aplicación accesible desde un navegador, que permite interacción compleja como registro de usuarios, gestión de datos, compras, entre otros.\",\"seo\":\"SEO (Search Engine Optimization) es el conjunto de estrategias para mejorar la visibilidad de un sitio web en motores de búsqueda como Google, aumentando así el tráfico orgánico.\"},\"servicios\":[{\"nombre\":\"Desarrollo Web\",\"descripcion\":\"Creamos sitios web personalizados, desde páginas informativas hasta tiendas en línea y aplicaciones web complejas. Utilizamos tecnologías modernas para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.\",\"icono\":\"web-development.svg\"},{\"nombre\":\"Diseño Gráfico\",\"descripcion\":\"Diseñamos identidades visuales únicas, logotipos, material publicitario y contenido para redes sociales. Nuestro enfoque es crear diseños que comuniquen efectivamente la esencia de tu marca.\",\"icono\":\"graphic-design.svg\"},{\"nombre\":\"Posicionamiento SEO\",\"descripcion\":\"Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda. Implementamos estrategias de SEO on-page y off-page para atraer tráfico orgánico de calidad.\",\"icono\":\"seo.svg\"},{\"nombre\":\"E-commerce\",\"descripcion\":\"Desarrollamos tiendas virtuales completas, integrando pasarelas de pago, gestión de inventarios y sistemas de envío. Nuestro objetivo es facilitar la venta en línea de manera efectiva y segura.\",\"icono\":\"ecommerce.svg\"},{\"nombre\":\"Gestión de Redes Sociales\",\"descripcion\":\"Ofrecemos servicios de gestión de redes sociales, incluyendo creación de contenido, diseño gráfico y campañas publicitarias. Ayudamos a construir una presencia sólida y atractiva en plataformas digitales.\",\"icono\":\"social-media.svg\"},{\"nombre\":\"Consultoría Digital\",\"descripcion\":\"Brindamos asesoría estratégica para mejorar tu presencia digital, desde la planificación de proyectos hasta la implementación de soluciones tecnológicas adaptadas a tus necesidades.\",\"icono\":\"consulting.svg\"},{\"nombre\":\"Mantenimiento Web\",\"descripcion\":\"Ofrecemos planes de mantenimiento para asegurar que tu sitio web esté siempre actualizado, seguro y funcionando correctamente. Incluye actualizaciones, copias de seguridad y soporte técnico.\",\"icono\":\"maintenance.svg\"},{\"nombre\":\"Landing Page Presencia Web\",\"descripcion\":\"Diseñamos landing pages efectivas para capturar leads y promocionar productos o servicios específicos. Nuestras páginas están optimizadas para conversiones y adaptadas a tus objetivos.\",\"icono\":\"landing-page.svg\"}],\"productos\":[{\"Clasificación\":\"E-commerce\",\"Nombre\":\"Tienda Virtual\",\"Descripción Funcional\":\"Ideal para vender productos en línea. Incluye catálogo, carrito, pagos con tarjeta o contra entrega.\",\"Cliente Ideal\":\"Emprendedores o negocios minoristas sin tienda física.\",\"Objetivo Principal\":\"Vender más y gestionar pedidos desde una interfaz simple.\",\"Requerimientos Técnicos\":\"Carrito de compras, pasarela de pago (PayU, MercadoPago), inventario, backend robusto.\",\"Precio Trimestral (COP)\":\"$800.000\",\"Precio Semestral (COP)\":\"$1.500.000\",\"Precio Anual (COP)\":\"$2.800.000\",\"Precio de Venta Único (COP)\":\"$5.500.000\"},{\"Clasificación\":\"Gestión de Redes Sociales\",\"Nombre\":\"Impulso en Redes - Básico\",\"Descripción Funcional\":\"Configuración del perfil de Instagram, diseño de 4 piezas gráficas y calendario editorial mensual.\",\"Cliente Ideal\":\"Negocios pequeños activos en redes sociales.\",\"Objetivo Principal\":\"Tener imagen coherente en Instagram o Facebook.\",\"Requerimientos Técnicos\":\"Diseño gráfico, calendario editorial, estrategia básica de contenido.\",\"Precio Trimestral (COP)\":\"$180.000\",\"Precio Semestral (COP)\":\"$340.000\",\"Precio Anual (COP)\":\"$650.000\",\"Precio de Venta Único (COP)\":\"$400.000\"},{\"Clasificación\":\"Gestión de Redes Sociales\",\"Nombre\":\"Impulso en Redes - Estándar\",\"Descripción Funcional\":\"Diseño de 8 piezas gráficas mensuales, textos sugeridos, asesoría para campañas de anuncios.\",\"Cliente Ideal\":\"Emprendedores que quieren vender o captar leads en RRSS.\",\"Objetivo Principal\":\"Conseguir más clientes o seguidores en redes.\",\"Requerimientos Técnicos\":\"Diseño + asesoría en campañas, redacción y cronograma mensual.\",\"Precio Trimestral (COP)\":\"$300.000\",\"Precio Semestral (COP)\":\"$570.000\",\"Precio Anual (COP)\":\"$1.000.000\",\"Precio de Venta Único (COP)\":\"$650.000\"},{\"Clasificación\":\"Gestión de Redes Sociales\",\"Nombre\":\"Impulso en Redes - Pro\",\"Descripción Funcional\":\"Incluye gestión de 1 campaña publicitaria y reporte mensual de resultados + diseño gráfico completo.\",\"Cliente Ideal\":\"Negocios que quieren publicidad pagada y presencia completa.\",\"Objetivo Principal\":\"Maximizar visibilidad y resultados de campañas digitales.\",\"Requerimientos Técnicos\":\"Gestión de campañas publicitarias, reporte de resultados, diseño y redacción profesional.\",\"Precio Trimestral (COP)\":\"$450.000\",\"Precio Semestral (COP)\":\"$850.000\",\"Precio Anual (COP)\":\"$1.600.000\",\"Precio de Venta Único (COP)\":\"$950.000\"},{\"Clasificación\":\"Landing Page Presencia Web\",\"Nombre\":\"Presencia Digital Pro - Básico\",\"Descripción Funcional\":\"Diseño de página única con formulario de contacto, logo básico, presencia online profesional en 48h.\",\"Cliente Ideal\":\"Emprendedores que no tienen página web aún.\",\"Objetivo Principal\":\"Tener presencia en internet de forma rápida y accesible.\",\"Requerimientos Técnicos\":\"Diseño visual, formulario de contacto, dominio y hosting básico.\",\"Precio Trimestral (COP)\":\"$300.000\",\"Precio Semestral (COP)\":\"$550.000\",\"Precio Anual (COP)\":\"$1.000.000\",\"Precio de Venta Único (COP)\":\"$850.000\"},{\"Clasificación\":\"Landing Page Presencia Web\",\"Nombre\":\"Presencia Digital Pro - Estándar\",\"Descripción Funcional\":\"Landing + banners para redes, optimización básica SEO, branding visual, asesoría inicial.\",\"Cliente Ideal\":\"Negocios en crecimiento que necesitan imagen sólida.\",\"Objetivo Principal\":\"Lanzar su marca con identidad y visibilidad.\",\"Requerimientos Técnicos\":\"Landing page, diseño gráfico, banners, SEO básico.\",\"Precio Trimestral (COP)\":\"$500.000\",\"Precio Semestral (COP)\":\"$950.000\",\"Precio Anual (COP)\":\"$1.700.000\",\"Precio de Venta Único (COP)\":\"$1.400.000\"},{\"Clasificación\":\"Landing Page Presencia Web\",\"Nombre\":\"Presencia Digital Pro - Pro\",\"Descripción Funcional\":\"Todo lo anterior + dominio personalizado, correo profesional y panel de estadísticas de visitas.\",\"Cliente Ideal\":\"Empresas formales que requieren imagen profesional completa.\",\"Objetivo Principal\":\"Consolidar su presencia online con todos los recursos necesarios.\",\"Requerimientos Técnicos\":\"Landing + correo corporativo, dominio personalizado, panel de estadísticas.\",\"Precio Trimestral (COP)\":\"$750.000\",\"Precio Semestral (COP)\":\"$1.400.000\",\"Precio Anual (COP)\":\"$2.600.000\",\"Precio de Venta Único (COP)\":\"$2.000.000\"},{\"Clasificación\":\"Desarrollo Web\",\"Nombre\":\"Administrador Residencial Web\",\"Descripción Funcional\":\"Sistema web para conjuntos residenciales que permite la reserva de zonas sociales, gestión de pagos mensuales, comunicación entre residentes y administración, y control general del conjunto (avisos, reclamos, servicios comunes).\",\"Cliente Ideal\":\"Conjuntos residenciales, edificios o urbanizaciones.\",\"Objetivo Principal\":\"Automatizar procesos de pago y reservas, mejorar comunicación y control del conjunto.\",\"Requerimientos Técnicos\":\"Frontend, backend (Laravel o Firebase), gestión de usuarios, base de datos, reservas, pagos en línea.\",\"Precio Trimestral (COP)\":\"$600.000\",\"Precio Semestral (COP)\":\"$1.100.000\",\"Precio Anual (COP)\":\"$2.000.000\",\"Precio de Venta Único (COP)\":\"$5.500.000\"},{\"Clasificación\":\"Desarrollo Web\",\"Nombre\":\"Portal Educativo\",\"Descripción Funcional\":\"Dirigido a escuelas o academias, permite administrar matrículas, asignaturas, estudiantes y calendario escolar.\",\"Cliente Ideal\":\"Instituciones educativas pequeñas o medianas.\",\"Objetivo Principal\":\"Digitalizar la gestión escolar y facilitar comunicación.\",\"Requerimientos Técnicos\":\"Gestión académica, roles (estudiante/profesor), base de datos estructurada, autenticación, hosting.\",\"Precio Trimestral (COP)\":\"$950.000\",\"Precio Semestral (COP)\":\"$1.700.000\",\"Precio Anual (COP)\":\"$3.200.000\",\"Precio de Venta Único (COP)\":\"$8.000.000\"},{\"Clasificación\":\"Desarrollo Web\",\"Nombre\":\"Reservas de Citas\",\"Descripción Funcional\":\"Profesionales pueden permitir a sus clientes agendar citas online, recibir recordatorios y manejar historial de atención.\",\"Cliente Ideal\":\"Médicos, psicólogos, asesores, entrenadores.\",\"Objetivo Principal\":\"Ahorrar tiempo con gestión automatizada de citas.\",\"Requerimientos Técnicos\":\"Agenda personalizable, notificaciones, integración con calendario, backend y panel de control.\",\"Precio Trimestral (COP)\":\"$500.000\",\"Precio Semestral (COP)\":\"$950.000\",\"Precio Anual (COP)\":\"$1.700.000\",\"Precio de Venta Único (COP)\":\"$3.500.000\"},{\"Clasificación\":\"Desarrollo Web\",\"Nombre\":\"Sistema de Reservas\",\"Descripción Funcional\":\"Permite a negocios como canchas o peluquerías gestionar reservas online, enviar confirmaciones y cobrar anticipadamente.\",\"Cliente Ideal\":\"Negocios locales que necesitan agendar clientes por hora/día.\",\"Objetivo Principal\":\"Optimizar reservas y reducir cancelaciones.\",\"Requerimientos Técnicos\":\"Frontend (Next.js), Backend (Firebase o Node), base de datos (Firestore), sistema de notificaciones y calendario.\",\"Precio Trimestral (COP)\":\"$550.000\",\"Precio Semestral (COP)\":\"$1.000.000\",\"Precio Anual (COP)\":\"$1.800.000\",\"Precio de Venta Único (COP)\":\"$4.500.000\"},{\"Clasificación\":\"Desarrollo Web\",\"Nombre\":\"Gestión de Personal\",\"Descripción Funcional\":\"Facilita a empresas el registro de entrada/salida del personal, asignación de tareas y seguimiento de productividad.\",\"Cliente Ideal\":\"Empresas medianas con equipos físicos o remotos.\",\"Objetivo Principal\":\"Control interno y eficiencia de operaciones.\",\"Requerimientos Técnicos\":\"Panel admin, gestión de usuarios, control de tiempo, backend (Laravel o Firebase), roles de acceso.\",\"Precio Trimestral (COP)\":\"$700.000\",\"Precio Semestral (COP)\":\"$1.300.000\",\"Precio Anual (COP)\":\"$2.400.000\",\"Precio de Venta Único (COP)\":\"$6.000.000\"}],\"sobreNosotros\":{\"titulo\":\"Sobre Nosotros\",\"subtitulo\":\"Innovamos tu presencia digital\",\"parrafos\":[\"En Nova Web Studio somos un equipo apasionado por el desarrollo web, el diseño gráfico y el posicionamiento SEO. Nacimos con la misión de llevar marcas al siguiente nivel mediante experiencias digitales modernas, funcionales y atractivas.\",\"Creemos que cada negocio tiene una historia única que debe brillar en internet. Por eso, trabajamos contigo desde la idea hasta la ejecución, construyendo sitios web que no solo se ven bien, sino que también venden y posicionan.\",\"Con cada línea de código, cada diseño y cada estrategia SEO, transformamos ideas en resultados visibles.\"],\"valores\":[\"🎯 Enfoque al cliente\",\"💡 Creatividad y tecnología\",\"📈 Resultados medibles\",\"🤝 Compromiso auténtico\",\"🚀 Innovación constante\"],\"cta\":{\"texto\":\"¿Quieres transformar tu presencia digital?\",\"boton\":\"Hablemos\"}},\"contacto\":{\"titulo\":\"Contáctanos\",\"subtitulo\":\"Estamos aquí para ayudarte\",\"descripcion\":\"Si tienes alguna pregunta, necesitas más información sobre nuestros servicios o quieres solicitar una cotización personalizada, no dudes en contactarnos. Nuestro equipo está listo para asistirte.\",\"formulario\":{\"nombre\":\"Nombre\",\"email\":\"Correo electrónico\",\"mensaje\":\"Mensaje\",\"enviar\":\"Enviar\"},\"informacion_adicional\":{\"telefono\":\"+123 456 7890\",\"email_contacto\":\"ajustar@email.com\"}},\"footer\":{\"descripcion\":\"Nova Web Studio es una agencia especializada en desarrollo web, diseño gráfico y posicionamiento SEO. Creamos soluciones digitales para que tu negocio crezca en línea.\",\"enlaces_rapidos\":[{\"nombre\":\"Inicio\",\"url\":\"/\"},{\"nombre\":\"Productos\",\"url\":\"/Productos\"},{\"nombre\":\"Portafolio\",\"url\":\"/portafolio\"},{\"nombre\":\"Contáctanos\",\"url\":\"/Contacto\"}],\"redes\":{\"facebook\":\"https://facebook.com/novawebstudio\",\"instagram\":\"https://instagram.com/novawebstudio\",\"linkedin\":\"https://linkedin.com/company/novawebstudio\"},\"copyright\":\"© 2025 Nova Web Studio. Todos los derechos reservados.\"}}"));}}),
"[project]/src/app/component/navbar/NavbarAdmin.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavbarAdmin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$contenido$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/contenido.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NavbarAdmin() {
    _s();
    const [tokenExists, setTokenExists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavbarAdmin.useEffect": ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("token");
            if (token) setTokenExists(true);
        }
    }["NavbarAdmin.useEffect"], []);
    if (!tokenExists) return null;
    // Secciones que son arreglos en el JSON (ej. productos, servicios...)
    const sections = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$contenido$2e$json__$28$json$29$__["default"]).filter((key)=>Array.isArray(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$contenido$2e$json__$28$json$29$__["default"][key])).map((key)=>({
            nombre: key.charAt(0).toUpperCase() + key.slice(1),
            href: `/dashboard#${key}`
        }));
    const handleLogout = ()=>{
        router.push("/logout");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen justify-between bg-white dark:bg-gray-900 p-4 border-r dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4 text-blue-600 dark:text-blue-400",
                        children: "Panel Admin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navbar/NavbarAdmin.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "space-y-2",
                        children: sections.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400",
                                children: link.nombre
                            }, i, false, {
                                fileName: "[project]/src/app/component/navbar/NavbarAdmin.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/navbar/NavbarAdmin.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/navbar/NavbarAdmin.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLogout,
                className: "mt-4 text-sm text-red-600 dark:text-red-400 hover:underline",
                children: "Cerrar sesión"
            }, void 0, false, {
                fileName: "[project]/src/app/component/navbar/NavbarAdmin.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/navbar/NavbarAdmin.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(NavbarAdmin, "MtSXEIpus/bV8GjUmlo8/V8VlLA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NavbarAdmin;
var _c;
__turbopack_context__.k.register(_c, "NavbarAdmin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/component/navbar/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navbar$2f$navbarUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/navbar/navbarUser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navbar$2f$NavbarAdmin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/navbar/NavbarAdmin.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showAdminNavbar, setShowAdminNavbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // Detecta si en la ruta está la palabra "dashboard"
            setShowAdminNavbar(pathname.includes("dashboard"));
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    return showAdminNavbar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navbar$2f$NavbarAdmin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/component/navbar/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 28
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$navbar$2f$navbarUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/component/navbar/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 46
    }, this);
}
_s(Navbar, "zCQaQD+v0rNLbrw5SgKN1iiQN7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_47f9adbc._.js.map