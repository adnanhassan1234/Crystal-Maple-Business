/*** Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net */
(function() {
    var t, i;
    t = this.jQuery || window.jQuery, i = t(window), t.fn.stick_in_parent = function(o) {
        var s, e, n, r, c, l, a, f, p, u, d;
        for (null == o && (o = {}), d = o.sticky_class, c = o.inner_scrolling, u = o.recalc_every, p = o.parent, f = o.offset_top, a = o.spacer, e = o.bottoming, null == f && (f = 0), null == p && (p = void 0), null == c && (c = !0), null == d && (d = "is_stuck"), s = t(document), null == e && (e = !0), n = function(o, n, r, l, h, g, k, m) {
                var v, y, _, b, w, x, z, C, I, A, j, M;
                if (!o.data("sticky_kit")) {
                    if (o.data("sticky_kit", !0), w = s.height(), z = o.parent(), null != p && (z = z.closest(p)), !z.length) throw "failed to find stick parent";
                    if (v = _ = !1, (j = null != a ? a && o.closest(a) : t("<div />")) && j.css("position", o.css("position")), (C = function() {
                            var t, i, e;
                            if (!m && (w = s.height(), t = parseInt(z.css("border-top-width"), 10), i = parseInt(z.css("padding-top"), 10), n = parseInt(z.css("padding-bottom"), 10), r = z.offset().top + t + i, l = z.height(), _ && (v = _ = !1, null == a && (o.insertAfter(j), j.detach()), o.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(d), e = !0), h = o.offset().top - (parseInt(o.css("margin-top"), 10) || 0) - f, g = o.outerHeight(!0), k = o.css("float"), j && j.css({
                                    width: o.outerWidth(!0),
                                    height: g,
                                    display: o.css("display"),
                                    "vertical-align": o.css("vertical-align"),
                                    float: k,
                                    "z-index": "-1"
                                }), e)) return M()
                        })(), g !== l) return b = void 0, x = f, A = u, M = function() {
                        var t, p, y, I;
                        if (!m && (y = !1, null != A && (0 >= --A && (A = u, C(), y = !0)), y || s.height() === w || C(), y = i.scrollTop(), null != b && (p = y - b), b = y, _ ? (e && (I = y + g + x > l + r, v && !I && (v = !1, o.css({
                                position: "fixed",
                                bottom: "",
                                top: x
                            }).trigger("sticky_kit:unbottom"))), y < h && (_ = !1, x = f, null == a && ("left" !== k && "right" !== k || o.insertAfter(j), j.detach()), t = {
                                position: "",
                                width: "",
                                top: ""
                            }, o.css(t).removeClass(d).trigger("sticky_kit:unstick")), c && (t = i.height(), g + f > t && !v && (x -= p, x = Math.max(t - g, x), x = Math.min(f, x), _ && o.css({
                                top: x + "px"
                            })))) : y > h && (_ = !0, (t = {
                                position: "fixed",
                                top: x
                            }).width = "border-box" === o.css("box-sizing") ? o.outerWidth() + "px" : o.width() + "px", o.css(t).addClass(d), null == a && (o.after(j), "left" !== k && "right" !== k || j.append(o)), o.trigger("sticky_kit:stick")), _ && e && (null == I && (I = y + g + x > l + r), !v && I))) return v = !0, "static" === z.css("position") && z.css({
                            position: "relative"
                        }), o.css({
                            position: "absolute",
                            bottom: n,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }, I = function() {
                        return C(), M()
                    }, y = function() {
                        if (m = !0, i.off("touchmove", M), i.off("scroll", M), i.off("resize", I), t(document.body).off("sticky_kit:recalc", I), o.off("sticky_kit:detach", y), o.removeData("sticky_kit"), o.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), z.position("position", ""), _) return null == a && ("left" !== k && "right" !== k || o.insertAfter(j), j.remove()), o.removeClass(d)
                    }, i.on("touchmove", M), i.on("scroll", M), i.on("resize", I), t(document.body).on("sticky_kit:recalc", I), o.on("sticky_kit:detach", y), setTimeout(M, 0)
                }
            }, r = 0, l = this.length; r < l; r++) o = this[r], n(t(o));
        return this
    }
}).call(this);