module.exports = [
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[turbopack]_browser_dev_hmr-client_hmr-client_ts_818f0fdf._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-ssr] (ecmascript)");
    });
});
}),
"[project]/app/components/shop/shopLogic.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_@supabase_node-fetch_lib_index_eb26751e.js",
  "server/chunks/ssr/node_modules_01e64638._.js",
  "server/chunks/ssr/[root-of-the-server]__206524a7._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/app/components/shop/shopLogic.ts [app-ssr] (ecmascript)");
    });
});
}),
];