function l(e, n, a) {
    if (e == null) return null;
    if (typeof e == "string") return {name: "file_data", data: e};
    if (Array.isArray(e)) {
        const s = [];
        for (const t of e) t === null ? s.push(null) : s.push(l(t, n, a));
        return s
    } else e.is_file && (a == null ? e.data = n + "/file=" + e.name : e.data = "/proxy=" + a + "/file=" + e.name);
    return e
}

const r = e => {
    const n = new FileReader;
    return n.readAsDataURL(e), new Promise(a => {
        n.onloadend = () => {
            a(n.result)
        }
    })
};
export {r as b, l as n};
//# sourceMappingURL=ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js.map
