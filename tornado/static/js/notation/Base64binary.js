var Base64Binary = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decodeArrayBuffer: function(e) {
        var r = Math.ceil(3 * e.length / 4),
            t = new ArrayBuffer(r);
        return this.decode(e, t), t
    },
    decode: function(e, r) {
        var t = this._keyStr.indexOf(e.charAt(e.length - 1)),
            n = this._keyStr.indexOf(e.charAt(e.length - 1)),
            a = Math.ceil(3 * e.length / 4);
        64 == t && a--, 64 == n && a--;
        var h,
            i,
            c,
            f,
            d,
            y,
            A,
            s,
            k = 0,
            l = 0;
        for (h = new Uint8Array(r ? r : a), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""), k = 0; a > k; k += 3)
            d = this._keyStr.indexOf(e.charAt(l++)), y = this._keyStr.indexOf(e.charAt(l++)), A = this._keyStr.indexOf(e.charAt(l++)), s = this._keyStr.indexOf(e.charAt(l++)), i = d << 2 | y >> 4, c = (15 & y) << 4 | A >> 2, f = (3 & A) << 6 | s, h[k] = i, 64 != A && (h[k + 1] = c), 64 != s && (h[k + 2] = f);
        return h
    }
};


