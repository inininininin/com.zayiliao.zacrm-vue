if(! function(n, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
			if(!n.document) throw new Error("jQuery requires a window with a document");
			return t(n)
		} : t(n)
	}("undefined" != typeof window ? window : this, function(n, t) {
		function ii(n) {
			var t = !!n && "length" in n && n.length,
				r = i.type(n);
			return "function" === r || i.isWindow(n) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
		}

		function ri(n, t, r) {
			if(i.isFunction(t)) return i.grep(n, function(n, i) {
				return !!t.call(n, i, n) !== r
			});
			if(t.nodeType) return i.grep(n, function(n) {
				return n === t !== r
			});
			if("string" == typeof t) {
				if(pe.test(t)) return i.filter(t, n, r);
				t = i.filter(t, n)
			}
			return i.grep(n, function(n) {
				return i.inArray(n, t) > -1 !== r
			})
		}

		function kr(n, t) {
			do n = n[t]; while (n && 1 !== n.nodeType);
			return n
		}

		function we(n) {
			var t = {};
			return i.each(n.match(s) || [], function(n, i) {
				t[i] = !0
			}), t
		}

		function dr() {
			u.addEventListener ? (u.removeEventListener("DOMContentLoaded", v), n.removeEventListener("load", v)) : (u.detachEvent("onreadystatechange", v), n.detachEvent("onload", v))
		}

		function v() {
			(u.addEventListener || "load" === n.event.type || "complete" === u.readyState) && (dr(), i.ready())
		}

		function nu(n, t, r) {
			if(void 0 === r && 1 === n.nodeType) {
				var u = "data-" + t.replace(ke, "-$1").toLowerCase();
				if(r = n.getAttribute(u), "string" == typeof r) {
					try {
						r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : be.test(r) ? i.parseJSON(r) : r
					} catch(f) {}
					i.data(n, t, r)
				} else r = void 0
			}
			return r
		}

		function fi(n) {
			for(var t in n)
				if(("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
			return !0
		}

		function tu(n, t, r, u) {
			if(ot(n)) {
				var s, e, h = i.expando,
					l = n.nodeType,
					o = l ? i.cache : n,
					f = l ? n[h] : n[h] && h;
				if(f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t) return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
					toJSON: i.noop
				}), "object" != typeof t && "function" != typeof t || (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), void 0 !== r && (e[i.camelCase(t)] = r), "string" == typeof t ? (s = e[t], null == s && (s = e[i.camelCase(t)])) : s = e, s
			}
		}

		function iu(n, t, u) {
			if(ot(n)) {
				var o, s, h = n.nodeType,
					f = h ? i.cache : n,
					e = h ? n[i.expando] : i.expando;
				if(f[e]) {
					if(t && (o = u ? f[e] : f[e].data)) {
						for(i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = (t in o) ? [t] : t.split(" ")), s = t.length; s--;) delete o[t[s]];
						if(u ? !fi(o) : !i.isEmptyObject(o)) return
					}(u || (delete f[e].data, fi(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = void 0)
				}
			}
		}

		function ru(n, t, r, u) {
			var h, e = 1,
				l = 20,
				c = u ? function() {
					return u.cur()
				} : function() {
					return i.css(n, t, "")
				},
				s = c(),
				o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
				f = (i.cssNumber[t] || "px" !== o && +s) && oi.exec(i.css(n, t));
			if(f && f[3] !== o) {
				o = o || f[3];
				r = r || [];
				f = +s || 1;
				do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
			}
			return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
		}

		function ou(n) {
			var i = eu.split("|"),
				t = n.createDocumentFragment();
			if(t.createElement)
				while(i.length) t.createElement(i.pop());
			return t
		}

		function f(n, t) {
			var e, u, o = 0,
				r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : void 0;
			if(!r)
				for(r = [], e = n.childNodes || n; null != (u = e[o]); o++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
			return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
		}

		function ci(n, t) {
			for(var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
		}

		function de(n) {
			si.test(n.type) && (n.defaultChecked = n.checked)
		}

		function hu(n, t, u, e, s) {
			for(var l, h, k, c, w, b, v, d = n.length, y = ou(t), a = [], p = 0; d > p; p++)
				if(h = n[p], h || 0 === h)
					if("object" === i.type(h)) i.merge(a, h.nodeType ? [h] : h);
					else if(su.test(h)) {
				for(c = c || y.appendChild(t.createElement("div")), w = (uu.exec(h) || ["", ""])[1].toLowerCase(), v = o[w] || o._default, c.innerHTML = v[1] + i.htmlPrefilter(h) + v[2], l = v[0]; l--;) c = c.lastChild;
				if(!r.leadingWhitespace && hi.test(h) && a.push(t.createTextNode(hi.exec(h)[0])), !r.tbody)
					for(h = "table" !== w || li.test(h) ? "<table>" !== v[1] || li.test(h) ? 0 : c : c.firstChild, l = h && h.childNodes.length; l--;) i.nodeName(b = h.childNodes[l], "tbody") && !b.childNodes.length && h.removeChild(b);
				for(i.merge(a, c.childNodes), c.textContent = ""; c.firstChild;) c.removeChild(c.firstChild);
				c = y.lastChild
			} else a.push(t.createTextNode(h));
			for(c && y.removeChild(c), r.appendChecked || i.grep(f(a, "input"), de), p = 0; h = a[p++];)
				if(e && i.inArray(h, e) > -1) s && s.push(h);
				else if(k = i.contains(h.ownerDocument, h), c = f(y.appendChild(h), "script"), k && ci(c), u)
				for(l = 0; h = c[l++];) fu.test(h.type || "") && u.push(h);
			return c = null, y
		}

		function vt() {
			return !0
		}

		function rt() {
			return !1
		}

		function au() {
			try {
				return u.activeElement
			} catch(n) {}
		}

		function vi(n, t, r, u, f, e) {
			var o, s;
			if("object" == typeof t) {
				"string" != typeof r && (u = u || r, r = void 0);
				for(s in t) vi(n, s, r, u, t[s], e);
				return n
			}
			if(null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = rt;
			else if(!f) return n;
			return 1 === e && (o = f, f = function(n) {
				return i().off(n), o.apply(this, arguments)
			}, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
				i.event.add(this, t, f, u, r)
			})
		}

		function yu(n, t) {
			return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
		}

		function pu(n) {
			return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type, n
		}

		function wu(n) {
			var t = fo.exec(n.type);
			return t ? n.type = t[1] : n.removeAttribute("type"), n
		}

		function bu(n, t) {
			if(1 === t.nodeType && i.hasData(n)) {
				var u, f, o, s = i._data(n),
					r = i._data(t, s),
					e = s.events;
				if(e) {
					delete r.handle;
					r.events = {};
					for(u in e)
						for(f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
				}
				r.data && (r.data = i.extend({}, r.data))
			}
		}

		function so(n, t) {
			var u, e, f;
			if(1 === t.nodeType) {
				if(u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
					f = i._data(t);
					for(e in f.events) i.removeEvent(t, e, f.handle);
					t.removeAttribute(i.expando)
				}
				"script" === u && t.text !== n.text ? (pu(t).text = n.text, wu(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && si.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : "input" !== u && "textarea" !== u || (t.defaultValue = n.defaultValue)
			}
		}

		function k(n, t, u, e) {
			t = sr.apply([], t);
			var l, o, a, h, p, c, s = 0,
				v = n.length,
				b = v - 1,
				y = t[0],
				w = i.isFunction(y);
			if(w || v > 1 && "string" == typeof y && !r.checkClone && uo.test(y)) return n.each(function(i) {
				var r = n.eq(i);
				w && (t[0] = y.call(this, i, r.html()));
				k(r, t, u, e)
			});
			if(v && (c = hu(t, n[0].ownerDocument, !1, n, e), l = c.firstChild, 1 === c.childNodes.length && (c = l), l || e)) {
				for(h = i.map(f(c, "script"), pu), a = h.length; v > s; s++) o = c, s !== b && (o = i.clone(o, !0, !0), a && i.merge(h, f(o, "script"))), u.call(n[s], o, s);
				if(a)
					for(p = h[h.length - 1].ownerDocument, i.map(h, wu), s = 0; a > s; s++) o = h[s], fu.test(o.type || "") && !i._data(o, "globalEval") && i.contains(p, o) && (o.src ? i._evalUrl && i._evalUrl(o.src) : i.globalEval((o.text || o.textContent || o.innerHTML || "").replace(eo, "")));
				c = l = null
			}
			return n
		}

		function ku(n, t, r) {
			for(var u, o = t ? i.filter(t, n) : n, e = 0; null != (u = o[e]); e++) r || 1 !== u.nodeType || i.cleanData(f(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && ci(f(u, "script")), u.parentNode.removeChild(u));
			return n
		}

		function du(n, t) {
			var r = i(t.createElement(n)).appendTo(t.body),
				u = i.css(r[0], "display");
			return r.detach(), u
		}

		function yt(n) {
			var r = u,
				t = pi[n];
			return t || (t = du(n, r), "none" !== t && t || (ht = (ht || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ht[0].contentWindow || ht[0].contentDocument).document, r.write(), r.close(), t = du(n, r), ht.detach()), pi[n] = t), t
		}

		function bi(n, t) {
			return {
				get: function() {
					return n() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function ef(n) {
			if(n in ff) return n;
			for(var i = n.charAt(0).toUpperCase() + n.slice(1), t = uf.length; t--;)
				if(n = uf[t] + i, n in ff) return n
		}

		function of (n, t) {
			for(var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && st(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = st(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
			for(u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
			return n
		}

		function sf(n, t, i) {
			var r = lo.exec(t);
			return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
		}

		function hf(n, t, r, u, f) {
			for(var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + b[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + b[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f), "padding" !== r && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
			return o
		}

		function cf(n, t, u) {
			var o = !0,
				f = "width" === t ? n.offsetWidth : n.offsetHeight,
				e = d(n),
				s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e);
			if(0 >= f || null == f) {
				if(f = p(n, t, e), (0 > f || null == f) && (f = n.style[t]), pt.test(f)) return f;
				o = s && (r.boxSizingReliable() || f === n.style[t]);
				f = parseFloat(f) || 0
			}
			return f + hf(n, t, u || (s ? "border" : "content"), o, e) + "px"
		}

		function e(n, t, i, r, u) {
			return new e.prototype.init(n, t, i, r, u)
		}

		function vf() {
			return n.setTimeout(function() {
				ut = void 0
			}), ut = i.now()
		}

		function bt(n, t) {
			var r, i = {
					height: n
				},
				u = 0;
			for(t = t ? 1 : 0; 4 > u; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
			return t && (i.opacity = i.width = n), i
		}

		function yf(n, t, i) {
			for(var u, f = (h.tweeners[t] || []).concat(h.tweeners["*"]), r = 0, e = f.length; e > r; r++)
				if(u = f[r].call(i, t, n)) return u
		}

		function vo(n, t, u) {
			var f, a, p, v, s, w, h, b, l = this,
				y = {},
				o = n.style,
				c = n.nodeType && st(n),
				e = i._data(n, "fxshow");
			u.queue || (s = i._queueHooks(n, "fx"), null == s.unqueued && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function() {
				s.unqueued || w()
			}), s.unqueued++, l.always(function() {
				l.always(function() {
					s.unqueued--;
					i.queue(n, "fx").length || s.empty.fire()
				})
			}));
			1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY], h = i.css(n, "display"), b = "none" === h ? i._data(n, "olddisplay") || yt(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== yt(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
			u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l.always(function() {
				o.overflow = u.overflow[0];
				o.overflowX = u.overflow[1];
				o.overflowY = u.overflow[2]
			}));
			for(f in t)
				if(a = t[f], lf.exec(a)) {
					if(delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
						if("show" !== a || !e || void 0 === e[f]) continue;
						c = !0
					}
					y[f] = e && e[f] || i.style(n, f)
				} else h = void 0;
			if(i.isEmptyObject(y)) "inline" === ("none" === h ? yt(n.nodeName) : h) && (o.display = h);
			else {
				e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
				p && (e.hidden = !c);
				c ? i(n).show() : l.done(function() {
					i(n).hide()
				});
				l.done(function() {
					var t;
					i._removeData(n, "fxshow");
					for(t in y) i.style(n, t, y[t])
				});
				for(f in y) v = yf(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
			}
		}

		function yo(n, t) {
			var r, f, e, u, o;
			for(r in n)
				if(f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
					u = o.expand(u);
					delete n[f];
					for(r in u) r in n || (n[r] = u[r], t[r] = e)
				} else t[f] = e
		}

		function h(n, t, r) {
			var e, o, s = 0,
				a = h.prefilters.length,
				f = i.Deferred().always(function() {
					delete l.elem
				}),
				l = function() {
					if(o) return !1;
					for(var s = ut || vf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; e > r; r++) u.tweens[r].run(i);
					return f.notifyWith(n, [u, i, t]), 1 > i && e ? t : (f.resolveWith(n, [u]), !1)
				},
				u = f.promise({
					elem: n,
					props: i.extend({}, t),
					opts: i.extend(!0, {
						specialEasing: {},
						easing: i.easing._default
					}, r),
					originalProperties: t,
					originalOptions: r,
					startTime: ut || vf(),
					duration: r.duration,
					tweens: [],
					createTween: function(t, r) {
						var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
						return u.tweens.push(f), f
					},
					stop: function(t) {
						var i = 0,
							r = t ? u.tweens.length : 0;
						if(o) return this;
						for(o = !0; r > i; i++) u.tweens[i].run(1);
						return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
					}
				}),
				c = u.props;
			for(yo(c, u.opts.specialEasing); a > s; s++)
				if(e = h.prefilters[s].call(u, n, c, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
			return i.map(c, yf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(l, {
				elem: n,
				anim: u,
				queue: u.opts.queue
			})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
		}

		function nt(n) {
			return i.attr(n, "class") || ""
		}

		function re(n) {
			return function(t, r) {
				"string" != typeof t && (r = t, t = "*");
				var u, f = 0,
					e = t.toLowerCase().match(s) || [];
				if(i.isFunction(r))
					while(u = e[f++]) "+" === u.charAt(0) ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
			}
		}

		function ue(n, t, r, u) {
			function e(s) {
				var h;
				return f[s] = !0, i.each(n[s] || [], function(n, i) {
					var s = i(t, r, u);
					return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
				}), h
			}
			var f = {},
				o = n === tr;
			return e(t.dataTypes[0]) || !f["*"] && e("*")
		}

		function rr(n, t) {
			var u, r, f = i.ajaxSettings.flatOptions || {};
			for(r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
			return u && i.extend(!0, n, u), n
		}

		function ts(n, t, i) {
			for(var o, e, u, f, s = n.contents, r = n.dataTypes;
				"*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
			if(e)
				for(f in s)
					if(s[f] && s[f].test(e)) {
						r.unshift(f);
						break
					}
			if(r[0] in i) u = r[0];
			else {
				for(f in i) {
					if(!r[0] || n.converters[f + " " + r[0]]) {
						u = f;
						break
					}
					o || (o = f)
				}
				u = u || o
			}
			if(u) return(u !== r[0] && r.unshift(u), i[u])
		}

		function is(n, t, i, r) {
			var h, u, f, s, e, o = {},
				c = n.dataTypes.slice();
			if(c[1])
				for(f in n.converters) o[f.toLowerCase()] = n.converters[f];
			for(u = c.shift(); u;)
				if(n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
					if("*" === u) u = e;
					else if("*" !== e && e !== u) {
				if(f = o[e + " " + u] || o["* " + u], !f)
					for(h in o)
						if(s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
							f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
							break
						}
				if(f !== !0)
					if(f && n.throws) t = f(t);
					else try {
						t = f(t)
					} catch(l) {
						return {
							state: "parsererror",
							error: f ? l : "No conversion from " + e + " to " + u
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function rs(n) {
			return n.style && n.style.display || i.css(n, "display")
		}

		function us(n) {
			if(!i.contains(n.ownerDocument || u, n)) return !0;
			while(n && 1 === n.nodeType) {
				if("none" === rs(n) || "hidden" === n.type) return !0;
				n = n.parentNode
			}
			return !1
		}

		function ur(n, t, r, u) {
			var f;
			if(i.isArray(t)) i.each(t, function(t, i) {
				r || es.test(n) ? u(n, i) : ur(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
			});
			else if(r || "object" !== i.type(t)) u(n, t);
			else
				for(f in t) ur(n + "[" + f + "]", t[f], r, u)
		}

		function fr() {
			try {
				return new n.XMLHttpRequest
			} catch(t) {}
		}

		function ee() {
			try {
				return new n.ActiveXObject("Microsoft.XMLHTTP")
			} catch(t) {}
		}

		function oe(n) {
			return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
		}
		var c = [],
			u = n.document,
			a = c.slice,
			sr = c.concat,
			ti = c.push,
			hr = c.indexOf,
			lt = {},
			ce = lt.toString,
			tt = lt.hasOwnProperty,
			r = {},
			cr = "1.12.4",
			i = function(n, t) {
				return new i.fn.init(n, t)
			},
			le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ae = /^-ms-/,
			ve = /-([\da-z])/gi,
			ye = function(n, t) {
				return t.toUpperCase()
			},
			w, ui, yr, pr, wr, br, s, at, gr, o, su, li, ht, pi, d, p, tf, ut, wt, lf, af, pf, wf, kf, df, dt, er, ni, or, se, he;
		i.fn = i.prototype = {
			jquery: cr,
			constructor: i,
			selector: "",
			length: 0,
			toArray: function() {
				return a.call(this)
			},
			get: function(n) {
				return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
			},
			pushStack: function(n) {
				var t = i.merge(this.constructor(), n);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(n) {
				return i.each(this, n)
			},
			map: function(n) {
				return this.pushStack(i.map(this, function(t, i) {
					return n.call(t, i, t)
				}))
			},
			slice: function() {
				return this.pushStack(a.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(n) {
				var i = this.length,
					t = +n + (0 > n ? i : 0);
				return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor()
			},
			push: ti,
			sort: c.sort,
			splice: c.splice
		};
		i.extend = i.fn.extend = function() {
			var r, e, t, f, o, s, n = arguments[0] || {},
				u = 1,
				c = arguments.length,
				h = !1;
			for("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
				if(null != (o = arguments[u]))
					for(f in o) r = n[f], t = o[f], n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
			return n
		};
		i.extend({
			expando: "jQuery" + (cr + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(n) {
				throw new Error(n);
			},
			noop: function() {},
			isFunction: function(n) {
				return "function" === i.type(n)
			},
			isArray: Array.isArray || function(n) {
				return "array" === i.type(n)
			},
			isWindow: function(n) {
				return null != n && n == n.window
			},
			isNumeric: function(n) {
				var t = n && n.toString();
				return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
			},
			isEmptyObject: function(n) {
				for(var t in n) return !1;
				return !0
			},
			isPlainObject: function(n) {
				var t;
				if(!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
				try {
					if(n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
				} catch(u) {
					return !1
				}
				if(!r.ownFirst)
					for(t in n) return tt.call(n, t);
				for(t in n);
				return void 0 === t || tt.call(n, t)
			},
			type: function(n) {
				return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? lt[ce.call(n)] || "object" : typeof n
			},
			globalEval: function(t) {
				t && i.trim(t) && (n.execScript || function(t) {
					n.eval.call(n, t)
				})(t)
			},
			camelCase: function(n) {
				return n.replace(ae, "ms-").replace(ve, ye)
			},
			nodeName: function(n, t) {
				return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(n, t) {
				var r, i = 0;
				if(ii(n)) {
					for(r = n.length; r > i; i++)
						if(t.call(n[i], i, n[i]) === !1) break
				} else
					for(i in n)
						if(t.call(n[i], i, n[i]) === !1) break;
				return n
			},
			trim: function(n) {
				return null == n ? "" : (n + "").replace(le, "")
			},
			makeArray: function(n, t) {
				var r = t || [];
				return null != n && (ii(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
			},
			inArray: function(n, t, i) {
				var r;
				if(t) {
					if(hr) return hr.call(t, n, i);
					for(r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
						if(i in t && t[i] === n) return i
				}
				return -1
			},
			merge: function(n, t) {
				for(var r = +t.length, i = 0, u = n.length; r > i;) n[u++] = t[i++];
				if(r !== r)
					while(void 0 !== t[i]) n[u++] = t[i++];
				return n.length = u, n
			},
			grep: function(n, t, i) {
				for(var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
				return f
			},
			map: function(n, t, i) {
				var e, u, r = 0,
					f = [];
				if(ii(n))
					for(e = n.length; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
				else
					for(r in n) u = t(n[r], r, i), null != u && f.push(u);
				return sr.apply([], f)
			},
			guid: 1,
			proxy: function(n, t) {
				var u, r, f;
				return "string" == typeof t && (f = n[t], t = n, n = f), i.isFunction(n) ? (u = a.call(arguments, 2), r = function() {
					return n.apply(t || this, u.concat(a.call(arguments)))
				}, r.guid = n.guid = n.guid || i.guid++, r) : void 0
			},
			now: function() {
				return +new Date
			},
			support: r
		});
		"function" == typeof Symbol && (i.fn[Symbol.iterator] = c[Symbol.iterator]);
		i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
			lt["[object " + t + "]"] = t.toLowerCase()
		});
		w = function(n) {
			function u(n, t, r, u) {
				var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument,
					v = t ? t.nodeType : 9;
				if(r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
				if(!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
					if(11 !== v && (d = sr.exec(n)))
						if(l = d[1]) {
							if(9 === v) {
								if(!(a = t.getElementById(l))) return r;
								if(a.id === l) return r.push(a), r
							} else if(p && (a = p.getElementById(l)) && et(t, a) && a.id === l) return r.push(a), r
						} else {
							if(d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
							if((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(l)), r
						}
					if(f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
						if(1 !== v) p = t, g = n;
						else if("object" !== t.nodeName.toLowerCase()) {
							for((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e), y = ft(n), w = y.length, nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--;) y[w] = nt + " " + yt(y[w]);
							g = y.join(",");
							p = gt.test(n) && ii(t.parentNode) || t
						}
						if(g) try {
							return k.apply(r, p.querySelectorAll(g)), r
						} catch(tt) {} finally {
							s === e && t.removeAttribute("id")
						}
					}
				}
				return si(n.replace(at, "$1"), t, r, u)
			}

			function ni() {
				function n(r, u) {
					return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
				}
				var i = [];
				return n
			}

			function l(n) {
				return n[e] = !0, n
			}

			function a(n) {
				var t = i.createElement("div");
				try {
					return !!n(t)
				} catch(r) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t);
					t = null
				}
			}

			function ti(n, i) {
				for(var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
			}

			function wi(n, t) {
				var i = t && n,
					r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
				if(r) return r;
				if(i)
					while(i = i.nextSibling)
						if(i === t) return -1;
				return n ? 1 : -1
			}

			function cr(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return "input" === i && t.type === n
				}
			}

			function lr(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return("input" === i || "button" === i) && t.type === n
				}
			}

			function it(n) {
				return l(function(t) {
					return t = +t, l(function(i, r) {
						for(var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
					})
				})
			}

			function ii(n) {
				return n && "undefined" != typeof n.getElementsByTagName && n
			}

			function bi() {}

			function yt(n) {
				for(var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
				return i
			}

			function ri(n, t, i) {
				var r = t.dir,
					u = i && "parentNode" === r,
					f = ki++;
				return t.first ? function(t, i, f) {
					while(t = t[r])
						if(1 === t.nodeType || u) return n(t, i, f)
				} : function(t, i, o) {
					var s, h, c, l = [v, f];
					if(o) {
						while(t = t[r])
							if((1 === t.nodeType || u) && n(t, i, o)) return !0
					} else
						while(t = t[r])
							if(1 === t.nodeType || u) {
								if(c = t[e] || (t[e] = {}), h = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = h[r]) && s[0] === v && s[1] === f) return l[2] = s[2];
								if(h[r] = l, l[2] = n(t, i, o)) return !0
							}
				}
			}

			function ui(n) {
				return n.length > 1 ? function(t, i, r) {
					for(var u = n.length; u--;)
						if(!n[u](t, i, r)) return !1;
					return !0
				} : n[0]
			}

			function ar(n, t, i) {
				for(var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
				return i
			}

			function pt(n, t, i, r, u) {
				for(var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
				return o
			}

			function fi(n, t, i, r, u, f) {
				return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function(f, e, o, s) {
					var l, c, a, p = [],
						y = [],
						w = e.length,
						b = f || ar(t || "*", o.nodeType ? [o] : o, []),
						v = !n || !f && t ? b : pt(b, p, n, o, s),
						h = i ? u || (f ? n : w || r) ? [] : e : v;
					if(i && i(v, h, o, s), r)
						for(l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
					if(f) {
						if(u || n) {
							if(u) {
								for(l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
								u(null, h = [], l, s)
							}
							for(c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
						}
					} else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
				})
			}

			function ei(n) {
				for(var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
						return n === o
					}, c, !0), a = ri(function(n) {
						return nt(o, n) > -1
					}, c, !0), f = [function(n, t, i) {
						var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
						return o = null, r
					}]; s > i; i++)
					if(u = t.relative[n[i].type]) f = [ri(ui(f), u)];
					else {
						if(u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) {
							for(r = ++i; s > r; r++)
								if(t.relative[n[r].type]) break;
							return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({
								value: " " === n[i - 2].type ? "*" : ""
							})).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), s > r && ei(n = n.slice(r)), s > r && yt(n))
						}
						f.push(u)
					}
				return ui(f)
			}

			function vr(n, r) {
				var f = r.length > 0,
					e = n.length > 0,
					o = function(o, s, c, l, a) {
						var y, nt, d, g = 0,
							p = "0",
							tt = o && [],
							w = [],
							it = ht,
							rt = o || e && t.find.TAG("*", a),
							ut = v += null == it ? 1 : Math.random() || .1,
							ft = rt.length;
						for(a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
							if(e && y) {
								for(nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
									if(d(y, s || i, c)) {
										l.push(y);
										break
									}
								a && (v = ut)
							}
							f && ((y = !d && y) && g--, o && tt.push(y))
						}
						if(g += p, f && p !== g) {
							for(nt = 0; d = r[nt++];) d(tt, w, s, c);
							if(o) {
								if(g > 0)
									while(p--) tt[p] || w[p] || (w[p] = gi.call(l));
								w = pt(w)
							}
							k.apply(l, w);
							a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
						}
						return a && (v = ut, ht = it), tt
					};
				return f ? l(o) : o
			}
			var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
				c = n.document,
				v = 0,
				ki = 0,
				hi = ni(),
				ci = ni(),
				lt = ni(),
				bt = function(n, t) {
					return n === t && (ut = !0), 0
				},
				li = -2147483648,
				di = {}.hasOwnProperty,
				g = [],
				gi = g.pop,
				nr = g.push,
				k = g.push,
				ai = g.slice,
				nt = function(n, t) {
					for(var i = 0, r = n.length; r > i; i++)
						if(n[i] === t) return i;
					return -1
				},
				kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				r = "[\\x20\\t\\r\\n\\f]",
				tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
				dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
				tr = new RegExp(r + "+", "g"),
				at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
				ir = new RegExp("^" + r + "*," + r + "*"),
				rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
				ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
				fr = new RegExp(dt),
				yi = new RegExp("^" + tt + "$"),
				vt = {
					ID: new RegExp("^#(" + tt + ")"),
					CLASS: new RegExp("^\\.(" + tt + ")"),
					TAG: new RegExp("^(" + tt + "|[*])"),
					ATTR: new RegExp("^" + vi),
					PSEUDO: new RegExp("^" + dt),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + kt + ")$", "i"),
					needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
				},
				er = /^(?:input|select|textarea|button)$/i,
				or = /^h\d$/i,
				ot = /^[^{]+\{\s*\[native \w/,
				sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				gt = /[+~]/,
				hr = /'|\\/g,
				y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
				p = function(n, t, i) {
					var r = "0x" + t - 65536;
					return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				pi = function() {
					b()
				};
			try {
				k.apply(g = ai.call(c.childNodes), c.childNodes);
				g[c.childNodes.length].nodeType
			} catch(yr) {
				k = {
					apply: g.length ? function(n, t) {
						nr.apply(n, ai.call(t))
					} : function(n, t) {
						for(var i = n.length, r = 0; n[i++] = t[r++];);
						n.length = i - 1
					}
				}
			}
			f = u.support = {};
			oi = u.isXML = function(n) {
				var t = n && (n.ownerDocument || n).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			};
			b = u.setDocument = function(n) {
				var v, u, l = n ? n.ownerDocument || n : c;
				return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), f.attributes = a(function(n) {
					return n.className = "i", !n.getAttribute("className")
				}), f.getElementsByTagName = a(function(n) {
					return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
				}), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
					return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
				}), f.getById ? (t.find.ID = function(n, t) {
					if("undefined" != typeof t.getElementById && h) {
						var i = t.getElementById(n);
						return i ? [i] : []
					}
				}, t.filter.ID = function(n) {
					var t = n.replace(y, p);
					return function(n) {
						return n.getAttribute("id") === t
					}
				}) : (delete t.find.ID, t.filter.ID = function(n) {
					var t = n.replace(y, p);
					return function(n) {
						var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
						return i && i.value === t
					}
				}), t.find.TAG = f.getElementsByTagName ? function(n, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
				} : function(n, t) {
					var i, r = [],
						f = 0,
						u = t.getElementsByTagName(n);
					if("*" === n) {
						while(i = u[f++]) 1 === i.nodeType && r.push(i);
						return r
					}
					return u
				}, t.find.CLASS = f.getElementsByClassName && function(n, t) {
					if("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
				}, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
					s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
					n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
					n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
					n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
					n.querySelectorAll(":checked").length || o.push(":checked");
					n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
				}), a(function(n) {
					var t = i.createElement("input");
					t.setAttribute("type", "hidden");
					n.appendChild(t).setAttribute("name", "D");
					n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
					n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
					n.querySelectorAll("*,:x");
					o.push(",.*:")
				})), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
					f.disconnectedMatch = ct.call(n, "div");
					ct.call(n, "[s!='']:x");
					d.push("!=", dt)
				}), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
					var r = 9 === n.nodeType ? n.documentElement : n,
						i = t && t.parentNode;
					return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
				} : function(n, t) {
					if(t)
						while(t = t.parentNode)
							if(t === n) return !0;
					return !1
				}, bt = v ? function(n, t) {
					if(n === t) return ut = !0, 0;
					var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
					return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !f.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
				} : function(n, t) {
					if(n === t) return ut = !0, 0;
					var r, u = 0,
						o = n.parentNode,
						s = t.parentNode,
						f = [n],
						e = [t];
					if(!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
					if(o === s) return wi(n, t);
					for(r = n; r = r.parentNode;) f.unshift(r);
					for(r = t; r = r.parentNode;) e.unshift(r);
					while(f[u] === e[u]) u++;
					return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
				}, i) : i
			};
			u.matches = function(n, t) {
				return u(n, null, null, t)
			};
			u.matchesSelector = function(n, t) {
				if((n.ownerDocument || n) !== i && b(n), t = t.replace(ur, "='$1']"), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
					var r = ct.call(n, t);
					if(r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
				} catch(e) {}
				return u(t, i, null, [n]).length > 0
			};
			u.contains = function(n, t) {
				return(n.ownerDocument || n) !== i && b(n), et(n, t)
			};
			u.attr = function(n, r) {
				(n.ownerDocument || n) !== i && b(n);
				var e = t.attrHandle[r.toLowerCase()],
					u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
				return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
			};
			u.error = function(n) {
				throw new Error("Syntax error, unrecognized expression: " + n);
			};
			u.uniqueSort = function(n) {
				var r, u = [],
					t = 0,
					i = 0;
				if(ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(bt), ut) {
					while(r = n[i++]) r === n[i] && (t = u.push(i));
					while(t--) n.splice(u[t], 1)
				}
				return w = null, n
			};
			st = u.getText = function(n) {
				var r, i = "",
					u = 0,
					t = n.nodeType;
				if(t) {
					if(1 === t || 9 === t || 11 === t) {
						if("string" == typeof n.textContent) return n.textContent;
						for(n = n.firstChild; n; n = n.nextSibling) i += st(n)
					} else if(3 === t || 4 === t) return n.nodeValue
				} else
					while(r = n[u++]) i += st(r);
				return i
			};
			t = u.selectors = {
				cacheLength: 50,
				createPseudo: l,
				match: vt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(n) {
						return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
					},
					CHILD: function(n) {
						return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
					},
					PSEUDO: function(n) {
						var i, t = !n[6] && n[2];
						return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
					}
				},
				filter: {
					TAG: function(n) {
						var t = n.replace(y, p).toLowerCase();
						return "*" === n ? function() {
							return !0
						} : function(n) {
							return n.nodeName && n.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(n) {
						var t = hi[n + " "];
						return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
							return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
						})
					},
					ATTR: function(n, t, i) {
						return function(r) {
							var f = u.attr(r, n);
							return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(n, t, i, r, u) {
						var s = "nth" !== n.slice(0, 3),
							o = "last" !== n.slice(-4),
							f = "of-type" === t;
						return 1 === r && 0 === u ? function(n) {
							return !!n.parentNode
						} : function(t, i, h) {
							var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
								d = t.parentNode,
								nt = f && t.nodeName.toLowerCase(),
								g = !h && !f,
								l = !1;
							if(d) {
								if(s) {
									while(k) {
										for(c = t; c = c[k];)
											if(f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
										b = k = "only" === n && !b && "nextSibling"
									}
									return !0
								}
								if(b = [o ? d.firstChild : d.lastChild], o && g) {
									for(c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
										if(1 === c.nodeType && ++l && c === t) {
											w[n] = [v, a, l];
											break
										}
								} else if(g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
									while(c = ++a && c && c[k] || (l = a = 0) || b.pop())
										if((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
								return l -= u, l === r || l % r == 0 && l / r >= 0
							}
						}
					},
					PSEUDO: function(n, i) {
						var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
						return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
							for(var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
						}) : function(n) {
							return r(n, 0, f)
						}) : r
					}
				},
				pseudos: {
					not: l(function(n) {
						var t = [],
							r = [],
							i = wt(n.replace(at, "$1"));
						return i[e] ? l(function(n, t, r, u) {
							for(var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
						}) : function(n, u, f) {
							return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
						}
					}),
					has: l(function(n) {
						return function(t) {
							return u(n, t).length > 0
						}
					}),
					contains: l(function(n) {
						return n = n.replace(y, p),
							function(t) {
								return(t.textContent || t.innerText || st(t)).indexOf(n) > -1
							}
					}),
					lang: l(function(n) {
						return yi.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
							function(t) {
								var i;
								do
									if(i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var i = n.location && n.location.hash;
						return i && i.slice(1) === t.id
					},
					root: function(n) {
						return n === s
					},
					focus: function(n) {
						return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
					},
					enabled: function(n) {
						return n.disabled === !1
					},
					disabled: function(n) {
						return n.disabled === !0
					},
					checked: function(n) {
						var t = n.nodeName.toLowerCase();
						return "input" === t && !!n.checked || "option" === t && !!n.selected
					},
					selected: function(n) {
						return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
					},
					empty: function(n) {
						for(n = n.firstChild; n; n = n.nextSibling)
							if(n.nodeType < 6) return !1;
						return !0
					},
					parent: function(n) {
						return !t.pseudos.empty(n)
					},
					header: function(n) {
						return or.test(n.nodeName)
					},
					input: function(n) {
						return er.test(n.nodeName)
					},
					button: function(n) {
						var t = n.nodeName.toLowerCase();
						return "input" === t && "button" === n.type || "button" === t
					},
					text: function(n) {
						var t;
						return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: it(function() {
						return [0]
					}),
					last: it(function(n, t) {
						return [t - 1]
					}),
					eq: it(function(n, t, i) {
						return [0 > i ? i + t : i]
					}),
					even: it(function(n, t) {
						for(var i = 0; t > i; i += 2) n.push(i);
						return n
					}),
					odd: it(function(n, t) {
						for(var i = 1; t > i; i += 2) n.push(i);
						return n
					}),
					lt: it(function(n, t, i) {
						for(var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
						return n
					}),
					gt: it(function(n, t, i) {
						for(var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
						return n
					})
				}
			};
			t.pseudos.nth = t.pseudos.eq;
			for(rt in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) t.pseudos[rt] = cr(rt);
			for(rt in {
					submit: !0,
					reset: !0
				}) t.pseudos[rt] = lr(rt);
			return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = u.tokenize = function(n, i) {
				var e, f, s, o, r, h, c, l = ci[n + " "];
				if(l) return i ? 0 : l.slice(0);
				for(r = n, h = [], c = t.preFilter; r;) {
					(!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
					e = !1;
					(f = rr.exec(r)) && (e = f.shift(), s.push({
						value: e,
						type: f[0].replace(at, " ")
					}), r = r.slice(e.length));
					for(o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
						value: e,
						type: o,
						matches: f
					}), r = r.slice(e.length));
					if(!e) break
				}
				return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
			}, wt = u.compile = function(n, t) {
				var r, u = [],
					f = [],
					i = lt[n + " "];
				if(!i) {
					for(t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
					i = lt(n, vr(f, u));
					i.selector = n
				}
				return i
			}, si = u.select = function(n, i, r, u) {
				var s, e, o, a, v, l = "function" == typeof n && n,
					c = !u && ft(n = l.selector || n);
				if(r = r || [], 1 === c.length) {
					if(e = c[0] = c[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && f.getById && 9 === i.nodeType && h && t.relative[e[1].type]) {
						if(i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
						l && (i = i.parentNode);
						n = n.slice(e.shift().value.length)
					}
					for(s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
						if(o = e[s], t.relative[a = o.type]) break;
						if((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
							if(e.splice(s, 1), n = u.length && yt(e), !n) return k.apply(r, u), r;
							break
						}
					}
				}
				return(l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i), r
			}, f.sortStable = e.split("").sort(bt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
				return 1 & n.compareDocumentPosition(i.createElement("div"))
			}), a(function(n) {
				return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
			}) || ti("type|href|height|width", function(n, t, i) {
				if(!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), f.attributes && a(function(n) {
				return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
			}) || ti("value", function(n, t, i) {
				if(!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
			}), a(function(n) {
				return null == n.getAttribute("disabled")
			}) || ti(kt, function(n, t, i) {
				var r;
				if(!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
			}), u
		}(n);
		i.find = w;
		i.expr = w.selectors;
		i.expr[":"] = i.expr.pseudos;
		i.uniqueSort = i.unique = w.uniqueSort;
		i.text = w.getText;
		i.isXMLDoc = w.isXML;
		i.contains = w.contains;
		var it = function(n, t, r) {
				for(var u = [], f = void 0 !== r;
					(n = n[t]) && 9 !== n.nodeType;)
					if(1 === n.nodeType) {
						if(f && i(n).is(r)) break;
						u.push(n)
					}
				return u
			},
			lr = function(n, t) {
				for(var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
				return i
			},
			ar = i.expr.match.needsContext,
			vr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			pe = /^.[^:#\[\.,]*$/;
		i.filter = function(n, t, r) {
			var u = t[0];
			return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
				return 1 === n.nodeType
			}))
		};
		i.fn.extend({
			find: function(n) {
				var t, r = [],
					u = this,
					f = u.length;
				if("string" != typeof n) return this.pushStack(i(n).filter(function() {
					for(t = 0; f > t; t++)
						if(i.contains(u[t], this)) return !0
				}));
				for(t = 0; f > t; t++) i.find(n, u[t], r);
				return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
			},
			filter: function(n) {
				return this.pushStack(ri(this, n || [], !1))
			},
			not: function(n) {
				return this.pushStack(ri(this, n || [], !0))
			},
			is: function(n) {
				return !!ri(this, "string" == typeof n && ar.test(n) ? i(n) : n || [], !1).length
			}
		});
		yr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
		pr = i.fn.init = function(n, t, r) {
			var f, e;
			if(!n) return this;
			if(r = r || ui, "string" == typeof n) {
				if(f = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : yr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
				if(f[1]) {
					if(t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), vr.test(f[1]) && i.isPlainObject(t))
						for(f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
					return this
				}
				if(e = u.getElementById(f[2]), e && e.parentNode) {
					if(e.id !== f[2]) return ui.find(n);
					this.length = 1;
					this[0] = e
				}
				return this.context = u, this.selector = n, this
			}
			return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof r.ready ? r.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
		};
		pr.prototype = i.fn;
		ui = i(u);
		wr = /^(?:parents|prev(?:Until|All))/;
		br = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
		i.fn.extend({
			has: function(n) {
				var t, r = i(n, this),
					u = r.length;
				return this.filter(function() {
					for(t = 0; u > t; t++)
						if(i.contains(this, r[t])) return !0
				})
			},
			closest: function(n, t) {
				for(var r, f = 0, o = this.length, u = [], e = ar.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
					for(r = this[f]; r && r !== t; r = r.parentNode)
						if(r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
							u.push(r);
							break
						}
				return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
			},
			index: function(n) {
				return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(n, t) {
				return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
			},
			addBack: function(n) {
				return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
			}
		});
		i.each({
			parent: function(n) {
				var t = n.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(n) {
				return it(n, "parentNode")
			},
			parentsUntil: function(n, t, i) {
				return it(n, "parentNode", i)
			},
			next: function(n) {
				return kr(n, "nextSibling")
			},
			prev: function(n) {
				return kr(n, "previousSibling")
			},
			nextAll: function(n) {
				return it(n, "nextSibling")
			},
			prevAll: function(n) {
				return it(n, "previousSibling")
			},
			nextUntil: function(n, t, i) {
				return it(n, "nextSibling", i)
			},
			prevUntil: function(n, t, i) {
				return it(n, "previousSibling", i)
			},
			siblings: function(n) {
				return lr((n.parentNode || {}).firstChild, n)
			},
			children: function(n) {
				return lr(n.firstChild)
			},
			contents: function(n) {
				return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
			}
		}, function(n, t) {
			i.fn[n] = function(r, u) {
				var f = i.map(this, t, r);
				return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (br[n] || (f = i.uniqueSort(f)), wr.test(n) && (f = f.reverse())), this.pushStack(f)
			}
		});
		s = /\S+/g;
		i.Callbacks = function(n) {
			n = "string" == typeof n ? we(n) : i.extend({}, n);
			var e, r, h, f, t = [],
				o = [],
				u = -1,
				c = function() {
					for(f = n.once, h = e = !0; o.length; u = -1)
						for(r = o.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
					n.memory || (r = !1);
					e = !1;
					f && (t = r ? [] : "")
				},
				s = {
					add: function() {
						return t && (r && !e && (u = t.length - 1, o.push(r)), function f(r) {
							i.each(r, function(r, u) {
								i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== i.type(u) && f(u)
							})
						}(arguments), r && !e && c()), this
					},
					remove: function() {
						return i.each(arguments, function(n, r) {
							for(var f;
								(f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), u >= f && u--
						}), this
					},
					has: function(n) {
						return n ? i.inArray(n, t) > -1 : t.length > 0
					},
					empty: function() {
						return t && (t = []), this
					},
					disable: function() {
						return f = o = [], t = r = "", this
					},
					disabled: function() {
						return !t
					},
					lock: function() {
						return f = !0, r || s.disable(), this
					},
					locked: function() {
						return !!f
					},
					fireWith: function(n, t) {
						return f || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), e || c()), this
					},
					fire: function() {
						return s.fireWith(this, arguments), this
					},
					fired: function() {
						return !!h
					}
				};
			return s
		};
		i.extend({
			Deferred: function(n) {
				var u = [
						["resolve", "done", i.Callbacks("once memory"), "resolved"],
						["reject", "fail", i.Callbacks("once memory"), "rejected"],
						["notify", "progress", i.Callbacks("memory")]
					],
					f = "pending",
					r = {
						state: function() {
							return f
						},
						always: function() {
							return t.done(arguments).fail(arguments), this
						},
						then: function() {
							var n = arguments;
							return i.Deferred(function(f) {
								i.each(u, function(u, e) {
									var o = i.isFunction(n[u]) && n[u];
									t[e[1]](function() {
										var n = o && o.apply(this, arguments);
										n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
									})
								});
								n = null
							}).promise()
						},
						promise: function(n) {
							return null != n ? i.extend(n, r) : r
						}
					},
					t = {};
				return r.pipe = r.then, i.each(u, function(n, i) {
					var e = i[2],
						o = i[3];
					r[i[1]] = e.add;
					o && e.add(function() {
						f = o
					}, u[1 ^ n][2].disable, u[2][2].lock);
					t[i[0]] = function() {
						return t[i[0] + "With"](this === t ? r : this, arguments), this
					};
					t[i[0] + "With"] = e.fireWith
				}), r.promise(t), n && n.call(t, t), t
			},
			when: function(n) {
				var t = 0,
					u = a.call(arguments),
					r = u.length,
					e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
					f = 1 === e ? n : i.Deferred(),
					h = function(n, t, i) {
						return function(r) {
							t[n] = this;
							i[n] = arguments.length > 1 ? a.call(arguments) : r;
							i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
						}
					},
					o, c, s;
				if(r > 1)
					for(o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
				return e || f.resolveWith(s, u), f.promise()
			}
		});
		i.fn.ready = function(n) {
			return i.ready.promise().done(n), this
		};
		i.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(n) {
				n ? i.readyWait++ : i.ready(!0)
			},
			ready: function(n) {
				(n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (at.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))))
			}
		});
		i.ready.promise = function(t) {
			if(!at)
				if(at = i.Deferred(), "complete" !== u.readyState && ("loading" === u.readyState || u.documentElement.doScroll))
					if(u.addEventListener) u.addEventListener("DOMContentLoaded", v), n.addEventListener("load", v);
					else {
						u.attachEvent("onreadystatechange", v);
						n.attachEvent("onload", v);
						var r = !1;
						try {
							r = null == n.frameElement && u.documentElement
						} catch(e) {}
						r && r.doScroll && ! function f() {
							if(!i.isReady) {
								try {
									r.doScroll("left")
								} catch(t) {
									return n.setTimeout(f, 50)
								}
								dr();
								i.ready()
							}
						}()
					}
			else n.setTimeout(i.ready);
			return at.promise(t)
		};
		i.ready.promise();
		for(gr in i(r)) break;
		r.ownFirst = "0" === gr;
		r.inlineBlockNeedsLayout = !1;
		i(function() {
				var f, t, n, i;
				n = u.getElementsByTagName("body")[0];
				n && n.style && (t = u.createElement("div"), i = u.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth, f && (n.style.zoom = 1)), n.removeChild(i))
			}),
			function() {
				var n = u.createElement("div");
				r.deleteExpando = !0;
				try {
					delete n.test
				} catch(t) {
					r.deleteExpando = !1
				}
				n = null
			}();
		var ot = function(n) {
				var t = i.noData[(n.nodeName + " ").toLowerCase()],
					r = +n.nodeType || 1;
				return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
			},
			be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			ke = /([A-Z])/g;
		i.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(n) {
				return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !fi(n)
			},
			data: function(n, t, i) {
				return tu(n, t, i)
			},
			removeData: function(n, t) {
				return iu(n, t)
			},
			_data: function(n, t, i) {
				return tu(n, t, i, !0)
			},
			_removeData: function(n, t) {
				return iu(n, t, !0)
			}
		});
		i.fn.extend({
			data: function(n, t) {
				var f, u, e, r = this[0],
					o = r && r.attributes;
				if(void 0 === n) {
					if(this.length && (e = i.data(r), 1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
						for(f = o.length; f--;) o[f] && (u = o[f].name, 0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)), nu(r, u, e[u])));
						i._data(r, "parsedAttrs", !0)
					}
					return e
				}
				return "object" == typeof n ? this.each(function() {
					i.data(this, n)
				}) : arguments.length > 1 ? this.each(function() {
					i.data(this, n, t)
				}) : r ? nu(r, n, i.data(r, n)) : void 0
			},
			removeData: function(n) {
				return this.each(function() {
					i.removeData(this, n)
				})
			}
		});
		i.extend({
			queue: function(n, t, r) {
				var u;
				if(n) return(t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || [])
			},
			dequeue: function(n, t) {
				t = t || "fx";
				var r = i.queue(n, t),
					e = r.length,
					u = r.shift(),
					f = i._queueHooks(n, t),
					o = function() {
						i.dequeue(n, t)
					};
				"inprogress" === u && (u = r.shift(), e--);
				u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
				!e && f && f.empty.fire()
			},
			_queueHooks: function(n, t) {
				var r = t + "queueHooks";
				return i._data(n, r) || i._data(n, r, {
					empty: i.Callbacks("once memory").add(function() {
						i._removeData(n, t + "queue");
						i._removeData(n, r)
					})
				})
			}
		});
		i.fn.extend({
				queue: function(n, t) {
					var r = 2;
					return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
						var r = i.queue(this, n, t);
						i._queueHooks(this, n);
						"fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
					})
				},
				dequeue: function(n) {
					return this.each(function() {
						i.dequeue(this, n)
					})
				},
				clearQueue: function(n) {
					return this.queue(n || "fx", [])
				},
				promise: function(n, t) {
					var r, f = 1,
						e = i.Deferred(),
						u = this,
						o = this.length,
						s = function() {
							--f || e.resolveWith(u, [u])
						};
					for("string" != typeof n && (t = n, n = void 0), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
					return s(), e.promise(t)
				}
			}),
			function() {
				var n;
				r.shrinkWrapBlocks = function() {
					if(null != n) return n;
					n = !1;
					var t, i, r;
					return i = u.getElementsByTagName("body")[0], i && i.style ? (t = u.createElement("div"), r = u.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(u.createElement("div")).style.width = "5px", n = 3 !== t.offsetWidth), i.removeChild(r), n) : void 0
				}
			}();
		var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			oi = new RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$", "i"),
			b = ["Top", "Right", "Bottom", "Left"],
			st = function(n, t) {
				return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
			};
		var y = function(n, t, r, u, f, e, o) {
				var s = 0,
					c = n.length,
					h = null == r;
				if("object" === i.type(r)) {
					f = !0;
					for(s in r) y(n, t, s, r[s], !0, e, o)
				} else if(void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
						return h.call(i(n), r)
					})), t))
					for(; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
				return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
			},
			si = /^(?:checkbox|radio)$/i,
			uu = /<([\w:-]+)/,
			fu = /^$|\/(?:java|ecma)script/i,
			hi = /^\s+/,
			eu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
		! function() {
			var n = u.createElement("div"),
				f = u.createDocumentFragment(),
				t = u.createElement("input");
			n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
			r.leadingWhitespace = 3 === n.firstChild.nodeType;
			r.tbody = !n.getElementsByTagName("tbody").length;
			r.htmlSerialize = !!n.getElementsByTagName("link").length;
			r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML;
			t.type = "checkbox";
			t.checked = !0;
			f.appendChild(t);
			r.appendChecked = t.checked;
			n.innerHTML = "<textarea>x<\/textarea>";
			r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
			f.appendChild(n);
			t = u.createElement("input");
			t.setAttribute("type", "radio");
			t.setAttribute("checked", "checked");
			t.setAttribute("name", "t");
			n.appendChild(t);
			r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
			r.noCloneEvent = !!n.addEventListener;
			n[i.expando] = 1;
			r.attributes = !n.getAttribute(i.expando)
		}();
		o = {
			option: [1, "<select multiple='multiple'>", "<\/select>"],
			legend: [1, "<fieldset>", "<\/fieldset>"],
			area: [1, "<map>", "<\/map>"],
			param: [1, "<object>", "<\/object>"],
			thead: [1, "<table>", "<\/table>"],
			tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
			col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
			td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
			_default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
		};
		o.optgroup = o.option;
		o.tbody = o.tfoot = o.colgroup = o.caption = o.thead;
		o.th = o.td;
		su = /<|&#?\w+;/;
		li = /<tbody/i;
		! function() {
			var t, i, f = u.createElement("div");
			for(t in {
					submit: !0,
					change: !0,
					focusin: !0
				}) i = "on" + t, (r[t] = i in n) || (f.setAttribute(i, "t"), r[t] = f.attributes[i].expando === !1);
			f = null
		}();
		var ai = /^(?:input|select|textarea)$/i,
			ge = /^key/,
			no = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			cu = /^(?:focusinfocus|focusoutblur)$/,
			lu = /^([^.]*)(?:\.(.+)|)/;
		i.event = {
			global: {},
			add: function(n, t, r, u, f) {
				var p, v, w, y, o, h, c, l, e, b, k, a = i._data(n);
				if(a) {
					for(r.handler && (y = r, r = y.handler, f = y.selector), r.guid || (r.guid = i.guid++), (v = a.events) || (v = a.events = {}), (h = a.handle) || (h = a.handle = function(n) {
							if("undefined" != typeof i && (!n || i.event.triggered !== n.type)) return i.event.dispatch.apply(h.elem, arguments)
						}, h.elem = n), t = (t || "").match(s) || [""], w = t.length; w--;) p = lu.exec(t[w]) || [], e = k = p[1], b = (p[2] || "").split(".").sort(), e && (o = i.event.special[e] || {}, e = (f ? o.delegateType : o.bindType) || e, o = i.event.special[e] || {}, c = i.extend({
						type: e,
						origType: k,
						data: u,
						handler: r,
						guid: r.guid,
						selector: f,
						needsContext: f && i.expr.match.needsContext.test(f),
						namespace: b.join(".")
					}, y), (l = v[e]) || (l = v[e] = [], l.delegateCount = 0, o.setup && o.setup.call(n, u, b, h) !== !1 || (n.addEventListener ? n.addEventListener(e, h, !1) : n.attachEvent && n.attachEvent("on" + e, h))), o.add && (o.add.call(n, c), c.handler.guid || (c.handler.guid = r.guid)), f ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[e] = !0);
					n = null
				}
			},
			remove: function(n, t, r, u, f) {
				var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
				if(v && (a = v.events)) {
					for(t = (t || "").match(s) || [""], p = t.length; p--;)
						if(h = lu.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) {
							for(c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
							b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
						} else
							for(e in a) i.event.remove(n, e + t[p], r, u, !0);
					i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
				}
			},
			trigger: function(t, r, f, e) {
				var l, a, o, p, c, h, w, y = [f || u],
					s = tt.call(t, "type") ? t.type : t,
					v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
				if(o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType && !cu.test(s + i.event.triggered) && (s.indexOf(".") > -1 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, "object" == typeof t && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = f), r = null == r ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
					if(!e && !c.noBubble && !i.isWindow(f)) {
						for(p = c.delegateType || s, cu.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
						h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
					}
					for(w = 0;
						(o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && ot(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
					if(t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && ot(f) && a && f[s] && !i.isWindow(f)) {
						h = f[a];
						h && (f[a] = null);
						i.event.triggered = s;
						try {
							f[s]()
						} catch(b) {}
						i.event.triggered = void 0;
						h && (f[a] = h)
					}
					return t.result
				}
			},
			dispatch: function(n) {
				n = i.event.fix(n);
				var e, o, f, r, t, s = [],
					h = a.call(arguments),
					c = (i._data(this, "events") || {})[n.type] || [],
					u = i.event.special[n.type] || {};
				if(h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
					for(s = i.event.handlers.call(this, n, c), e = 0;
						(r = s[e++]) && !n.isPropagationStopped();)
						for(n.currentTarget = r.elem, o = 0;
							(t = r.handlers[o++]) && !n.isImmediatePropagationStopped();) n.rnamespace && !n.rnamespace.test(t.namespace) || (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), void 0 !== f && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, n), n.result
				}
			},
			handlers: function(n, t) {
				var e, u, f, o, h = [],
					s = t.delegateCount,
					r = n.target;
				if(s && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))
					for(; r != this; r = r.parentNode || this)
						if(1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
							for(u = [], e = 0; s > e; e++) o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
							u.length && h.push({
								elem: r,
								handlers: u
							})
						}
				return s < t.length && h.push({
					elem: this,
					handlers: t.slice(s)
				}), h
			},
			fix: function(n) {
				if(n[i.expando]) return n;
				var e, o, s, r = n.type,
					f = n,
					t = this.fixHooks[r];
				for(t || (this.fixHooks[r] = t = no.test(r) ? this.mouseHooks : ge.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
				return n.target || (n.target = f.srcElement || u), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(n, t) {
					return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(n, t) {
					var i, e, r, f = t.button,
						o = t.fromElement;
					return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if(this !== au() && this.focus) try {
							return this.focus(), !1
						} catch(n) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if(this === au() && this.blur) return(this.blur(), !1)
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if(i.nodeName(this, "input") && "checkbox" === this.type && this.click) return(this.click(), !1)
					},
					_default: function(n) {
						return i.nodeName(n.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(n) {
						void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
					}
				}
			},
			simulate: function(n, t, r) {
				var u = i.extend(new i.Event, r, {
					type: n,
					isSimulated: !0
				});
				i.event.trigger(u, null, t);
				u.isDefaultPrevented() && r.preventDefault()
			}
		};
		i.removeEvent = u.removeEventListener ? function(n, t, i) {
			n.removeEventListener && n.removeEventListener(t, i)
		} : function(n, t, i) {
			var r = "on" + t;
			n.detachEvent && ("undefined" == typeof n[r] && (n[r] = null), n.detachEvent(r, i))
		};
		i.Event = function(n, t) {
			return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? vt : rt) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
		};
		i.Event.prototype = {
			constructor: i.Event,
			isDefaultPrevented: rt,
			isPropagationStopped: rt,
			isImmediatePropagationStopped: rt,
			preventDefault: function() {
				var n = this.originalEvent;
				this.isDefaultPrevented = vt;
				n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
			},
			stopPropagation: function() {
				var n = this.originalEvent;
				this.isPropagationStopped = vt;
				n && !this.isSimulated && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				var n = this.originalEvent;
				this.isImmediatePropagationStopped = vt;
				n && n.stopImmediatePropagation && n.stopImmediatePropagation();
				this.stopPropagation()
			}
		};
		i.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(n, t) {
			i.event.special[n] = {
				delegateType: t,
				bindType: t,
				handle: function(n) {
					var u, f = this,
						r = n.relatedTarget,
						e = n.handleObj;
					return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
				}
			}
		});
		r.submit || (i.event.special.submit = {
			setup: function() {
				return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
					var r = n.target,
						t = i.nodeName(r, "input") || i.nodeName(r, "button") ? i.prop(r, "form") : void 0;
					t && !i._data(t, "submit") && (i.event.add(t, "submit._submit", function(n) {
						n._submitBubble = !0
					}), i._data(t, "submit", !0))
				})
			},
			postDispatch: function(n) {
				n._submitBubble && (delete n._submitBubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n))
			},
			teardown: function() {
				return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
			}
		});
		r.change || (i.event.special.change = {
			setup: function() {
				return ai.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (i.event.add(this, "propertychange._change", function(n) {
					"checked" === n.originalEvent.propertyName && (this._justChanged = !0)
				}), i.event.add(this, "click._change", function(n) {
					this._justChanged && !n.isTrigger && (this._justChanged = !1);
					i.event.simulate("change", this, n)
				})), !1) : void i.event.add(this, "beforeactivate._change", function(n) {
					var t = n.target;
					ai.test(t.nodeName) && !i._data(t, "change") && (i.event.add(t, "change._change", function(n) {
						!this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n)
					}), i._data(t, "change", !0))
				})
			},
			handle: function(n) {
				var t = n.target;
				if(this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
			},
			teardown: function() {
				return i.event.remove(this, "._change"), !ai.test(this.nodeName)
			}
		});
		r.focusin || i.each({
			focus: "focusin",
			blur: "focusout"
		}, function(n, t) {
			var r = function(n) {
				i.event.simulate(t, n.target, i.event.fix(n))
			};
			i.event.special[t] = {
				setup: function() {
					var u = this.ownerDocument || this,
						f = i._data(u, t);
					f || u.addEventListener(n, r, !0);
					i._data(u, t, (f || 0) + 1)
				},
				teardown: function() {
					var u = this.ownerDocument || this,
						f = i._data(u, t) - 1;
					f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
				}
			}
		});
		i.fn.extend({
			on: function(n, t, i, r) {
				return vi(this, n, t, i, r)
			},
			one: function(n, t, i, r) {
				return vi(this, n, t, i, r, 1)
			},
			off: function(n, t, r) {
				var u, f;
				if(n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
				if("object" == typeof n) {
					for(f in n) this.off(f, t, n[f]);
					return this
				}
				return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = rt), this.each(function() {
					i.event.remove(this, n, r, t)
				})
			},
			trigger: function(n, t) {
				return this.each(function() {
					i.event.trigger(n, t, this)
				})
			},
			triggerHandler: function(n, t) {
				var r = this[0];
				if(r) return i.event.trigger(n, t, r, !0)
			}
		});
		var to = / jQuery\d+="(?:null|\d+)"/g,
			vu = new RegExp("<(?:" + eu + ")[\\s/>]", "i"),
			io = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			ro = /<script|<style|<link/i,
			uo = /checked\s*(?:[^=]|=\s*.checked.)/i,
			fo = /^true\/(.*)/,
			eo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			oo = ou(u),
			yi = oo.appendChild(u.createElement("div"));
		i.extend({
			htmlPrefilter: function(n) {
				return n.replace(io, "<$1><\/$2>")
			},
			clone: function(n, t, u) {
				var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
				if(r.html5Clone || i.isXMLDoc(n) || !vu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (yi.innerHTML = n.outerHTML, yi.removeChild(s = yi.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
					for(e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o) e[o] && so(c, e[o]);
				if(t)
					if(u)
						for(h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++) bu(c, e[o]);
					else bu(n, s);
				return e = f(s, "script"), e.length > 0 && ci(e, !l && f(n, "script")), e = h = c = null, s
			},
			cleanData: function(n, t) {
				for(var u, e, f, o, l = 0, s = i.expando, h = i.cache, a = r.attributes, v = i.event.special; null != (u = n[l]); l++)
					if((t || ot(u)) && (f = u[s], o = f && h[f])) {
						if(o.events)
							for(e in o.events) v[e] ? i.event.remove(u, e) : i.removeEvent(u, e, o.handle);
						h[f] && (delete h[f], a || "undefined" == typeof u.removeAttribute ? u[s] = void 0 : u.removeAttribute(s), c.push(f))
					}
			}
		});
		i.fn.extend({
			domManip: k,
			detach: function(n) {
				return ku(this, n, !0)
			},
			remove: function(n) {
				return ku(this, n)
			},
			text: function(n) {
				return y(this, function(n) {
					return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
				}, null, n, arguments.length)
			},
			append: function() {
				return k(this, arguments, function(n) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = yu(this, n);
						t.appendChild(n)
					}
				})
			},
			prepend: function() {
				return k(this, arguments, function(n) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = yu(this, n);
						t.insertBefore(n, t.firstChild)
					}
				})
			},
			before: function() {
				return k(this, arguments, function(n) {
					this.parentNode && this.parentNode.insertBefore(n, this)
				})
			},
			after: function() {
				return k(this, arguments, function(n) {
					this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
				})
			},
			empty: function() {
				for(var n, t = 0; null != (n = this[t]); t++) {
					for(1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
					n.options && i.nodeName(n, "select") && (n.options.length = 0)
				}
				return this
			},
			clone: function(n, t) {
				return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
					return i.clone(this, n, t)
				})
			},
			html: function(n) {
				return y(this, function(n) {
					var t = this[0] || {},
						u = 0,
						e = this.length;
					if(void 0 === n) return 1 === t.nodeType ? t.innerHTML.replace(to, "") : void 0;
					if("string" == typeof n && !ro.test(n) && (r.htmlSerialize || !vu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !o[(uu.exec(n) || ["", ""])[1].toLowerCase()]) {
						n = i.htmlPrefilter(n);
						try {
							for(; e > u; u++) t = this[u] || {}, 1 === t.nodeType && (i.cleanData(f(t, !1)), t.innerHTML = n);
							t = 0
						} catch(s) {}
					}
					t && this.empty().append(n)
				}, null, n, arguments.length)
			},
			replaceWith: function() {
				var n = [];
				return k(this, arguments, function(t) {
					var r = this.parentNode;
					i.inArray(this, n) < 0 && (i.cleanData(f(this)), r && r.replaceChild(t, this))
				}, n)
			}
		});
		i.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(n, t) {
			i.fn[n] = function(n) {
				for(var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
				return this.pushStack(f)
			}
		});
		pi = {
			HTML: "block",
			BODY: "block"
		};
		var gu = /^margin/,
			pt = new RegExp("^(" + ei + ")(?!px)[a-z%]+$", "i"),
			wi = function(n, t, i, r) {
				var f, u, e = {};
				for(u in t) e[u] = n.style[u], n.style[u] = t[u];
				f = i.apply(n, r || []);
				for(u in t) n.style[u] = e[u];
				return f
			},
			nf = u.documentElement;
		! function() {
			var f, h, c, e, l, a, s = u.createElement("div"),
				t = u.createElement("div");
			if(t.style) {
				t.style.cssText = "float:left;opacity:.5";
				r.opacity = "0.5" === t.style.opacity;
				r.cssFloat = !!t.style.cssFloat;
				t.style.backgroundClip = "content-box";
				t.cloneNode(!0).style.backgroundClip = "";
				r.clearCloneStyle = "content-box" === t.style.backgroundClip;
				s = u.createElement("div");
				s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
				t.innerHTML = "";
				s.appendChild(t);
				r.boxSizing = "" === t.style.boxSizing || "" === t.style.MozBoxSizing || "" === t.style.WebkitBoxSizing;
				i.extend(r, {
					reliableHiddenOffsets: function() {
						return null == f && o(), e
					},
					boxSizingReliable: function() {
						return null == f && o(), c
					},
					pixelMarginRight: function() {
						return null == f && o(), h
					},
					pixelPosition: function() {
						return null == f && o(), f
					},
					reliableMarginRight: function() {
						return null == f && o(), l
					},
					reliableMarginLeft: function() {
						return null == f && o(), a
					}
				});

				function o() {
					var i, r, o = u.documentElement;
					o.appendChild(s);
					t.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
					f = c = a = !1;
					h = l = !0;
					n.getComputedStyle && (r = n.getComputedStyle(t), f = "1%" !== (r || {}).top, a = "2px" === (r || {}).marginLeft, c = "4px" === (r || {
						width: "4px"
					}).width, t.style.marginRight = "50%", h = "4px" === (r || {
						marginRight: "4px"
					}).marginRight, i = t.appendChild(u.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((n.getComputedStyle(i) || {}).marginRight), t.removeChild(i));
					t.style.display = "none";
					e = 0 === t.getClientRects().length;
					e && (t.style.display = "", t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", t.childNodes[0].style.borderCollapse = "separate", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", e = 0 === i[0].offsetHeight, e && (i[0].style.display = "", i[1].style.display = "none", e = 0 === i[0].offsetHeight));
					o.removeChild(s)
				}
			}
		}();
		tf = /^(top|right|bottom|left)$/;
		n.getComputedStyle ? (d = function(t) {
			var i = t.ownerDocument.defaultView;
			return i && i.opener || (i = n), i.getComputedStyle(t)
		}, p = function(n, t, u) {
			var o, s, h, f, e = n.style;
			return u = u || d(n), f = u ? u.getPropertyValue(t) || u[t] : void 0, "" !== f && void 0 !== f || i.contains(n.ownerDocument, n) || (f = i.style(n, t)), u && !r.pixelMarginRight() && pt.test(f) && gu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = f, f = u.width, e.width = o, e.minWidth = s, e.maxWidth = h), void 0 === f ? f : f + ""
		}) : nf.currentStyle && (d = function(n) {
			return n.currentStyle
		}, p = function(n, t, i) {
			var o, f, e, r, u = n.style;
			return i = i || d(n), r = i ? i[t] : void 0, null == r && u && u[t] && (r = u[t]), pt.test(r) && !tf.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = "fontSize" === t ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), void 0 === r ? r : r + "" || "auto"
		});
		var ki = /alpha\([^)]*\)/i,
			ho = /opacity\s*=\s*([^)]*)/i,
			co = /^(none|table(?!-c[ea]).+)/,
			lo = new RegExp("^(" + ei + ")(.*)$", "i"),
			ao = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			rf = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			uf = ["Webkit", "O", "Moz", "ms"],
			ff = u.createElement("div").style;
		i.extend({
			cssHooks: {
				opacity: {
					get: function(n, t) {
						if(t) {
							var i = p(n, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: r.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(n, t, u, f) {
				if(n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
					var e, h, o, s = i.camelCase(t),
						c = n.style;
					if(t = i.cssProps[s] || (i.cssProps[s] = ef(s) || s), o = i.cssHooks[t] || i.cssHooks[s], void 0 === u) return o && "get" in o && void 0 !== (e = o.get(n, !1, f)) ? e : c[t];
					if(h = typeof u, "string" === h && (e = oi.exec(u)) && e[1] && (u = ru(n, t, e), h = "number"), null != u && u === u && ("number" === h && (u += e && e[3] || (i.cssNumber[s] ? "" : "px")), r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(o && "set" in o && void 0 === (u = o.set(n, u, f))))) try {
						c[t] = u
					} catch(l) {}
				}
			},
			css: function(n, t, r, u) {
				var s, f, o, e = i.camelCase(t);
				return t = i.cssProps[e] || (i.cssProps[e] = ef(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = p(n, t, u)), "normal" === f && t in rf && (f = rf[t]), "" === r || r ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
			}
		});
		i.each(["height", "width"], function(n, t) {
			i.cssHooks[t] = {
				get: function(n, r, u) {
					if(r) return co.test(i.css(n, "display")) && 0 === n.offsetWidth ? wi(n, ao, function() {
						return cf(n, t, u)
					}) : cf(n, t, u)
				},
				set: function(n, u, f) {
					var e = f && d(n);
					return sf(n, u, f ? hf(n, t, f, r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
				}
			}
		});
		r.opacity || (i.cssHooks.opacity = {
			get: function(n, t) {
				return ho.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function(n, t) {
				var r = n.style,
					u = n.currentStyle,
					e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					f = u && u.filter || r.filter || "";
				r.zoom = 1;
				(t >= 1 || "" === t) && "" === i.trim(f.replace(ki, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = ki.test(f) ? f.replace(ki, e) : f + " " + e)
			}
		});
		i.cssHooks.marginRight = bi(r.reliableMarginRight, function(n, t) {
			if(t) return wi(n, {
				display: "inline-block"
			}, p, [n, "marginRight"])
		});
		i.cssHooks.marginLeft = bi(r.reliableMarginLeft, function(n, t) {
			if(t) return(parseFloat(p(n, "marginLeft")) || (i.contains(n.ownerDocument, n) ? n.getBoundingClientRect().left - wi(n, {
				marginLeft: 0
			}, function() {
				return n.getBoundingClientRect().left
			}) : 0)) + "px"
		});
		i.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(n, t) {
			i.cssHooks[n + t] = {
				expand: function(i) {
					for(var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
					return f
				}
			};
			gu.test(n) || (i.cssHooks[n + t].set = sf)
		});
		i.fn.extend({
			css: function(n, t) {
				return y(this, function(n, t, r) {
					var f, e, o = {},
						u = 0;
					if(i.isArray(t)) {
						for(f = d(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
						return o
					}
					return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
				}, n, t, arguments.length > 1)
			},
			show: function() {
				return of(this, !0)
			},
			hide: function() {
				return of(this)
			},
			toggle: function(n) {
				return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
					st(this) ? i(this).show() : i(this).hide()
				})
			}
		});
		i.Tween = e;
		e.prototype = {
			constructor: e,
			init: function(n, t, r, u, f, e) {
				this.elem = n;
				this.prop = r;
				this.easing = f || i.easing._default;
				this.options = t;
				this.start = this.now = this.cur();
				this.end = u;
				this.unit = e || (i.cssNumber[r] ? "" : "px")
			},
			cur: function() {
				var n = e.propHooks[this.prop];
				return n && n.get ? n.get(this) : e.propHooks._default.get(this)
			},
			run: function(n) {
				var t, r = e.propHooks[this.prop];
				return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : e.propHooks._default.set(this), this
			}
		};
		e.prototype.init.prototype = e.prototype;
		e.propHooks = {
			_default: {
				get: function(n) {
					var t;
					return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function(n) {
					i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
				}
			}
		};
		e.propHooks.scrollTop = e.propHooks.scrollLeft = {
			set: function(n) {
				n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
			}
		};
		i.easing = {
			linear: function(n) {
				return n
			},
			swing: function(n) {
				return .5 - Math.cos(n * Math.PI) / 2
			},
			_default: "swing"
		};
		i.fx = e.prototype.init;
		i.fx.step = {};
		lf = /^(?:toggle|show|hide)$/;
		af = /queueHooks$/;
		i.Animation = i.extend(h, {
			tweeners: {
				"*": [function(n, t) {
					var i = this.createTween(n, t);
					return ru(i.elem, n, oi.exec(t), i), i
				}]
			},
			tweener: function(n, t) {
				i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(s);
				for(var r, u = 0, f = n.length; f > u; u++) r = n[u], h.tweeners[r] = h.tweeners[r] || [], h.tweeners[r].unshift(t)
			},
			prefilters: [vo],
			prefilter: function(n, t) {
				t ? h.prefilters.unshift(n) : h.prefilters.push(n)
			}
		});
		i.speed = function(n, t, r) {
			var u = n && "object" == typeof n ? i.extend({}, n) : {
				complete: r || !r && t || i.isFunction(n) && n,
				duration: n,
				easing: r && t || t && !i.isFunction(t) && t
			};
			return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, null != u.queue && u.queue !== !0 || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
				i.isFunction(u.old) && u.old.call(this);
				u.queue && i.dequeue(this, u.queue)
			}, u
		};
		i.fn.extend({
			fadeTo: function(n, t, i, r) {
				return this.filter(st).css("opacity", 0).show().end().animate({
					opacity: t
				}, n, i, r)
			},
			animate: function(n, t, r, u) {
				var o = i.isEmptyObject(n),
					e = i.speed(t, r, u),
					f = function() {
						var t = h(this, i.extend({}, n), e);
						(o || i._data(this, "finish")) && t.stop(!0)
					};
				return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
			},
			stop: function(n, t, r) {
				var u = function(n) {
					var t = n.stop;
					delete n.stop;
					t(r)
				};
				return "string" != typeof n && (r = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
					var o = !0,
						t = null != n && n + "queueHooks",
						e = i.timers,
						f = i._data(this);
					if(t) f[t] && f[t].stop && u(f[t]);
					else
						for(t in f) f[t] && f[t].stop && af.test(t) && u(f[t]);
					for(t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r), o = !1, e.splice(t, 1));
					!o && r || i.dequeue(this, n)
				})
			},
			finish: function(n) {
				return n !== !1 && (n = n || "fx"), this.each(function() {
					var t, f = i._data(this),
						r = f[n + "queue"],
						e = f[n + "queueHooks"],
						u = i.timers,
						o = r ? r.length : 0;
					for(f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
					for(t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete f.finish
				})
			}
		});
		i.each(["toggle", "show", "hide"], function(n, t) {
			var r = i.fn[t];
			i.fn[t] = function(n, i, u) {
				return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
			}
		});
		i.each({
			slideDown: bt("show"),
			slideUp: bt("hide"),
			slideToggle: bt("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(n, t) {
			i.fn[n] = function(n, i, r) {
				return this.animate(t, n, i, r)
			}
		});
		i.timers = [];
		i.fx.tick = function() {
			var r, n = i.timers,
				t = 0;
			for(ut = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
			n.length || i.fx.stop();
			ut = void 0
		};
		i.fx.timer = function(n) {
			i.timers.push(n);
			n() ? i.fx.start() : i.timers.pop()
		};
		i.fx.interval = 13;
		i.fx.start = function() {
			wt || (wt = n.setInterval(i.fx.tick, i.fx.interval))
		};
		i.fx.stop = function() {
			n.clearInterval(wt);
			wt = null
		};
		i.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		};
		i.fn.delay = function(t, r) {
				return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
					var u = n.setTimeout(i, t);
					r.stop = function() {
						n.clearTimeout(u)
					}
				})
			},
			function() {
				var i, n = u.createElement("input"),
					t = u.createElement("div"),
					f = u.createElement("select"),
					e = f.appendChild(u.createElement("option"));
				t = u.createElement("div");
				t.setAttribute("className", "t");
				t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
				i = t.getElementsByTagName("a")[0];
				n.setAttribute("type", "checkbox");
				t.appendChild(n);
				i = t.getElementsByTagName("a")[0];
				i.style.cssText = "top:1px";
				r.getSetAttribute = "t" !== t.className;
				r.style = /top/.test(i.getAttribute("style"));
				r.hrefNormalized = "/a" === i.getAttribute("href");
				r.checkOn = !!n.value;
				r.optSelected = e.selected;
				r.enctype = !!u.createElement("form").enctype;
				f.disabled = !0;
				r.optDisabled = !e.disabled;
				n = u.createElement("input");
				n.setAttribute("value", "");
				r.input = "" === n.getAttribute("value");
				n.value = "t";
				n.setAttribute("type", "radio");
				r.radioValue = "t" === n.value
			}();
		pf = /\r/g;
		wf = /[\x20\t\r\n\f]+/g;
		i.fn.extend({
			val: function(n) {
				var t, r, f, u = this[0];
				return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
					var u;
					1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
						return null == n ? "" : n + ""
					})), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
				})) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(pf, "") : null == r ? "" : r)) : void 0
			}
		});
		i.extend({
			valHooks: {
				option: {
					get: function(n) {
						var t = i.find.attr(n, "value");
						return null != t ? t : i.trim(i.text(n)).replace(wf, " ")
					}
				},
				select: {
					get: function(n) {
						for(var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
							if(t = s[e], (t.selected || e === u) && (r.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
								if(o = i(t).val(), f) return o;
								h.push(o)
							}
						return h
					},
					set: function(n, t) {
						for(var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
							if(r = u[e], i.inArray(i.valHooks.option.get(r), o) > -1) try {
								r.selected = f = !0
							} catch(s) {
								r.scrollHeight
							} else r.selected = !1;
						return f || (n.selectedIndex = -1), u
					}
				}
			}
		});
		i.each(["radio", "checkbox"], function() {
			i.valHooks[this] = {
				set: function(n, t) {
					if(i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
				}
			};
			r.checkOn || (i.valHooks[this].get = function(n) {
				return null === n.getAttribute("value") ? "on" : n.value
			})
		});
		var ft, bf, l = i.expr.attrHandle,
			di = /^(?:checked|selected)$/i,
			g = r.getSetAttribute,
			kt = r.input;
		i.fn.extend({
			attr: function(n, t) {
				return y(this, i.attr, n, t, arguments.length > 1)
			},
			removeAttr: function(n) {
				return this.each(function() {
					i.removeAttr(this, n)
				})
			}
		});
		i.extend({
			attr: function(n, t, r) {
				var u, f, e = n.nodeType;
				if(3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bf : ft)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
			},
			attrHooks: {
				type: {
					set: function(n, t) {
						if(!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
							var u = n.value;
							return n.setAttribute("type", t), u && (n.value = u), t
						}
					}
				}
			},
			removeAttr: function(n, t) {
				var r, u, e = 0,
					f = t && t.match(s);
				if(f && 1 === n.nodeType)
					while(r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? kt && g || !di.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
			}
		});
		bf = {
			set: function(n, t, r) {
				return t === !1 ? i.removeAttr(n, r) : kt && g || !di.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
			}
		};
		i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
			var r = l[t] || i.find.attr;
			l[t] = kt && g || !di.test(t) ? function(n, t, i) {
				var u, f;
				return i || (f = l[t], l[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, l[t] = f), u
			} : function(n, t, r) {
				if(!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		});
		kt && g || (i.attrHooks.value = {
			set: function(n, t, r) {
				return i.nodeName(n, "input") ? void(n.defaultValue = t) : ft && ft.set(n, t, r)
			}
		});
		g || (ft = {
			set: function(n, t, i) {
				var r = n.getAttributeNode(i);
				return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", "value" === i || t === n.getAttribute(i) ? t : void 0
			}
		}, l.id = l.name = l.coords = function(n, t, i) {
			var r;
			if(!i) return(r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
		}, i.valHooks.button = {
			get: function(n, t) {
				var i = n.getAttributeNode(t);
				if(i && i.specified) return i.value
			},
			set: ft.set
		}, i.attrHooks.contenteditable = {
			set: function(n, t, i) {
				ft.set(n, "" === t ? !1 : t, i)
			}
		}, i.each(["width", "height"], function(n, t) {
			i.attrHooks[t] = {
				set: function(n, i) {
					if("" === i) return(n.setAttribute(t, "auto"), i)
				}
			}
		}));
		r.style || (i.attrHooks.style = {
			get: function(n) {
				return n.style.cssText || void 0
			},
			set: function(n, t) {
				return n.style.cssText = t + ""
			}
		});
		kf = /^(?:input|select|textarea|button|object)$/i;
		df = /^(?:a|area)$/i;
		i.fn.extend({
			prop: function(n, t) {
				return y(this, i.prop, n, t, arguments.length > 1)
			},
			removeProp: function(n) {
				return n = i.propFix[n] || n, this.each(function() {
					try {
						this[n] = void 0;
						delete this[n]
					} catch(t) {}
				})
			}
		});
		i.extend({
			prop: function(n, t, r) {
				var f, u, e = n.nodeType;
				if(3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
			},
			propHooks: {
				tabIndex: {
					get: function(n) {
						var t = i.find.attr(n, "tabindex");
						return t ? parseInt(t, 10) : kf.test(n.nodeName) || df.test(n.nodeName) && n.href ? 0 : -1
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});
		r.hrefNormalized || i.each(["href", "src"], function(n, t) {
			i.propHooks[t] = {
				get: function(n) {
					return n.getAttribute(t, 4)
				}
			}
		});
		r.optSelected || (i.propHooks.selected = {
			get: function(n) {
				var t = n.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			},
			set: function(n) {
				var t = n.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		});
		i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			i.propFix[this.toLowerCase()] = this
		});
		r.enctype || (i.propFix.enctype = "encoding");
		dt = /[\t\r\n\f]/g;
		i.fn.extend({
			addClass: function(n) {
				var o, t, r, u, f, h, e, c = 0;
				if(i.isFunction(n)) return this.each(function(t) {
					i(this).addClass(n.call(this, t, nt(this)))
				});
				if("string" == typeof n && n)
					for(o = n.match(s) || []; t = this[c++];)
						if(u = nt(t), r = 1 === t.nodeType && (" " + u + " ").replace(dt, " ")) {
							for(h = 0; f = o[h++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
							e = i.trim(r);
							u !== e && i.attr(t, "class", e)
						}
				return this
			},
			removeClass: function(n) {
				var o, r, t, u, f, h, e, c = 0;
				if(i.isFunction(n)) return this.each(function(t) {
					i(this).removeClass(n.call(this, t, nt(this)))
				});
				if(!arguments.length) return this.attr("class", "");
				if("string" == typeof n && n)
					for(o = n.match(s) || []; r = this[c++];)
						if(u = nt(r), t = 1 === r.nodeType && (" " + u + " ").replace(dt, " ")) {
							for(h = 0; f = o[h++];)
								while(t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
							e = i.trim(t);
							u !== e && i.attr(r, "class", e)
						}
				return this
			},
			toggleClass: function(n, t) {
				var r = typeof n;
				return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
					i(this).toggleClass(n.call(this, r, nt(this), t), t)
				}) : this.each(function() {
					var t, f, u, e;
					if("string" === r)
						for(f = 0, u = i(this), e = n.match(s) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
					else void 0 !== n && "boolean" !== r || (t = nt(this), t && i._data(this, "__className__", t), i.attr(this, "class", t || n === !1 ? "" : i._data(this, "__className__") || ""))
				})
			},
			hasClass: function(n) {
				for(var t, r = 0, i = " " + n + " "; t = this[r++];)
					if(1 === t.nodeType && (" " + nt(t) + " ").replace(dt, " ").indexOf(i) > -1) return !0;
				return !1
			}
		});
		i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
			i.fn[t] = function(n, i) {
				return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
			}
		});
		i.fn.extend({
			hover: function(n, t) {
				return this.mouseenter(n).mouseleave(t || n)
			}
		});
		var po = n.location,
			gi = i.now(),
			nr = /\?/,
			wo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		i.parseJSON = function(t) {
			if(n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
			var f, r = null,
				u = i.trim(t + "");
			return u && !i.trim(u.replace(wo, function(n, t, i, u) {
				return f && t && (r = 0), 0 === r ? n : (f = i || t, r += !u - !i, "")
			})) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
		};
		i.parseXML = function(t) {
			var r, u;
			if(!t || "string" != typeof t) return null;
			try {
				n.DOMParser ? (u = new n.DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new n.ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
			} catch(f) {
				r = void 0
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
		};
		var bo = /#.*$/,
			gf = /([?&])_=[^&]*/,
			ko = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			go = /^(?:GET|HEAD)$/,
			ns = /^\/\//,
			ne = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			te = {},
			tr = {},
			ie = "*/".concat("*"),
			ir = po.href,
			et = ne.exec(ir.toLowerCase()) || [];
		i.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: ir,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(et[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": ie,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": i.parseJSON,
					"text xml": i.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(n, t) {
				return t ? rr(rr(n, i.ajaxSettings), t) : rr(i.ajaxSettings, n)
			},
			ajaxPrefilter: re(te),
			ajaxTransport: re(tr),
			ajax: function(t, r) {
				function w(t, r, s, c) {
					var y, rt, it, w, tt, l = r;
					2 !== o && (o = 2, k && n.clearTimeout(k), v = void 0, b = c || "", f.readyState = t > 0 ? 4 : 0, y = t >= 200 && 300 > t || 304 === t, s && (w = ts(u, f, s)), w = is(u, w, f, y), y ? (u.ifModified && (tt = f.getResponseHeader("Last-Modified"), tt && (i.lastModified[e] = tt), tt = f.getResponseHeader("etag"), tt && (i.etag[e] = tt)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = w.state, rt = w.data, it = w.error, y = !it)) : (it = l, !t && l || (l = "error", 0 > t && (t = 0))), f.status = t, f.statusText = (r || l) + "", y ? g.resolveWith(h, [rt, l, f]) : g.rejectWith(h, [f, l, it]), f.statusCode(p), p = void 0, a && d.trigger(y ? "ajaxSuccess" : "ajaxError", [f, u, y ? rt : it]), nt.fireWith(h, [f, l]), a && (d.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
				}
				"object" == typeof t && (r = t, t = void 0);
				r = r || {};
				var c, l, e, b, k, a, v, y, u = i.ajaxSetup({}, r),
					h = u.context || u,
					d = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
					g = i.Deferred(),
					nt = i.Callbacks("once memory"),
					p = u.statusCode || {},
					tt = {},
					it = {},
					o = 0,
					rt = "canceled",
					f = {
						readyState: 0,
						getResponseHeader: function(n) {
							var t;
							if(2 === o) {
								if(!y)
									for(y = {}; t = ko.exec(b);) y[t[1].toLowerCase()] = t[2];
								t = y[n.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === o ? b : null
						},
						setRequestHeader: function(n, t) {
							var i = n.toLowerCase();
							return o || (n = it[i] = it[i] || n, tt[n] = t), this
						},
						overrideMimeType: function(n) {
							return o || (u.mimeType = n), this
						},
						statusCode: function(n) {
							var t;
							if(n)
								if(2 > o)
									for(t in n) p[t] = [p[t], n[t]];
								else f.always(n[f.status]);
							return this
						},
						abort: function(n) {
							var t = n || rt;
							return v && v.abort(t), w(0, t), this
						}
					};
				if(g.promise(f).complete = nt.add, f.success = f.done, f.error = f.fail, u.url = ((t || u.url || ir) + "").replace(bo, "").replace(ns, et[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (c = ne.exec(u.url.toLowerCase()), u.crossDomain = !(!c || c[1] === et[1] && c[2] === et[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (et[3] || ("http:" === et[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ue(te, u, r, f), 2 === o) return f;
				a = i.event && u.global;
				a && 0 == i.active++ && i.event.trigger("ajaxStart");
				u.type = u.type.toUpperCase();
				u.hasContent = !go.test(u.type);
				e = u.url;
				u.hasContent || (u.data && (e = u.url += (nr.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = gf.test(e) ? e.replace(gf, "$1_=" + gi++) : e + (nr.test(e) ? "&" : "?") + "_=" + gi++));
				u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
				(u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
				f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ie + "; q=0.01" : "") : u.accepts["*"]);
				for(l in u.headers) f.setRequestHeader(l, u.headers[l]);
				if(u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o)) return f.abort();
				rt = "abort";
				for(l in {
						success: 1,
						error: 1,
						complete: 1
					}) f[l](u[l]);
				if(v = ue(tr, u, r, f)) {
					if(f.readyState = 1, a && d.trigger("ajaxSend", [f, u]), 2 === o) return f;
					u.async && u.timeout > 0 && (k = n.setTimeout(function() {
						f.abort("timeout")
					}, u.timeout));
					try {
						o = 1;
						v.send(tt, w)
					} catch(ut) {
						if(!(2 > o)) throw ut;
						w(-1, ut)
					}
				} else w(-1, "No Transport");
				return f
			},
			getJSON: function(n, t, r) {
				return i.get(n, t, r, "json")
			},
			getScript: function(n, t) {
				return i.get(n, void 0, t, "script")
			}
		});
		i.each(["get", "post"], function(n, t) {
			i[t] = function(n, r, u, f) {
				return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
					url: n,
					type: t,
					dataType: f,
					data: r,
					success: u
				}, i.isPlainObject(n) && n))
			}
		});
		i._evalUrl = function(n) {
			return i.ajax({
				url: n,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		};
		i.fn.extend({
			wrapAll: function(n) {
				if(i.isFunction(n)) return this.each(function(t) {
					i(this).wrapAll(n.call(this, t))
				});
				if(this[0]) {
					var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]);
					t.map(function() {
						for(var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
						return n
					}).append(this)
				}
				return this
			},
			wrapInner: function(n) {
				return i.isFunction(n) ? this.each(function(t) {
					i(this).wrapInner(n.call(this, t))
				}) : this.each(function() {
					var t = i(this),
						r = t.contents();
					r.length ? r.wrapAll(n) : t.append(n)
				})
			},
			wrap: function(n) {
				var t = i.isFunction(n);
				return this.each(function(r) {
					i(this).wrapAll(t ? n.call(this, r) : n)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
				}).end()
			}
		});
		i.expr.filters.hidden = function(n) {
			return r.reliableHiddenOffsets() ? n.offsetWidth <= 0 && n.offsetHeight <= 0 && !n.getClientRects().length : us(n)
		};
		i.expr.filters.visible = function(n) {
			return !i.expr.filters.hidden(n)
		};
		var fs = /%20/g,
			es = /\[\]$/,
			fe = /\r?\n/g,
			os = /^(?:submit|button|image|reset|file)$/i,
			ss = /^(?:input|select|textarea|keygen)/i;
		i.param = function(n, t) {
			var r, u = [],
				f = function(n, t) {
					t = i.isFunction(t) ? t() : null == t ? "" : t;
					u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
				};
			if(void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
				f(this.name, this.value)
			});
			else
				for(r in n) ur(r, n[r], t, f);
			return u.join("&").replace(fs, "+")
		};
		i.fn.extend({
			serialize: function() {
				return i.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var n = i.prop(this, "elements");
					return n ? i.makeArray(n) : this
				}).filter(function() {
					var n = this.type;
					return this.name && !i(this).is(":disabled") && ss.test(this.nodeName) && !os.test(n) && (this.checked || !si.test(n))
				}).map(function(n, t) {
					var r = i(this).val();
					return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
						return {
							name: t.name,
							value: n.replace(fe, "\r\n")
						}
					}) : {
						name: t.name,
						value: r.replace(fe, "\r\n")
					}
				}).get()
			}
		});
		i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
			return this.isLocal ? ee() : u.documentMode > 8 ? fr() : /^(get|post|head|put|delete|options)$/i.test(this.type) && fr() || ee()
		} : fr;
		var hs = 0,
			gt = {},
			ct = i.ajaxSettings.xhr();
		return n.attachEvent && n.attachEvent("onunload", function() {
			for(var n in gt) gt[n](void 0, !0)
		}), r.cors = !!ct && "withCredentials" in ct, ct = r.ajax = !!ct, ct && i.ajaxTransport(function(t) {
			if(!t.crossDomain || r.cors) {
				var u;
				return {
					send: function(r, f) {
						var o, e = t.xhr(),
							s = ++hs;
						if(e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
							for(o in t.xhrFields) e[o] = t.xhrFields[o];
						t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
						t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
						for(o in r) void 0 !== r[o] && e.setRequestHeader(o, r[o] + "");
						e.send(t.hasContent && t.data || null);
						u = function(n, r) {
							var o, c, h;
							if(u && (r || 4 === e.readyState))
								if(delete gt[s], u = void 0, e.onreadystatechange = i.noop, r) 4 !== e.readyState && e.abort();
								else {
									h = {};
									o = e.status;
									"string" == typeof e.responseText && (h.text = e.responseText);
									try {
										c = e.statusText
									} catch(l) {
										c = ""
									}
									o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = h.text ? 200 : 404
								}
							h && f(o, c, h, e.getAllResponseHeaders())
						};
						t.async ? 4 === e.readyState ? n.setTimeout(u) : e.onreadystatechange = gt[s] = u : u()
					},
					abort: function() {
						u && u(void 0, !0)
					}
				}
			}
		}), i.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(n) {
					return i.globalEval(n), n
				}
			}
		}), i.ajaxPrefilter("script", function(n) {
			void 0 === n.cache && (n.cache = !1);
			n.crossDomain && (n.type = "GET", n.global = !1)
		}), i.ajaxTransport("script", function(n) {
			if(n.crossDomain) {
				var t, r = u.head || i("head")[0] || u.documentElement;
				return {
					send: function(i, f) {
						t = u.createElement("script");
						t.async = !0;
						n.scriptCharset && (t.charset = n.scriptCharset);
						t.src = n.url;
						t.onload = t.onreadystatechange = function(n, i) {
							(i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
						};
						r.insertBefore(t, r.firstChild)
					},
					abort: function() {
						t && t.onload(void 0, !0)
					}
				}
			}
		}), er = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var n = er.pop() || i.expando + "_" + gi++;
				return this[n] = !0, n
			}
		}), i.ajaxPrefilter("json jsonp", function(t, r, u) {
			var f, e, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
			if(s || "jsonp" === t.dataTypes[0]) return(f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
				return o || i.error(f + " was not called"), o[0]
			}, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
				o = arguments
			}, u.always(function() {
				void 0 === e ? i(n).removeProp(f) : n[f] = e;
				t[f] && (t.jsonpCallback = r.jsonpCallback, er.push(f));
				o && i.isFunction(e) && e(o[0]);
				o = e = void 0
			}), "script")
		}), i.parseHTML = function(n, t, r) {
			if(!n || "string" != typeof n) return null;
			"boolean" == typeof t && (r = t, t = !1);
			t = t || u;
			var f = vr.exec(n),
				e = !r && [];
			return f ? [t.createElement(f[1])] : (f = hu([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
		}, or = i.fn.load, i.fn.load = function(n, t, r) {
			if("string" != typeof n && or) return or.apply(this, arguments);
			var u, o, s, f = this,
				e = n.indexOf(" ");
			return e > -1 && (u = i.trim(n.slice(e, n.length)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
				url: n,
				type: o || "GET",
				dataType: "html",
				data: t
			}).done(function(n) {
				s = arguments;
				f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
			}).always(r && function(n, t) {
				f.each(function() {
					r.apply(this, s || [n.responseText, t, n])
				})
			}), this
		}, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
			i.fn[t] = function(n) {
				return this.on(t, n)
			}
		}), i.expr.filters.animated = function(n) {
			return i.grep(i.timers, function(t) {
				return n === t.elem
			}).length
		}, i.offset = {
			setOffset: function(n, t, r) {
				var e, o, s, h, u, c, v, l = i.css(n, "position"),
					a = i(n),
					f = {};
				"static" === l && (n.style.position = "relative");
				u = a.offset();
				s = i.css(n, "top");
				c = i.css(n, "left");
				v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
				v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
				i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
				null != t.top && (f.top = t.top - u.top + h);
				null != t.left && (f.left = t.left - u.left + o);
				"using" in t ? t.using.call(n, f) : a.css(f)
			}
		}, i.fn.extend({
			offset: function(n) {
				if(arguments.length) return void 0 === n ? this : this.each(function(t) {
					i.offset.setOffset(this, n, t)
				});
				var t, f, u = {
						top: 0,
						left: 0
					},
					r = this[0],
					e = r && r.ownerDocument;
				if(e) return t = e.documentElement, i.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (u = r.getBoundingClientRect()), f = oe(e), {
					top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : u
			},
			position: function() {
				if(this[0]) {
					var n, r, t = {
							top: 0,
							left: 0
						},
						u = this[0];
					return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
						top: r.top - t.top - i.css(u, "marginTop", !0),
						left: r.left - t.left - i.css(u, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var n = this.offsetParent; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
					return n || nf
				})
			}
		}), i.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(n, t) {
			var r = /Y/.test(t);
			i.fn[n] = function(u) {
				return y(this, function(n, u, f) {
					var e = oe(n);
					return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void(e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
				}, n, u, arguments.length, null)
			}
		}), i.each(["top", "left"], function(n, t) {
			i.cssHooks[t] = bi(r.pixelPosition, function(n, r) {
				if(r) return(r = p(n, t), pt.test(r) ? i(n).position()[t] + "px" : r)
			})
		}), i.each({
			Height: "height",
			Width: "width"
		}, function(n, t) {
			i.each({
				padding: "inner" + n,
				content: t,
				"": "outer" + n
			}, function(r, u) {
				i.fn[u] = function(u, f) {
					var e = arguments.length && (r || "boolean" != typeof u),
						o = r || (u === !0 || f === !0 ? "margin" : "border");
					return y(this, function(t, r, u) {
						var f;
						return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
					}, t, e ? u : void 0, e, null)
				}
			})
		}), i.fn.extend({
			bind: function(n, t, i) {
				return this.on(n, null, t, i)
			},
			unbind: function(n, t) {
				return this.off(n, null, t)
			},
			delegate: function(n, t, i, r) {
				return this.on(t, n, i, r)
			},
			undelegate: function(n, t, i) {
				return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
			}
		}), i.fn.size = function() {
			return this.length
		}, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return i
		}), se = n.jQuery, he = n.$, i.noConflict = function(t) {
			return n.$ === i && (n.$ = he), t && n.jQuery === i && (n.jQuery = se), i
		}, t || (n.jQuery = n.$ = i), i
	}), ! function(n, t, i, r) {
		var u = n(t);
		n.fn.lazyload = function(f) {
			function s() {
				var t = 0;
				o.each(function() {
					var i = n(this);
					if((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e) && !n.leftofbegin(this, e))
						if(n.belowthefold(this, e) || n.rightoffold(this, e)) {
							if(++t > e.failure_limit) return !1
						} else i.trigger("appear"), t = 0
				})
			}
			var h, o = this,
				e = {
					threshold: 0,
					failure_limit: 0,
					event: "scroll",
					effect: "show",
					container: t,
					data_attribute: "original",
					skip_invisible: !0,
					appear: null,
					load: null,
					placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
				};
			return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), r !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), n.extend(e, f)), h = e.container === r || e.container === t ? u : n(e.container), 0 === e.event.indexOf("scroll") && h.bind(e.event, function() {
				return s()
			}), this.each(function() {
				var i = this,
					t = n(i);
				i.loaded = !1;
				(t.attr("src") === r || t.attr("src") === !1) && t.is("img") && t.attr("src", e.placeholder);
				t.one("appear", function() {
					if(!this.loaded) {
						if(e.appear) {
							var r = o.length;
							e.appear.call(i, r, e)
						}
						n("<img />").bind("load", function() {
							var r = t.attr("data-" + e.data_attribute),
								u, f;
							t.hide();
							t.is("img") ? t.attr("src", r) : t.css("background-image", "url('" + r + "')");
							t[e.effect](e.effect_speed);
							i.loaded = !0;
							u = n.grep(o, function(n) {
								return !n.loaded
							});
							(o = n(u), e.load) && (f = o.length, e.load.call(i, f, e))
						}).attr("src", t.attr("data-" + e.data_attribute))
					}
				});
				0 !== e.event.indexOf("scroll") && t.bind(e.event, function() {
					i.loaded || t.trigger("appear")
				})
			}), u.bind("resize", function() {
				s()
			}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function(t) {
				t.originalEvent && t.originalEvent.persisted && o.each(function() {
					n(this).trigger("appear")
				})
			}), n(i).ready(function() {
				s()
			}), this
		};
		n.belowthefold = function(i, f) {
			var e;
			return e = f.container === r || f.container === t ? (t.innerHeight ? t.innerHeight : u.height()) + u.scrollTop() : n(f.container).offset().top + n(f.container).height(), e <= n(i).offset().top - f.threshold
		};
		n.rightoffold = function(i, f) {
			var e;
			return e = f.container === r || f.container === t ? u.width() + u.scrollLeft() : n(f.container).offset().left + n(f.container).width(), e <= n(i).offset().left - f.threshold
		};
		n.abovethetop = function(i, f) {
			var e;
			return e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top, e >= n(i).offset().top + f.threshold + n(i).height()
		};
		n.leftofbegin = function(i, f) {
			var e;
			return e = f.container === r || f.container === t ? u.scrollLeft() : n(f.container).offset().left, e >= n(i).offset().left + f.threshold + n(i).width()
		};
		n.inviewport = function(t, i) {
			return !(n.rightoffold(t, i) || n.leftofbegin(t, i) || n.belowthefold(t, i) || n.abovethetop(t, i))
		};
		n.extend(n.expr[":"], {
			"below-the-fold": function(t) {
				return n.belowthefold(t, {
					threshold: 0
				})
			},
			"above-the-top": function(t) {
				return !n.belowthefold(t, {
					threshold: 0
				})
			},
			"right-of-screen": function(t) {
				return n.rightoffold(t, {
					threshold: 0
				})
			},
			"left-of-screen": function(t) {
				return !n.rightoffold(t, {
					threshold: 0
				})
			},
			"in-viewport": function(t) {
				return n.inviewport(t, {
					threshold: 0
				})
			},
			"above-the-fold": function(t) {
				return !n.belowthefold(t, {
					threshold: 0
				})
			},
			"right-of-fold": function(t) {
				return n.rightoffold(t, {
					threshold: 0
				})
			},
			"left-of-fold": function(t) {
				return !n.rightoffold(t, {
					threshold: 0
				})
			}
		})
	}(jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
	"use strict";
	var t = n.fn.jquery.split(" ")[0].split(".");
	if(t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function(n) {
	"use strict";

	function t() {
		var i = document.createElement("bootstrap"),
			n = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for(var t in n)
			if(void 0 !== i.style[t]) return {
				end: n[t]
			};
		return !1
	}
	n.fn.emulateTransitionEnd = function(t) {
		var i = !1,
			u = this,
			r;
		n(this).one("bsTransitionEnd", function() {
			i = !0
		});
		return r = function() {
			i || n(u).trigger(n.support.transition.end)
		}, setTimeout(r, t), this
	};
	n(function() {
		n.support.transition = t();
		n.support.transition && (n.event.special.bsTransitionEnd = {
			bindType: n.support.transition.end,
			delegateType: n.support.transition.end,
			handle: function(t) {
				if(n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery); + function(n) {
	"use strict";

	function u(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("bs.alert");
			u || r.data("bs.alert", u = new t(this));
			"string" == typeof i && u[i].call(r)
		})
	}
	var i = '[data-dismiss="alert"]',
		t = function(t) {
			n(t).on("click", i, this.close)
		},
		r;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 150;
	t.prototype.close = function(i) {
		function e() {
			r.detach().trigger("closed.bs.alert").remove()
		}
		var f = n(this),
			u = f.attr("data-target"),
			r;
		u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
		r = n("#" === u ? [] : u);
		i && i.preventDefault();
		r.length || (r = f.closest(".alert"));
		r.trigger(i = n.Event("close.bs.alert"));
		i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
	};
	r = n.fn.alert;
	n.fn.alert = u;
	n.fn.alert.Constructor = t;
	n.fn.alert.noConflict = function() {
		return n.fn.alert = r, this
	};
	n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
	"use strict";

	function i(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.button"),
				f = "object" == typeof i && i;
			r || u.data("bs.button", r = new t(this, f));
			"toggle" == i ? r.toggle() : i && r.setState(i)
		})
	}
	var t = function(i, r) {
			this.$element = n(i);
			this.options = n.extend({}, t.DEFAULTS, r);
			this.isLoading = !1
		},
		r;
	t.VERSION = "3.3.7";
	t.DEFAULTS = {
		loadingText: "loading..."
	};
	t.prototype.setState = function(t) {
		var i = "disabled",
			r = this.$element,
			f = r.is("input") ? "val" : "html",
			u = r.data();
		t += "Text";
		null == u.resetText && r.data("resetText", r[f]());
		setTimeout(n.proxy(function() {
			r[f](null == u[t] ? this.options[t] : u[t]);
			"loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
		}, this), 0)
	};
	t.prototype.toggle = function() {
		var t = !0,
			i = this.$element.closest('[data-toggle="buttons"]'),
			n;
		i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
	};
	r = n.fn.button;
	n.fn.button = i;
	n.fn.button.Constructor = t;
	n.fn.button.noConflict = function() {
		return n.fn.button = r, this
	};
	n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
		var r = n(t.target).closest(".btn");
		i.call(r, "toggle");
		n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
		n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
	})
}(jQuery); + function(n) {
	"use strict";

	function i(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.carousel"),
				f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
				e = "string" == typeof i ? i : f.slide;
			r || u.data("bs.carousel", r = new t(this, f));
			"number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
		})
	}
	var t = function(t, i) {
			this.$element = n(t);
			this.$indicators = this.$element.find(".carousel-indicators");
			this.options = i;
			this.paused = null;
			this.sliding = null;
			this.interval = null;
			this.$active = null;
			this.$items = null;
			this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
			"hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
		},
		u, r;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 600;
	t.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	};
	t.prototype.keydown = function(n) {
		if(!/input|textarea/i.test(n.target.tagName)) {
			switch(n.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			n.preventDefault()
		}
	};
	t.prototype.cycle = function(t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
	};
	t.prototype.getItemIndex = function(n) {
		return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
	};
	t.prototype.getItemForDirection = function(n, t) {
		var i = this.getItemIndex(t),
			f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
			r, u;
		return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
	};
	t.prototype.to = function(n) {
		var i = this,
			t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if(!(n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
			i.to(n)
		}) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
	};
	t.prototype.pause = function(t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	};
	t.prototype.next = function() {
		if(!this.sliding) return this.slide("next")
	};
	t.prototype.prev = function() {
		if(!this.sliding) return this.slide("prev")
	};
	t.prototype.slide = function(i, r) {
		var e = this.$element.find(".item.active"),
			u = r || this.getItemForDirection(i, e),
			l = this.interval,
			f = "next" == i ? "left" : "right",
			a = this,
			o, s, h, c;
		return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
			relatedTarget: o,
			direction: f
		}), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
			relatedTarget: o,
			direction: f
		}), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
			u.removeClass([i, f].join(" ")).addClass("active");
			e.removeClass(["active", f].join(" "));
			a.sliding = !1;
			setTimeout(function() {
				a.$element.trigger(c)
			}, 0)
		}).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
	};
	u = n.fn.carousel;
	n.fn.carousel = i;
	n.fn.carousel.Constructor = t;
	n.fn.carousel.noConflict = function() {
		return n.fn.carousel = u, this
	};
	r = function(t) {
		var o, r = n(this),
			u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
			e, f;
		u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
	};
	n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
	n(window).on("load", function() {
		n('[data-ride="carousel"]').each(function() {
			var t = n(this);
			i.call(t, t.data())
		})
	})
}(jQuery); + function(n) {
	"use strict";

	function r(t) {
		var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return n(r)
	}

	function i(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.collapse"),
				f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
			!r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
			r || u.data("bs.collapse", r = new t(this, f));
			"string" == typeof i && r[i]()
		})
	}
	var t = function(i, r) {
			this.$element = n(i);
			this.options = n.extend({}, t.DEFAULTS, r);
			this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
			this.transitioning = null;
			this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
			this.options.toggle && this.toggle()
		},
		u;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 350;
	t.DEFAULTS = {
		toggle: !0
	};
	t.prototype.dimension = function() {
		var n = this.$element.hasClass("width");
		return n ? "width" : "height"
	};
	t.prototype.show = function() {
		var f, r, e, u, o, s;
		if(!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
			if(r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
					this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
					this.transitioning = 0;
					this.$element.trigger("shown.bs.collapse")
				}, !n.support.transition) return o.call(this);
			s = n.camelCase(["scroll", u].join("-"));
			this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
		}
	};
	t.prototype.hide = function() {
		var r, i, u;
		if(!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
			this.transitioning = 0;
			this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
		}, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
	};
	t.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	t.prototype.getParent = function() {
		return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
			var u = n(i);
			this.addAriaAndCollapsedClass(r(u), u)
		}, this)).end()
	};
	t.prototype.addAriaAndCollapsedClass = function(n, t) {
		var i = n.hasClass("in");
		n.attr("aria-expanded", i);
		t.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	u = n.fn.collapse;
	n.fn.collapse = i;
	n.fn.collapse.Constructor = t;
	n.fn.collapse.noConflict = function() {
		return n.fn.collapse = u, this
	};
	n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
		var u = n(this);
		u.attr("data-target") || t.preventDefault();
		var f = r(u),
			e = f.data("bs.collapse"),
			o = e ? "toggle" : u.data();
		i.call(f, o)
	})
}(jQuery); + function(n) {
	"use strict";

	function r(t) {
		var i = t.attr("data-target"),
			r;
		return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
	}

	function u(t) {
		t && 3 === t.which || (n(o).remove(), n(i).each(function() {
			var u = n(this),
				i = r(u),
				f = {
					relatedTarget: this
				};
			i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function e(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("bs.dropdown");
			u || r.data("bs.dropdown", u = new t(this));
			"string" == typeof i && u[i].call(r)
		})
	}
	var o = ".dropdown-backdrop",
		i = '[data-toggle="dropdown"]',
		t = function(t) {
			n(t).on("click.bs.dropdown", this.toggle)
		},
		f;
	t.VERSION = "3.3.7";
	t.prototype.toggle = function(t) {
		var f = n(this),
			i, o, e;
		if(!f.is(".disabled, :disabled")) {
			if(i = r(f), o = i.hasClass("open"), u(), !o) {
				if("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
						relatedTarget: this
					}, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
				f.trigger("focus").attr("aria-expanded", "true");
				i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
			}
			return !1
		}
	};
	t.prototype.keydown = function(t) {
		var e, o, s, h, f, u;
		if(/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
			if(o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
			h = " li:not(.disabled):visible a";
			f = o.find(".dropdown-menu" + h);
			f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
		}
	};
	f = n.fn.dropdown;
	n.fn.dropdown = e;
	n.fn.dropdown.Constructor = t;
	n.fn.dropdown.noConflict = function() {
		return n.fn.dropdown = f, this
	};
	n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
		n.stopPropagation()
	}).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
	"use strict";

	function i(i, r) {
		return this.each(function() {
			var f = n(this),
				u = f.data("bs.modal"),
				e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
			u || f.data("bs.modal", u = new t(this, e));
			"string" == typeof i ? u[i](r) : e.show && u.show(r)
		})
	}
	var t = function(t, i) {
			this.options = i;
			this.$body = n(document.body);
			this.$element = n(t);
			this.$dialog = this.$element.find(".modal-dialog");
			this.$backdrop = null;
			this.isShown = null;
			this.originalBodyPad = null;
			this.scrollbarWidth = 0;
			this.ignoreBackdropClick = !1;
			this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		},
		r;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 300;
	t.BACKDROP_TRANSITION_DURATION = 150;
	t.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	};
	t.prototype.toggle = function(n) {
		return this.isShown ? this.hide() : this.show(n)
	};
	t.prototype.show = function(i) {
		var r = this,
			u = n.Event("show.bs.modal", {
				relatedTarget: i
			});
		this.$element.trigger(u);
		this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			r.$element.one("mouseup.dismiss.bs.modal", function(t) {
				n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var f = n.support.transition && r.$element.hasClass("fade"),
				u;
			r.$element.parent().length || r.$element.appendTo(r.$body);
			r.$element.show().scrollTop(0);
			r.adjustDialog();
			f && r.$element[0].offsetWidth;
			r.$element.addClass("in");
			r.enforceFocus();
			u = n.Event("shown.bs.modal", {
				relatedTarget: i
			});
			f ? r.$dialog.one("bsTransitionEnd", function() {
				r.$element.trigger("focus").trigger(u)
			}).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
		}))
	};
	t.prototype.hide = function(i) {
		i && i.preventDefault();
		i = n.Event("hide.bs.modal");
		this.$element.trigger(i);
		this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
	};
	t.prototype.enforceFocus = function() {
		n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
			document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
		}, this))
	};
	t.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
			27 == n.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	};
	t.prototype.resize = function() {
		this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
	};
	t.prototype.hideModal = function() {
		var n = this;
		this.$element.hide();
		this.backdrop(function() {
			n.$body.removeClass("modal-open");
			n.resetAdjustments();
			n.resetScrollbar();
			n.$element.trigger("hidden.bs.modal")
		})
	};
	t.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove();
		this.$backdrop = null
	};
	t.prototype.backdrop = function(i) {
		var e = this,
			f = this.$element.hasClass("fade") ? "fade" : "",
			r, u;
		if(this.isShown && this.options.backdrop) {
			if(r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
			r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
			e.removeBackdrop();
			i && i()
		}, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
	};
	t.prototype.handleUpdate = function() {
		this.adjustDialog()
	};
	t.prototype.adjustDialog = function() {
		var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
		})
	};
	t.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	};
	t.prototype.checkScrollbar = function() {
		var n = window.innerWidth,
			t;
		n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
		this.bodyIsOverflowing = document.body.clientWidth < n;
		this.scrollbarWidth = this.measureScrollbar()
	};
	t.prototype.setScrollbar = function() {
		var n = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "";
		this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
	};
	t.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	};
	t.prototype.measureScrollbar = function() {
		var n = document.createElement("div"),
			t;
		return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
	};
	r = n.fn.modal;
	n.fn.modal = i;
	n.fn.modal.Constructor = t;
	n.fn.modal.noConflict = function() {
		return n.fn.modal = r, this
	};
	n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
		var r = n(this),
			f = r.attr("href"),
			u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
			e = u.data("bs.modal") ? "toggle" : n.extend({
				remote: !/#/.test(f) && f
			}, u.data(), r.data());
		r.is("a") && t.preventDefault();
		u.one("show.bs.modal", function(n) {
			n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
				r.is(":visible") && r.trigger("focus")
			})
		});
		i.call(u, e, this)
	})
}(jQuery); + function(n) {
	"use strict";

	function r(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.tooltip"),
				f = "object" == typeof i && i;
			!r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
		})
	}
	var t = function(n, t) {
			this.type = null;
			this.options = null;
			this.enabled = null;
			this.timeout = null;
			this.hoverState = null;
			this.$element = null;
			this.inState = null;
			this.init("tooltip", n, t)
		},
		i;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 150;
	t.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	};
	t.prototype.init = function(t, i, r) {
		var f, e, u, o, s;
		if(this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for(f = this.options.trigger.split(" "), e = f.length; e--;)
			if(u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
			else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
		this.options.selector ? this._options = n.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	};
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	};
	t.prototype.getOptions = function(t) {
		return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	};
	t.prototype.getDelegateOptions = function() {
		var t = {},
			i = this.getDefaults();
		return this._options && n.each(this._options, function(n, r) {
			i[n] != r && (t[n] = r)
		}), t
	};
	t.prototype.enter = function(t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		}, i.options.delay.show)) : i.show())
	};
	t.prototype.isInStateTrue = function() {
		for(var n in this.inState)
			if(this.inState[n]) return !0;
		return !1
	};
	t.prototype.leave = function(t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
		if(i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		}, i.options.delay.hide)) : i.hide()
	};
	t.prototype.show = function() {
		var c = n.Event("show.bs." + this.type),
			l, p, e, w, h;
		if(this.hasContent() && this.enabled) {
			if(this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
			var u = this,
				r = this.tip(),
				a = this.getUID(this.type);
			this.setContent();
			r.attr("id", a);
			this.$element.attr("aria-describedby", a);
			this.options.animation && r.addClass("fade");
			var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
				v = /\s?auto?\s?/i,
				y = v.test(i);
			y && (i = i.replace(v, "") || "top");
			r.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(i).data("bs." + this.type, this);
			this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
			this.$element.trigger("inserted.bs." + this.type);
			var f = this.getPosition(),
				o = r[0].offsetWidth,
				s = r[0].offsetHeight;
			y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
			w = this.getCalculatedOffset(i, f, o, s);
			this.applyPlacement(w, i);
			h = function() {
				var n = u.hoverState;
				u.$element.trigger("shown.bs." + u.type);
				u.hoverState = null;
				"out" == n && u.leave(u)
			};
			n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
		}
	};
	t.prototype.applyPlacement = function(t, i) {
		var r = this.tip(),
			l = r[0].offsetWidth,
			e = r[0].offsetHeight,
			o = parseInt(r.css("margin-top"), 10),
			s = parseInt(r.css("margin-left"), 10),
			h, f, u;
		isNaN(o) && (o = 0);
		isNaN(s) && (s = 0);
		t.top += o;
		t.left += s;
		n.offset.setOffset(r[0], n.extend({
			using: function(n) {
				r.css({
					top: Math.round(n.top),
					left: Math.round(n.left)
				})
			}
		}, t), 0);
		r.addClass("in");
		h = r[0].offsetWidth;
		f = r[0].offsetHeight;
		"top" == i && f != e && (t.top = t.top + e - f);
		u = this.getViewportAdjustedDelta(i, t, h, f);
		u.left ? t.left += u.left : t.top += u.top;
		var c = /top|bottom/.test(i),
			a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
			v = c ? "offsetWidth" : "offsetHeight";
		r.offset(t);
		this.replaceArrow(a, r[0][v], c)
	};
	t.prototype.replaceArrow = function(n, t, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
	};
	t.prototype.setContent = function() {
		var n = this.tip(),
			t = this.getTitle();
		n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
		n.removeClass("fade in top bottom left right")
	};
	t.prototype.hide = function(i) {
		function f() {
			"in" != r.hoverState && u.detach();
			r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
			i && i()
		}
		var r = this,
			u = n(this.$tip),
			e = n.Event("hide.bs." + this.type);
		if(this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
	};
	t.prototype.fixTitle = function() {
		var n = this.$element;
		(n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
	};
	t.prototype.hasContent = function() {
		return this.getTitle()
	};
	t.prototype.getPosition = function(t) {
		t = t || this.$element;
		var r = t[0],
			u = "BODY" == r.tagName,
			i = r.getBoundingClientRect();
		null == i.width && (i = n.extend({}, i, {
			width: i.right - i.left,
			height: i.bottom - i.top
		}));
		var f = window.SVGElement && r instanceof window.SVGElement,
			e = u ? {
				top: 0,
				left: 0
			} : f ? null : t.offset(),
			o = {
				scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
			},
			s = u ? {
				width: n(window).width(),
				height: n(window).height()
			} : null;
		return n.extend({}, i, o, s, e)
	};
	t.prototype.getCalculatedOffset = function(n, t, i, r) {
		return "bottom" == n ? {
			top: t.top + t.height,
			left: t.left + t.width / 2 - i / 2
		} : "top" == n ? {
			top: t.top - r,
			left: t.left + t.width / 2 - i / 2
		} : "left" == n ? {
			top: t.top + t.height / 2 - r / 2,
			left: t.left - i
		} : {
			top: t.top + t.height / 2 - r / 2,
			left: t.left + t.width
		}
	};
	t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
		var f = {
				top: 0,
				left: 0
			},
			e, u, o, s, h, c;
		return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
	};
	t.prototype.getTitle = function() {
		var t = this.$element,
			n = this.options;
		return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
	};
	t.prototype.getUID = function(n) {
		do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
		return n
	};
	t.prototype.tip = function() {
		if(!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	};
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	};
	t.prototype.enable = function() {
		this.enabled = !0
	};
	t.prototype.disable = function() {
		this.enabled = !1
	};
	t.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	};
	t.prototype.toggle = function(t) {
		var i = this;
		t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
		t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	};
	t.prototype.destroy = function() {
		var n = this;
		clearTimeout(this.timeout);
		this.hide(function() {
			n.$element.off("." + n.type).removeData("bs." + n.type);
			n.$tip && n.$tip.detach();
			n.$tip = null;
			n.$arrow = null;
			n.$viewport = null;
			n.$element = null
		})
	};
	i = n.fn.tooltip;
	n.fn.tooltip = r;
	n.fn.tooltip.Constructor = t;
	n.fn.tooltip.noConflict = function() {
		return n.fn.tooltip = i, this
	}
}(jQuery); + function(n) {
	"use strict";

	function r(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.popover"),
				f = "object" == typeof i && i;
			!r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
		})
	}
	var t = function(n, t) {
			this.init("popover", n, t)
		},
		i;
	if(!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
	t.VERSION = "3.3.7";
	t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
	});
	t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
	t.prototype.constructor = t;
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	};
	t.prototype.setContent = function() {
		var n = this.tip(),
			i = this.getTitle(),
			t = this.getContent();
		n.find(".popover-title")[this.options.html ? "html" : "text"](i);
		n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
		n.removeClass("fade top bottom left right in");
		n.find(".popover-title").html() || n.find(".popover-title").hide()
	};
	t.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	};
	t.prototype.getContent = function() {
		var t = this.$element,
			n = this.options;
		return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
	};
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	i = n.fn.popover;
	n.fn.popover = r;
	n.fn.popover.Constructor = t;
	n.fn.popover.noConflict = function() {
		return n.fn.popover = i, this
	}
}(jQuery); + function(n) {
	"use strict";

	function t(i, r) {
		this.$body = n(document.body);
		this.$scrollElement = n(n(i).is(document.body) ? window : i);
		this.options = n.extend({}, t.DEFAULTS, r);
		this.selector = (this.options.target || "") + " .nav li > a";
		this.offsets = [];
		this.targets = [];
		this.activeTarget = null;
		this.scrollHeight = 0;
		this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
		this.refresh();
		this.process()
	}

	function i(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.scrollspy"),
				f = "object" == typeof i && i;
			r || u.data("bs.scrollspy", r = new t(this, f));
			"string" == typeof i && r[i]()
		})
	}
	t.VERSION = "3.3.7";
	t.DEFAULTS = {
		offset: 10
	};
	t.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	};
	t.prototype.refresh = function() {
		var t = this,
			i = "offset",
			r = 0;
		this.offsets = [];
		this.targets = [];
		this.scrollHeight = this.getScrollHeight();
		n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
		this.$body.find(this.selector).map(function() {
			var f = n(this),
				u = f.data("target") || f.attr("href"),
				t = /^#./.test(u) && n(u);
			return t && t.length && t.is(":visible") && [
				[t[i]().top + r, u]
			] || null
		}).sort(function(n, t) {
			return n[0] - t[0]
		}).each(function() {
			t.offsets.push(this[0]);
			t.targets.push(this[1])
		})
	};
	t.prototype.process = function() {
		var n, i = this.$scrollElement.scrollTop() + this.options.offset,
			f = this.getScrollHeight(),
			e = this.options.offset + f - this.$scrollElement.height(),
			t = this.offsets,
			r = this.targets,
			u = this.activeTarget;
		if(this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
		if(u && i < t[0]) return this.activeTarget = null, this.clear();
		for(n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
	};
	t.prototype.activate = function(t) {
		this.activeTarget = t;
		this.clear();
		var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			i = n(r).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
		i.trigger("activate.bs.scrollspy")
	};
	t.prototype.clear = function() {
		n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var r = n.fn.scrollspy;
	n.fn.scrollspy = i;
	n.fn.scrollspy.Constructor = t;
	n.fn.scrollspy.noConflict = function() {
		return n.fn.scrollspy = r, this
	};
	n(window).on("load.bs.scrollspy.data-api", function() {
		n('[data-spy="scroll"]').each(function() {
			var t = n(this);
			i.call(t, t.data())
		})
	})
}(jQuery); + function(n) {
	"use strict";

	function r(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.tab");
			r || u.data("bs.tab", r = new t(this));
			"string" == typeof i && r[i]()
		})
	}
	var t = function(t) {
			this.element = n(t)
		},
		u, i;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 150;
	t.prototype.show = function() {
		var t = this.element,
			f = t.closest("ul:not(.dropdown-menu)"),
			i = t.data("target"),
			u;
		if(i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var r = f.find(".active:last a"),
				e = n.Event("hide.bs.tab", {
					relatedTarget: t[0]
				}),
				o = n.Event("show.bs.tab", {
					relatedTarget: r[0]
				});
			(r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
				r.trigger({
					type: "hidden.bs.tab",
					relatedTarget: t[0]
				});
				t.trigger({
					type: "shown.bs.tab",
					relatedTarget: r[0]
				})
			}))
		}
	};
	t.prototype.activate = function(i, r, u) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
			i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
			o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
			i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
			u && u()
		}
		var f = r.find("> .active"),
			o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
		f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
		f.removeClass("in")
	};
	u = n.fn.tab;
	n.fn.tab = r;
	n.fn.tab.Constructor = t;
	n.fn.tab.noConflict = function() {
		return n.fn.tab = u, this
	};
	i = function(t) {
		t.preventDefault();
		r.call(n(this), "show")
	};
	n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
	"use strict";

	function i(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.affix"),
				f = "object" == typeof i && i;
			r || u.data("bs.affix", r = new t(this, f));
			"string" == typeof i && r[i]()
		})
	}
	var t = function(i, r) {
			this.options = n.extend({}, t.DEFAULTS, r);
			this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
			this.$element = n(i);
			this.affixed = null;
			this.unpin = null;
			this.pinnedOffset = null;
			this.checkPosition()
		},
		r;
	t.VERSION = "3.3.7";
	t.RESET = "affix affix-top affix-bottom";
	t.DEFAULTS = {
		offset: 0,
		target: window
	};
	t.prototype.getState = function(n, t, i, r) {
		var u = this.$target.scrollTop(),
			f = this.$element.offset(),
			e = this.$target.height();
		if(null != i && "top" == this.affixed) return u < i && "top";
		if("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
		var o = null == this.affixed,
			s = o ? u : f.top,
			h = o ? e : t;
		return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
	};
	t.prototype.getPinnedOffset = function() {
		if(this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(t.RESET).addClass("affix");
		var n = this.$target.scrollTop(),
			i = this.$element.offset();
		return this.pinnedOffset = i.top - n
	};
	t.prototype.checkPositionWithEventLoop = function() {
		setTimeout(n.proxy(this.checkPosition, this), 1)
	};
	t.prototype.checkPosition = function() {
		var i, e, o;
		if(this.$element.is(":visible")) {
			var s = this.$element.height(),
				r = this.options.offset,
				f = r.top,
				u = r.bottom,
				h = Math.max(n(document).height(), n(document.body).height());
			if("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
				if(null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
				this.affixed = i;
				this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
				this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == i && this.$element.offset({
				top: h - s - u
			})
		}
	};
	r = n.fn.affix;
	n.fn.affix = i;
	n.fn.affix.Constructor = t;
	n.fn.affix.noConflict = function() {
		return n.fn.affix = r, this
	};
	n(window).on("load", function() {
		n('[data-spy="affix"]').each(function() {
			var r = n(this),
				t = r.data();
			t.offset = t.offset || {};
			null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
			null != t.offsetTop && (t.offset.top = t.offsetTop);
			i.call(r, t)
		})
	})
}(jQuery),
function() {
	"use strict";

	function f(n, i, r) {
		return(typeof i == "string" ? i : i.toString()).replace(n.define || t, function(t, i, u, f) {
			return i.indexOf("def.") === 0 && (i = i.substring(4)), i in r || (u === ":" ? (n.defineParams && f.replace(n.defineParams, function(n, t, u) {
				r[i] = {
					arg: t,
					text: u
				}
			}), i in r || (r[i] = f)) : new Function("def", "def['" + i + "']=" + f)(r)), ""
		}).replace(n.use || t, function(t, i) {
			n.useParams && (i = i.replace(n.useParams, function(n, t, i, u) {
				if(r[i] && r[i].arg && u) {
					var f = (i + ":" + u).replace(/'|\\/g, "_");
					return r.__exp = r.__exp || {}, r.__exp[f] = r[i].text.replace(new RegExp("(^|[^\\w$])" + r[i].arg + "([^\\w$])", "g"), "$1" + u + "$2"), t + "def.__exp['" + f + "']"
				}
			}));
			var u = new Function("def", "return " + i)(r);
			return u ? f(n, u, r) : u
		})
	}

	function i(n) {
		return n.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
	}
	var n = {
			version: "1.0.3",
			templateSettings: {
				evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
				interpolate: /\{\{=([\s\S]+?)\}\}/g,
				encode: /\{\{!([\s\S]+?)\}\}/g,
				use: /\{\{#([\s\S]+?)\}\}/g,
				useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
				define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
				defineParams: /^\s*([\w$]+):([\s\S]+)/,
				conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
				iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
				varname: "it",
				strip: !0,
				append: !0,
				selfcontained: !1,
				doNotSkipEncoded: !1
			},
			template: undefined,
			compile: undefined
		},
		r, u, t;
	n.encodeHTMLSource = function(n) {
		var t = {
				"&": "&#38;",
				"<": "&#60;",
				">": "&#62;",
				'"': "&#34;",
				"'": "&#39;",
				"/": "&#47;"
			},
			i = n ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(n) {
			return n ? n.toString().replace(i, function(n) {
				return t[n] || n
			}) : ""
		}
	};
	r = function() {
		return window || this || eval("this")
	}();
	typeof module != "undefined" && module.exports ? module.exports = n : typeof define == "function" && define.amd ? define(function() {
		return n
	}) : r.doT = n;
	u = {
		append: {
			start: "'+(",
			end: ")+'",
			startencode: "'+encodeHTML("
		},
		split: {
			start: "';out+=(",
			end: ");out+='",
			startencode: "';out+=encodeHTML("
		}
	};
	t = /$^/;
	n.template = function(e, o, s) {
		o = o || n.templateSettings;
		var l = o.append ? u.append : u.split,
			v, h = 0,
			a, c = o.use || o.define ? f(o, e, s || {}) : e;
		c = ("var out='" + (o.strip ? c.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : c).replace(/'|\\/g, "\\$&").replace(o.interpolate || t, function(n, t) {
			return l.start + i(t) + l.end
		}).replace(o.encode || t, function(n, t) {
			return v = !0, l.startencode + i(t) + l.end
		}).replace(o.conditional || t, function(n, t, r) {
			return t ? r ? "';}else if(" + i(r) + "){out+='" : "';}else{out+='" : r ? "';if(" + i(r) + "){out+='" : "';}out+='"
		}).replace(o.iterate || t, function(n, t, r, u) {
			return t ? (h += 1, a = u || "i" + h, t = i(t), "';var arr" + h + "=" + t + ";if(arr" + h + "){var " + r + "," + a + "=-1,l" + h + "=arr" + h + ".length-1;while(" + a + "<l" + h + "){" + r + "=arr" + h + "[" + a + "+=1];out+='") : "';} } out+='"
		}).replace(o.evaluate || t, function(n, t) {
			return "';" + i(t) + "out+='"
		}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "");
		v && (o.selfcontained || !r || r._encodeHTML || (r._encodeHTML = n.encodeHTMLSource(o.doNotSkipEncoded)), c = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + n.encodeHTMLSource.toString() + "(" + (o.doNotSkipEncoded || "") + "));" + c);
		try {
			return new Function(o.varname, c)
		} catch(y) {
			typeof console != "undefined" && console.log("Could not create a template function: " + c);
			throw y;
		}
	};
	n.compile = function(t, i) {
		return n.template(t, null, i)
	}
}(),
function(n) {
	"use strict";

	function r(n) {
		if(n) i[0] = i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0, this.blocks = i, this.buffer8 = c;
		else if(f) {
			var t = new ArrayBuffer(68);
			this.buffer8 = new Uint8Array(t);
			this.blocks = new Uint32Array(t)
		} else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0;
		this.finalized = this.hashed = !1;
		this.first = !0
	}
	var s = typeof process == "object" && process.versions && process.versions.node,
		o, e;
	s && (n = global);
	var a = !n.JS_MD5_TEST && typeof module == "object" && module.exports,
		v = typeof define == "function" && define.amd,
		f = !n.JS_MD5_TEST && typeof ArrayBuffer != "undefined",
		t = "0123456789abcdef".split(""),
		y = [128, 32768, 8388608, -2147483648],
		u = [0, 8, 16, 24],
		h = ["hex", "array", "digest", "buffer", "arrayBuffer"],
		i = [],
		c;
	f && (o = new ArrayBuffer(68), c = new Uint8Array(o), i = new Uint32Array(o));
	var l = function(n) {
			return function(t) {
				return new r(!0).update(t)[n]()
			}
		},
		p = function() {
			var n = l("hex"),
				t, i;
			for(s && (n = w(n)), n.create = function() {
					return new r
				}, n.update = function(t) {
					return n.create().update(t)
				}, t = 0; t < h.length; ++t) i = h[t], n[i] = l(i);
			return n
		},
		w = function(t) {
			var i, r;
			try {
				if(n.JS_MD5_TEST) throw "JS_MD5_TEST";
				i = require("crypto");
				r = require("buffer").Buffer
			} catch(u) {
				return console.log(u), t
			}
			return function(n) {
				if(typeof n == "string") return i.createHash("md5").update(n, "utf8").digest("hex");
				if(n.constructor == ArrayBuffer) n = new Uint8Array(n);
				else if(n.length === undefined) return t(n);
				return i.createHash("md5").update(new r(n)).digest("hex")
			}
		};
	r.prototype.update = function(t) {
		var c;
		if(!this.finalized) {
			c = typeof t != "string";
			c && t.constructor == n.ArrayBuffer && (t = new Uint8Array(t));
			for(var r, o = 0, i, h = t.length || 0, e = this.blocks, s = this.buffer8; o < h;) {
				if(this.hashed && (this.hashed = !1, e[0] = e[16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), c)
					if(f)
						for(i = this.start; o < h && i < 64; ++o) s[i++] = t[o];
					else
						for(i = this.start; o < h && i < 64; ++o) e[i >> 2] |= t[o] << u[i++ & 3];
				else if(f)
					for(i = this.start; o < h && i < 64; ++o) r = t.charCodeAt(o), r < 128 ? s[i++] = r : r < 2048 ? (s[i++] = 192 | r >> 6, s[i++] = 128 | r & 63) : r < 55296 || r >= 57344 ? (s[i++] = 224 | r >> 12, s[i++] = 128 | r >> 6 & 63, s[i++] = 128 | r & 63) : (r = 65536 + ((r & 1023) << 10 | t.charCodeAt(++o) & 1023), s[i++] = 240 | r >> 18, s[i++] = 128 | r >> 12 & 63, s[i++] = 128 | r >> 6 & 63, s[i++] = 128 | r & 63);
				else
					for(i = this.start; o < h && i < 64; ++o) r = t.charCodeAt(o), r < 128 ? e[i >> 2] |= r << u[i++ & 3] : r < 2048 ? (e[i >> 2] |= (192 | r >> 6) << u[i++ & 3], e[i >> 2] |= (128 | r & 63) << u[i++ & 3]) : r < 55296 || r >= 57344 ? (e[i >> 2] |= (224 | r >> 12) << u[i++ & 3], e[i >> 2] |= (128 | r >> 6 & 63) << u[i++ & 3], e[i >> 2] |= (128 | r & 63) << u[i++ & 3]) : (r = 65536 + ((r & 1023) << 10 | t.charCodeAt(++o) & 1023), e[i >> 2] |= (240 | r >> 18) << u[i++ & 3], e[i >> 2] |= (128 | r >> 12 & 63) << u[i++ & 3], e[i >> 2] |= (128 | r >> 6 & 63) << u[i++ & 3], e[i >> 2] |= (128 | r & 63) << u[i++ & 3]);
				this.lastByteIndex = i;
				this.bytes += i - this.start;
				i >= 64 ? (this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
			}
			return this
		}
	};
	r.prototype.finalize = function() {
		if(!this.finalized) {
			this.finalized = !0;
			var n = this.blocks,
				t = this.lastByteIndex;
			n[t >> 2] |= y[t & 3];
			t >= 56 && (this.hashed || this.hash(), n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0);
			n[14] = this.bytes << 3;
			this.hash()
		}
	};
	r.prototype.hash = function() {
		var n, r, i, t, f, e, u = this.blocks;
		this.first ? (n = u[0] - 680876937, n = (n << 7 | n >>> 25) - 271733879 << 0, t = (-1732584194 ^ n & 2004318071) + u[1] - 117830708, t = (t << 12 | t >>> 20) + n << 0, i = (-271733879 ^ t & (n ^ -271733879)) + u[2] - 1126478375, i = (i << 17 | i >>> 15) + t << 0, r = (n ^ i & (t ^ n)) + u[3] - 1316259209, r = (r << 22 | r >>> 10) + i << 0) : (n = this.h0, r = this.h1, i = this.h2, t = this.h3, n += (t ^ r & (i ^ t)) + u[0] - 680876936, n = (n << 7 | n >>> 25) + r << 0, t += (i ^ n & (r ^ i)) + u[1] - 389564586, t = (t << 12 | t >>> 20) + n << 0, i += (r ^ t & (n ^ r)) + u[2] + 606105819, i = (i << 17 | i >>> 15) + t << 0, r += (n ^ i & (t ^ n)) + u[3] - 1044525330, r = (r << 22 | r >>> 10) + i << 0);
		n += (t ^ r & (i ^ t)) + u[4] - 176418897;
		n = (n << 7 | n >>> 25) + r << 0;
		t += (i ^ n & (r ^ i)) + u[5] + 1200080426;
		t = (t << 12 | t >>> 20) + n << 0;
		i += (r ^ t & (n ^ r)) + u[6] - 1473231341;
		i = (i << 17 | i >>> 15) + t << 0;
		r += (n ^ i & (t ^ n)) + u[7] - 45705983;
		r = (r << 22 | r >>> 10) + i << 0;
		n += (t ^ r & (i ^ t)) + u[8] + 1770035416;
		n = (n << 7 | n >>> 25) + r << 0;
		t += (i ^ n & (r ^ i)) + u[9] - 1958414417;
		t = (t << 12 | t >>> 20) + n << 0;
		i += (r ^ t & (n ^ r)) + u[10] - 42063;
		i = (i << 17 | i >>> 15) + t << 0;
		r += (n ^ i & (t ^ n)) + u[11] - 1990404162;
		r = (r << 22 | r >>> 10) + i << 0;
		n += (t ^ r & (i ^ t)) + u[12] + 1804603682;
		n = (n << 7 | n >>> 25) + r << 0;
		t += (i ^ n & (r ^ i)) + u[13] - 40341101;
		t = (t << 12 | t >>> 20) + n << 0;
		i += (r ^ t & (n ^ r)) + u[14] - 1502002290;
		i = (i << 17 | i >>> 15) + t << 0;
		r += (n ^ i & (t ^ n)) + u[15] + 1236535329;
		r = (r << 22 | r >>> 10) + i << 0;
		n += (i ^ t & (r ^ i)) + u[1] - 165796510;
		n = (n << 5 | n >>> 27) + r << 0;
		t += (r ^ i & (n ^ r)) + u[6] - 1069501632;
		t = (t << 9 | t >>> 23) + n << 0;
		i += (n ^ r & (t ^ n)) + u[11] + 643717713;
		i = (i << 14 | i >>> 18) + t << 0;
		r += (t ^ n & (i ^ t)) + u[0] - 373897302;
		r = (r << 20 | r >>> 12) + i << 0;
		n += (i ^ t & (r ^ i)) + u[5] - 701558691;
		n = (n << 5 | n >>> 27) + r << 0;
		t += (r ^ i & (n ^ r)) + u[10] + 38016083;
		t = (t << 9 | t >>> 23) + n << 0;
		i += (n ^ r & (t ^ n)) + u[15] - 660478335;
		i = (i << 14 | i >>> 18) + t << 0;
		r += (t ^ n & (i ^ t)) + u[4] - 405537848;
		r = (r << 20 | r >>> 12) + i << 0;
		n += (i ^ t & (r ^ i)) + u[9] + 568446438;
		n = (n << 5 | n >>> 27) + r << 0;
		t += (r ^ i & (n ^ r)) + u[14] - 1019803690;
		t = (t << 9 | t >>> 23) + n << 0;
		i += (n ^ r & (t ^ n)) + u[3] - 187363961;
		i = (i << 14 | i >>> 18) + t << 0;
		r += (t ^ n & (i ^ t)) + u[8] + 1163531501;
		r = (r << 20 | r >>> 12) + i << 0;
		n += (i ^ t & (r ^ i)) + u[13] - 1444681467;
		n = (n << 5 | n >>> 27) + r << 0;
		t += (r ^ i & (n ^ r)) + u[2] - 51403784;
		t = (t << 9 | t >>> 23) + n << 0;
		i += (n ^ r & (t ^ n)) + u[7] + 1735328473;
		i = (i << 14 | i >>> 18) + t << 0;
		r += (t ^ n & (i ^ t)) + u[12] - 1926607734;
		r = (r << 20 | r >>> 12) + i << 0;
		f = r ^ i;
		n += (f ^ t) + u[5] - 378558;
		n = (n << 4 | n >>> 28) + r << 0;
		t += (f ^ n) + u[8] - 2022574463;
		t = (t << 11 | t >>> 21) + n << 0;
		e = t ^ n;
		i += (e ^ r) + u[11] + 1839030562;
		i = (i << 16 | i >>> 16) + t << 0;
		r += (e ^ i) + u[14] - 35309556;
		r = (r << 23 | r >>> 9) + i << 0;
		f = r ^ i;
		n += (f ^ t) + u[1] - 1530992060;
		n = (n << 4 | n >>> 28) + r << 0;
		t += (f ^ n) + u[4] + 1272893353;
		t = (t << 11 | t >>> 21) + n << 0;
		e = t ^ n;
		i += (e ^ r) + u[7] - 155497632;
		i = (i << 16 | i >>> 16) + t << 0;
		r += (e ^ i) + u[10] - 1094730640;
		r = (r << 23 | r >>> 9) + i << 0;
		f = r ^ i;
		n += (f ^ t) + u[13] + 681279174;
		n = (n << 4 | n >>> 28) + r << 0;
		t += (f ^ n) + u[0] - 358537222;
		t = (t << 11 | t >>> 21) + n << 0;
		e = t ^ n;
		i += (e ^ r) + u[3] - 722521979;
		i = (i << 16 | i >>> 16) + t << 0;
		r += (e ^ i) + u[6] + 76029189;
		r = (r << 23 | r >>> 9) + i << 0;
		f = r ^ i;
		n += (f ^ t) + u[9] - 640364487;
		n = (n << 4 | n >>> 28) + r << 0;
		t += (f ^ n) + u[12] - 421815835;
		t = (t << 11 | t >>> 21) + n << 0;
		e = t ^ n;
		i += (e ^ r) + u[15] + 530742520;
		i = (i << 16 | i >>> 16) + t << 0;
		r += (e ^ i) + u[2] - 995338651;
		r = (r << 23 | r >>> 9) + i << 0;
		n += (i ^ (r | ~t)) + u[0] - 198630844;
		n = (n << 6 | n >>> 26) + r << 0;
		t += (r ^ (n | ~i)) + u[7] + 1126891415;
		t = (t << 10 | t >>> 22) + n << 0;
		i += (n ^ (t | ~r)) + u[14] - 1416354905;
		i = (i << 15 | i >>> 17) + t << 0;
		r += (t ^ (i | ~n)) + u[5] - 57434055;
		r = (r << 21 | r >>> 11) + i << 0;
		n += (i ^ (r | ~t)) + u[12] + 1700485571;
		n = (n << 6 | n >>> 26) + r << 0;
		t += (r ^ (n | ~i)) + u[3] - 1894986606;
		t = (t << 10 | t >>> 22) + n << 0;
		i += (n ^ (t | ~r)) + u[10] - 1051523;
		i = (i << 15 | i >>> 17) + t << 0;
		r += (t ^ (i | ~n)) + u[1] - 2054922799;
		r = (r << 21 | r >>> 11) + i << 0;
		n += (i ^ (r | ~t)) + u[8] + 1873313359;
		n = (n << 6 | n >>> 26) + r << 0;
		t += (r ^ (n | ~i)) + u[15] - 30611744;
		t = (t << 10 | t >>> 22) + n << 0;
		i += (n ^ (t | ~r)) + u[6] - 1560198380;
		i = (i << 15 | i >>> 17) + t << 0;
		r += (t ^ (i | ~n)) + u[13] + 1309151649;
		r = (r << 21 | r >>> 11) + i << 0;
		n += (i ^ (r | ~t)) + u[4] - 145523070;
		n = (n << 6 | n >>> 26) + r << 0;
		t += (r ^ (n | ~i)) + u[11] - 1120210379;
		t = (t << 10 | t >>> 22) + n << 0;
		i += (n ^ (t | ~r)) + u[2] + 718787259;
		i = (i << 15 | i >>> 17) + t << 0;
		r += (t ^ (i | ~n)) + u[9] - 343485551;
		r = (r << 21 | r >>> 11) + i << 0;
		this.first ? (this.h0 = n + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = i - 1732584194 << 0, this.h3 = t + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + n << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + i << 0, this.h3 = this.h3 + t << 0)
	};
	r.prototype.hex = function() {
		this.finalize();
		var n = this.h0,
			i = this.h1,
			r = this.h2,
			u = this.h3;
		return t[n >> 4 & 15] + t[n & 15] + t[n >> 12 & 15] + t[n >> 8 & 15] + t[n >> 20 & 15] + t[n >> 16 & 15] + t[n >> 28 & 15] + t[n >> 24 & 15] + t[i >> 4 & 15] + t[i & 15] + t[i >> 12 & 15] + t[i >> 8 & 15] + t[i >> 20 & 15] + t[i >> 16 & 15] + t[i >> 28 & 15] + t[i >> 24 & 15] + t[r >> 4 & 15] + t[r & 15] + t[r >> 12 & 15] + t[r >> 8 & 15] + t[r >> 20 & 15] + t[r >> 16 & 15] + t[r >> 28 & 15] + t[r >> 24 & 15] + t[u >> 4 & 15] + t[u & 15] + t[u >> 12 & 15] + t[u >> 8 & 15] + t[u >> 20 & 15] + t[u >> 16 & 15] + t[u >> 28 & 15] + t[u >> 24 & 15]
	};
	r.prototype.toString = r.prototype.hex;
	r.prototype.digest = function() {
		this.finalize();
		var n = this.h0,
			t = this.h1,
			i = this.h2,
			r = this.h3;
		return [n & 255, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, t & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, i & 255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, r & 255, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255]
	};
	r.prototype.array = r.prototype.digest;
	r.prototype.arrayBuffer = function() {
		this.finalize();
		var t = new ArrayBuffer(16),
			n = new Uint32Array(t);
		return n[0] = this.h0, n[1] = this.h1, n[2] = this.h2, n[3] = this.h3, t
	};
	r.prototype.buffer = r.prototype.arrayBuffer;
	e = p();
	a ? module.exports = e : (n.md5 = e, v && define(function() {
		return e
	}))
}(window),
function(n, t) {
	var r = "yszlogininfo",
		i, u, f = function(t, i, u, f) {
			var e = {
				token: t || "",
				phone: i || "",
				name: u || "",
				imgurl: f || ""
			};
			n.sessionStorage.setItem(r, JSON.stringify(e))
		};
	$.yszaesdecrypt = function(n, t, i) {
		var r = "";
		try {
			r = CryptoJS.AES.decrypt(n, t, {
				iv: i,
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.ZeroPadding
			})
		} catch(u) {
			r = n
		}
		return r
	};
	$.yszsocketconnet = function(t) {
		var i = $.Deferred(),
			r;
		return u && $.socketencryptdata ? i.resolve() : (r = "ws://" + (t || "120.24.221.53:20016"), u = new WebSocket(r), u.onopen = function(t) {
			$(n).triggerHandler("ysz-socket-onopen", [t.data])
		}, u.onmessage = function(t) {
			var r, u;
			if(t && t.data) {
				if(r = JSON.parse(t.data), r.CMD == 0) return $.socketencryptdata = r.Data, i.resolve();
				r.CMD == 2 ? ($.yszlogout(), $(n).triggerHandler("ysz-logout")) : r.CMD == 3 && (u = r.Data, $(n).triggerHandler("ysz-socket-onmessage", [u]))
			}
		}, u.onclose = function(t) {
			$(n).triggerHandler("ysz-socket-onclose", [t.data])
		}, i.promise())
	};
	$.yszajax = function(n) {
		var t = {
			error: function(n) {
				console && console.log && console.log(n)
			}
		};
		n = $.extend({}, t, n);
		$.ajax(n)
	};
	$.yszconfirm = function(n, t, i) {
		i = i || "确定";
		var r = $("<div>").addClass("modal fade").attr({
				tabindex: -1,
				role: "dialog",
				"aria-labelledby": "myModalLabel",
				"aria-hidden": "true"
			}).appendTo($("body")),
			s = $("<div>").addClass("modal-dialog").appendTo(r),
			u = $("<div>").addClass("modal-content").appendTo(s),
			e = $("<div>").addClass("modal-header").appendTo(u),
			f = $("<button>").addClass("close").appendTo(e),
			l = $("<span>").attr({
				"aria-hidden": "true"
			}).html("&times;").appendTo(f),
			a = $("<span>").addClass("sr-only").text("Close").appendTo(f),
			v = $("<h4>").addClass("modal-title").text(i).appendTo(e),
			y = $("<div>").addClass("modal-body").html(n).appendTo(u),
			o = $("<div>").addClass("modal-footer").appendTo(u),
			h = $("<button>").addClass("btn btn-primary").text("确 定").appendTo(o),
			c = $("<button>").addClass("btn btn-default").text("取消").appendTo(o);
		h.click(function() {
			$.isFunction(t) && t();
			r.modal("hide")
		});
		c.click(function() {
			r.modal("hide")
		});
		f.click(function() {
			r.modal("hide")
		});
		r.on("hidden.bs.modal", function() {
			$(this).remove()
		});
		return r.modal("show")
	};
	$.yszalert = function(n, t) {
		var i = $("<div>").addClass("modal fade").attr({
				tabindex: -1,
				role: "dialog",
				"aria-hidden": "true"
			}).appendTo($("body")),
			f = $("<div>").addClass("modal-dialog").appendTo(i),
			r = $("<div>").addClass("alert alert-warning alert-dismissible fade in").attr({
				role: "alert"
			}).appendTo(f),
			u = $("<button>").addClass("close").attr({
				type: "button",
				"data-dismiss": "modal"
			}).appendTo(r),
			e = $("<span>").attr({
				"aria-hidden": "true"
			}).html("&times;").appendTo(u),
			o = $("<span>").addClass("sr-only").text("Close").appendTo(u),
			s = $("<div>").html(n).appendTo(r);
		i.on("hide.bs.modal", function() {
			t && $.isFunction(t) && t()
		});
		i.on("hidden.bs.modal", function() {
			$(this).remove()
		});
		return i.modal("show")
	};
	$.yszmodal = function(n, t) {
		var i = $("#" + n);
		if(i.length > 0) return i;
		i = $("<div>").addClass("modal fade").attr({
			id: n,
			tabindex: -1,
			"z-index": 9999,
			role: "dialog"
		});
		var r = $("<div>").addClass("modal-dialog modal-lg").appendTo(i),
			u = $("<div>").addClass("modal-content").appendTo(r),
			f = $("<div>").addClass("modal-body").appendTo(u);
		return f.append(t), i
	};
	$.yszloading = function(r) {
		if(i) i.SetMsg(r);
		else {
			var u = $("<div>").addClass("modal fade").attr({
					id: "loading20161104145101",
					tabindex: -1,
					"z-index": 9999,
					role: "dialog"
				}).appendTo($("body")),
				f = $("<div>").addClass("modal-dialog modal-lg").appendTo(u),
				h = $("<div>").addClass("modal-content").appendTo(f),
				c = $("<div>").addClass("modal-body").appendTo(h),
				e = $("<center>").addClass("ysz-loading").appendTo(c),
				l = $("<img>").addClass("img-responsive").css({
					display: "inline-block"
				}).attr({
					src: n.resource_ui_url + "/images/loading.gif",
					alt: "加载中..."
				}).appendTo(e),
				o = $("<span>").css({
					margin: "0 5px",
					"text-overflow": "ellipsis",
					overflow: "hidden",
					display: "inline-block",
					"vertical-align": "middle"
				}).width(200).appendTo(e),
				s = ($(n).height() - 100) / 2;
			s > 0 && f.css({
				"margin-top": s + "px"
			});
			u.on("hidden.bs.modal", function() {
				$(this).remove();
				i = t
			});
			i = u.modal({
				backdrop: "static",
				keyboard: !1
			});
			i.SetMsg = function(n) {
				n ? o.html(n) : o.empty()
			};
			i.SetMsg(r)
		}
		return i
	};
	$.fn.yszloading = function(t) {
		var i = $(this),
			r = $("<center>").addClass("ysz-loading").appendTo(i),
			f = $("<img>").addClass("img-responsive").attr({
				src: n.resource_ui_url + "/images/loading.gif",
				alt: "加载中..."
			}).appendTo(r),
			u;
		return t && (u = $("<center>").appendTo(i), u.html(t)), r
	};
	$.fn.yszloadmodule = function(t, i, r, u) {
		var f = $(this);
		if(f.data("yszloading20161019151801")) return f;
		if(f.data("yszloading20161019151801", !0), typeof t != "string" || typeof i != "string" || typeof r != "string") throw "参数输入有误";
		return f.attr({
			yszwin: ""
		}), $.when($.yszgetcss(t), $.yszgetjs(r)).done(function() {
			f.find("> .ysz-loading").length <= 0 && f.yszloading();
			$.yszgetui(i).done(function(t) {
				if(t) var i = $(n.doT.template(t)(u)).appendTo(f);
				f.triggerHandler("ysz-ready")
			}).always(function() {
				f.find("> .ysz-loading").remove();
				f.data("yszloading20161019151801", !1)
			})
		}).fail(function() {
			f.data("yszloading20161019151801", !1)
		}), f
	};
	$.yszicode = function() {
		var t = $.Deferred();
		return $.yszajax({
			type: "GET",
			url: n.userapi_api_url + "/api/CheckLogin/Icode",
			cache: !1,
			dataType: "json",
			success: function(n) {
				n ? t.resolve(n) : t.reject()
			},
			error: t.reject
		}), t.promise()
	};
	$.yszsendphonecode = function(t) {
		var i = $.Deferred();
		return $.yszajax({
			type: "GET",
			url: n.userapi_api_url + "/api/CheckLogin/PhoneCode",
			cache: !1,
			data: {
				phone: t
			},
			dataType: "json",
			success: function(n) {
				n ? i.resolve(n) : i.reject()
			},
			error: i.reject
		}), i.promise()
	};
	$.yszgetcss = function(n) {
		var i = $.Deferred(),
			r = $.trim(n.toLowerCase()),
			t;
		return r == "" ? i.resolve() : $('head link[href="' + r + '"]').length > 0 ? i.resolve() : (t = document.createElement("link"), t.href = r, t.rel = "stylesheet", t.type = "text/css", document.getElementsByTagName("head")[0].appendChild(t), t.addEventListener("load", i.resolve, !1), i.promise())
	};
	$.yszgetjs = function(n) {
		var i = $.Deferred(),
			r = $.trim(n.toLowerCase()),
			t;
		return r == "" ? i.resolve() : $('head script[src="' + r + '"]').length > 0 ? i.resolve() : (t = document.createElement("script"), t.src = r, t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t), t.addEventListener("load", i.resolve, !1), i.promise())
	};
	$.yszgetui = function(t) {
		var i = $.Deferred(),
			r = $.trim(t.toLowerCase()),
			u, f;
		return r == "" ? i.resolve("") : (u = n.md5(r), f = n.sessionStorage.getItem(u), f) ? i.resolve(f) : ($.yszajax({
			type: "GET",
			url: r,
			dataType: "html",
			success: function(t) {
				t ? (i.resolve(t), n.sessionStorage.setItem(u, t)) : i.reject()
			},
			error: i.reject
		}), i.promise())
	};
	$.yszwin = {};
	$.yszrefresh = function() {
		f();
		n.location.reload()
	};
	$.yszlogout = function() {
		f();
		$(n).triggerHandler("ysz-logout")
	};
	$.yszsetlogininfo = function(t, i, r, u) {
		f(t, i, r, u);
		$(n).triggerHandler("ysz-login")
	};
	$.yszlogininfo = {
		token: function() {
			return JSON.parse(n.sessionStorage.getItem(r) || "{}").token
		},
		phone: function() {
			return JSON.parse(n.sessionStorage.getItem(r) || "{}").phone
		},
		name: function() {
			return JSON.parse(n.sessionStorage.getItem(r) || "{}").name
		},
		imgurl: function() {
			return JSON.parse(n.sessionStorage.getItem(r) || "{}").imgurl
		}
	};
	$.yszloginbyweixin = function(t, i) {
		var f = "account_weixin_id20171023081501",
			r = $("#" + f),
			u;
		if(!(r.length > 0)) {
			$.yszlogout();
			r = $.yszmodal(f, $("<iframe>").attr({
				src: n.userapi_api_url + "/Weixin/Login?ProjectCode=" + n.ysz_project_key + "&callBack=" + encodeURIComponent(t),
				frameborder: 0,
				border: 0,
				marginwidth: 0,
				marginheight: 0,
				scrolling: "no",
				allowtransparency: "true"
			}).css({
				width: "100%",
				height: "100%"
			})).appendTo($("body"));
			r.on("hidden.bs.modal", function() {
				$(this).remove()
			});
			u = function(n) {
				if(!$.yszlogininfo.token()) try {
					var t = $(r.find("iframe").find("").contents().get(0).body).find("#is_success").val(),
						i = $(r.find("iframe").contents().get(0).body).find("#token").val(),
						o = $(r.find("iframe").contents().get(0).body).find("#phone").val(),
						f = $(r.find("iframe").contents().get(0).body).find("#name").val(),
						e = $(r.find("iframe").contents().get(0).body).find("#imgurl").val();
					t == "1" ? ($.yszsetlogininfo(i, f, e), r.modal("hide"), n && $.isFunction(n) && $.yszlogininfo.token() && n()) : t ? r.modal("hide") : setTimeout(function() {
						u(n)
					}, 300)
				} catch(s) {
					r.is(":hidden") && r.modal("show");
					setTimeout(function() {
						u(n)
					}, 300)
				}
			};
			r.find("iframe").load(function() {
				u(i)
			})
		}
	};
	$.yszbindphone = function(t) {
		var r, i, u;
		if(!$.yszlogininfo.phone())
			if(r = "account20170716184801", i = $("body").find("#" + r), i.length <= 0) i = $("<div>").attr({
				id: r,
				tabindex: -1,
				role: "dialog"
			}).hide().prependTo($("body")), u = $.yszloading("初始化手机绑定页面").modal("show"), i.bind("ysz-ready", function() {
				$.yszwin.account.bindphone($(this));
				i.addClass("modal fade").modal({
					backdrop: "static",
					keyboard: !1
				});
				u.modal("hide");
				i.modal("show")
			}).bind("ysz-login-success", function() {
				t && $.isFunction(t) && $.yszlogininfo.token() && t()
			}), i.yszloadmodule("", n.userapi_ui_url + "/account/bindphone", n.userapi_ui_url + "/js/bindphone");
			else {
				if(i.is(":visible")) return;
				i.modal("show")
			}
	};
	$.yszloginbyphone = function(t) {
		var r = "account20161023081501",
			i = $("body").find("#" + r),
			u;
		if(i.length <= 0) i = $("<div>").attr({
			id: r,
			tabindex: -1,
			role: "dialog"
		}).hide().prependTo($("body")), u = $.yszloading("初始化登录页面").modal("show"), i.bind("ysz-ready", function() {
			$.yszwin.account.login($(this));
			i.addClass("modal fade").modal({
				backdrop: "static",
				keyboard: !1
			});
			u.modal("hide");
			i.modal("show")
		}).bind("ysz-login-success", function() {
			t && $.isFunction(t) && $.yszlogininfo.token() && t()
		}), i.yszloadmodule("", n.userapi_ui_url + "/account/login", n.userapi_ui_url + "/js/login");
		else {
			if(i.is(":visible")) return;
			i.modal("show")
		}
	};
	$.yszregisterbyphone = function() {
		var i = "register20170109210901",
			t = $("body").find("#" + i),
			r;
		if(t.length <= 0) t = $("<div>").attr({
			id: i,
			tabindex: -1,
			role: "dialog"
		}).hide().prependTo($("body")), r = $.yszloading("初始化注册页面").modal("show"), t.bind("ysz-ready", function() {
			$.yszwin.account.register($(this));
			t.addClass("modal fade").modal({
				backdrop: "static",
				keyboard: !1
			});
			r.modal("hide");
			t.modal("show")
		}), t.yszloadmodule("", n.userapi_ui_url + "/account/register", n.userapi_ui_url + "/js/register");
		else {
			if(t.is(":visible")) return;
			t.modal("show")
		}
	};
	$.yszforgetbyphone = function() {
		var t = "forget20170109210902",
			n = $("body").find("#" + t),
			i;
		if(n.length <= 0) n = $("<div>").attr({
			id: t,
			tabindex: -1,
			role: "dialog"
		}).hide().prependTo($("body")), i = $.yszloading("初始化找回密码页面").modal("show"), n.bind("ysz-ready", function() {
			$.yszwin.account.forget($(this));
			n.addClass("modal fade").modal({
				backdrop: "static",
				keyboard: !1
			});
			i.modal("hide");
			n.modal("show")
		}), n.yszloadmodule("", "http://yszoo.com/account/forget", "http://yszoo.com/js/forget");
		else {
			if(n.is(":visible")) return;
			n.modal("show")
		}
	};
	$.yszisweixin = function() {
		var t = n.navigator.userAgent.toLowerCase();
		return t.match(/MicroMessenger/i) == "micromessenger" ? !0 : !1
	};
	$.yszlazyload = function(t) {
		t || (t = {});
		var i = {
				placeholder: n.resource_ui_url + "/images/grey.gif",
				effect: "fadeIn",
				threshold: 200,
				failurelimit: 10
			},
			r = $.extend({}, i, t);
		$("img.lazy:not([yszlazy])").attr("yszlazy", !0).lazyload(r)
	}
}(window)