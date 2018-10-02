!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("APlayer", [], t) : "object" == typeof exports ? exports.APlayer = t() : e.APlayer = t()
}(this, function () {
    return function (e) {
        function t(n) {
            if (a[n]) return a[n].exports;
            var r = a[n] = {i: n, l: !1, exports: {}};
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var a = {};
        return t.m = e, t.c = a, t.i = function (e) {
            return e
        }, t.d = function (e, a, n) {
            t.o(e, a) || Object.defineProperty(e, a, {configurable: !1, enumerable: !0, get: n})
        }, t.n = function (e) {
            var a = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(a, "a", a), a
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 1)
    }([function (e, t, a) {
        var n = a(2);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var r = {};
        r.transform = void 0;
        a(4)(n, r);
        n.locals && (e.exports = n.locals)
    }, function (e, t, a) {
        "use strict";

        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
                return a
            }
            return Array.from(e)
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var i = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }();
        console.log("\n %c APlayer 1.6.1 %c http://aplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), a(0);
        var l = [], o = function () {
            function e(t) {
                function a(e) {
                    for (var t = e.offsetLeft, a = e.offsetParent, n = void 0; null !== a;) t += a.offsetLeft, a = a.offsetParent;
                    return n = document.body.scrollLeft + document.documentElement.scrollLeft, t - n
                }

                function n(e) {
                    for (var t = e.offsetTop, a = e.offsetParent, n = void 0; null !== a;) t += a.offsetTop, a = a.offsetParent;
                    return n = document.body.scrollTop + document.documentElement.scrollTop, t - n
                }

                var i = this;
                r(this, e);
                var o = {
                    play: ["0 0 16 31", "M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],
                    pause: ["0 0 17 32", "M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],
                    "volume-up": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],
                    "volume-down": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
                    "volume-off": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
                    circulation: ["0 0 29 32", "M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"],
                    random: ["0 0 33 31", "M29.867 9.356l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.219-0.5-0.5v-3.002h-4.002c-2.079 0-3.064 1.423-3.94 3.111-0.453 0.875-0.844 1.782-1.219 2.673-1.735 4.033-3.768 8.223-8.849 8.223h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.079 0 3.064-1.423 3.94-3.111 0.453-0.875 0.844-1.782 1.219-2.673 1.735-4.033 3.768-8.223 8.849-8.223h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36zM10.262 14.781c-0.907-1.892-1.907-3.783-4.268-3.783h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.783 0 4.831 1.298 6.41 3.518-0.876 1.344-1.517 2.798-2.142 4.268zM29.867 23.363l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.235-0.5-0.5v-3.002c-4.643 0-7.504 0.547-10.396-3.518 0.86-1.344 1.501-2.798 2.126-4.268 0.907 1.892 1.907 3.783 4.268 3.783h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36z"],
                    order: ["0 0 32 32", "M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"],
                    single: ["0 0 38 32", "M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z"],
                    menu: ["0 0 22 32", "M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"]
                };
                this.getSVG = function (e) {
                    return '\n                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + o[e][0] + '" width="100%">\n                    <use xlink:href="#aplayer-' + e + '"></use>\n                    <path class="aplayer-fill" d="' + o[e][1] + '" id="aplayer-' + e + '"></path>\n                </svg>\n            '
                }, this.isMobile = /mobile/i.test(window.navigator.userAgent), this.isMobile && (t.autoplay = !1);
                var s = {
                    element: document.getElementsByClassName("aplayer")[0],
                    narrow: !1,
                    autoplay: !1,
                    mutex: !0,
                    showlrc: 0,
                    theme: "#b7daff",
                    mode: "circulation"
                };
                for (var p in s) s.hasOwnProperty(p) && !t.hasOwnProperty(p) && (t[p] = s[p]);
                if (this.option = t, this.audios = [], this.mode = t.mode, this.secondToTime = function (e) {
                        if (isNaN(e)) return "00:00";
                        var t = function (e) {
                                return e < 10 ? "0" + e : "" + e
                            }, a = parseInt(e / 60), n = parseInt(e - 60 * a), r = parseInt(a / 60),
                            i = parseInt(e / 60 - 60 * parseInt(e / 60 / 60));
                        return e >= 3600 ? t(r) + ":" + t(i) + ":" + t(n) : t(a) + ":" + t(n)
                    }, this.element = this.option.element, 2 === this.option.showlrc || !0 === this.option.showlrc) {
                    this.savelrc = [];
                    for (var c = 0; c < this.element.getElementsByClassName("aplayer-lrc-content").length; c++) this.savelrc.push(this.element.getElementsByClassName("aplayer-lrc-content")[c].innerHTML)
                }
                this.lrcs = [], this.updateBar = function (e, t, a) {
                    t = t > 0 ? t : 0, t = t < 1 ? t : 1, m[e + "Bar"].style[a] = 100 * t + "%"
                }, this.updateLrc = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.audio.currentTime;
                    if (i.lrcIndex > i.lrc.length - 1 || e < i.lrc[i.lrcIndex][0] || !i.lrc[i.lrcIndex + 1] || e >= i.lrc[i.lrcIndex + 1][0]) for (var t = 0; t < i.lrc.length; t++) e >= i.lrc[t][0] && (!i.lrc[t + 1] || e < i.lrc[t + 1][0]) && (i.lrcIndex = t, i.lrcContents.style.transform = "translateY(" + 16 * -i.lrcIndex + "px)", i.lrcContents.style.webkitTransform = "translateY(" + 16 * -i.lrcIndex + "px)", i.lrcContents.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), i.lrcContents.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"))
                };
                var u = ["play", "pause", "canplay", "playing", "ended", "error"];
                this.event = {};
                for (var d = 0; d < u.length; d++) this.event[u[d]] = [];
                this.trigger = function (e) {
                    for (var t = 0; t < i.event[e].length; t++) i.event[e][t]()
                }, this.playIndex = 0, this.multiple = "[object Array]" === Object.prototype.toString.call(t.music), this.multiple || (this.option.music = [this.option.music]), this.music = this.option.music[this.playIndex], this.option.showlrc && this.element.classList.add("aplayer-withlrc"), this.option.music.length > 1 && this.element.classList.add("aplayer-withlist"), this.multiple || "circulation" === this.mode || "order" === this.mode || (this.mode = "circulation"), this.getRandomOrder();
                for (var y = '\n            <div class="aplayer-pic" ' + (this.music.pic ? "style=\"background-image: url('" + this.music.pic + "');\"" : "") + '>\n                <div class="aplayer-button aplayer-play">\n                    <button type="button" class="aplayer-icon aplayer-icon-play">\n                        ' + this.getSVG("play") + '\n                    </button>\n                </div>\n            </div>\n            <div class="aplayer-info">\n                <div class="aplayer-music">\n                    <span class="aplayer-title"></span>\n                    <span class="aplayer-author"></span>\n                </div>\n                <div class="aplayer-lrc">\n                    <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n                </div>\n                <div class="aplayer-controller">\n                    <div class="aplayer-bar-wrap">\n                        <div class="aplayer-bar">\n                            <div class="aplayer-loaded" style="width: 0"></div>\n                            <div class="aplayer-played" style="width: 0; background: ' + this.option.theme + ';">\n                                <span class="aplayer-thumb" style="border: 1px solid ' + this.option.theme + ';"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="aplayer-time">\n                        <span class="aplayer-time-inner">\n                            - <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                        </span>\n                        <div class="aplayer-volume-wrap">\n                            <button type="button" class="aplayer-icon aplayer-icon-volume-down" ' + (this.isMobile ? 'style="display: none;"' : "") + ">\n                               " + this.getSVG("volume-down") + '\n                            </button>\n                            <div class="aplayer-volume-bar-wrap">\n                                <div class="aplayer-volume-bar">\n                                    <div class="aplayer-volume" style="height: 80%; background: ' + this.option.theme + ';"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <button type="button" class="aplayer-icon aplayer-icon-mode">\n                            ' + this.getSVG(this.mode) + '\n                        </button>\n                        <button type="button" class="aplayer-icon aplayer-icon-menu">\n                            ' + this.getSVG("menu") + '\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class="aplayer-list" ' + (this.option.listmaxheight ? 'style="max-height: ' + this.option.listmaxheight + '"' : "") + ">\n                <ol>", h = 0; h < this.option.music.length; h++) y += '\n                    <li>\n                        <span class="aplayer-list-cur" style="background: ' + this.option.theme + ';"></span>\n                        <span class="aplayer-list-index">' + (h + 1) + '</span>\n                        <span class="aplayer-list-title">' + this.option.music[h].title + '</span>\n                        <span class="aplayer-list-author">' + this.option.music[h].author + "</span>\n                    </li>";
                y += "\n                </ol>\n            </div>", this.element.innerHTML = y, this.element.offsetWidth < 300 && (this.element.getElementsByClassName("aplayer-icon-mode")[0].style.display = "none"), this.ptime = this.element.getElementsByClassName("aplayer-ptime")[0], this.element.getElementsByClassName("aplayer-info")[0].offsetWidth < 200 && this.element.getElementsByClassName("aplayer-time")[0].classList.add("aplayer-time-narrow");
                var m = {};
                m.barWrap = this.element.getElementsByClassName("aplayer-bar-wrap")[0], this.option.narrow && this.element.classList.add("aplayer-narrow"), this.button = this.element.getElementsByClassName("aplayer-button")[0], this.button.addEventListener("click", function (e) {
                    i.toggle()
                });
                var f = this.element.getElementsByClassName("aplayer-list")[0];
                f.addEventListener("click", function (e) {
                    var t = void 0;
                    t = "LI" === e.target.tagName.toUpperCase() ? e.target : e.target.parentElement;
                    var a = parseInt(t.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
                    a !== i.playIndex ? (i.setMusic(a), i.play()) : i.toggle()
                }), m.playedBar = this.element.getElementsByClassName("aplayer-played")[0], m.loadedBar = this.element.getElementsByClassName("aplayer-loaded")[0];
                var v = this.element.getElementsByClassName("aplayer-thumb")[0], g = void 0;
                m.barWrap.addEventListener("click", function (e) {
                    var t = e || window.event;
                    g = m.barWrap.clientWidth;
                    var n = (t.clientX - a(m.barWrap)) / g;
                    isNaN(i.audio.duration) ? i.updateBar("played", 0, "width") : (i.updateBar("played", n, "width"), i.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = i.secondToTime(n * i.audio.duration), i.audio.currentTime = parseFloat(m.playedBar.style.width) / 100 * i.audio.duration)
                }), v.addEventListener("mouseover", function () {
                    v.style.background = i.option.theme
                }), v.addEventListener("mouseout", function () {
                    v.style.background = "#fff"
                });
                var b = function (e) {
                    var t = e || window.event, n = (t.clientX - a(m.barWrap)) / g;
                    n = n > 0 ? n : 0, n = n < 1 ? n : 1, i.updateBar("played", n, "width"), i.option.showlrc && i.updateLrc(parseFloat(m.playedBar.style.width) / 100 * i.audio.duration), i.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = i.secondToTime(n * i.audio.duration)
                }, x = function e() {
                    document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", b), isNaN(i.audio.duration) ? i.updateBar("played", 0, "width") : (i.audio.currentTime = parseFloat(m.playedBar.style.width) / 100 * i.audio.duration, i.playedTime = setInterval(function () {
                        i.updateBar("played", i.audio.currentTime / i.audio.duration, "width"), i.option.showlrc && i.updateLrc(), i.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = i.secondToTime(i.audio.currentTime), i.trigger("playing")
                    }, 100))
                };
                v.addEventListener("mousedown", function () {
                    g = m.barWrap.clientWidth, clearInterval(i.playedTime), document.addEventListener("mousemove", b), document.addEventListener("mouseup", x)
                }), m.volumeBar = this.element.getElementsByClassName("aplayer-volume")[0];
                var w = this.element.getElementsByClassName("aplayer-volume-bar")[0];
                this.volumeicon = this.element.getElementsByClassName("aplayer-time")[0].getElementsByTagName("button")[0];
                this.element.getElementsByClassName("aplayer-volume-bar-wrap")[0].addEventListener("click", function (e) {
                    var t = e || window.event, a = (35 - t.clientY + n(w)) / 35;
                    a = a > 0 ? a : 0, a = a < 1 ? a : 1, i.volume(a)
                }), this.volumeicon.addEventListener("click", function () {
                    i.audio.muted ? (i.audio.muted = !1, i.volumeicon.className = 1 === i.audio.volume ? "aplayer-icon aplayer-icon-volume-up" : "aplayer-icon aplayer-icon-volume-down", 1 === i.audio.volume ? (i.volumeicon.className = "aplayer-icon aplayer-icon-volume-up", i.volumeicon.innerHTML = i.getSVG("volume-up")) : (i.volumeicon.className = "aplayer-icon aplayer-icon-volume-down", i.volumeicon.innerHTML = i.getSVG("volume-down")), i.updateBar("volume", i.audio.volume, "height")) : (i.audio.muted = !0, i.volumeicon.className = "aplayer-icon aplayer-icon-volume-off", i.volumeicon.innerHTML = i.getSVG("volume-off"), i.updateBar("volume", 0, "height"))
                });
                var A = this.element.getElementsByClassName("aplayer-icon-mode")[0];
                A.addEventListener("click", function () {
                    i.multiple ? "random" === i.mode ? i.mode = "single" : "single" === i.mode ? i.mode = "order" : "order" === i.mode ? i.mode = "circulation" : "circulation" === i.mode && (i.mode = "random") : "circulation" === i.mode ? i.mode = "order" : i.mode = "circulation", A.innerHTML = i.getSVG(i.mode), i.audio.loop = !(i.multiple || "order" === i.mode)
                }), f.style.height = f.offsetHeight + "px", this.element.getElementsByClassName("aplayer-icon-menu")[0].addEventListener("click", function () {
                    f.classList.contains("aplayer-list-hide") ? f.classList.remove("aplayer-list-hide") : f.classList.add("aplayer-list-hide")
                }), "random" === this.mode ? this.setMusic(this.randomOrder[0]) : this.setMusic(0), l.push(this)
            }

            return i(e, [{
                key: "setMusic", value: function (e) {
                    var t = this;
                    void 0 !== e && (this.playIndex = e);
                    var a = this.playIndex;
                    this.music = this.option.music[a], this.music.pic && (this.element.getElementsByClassName("aplayer-pic")[0].style.backgroundImage = "url('" + this.music.pic + "')"), this.element.getElementsByClassName("aplayer-title")[0].innerHTML = this.music.title, this.element.getElementsByClassName("aplayer-author")[0].innerHTML = " - " + this.music.author, this.element.getElementsByClassName("aplayer-list-light")[0] && this.element.getElementsByClassName("aplayer-list-light")[0].classList.remove("aplayer-list-light"), this.element.getElementsByClassName("aplayer-list")[0].getElementsByTagName("li")[a].classList.add("aplayer-list-light"), !this.isMobile && this.audio && (this.pause(), this.audio.currentTime = 0), this.element.getElementsByClassName("aplayer-list")[0].scrollTop = 33 * a, this.isMobile && this.audio ? (this.audio.src = this.music.url, this.play()) : !this.isMobile && this.audios[a] ? (this.audio = this.audios[a], this.audio.volume = parseInt(this.element.getElementsByClassName("aplayer-volume")[0].style.height) / 100, this.audio.currentTime = 0) : (this.audio = document.createElement("audio"), this.audio.src = this.music.url, this.audio.preload = this.option.preload ? this.option.preload : "auto", this.audio.addEventListener("play", function () {
                        if (t.button.classList.contains("aplayer-play")) {
                            if (t.button.classList.remove("aplayer-play"), t.button.classList.add("aplayer-pause"), t.button.innerHTML = "", setTimeout(function () {
                                    t.button.innerHTML = '\n                                    <button type="button" class="aplayer-icon aplayer-icon-pause">' + t.getSVG("pause") + "     </button>"
                                }, 100), t.option.mutex) for (var e = 0; e < l.length; e++) t != l[e] && l[e].pause();
                            t.playedTime && clearInterval(t.playedTime), t.playedTime = setInterval(function () {
                                t.updateBar("played", t.audio.currentTime / t.audio.duration, "width"), t.option.showlrc && t.updateLrc(), t.ptime.innerHTML = t.secondToTime(t.audio.currentTime), t.trigger("playing")
                            }, 100), t.trigger("play")
                        }
                    }), this.audio.addEventListener("pause", function () {
                        t.button && (t.button.classList.contains("aplayer-pause") || t.ended) && (t.ended = !1, t.button.classList.remove("aplayer-pause"), t.button.classList.add("aplayer-play"), t.button.innerHTML = "", setTimeout(function () {
                            t.button.innerHTML = '\n                                    <button type="button" class="aplayer-icon aplayer-icon-play">' + t.getSVG("play") + "     </button>"
                        }, 100), clearInterval(t.playedTime), t.trigger("pause"))
                    }), this.audio.addEventListener("durationchange", function () {
                        1 !== t.audio.duration && (t.element.getElementsByClassName("aplayer-dtime")[0].innerHTML = t.secondToTime(t.audio.duration))
                    }), this.audio.addEventListener("progress", function () {
                        var e = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.audio.duration : 0;
                        t.updateBar("loaded", e, "width")
                    }), this.audio.addEventListener("error", function () {
                        t.element.getElementsByClassName("aplayer-author")[0].innerHTML = " - Error happens 鈺ワ箯鈺�", t.trigger("pause")
                    }), this.audio.addEventListener("canplay", function () {
                        t.trigger("canplay")
                    }), this.ended = !1, this.audio.addEventListener("ended", function () {
                        t.multiple ? 0 !== t.audio.currentTime && ("random" === t.mode ? t.setMusic(t.nextRandomNum()) : "single" === t.mode ? t.setMusic(t.playIndex) : "order" === t.mode ? t.playIndex < t.option.music.length - 1 ? t.setMusic(++t.playIndex) : (t.ended = !0, t.pause(), t.trigger("ended")) : "circulation" === t.mode && (t.playIndex < t.option.music.length - 1 ? t.setMusic(++t.playIndex) : t.setMusic(0))) : "order" === t.mode && (t.ended = !0, t.pause(), t.trigger("ended"))
                    }), this.audio.volume = parseInt(this.element.getElementsByClassName("aplayer-volume")[0].style.height) / 100, this.audio.loop = !(this.multiple || "order" === this.mode), this.audios[a] = this.audio);
                    var n = function (e) {
                        for (var t = e.split("\n"), a = [], n = t.length, r = 0; r < n; r++) {
                            var i = t[r].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g),
                                l = t[r].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, "").replace(/^\s+|\s+$/g, "");
                            if (null != i) for (var o = i.length, s = 0; s < o; s++) {
                                var p = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(i[s]),
                                    c = 60 * p[1] + parseInt(p[2]) + parseInt(p[3]) / (2 === (p[3] + "").length ? 100 : 1e3);
                                a.push([c, l])
                            }
                        }
                        return a.sort(function (e, t) {
                            return e[0] - t[0]
                        }), a
                    };
                    if (this.option.showlrc) {
                        var r = a;
                        if (!this.lrcs[r]) {
                            var i = "";
                            if (1 === this.option.showlrc) i = this.option.music[r].lrc; else if (2 === this.option.showlrc || !0 === this.option.showlrc) i = this.savelrc[r]; else if (3 === this.option.showlrc) {
                                var o = new XMLHttpRequest;
                                o.onreadystatechange = function () {
                                    if (4 === o.readyState) {
                                        o.status >= 200 && o.status < 300 || 304 === o.status ? (i = o.responseText, t.lrcs[r] = n(i)) : (console.log("Request was unsuccessful: " + o.status), t.lrcs[r] = [["00:00", "Not available"]]), t.lrc = t.lrcs[r];
                                        var e = "";
                                        t.lrcContents = t.element.getElementsByClassName("aplayer-lrc-contents")[0];
                                        for (var a = 0; a < t.lrc.length; a++) e += "<p>" + t.lrc[a][1] + "</p>";
                                        t.lrcContents.innerHTML = e, t.lrcIndex || (t.lrcIndex = 0), t.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"), t.lrcContents.style.transform = "translateY(0px)", t.lrcContents.style.webkitTransform = "translateY(0px)"
                                    }
                                };
                                var s = void 0;
                                s = this.option.music[r].lrc, o.open("get", s, !0), o.send(null)
                            }
                            i ? this.lrcs[r] = n(i) : 3 === this.option.showlrc ? this.lrcs[r] = [["00:00", "Loading"]] : this.lrcs[r] = [["00:00", "Not available"]]
                        }
                        this.lrc = this.lrcs[r];
                        var p = "";
                        this.lrcContents = this.element.getElementsByClassName("aplayer-lrc-contents")[0];
                        for (var c = 0; c < this.lrc.length; c++) p += "<p>" + this.lrc[c][1] + "</p>";
                        this.lrcContents.innerHTML = p, this.lrcIndex || (this.lrcIndex = 0), this.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"), this.lrcContents.style.transform = "translateY(0px)", this.lrcContents.style.webkitTransform = "translateY(0px)"
                    }
                    1 !== this.audio.duration && (this.element.getElementsByClassName("aplayer-dtime")[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : "00:00"), this.option.autoplay && !this.isMobile && this.play(), this.option.autoplay = !0
                }
            }, {
                key: "play", value: function (e) {
                    "[object Number]" === Object.prototype.toString.call(e) && (this.audio.currentTime = e), this.audio.paused && this.audio.play()
                }
            }, {
                key: "pause", value: function () {
                    this.audio.paused || this.audio.pause()
                }
            }, {
                key: "volume", value: function (e) {
                    this.updateBar("volume", e, "height"), this.audio.volume = e, this.audio.muted && (this.audio.muted = !1), 1 === e ? (this.volumeicon.className = "aplayer-icon aplayer-icon-volume-up", this.volumeicon.innerHTML = this.getSVG("volume-up")) : (this.volumeicon.className = "aplayer-icon aplayer-icon-volume-down", this.volumeicon.innerHTML = this.getSVG("volume-down"))
                }
            }, {
                key: "on", value: function (e, t) {
                    "function" == typeof t && this.event[e].push(t)
                }
            }, {
                key: "toggle", value: function () {
                    this.button.classList.contains("aplayer-play") ? this.play() : this.button.classList.contains("aplayer-pause") && this.pause()
                }
            }, {
                key: "getRandomOrder", value: function () {
                    function e(e, t) {
                        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                    }

                    this.multiple && (this.randomOrder = function (t) {
                        for (var a, n = t.length, r = new Array(n), i = 0; i < n; i++) a = e(0, i), a !== i && (r[i] = r[a]), r[a] = t[i];
                        return r
                    }([].concat(n(Array(this.option.music.length))).map(function (e, t) {
                        return t
                    })))
                }
            }, {
                key: "nextRandomNum", value: function () {
                    if (this.multiple) {
                        var e = this.randomOrder.indexOf(this.playIndex);
                        return e === this.randomOrder.length - 1 ? this.randomOrder[0] : this.randomOrder[e + 1]
                    }
                    return 0
                }
            }, {
                key: "destroy", value: function () {
                    l.splice(l.indexOf(this), 1), this.pause(), this.element.innerHTML = "", clearInterval(this.playedTime);
                    for (var e in this) this.hasOwnProperty(e) && delete this[e]
                }
            }, {
                key: "addMusic", value: function (e) {
                    this.option.music = this.option.music.concat(e);
                    for (var t = this.element.getElementsByClassName("aplayer-list")[0], a = t.getElementsByTagName("ol")[0], n = "", r = 0; r < e.length; r++) n += '\n                <li>\n                    <span class="aplayer-list-cur" style="background: ' + this.option.theme + ';"></span>\n                    <span class="aplayer-list-index">' + (this.option.music.length - e.length + r + 1) + '</span>\n                    <span class="aplayer-list-title">' + e[r].title + '</span>\n                    <span class="aplayer-list-author">' + e[r].author + "</span>\n                </li>";
                    a.innerHTML += n, this.multiple || (this.multiple = !0, this.element.classList.add("aplayer-withlist"), this.audio.loop = !1), t.style.height = "auto", t.style.height = t.offsetHeight + "px", this.getRandomOrder()
                }
            }]), e
        }();
        e.exports = o
    }, function (e, t, a) {
        t = e.exports = a(3)(void 0), t.push([e.i, ".aplayer-narrow {\n  width: 66px; }\n  .aplayer-narrow .aplayer-info {\n    display: none; }\n\n.aplayer-withlrc.aplayer-narrow {\n  width: 90px; }\n\n.aplayer-withlrc.aplayer .aplayer-pic {\n  height: 90px;\n  width: 90px; }\n\n.aplayer-withlrc.aplayer .aplayer-info {\n  margin-left: 90px;\n  height: 90px; }\n\n.aplayer-withlrc.aplayer .aplayer-lrc {\n  display: block; }\n\n.aplayer-withlrc.aplayer .aplayer-info {\n  padding: 10px 7px 0 7px; }\n\n.aplayer-withlist.aplayer .aplayer-info {\n  border-bottom: 1px solid #e9e9e9; }\n\n.aplayer-withlist.aplayer .aplayer-list {\n  display: block; }\n\n.aplayer-withlist.aplayer .aplayer-icon-menu {\n  display: inline !important; }\n\n.aplayer {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 5px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: initial; }\n  .aplayer * {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n  .aplayer .aplayer-icon {\n    width: 15px;\n    height: 15px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    opacity: .8;\n    vertical-align: middle;\n    padding: 0;\n    font-size: 12px;\n    margin: 0;\n    display: inline; }\n    .aplayer .aplayer-icon .aplayer-fill {\n      -webkit-transition: all .2s ease-in-out;\n      transition: all .2s ease-in-out; }\n  .aplayer .aplayer-lrc-content {\n    display: none; }\n  .aplayer .aplayer-pic {\n    position: relative;\n    float: left;\n    height: 66px;\n    width: 66px;\n    background-image: url(" + a(6) + ");\n    background-size: 100%;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease; }\n    .aplayer .aplayer-pic .aplayer-button {\n      position: absolute;\n      border-radius: 50%;\n      opacity: 0.8;\n      cursor: pointer;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n      background: rgba(0, 0, 0, 0.2);\n      -webkit-transition: all 0.1s ease;\n      transition: all 0.1s ease; }\n      .aplayer .aplayer-pic .aplayer-button:hover {\n        opacity: 1; }\n      .aplayer .aplayer-pic .aplayer-button .aplayer-fill {\n        fill: #fff; }\n    .aplayer .aplayer-pic .aplayer-hide {\n      display: none; }\n    .aplayer .aplayer-pic .aplayer-play {\n      width: 26px;\n      height: 26px;\n      border: 2px solid #fff;\n      bottom: 50%;\n      right: 50%;\n      margin: 0 -15px -15px 0; }\n      .aplayer .aplayer-pic .aplayer-play .aplayer-icon-play {\n        position: absolute;\n        top: 3px;\n        left: 4px;\n        height: 20px;\n        width: 20px; }\n    .aplayer .aplayer-pic .aplayer-pause {\n      width: 16px;\n      height: 16px;\n      border: 2px solid #fff;\n      bottom: 4px;\n      right: 4px; }\n      .aplayer .aplayer-pic .aplayer-pause .aplayer-icon-pause {\n        position: absolute;\n        top: 2px;\n        left: 2px;\n        height: 12px;\n        width: 12px; }\n  .aplayer .aplayer-info {\n    margin-left: 66px;\n    padding: 14px 7px 0 10px;\n    height: 66px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .aplayer .aplayer-info .aplayer-music {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      margin: 0 0 13px 5px;\n      -webkit-user-select: text;\n         -moz-user-select: text;\n          -ms-user-select: text;\n              user-select: text;\n      cursor: default;\n      padding-bottom: 2px; }\n      .aplayer .aplayer-info .aplayer-music .aplayer-title {\n        font-size: 14px; }\n      .aplayer .aplayer-info .aplayer-music .aplayer-author {\n        font-size: 12px;\n        color: #666; }\n    .aplayer .aplayer-info .aplayer-controller {\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap {\n        margin: 0 0 0 5px;\n        padding: 4px 0;\n        cursor: pointer !important;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar {\n          position: relative;\n          height: 2px;\n          width: 100%;\n          background: #cdcdcd; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded {\n            position: absolute;\n            left: 0;\n            top: 0;\n            bottom: 0;\n            background: #aaa;\n            height: 2px;\n            -webkit-transition: all 0.5s ease;\n            transition: all 0.5s ease; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played {\n            position: absolute;\n            left: 0;\n            top: 0;\n            bottom: 0;\n            height: 2px; }\n            .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb {\n              position: absolute;\n              top: 0;\n              right: 5px;\n              margin-top: -4px;\n              margin-right: -10px;\n              height: 8px;\n              width: 8px;\n              border-radius: 50%;\n              background: #fff;\n              cursor: pointer !important; }\n      .aplayer .aplayer-info .aplayer-controller .aplayer-time {\n        position: relative;\n        right: 0;\n        bottom: 3px;\n        height: 17px;\n        color: #999;\n        font-size: 11px;\n        padding-left: 7px; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner {\n          vertical-align: middle; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon {\n          cursor: pointer;\n          -webkit-transition: all 0.2s ease;\n          transition: all 0.2s ease; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill {\n            fill: #666; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-mode {\n            margin-right: 4px; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover .aplayer-fill {\n            fill: #000; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-menu {\n            display: none; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-mode {\n          display: none; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu {\n          display: none; }\n      .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap {\n        position: relative;\n        display: inline-block;\n        margin-left: 3px;\n        cursor: pointer !important; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap {\n          display: block; }\n        .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap {\n          display: none;\n          position: absolute;\n          bottom: 15px;\n          right: -3px;\n          width: 25px;\n          height: 40px;\n          z-index: 99; }\n          .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar {\n            position: absolute;\n            bottom: 0;\n            right: 10px;\n            width: 5px;\n            height: 35px;\n            background: #aaa; }\n            .aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume {\n              position: absolute;\n              bottom: 0;\n              right: 0;\n              width: 5px;\n              -webkit-transition: all 0.1s ease;\n              transition: all 0.1s ease; }\n  .aplayer .aplayer-lrc {\n    display: none;\n    position: relative;\n    height: 30px;\n    text-align: center;\n    overflow: hidden;\n    margin: -10px 0 7px; }\n    .aplayer .aplayer-lrc:before {\n      position: absolute;\n      top: 0;\n      z-index: 1;\n      display: block;\n      overflow: hidden;\n      width: 100%;\n      height: 10%;\n      content: ' ';\n      background: -webkit-gradient(linear, left top, left bottom, from(white), to(rgba(255, 255, 255, 0)));\n      background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); }\n    .aplayer .aplayer-lrc:after {\n      position: absolute;\n      bottom: 0;\n      z-index: 1;\n      display: block;\n      overflow: hidden;\n      width: 100%;\n      height: 33%;\n      content: ' ';\n      background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.8)));\n      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ccffffff',GradientType=0 ); }\n    .aplayer .aplayer-lrc p {\n      font-size: 12px;\n      color: #666;\n      line-height: 16px !important;\n      height: 16px !important;\n      padding: 0 !important;\n      margin: 0 !important;\n      -webkit-transition: all 0.5s ease-out;\n      transition: all 0.5s ease-out;\n      opacity: 0.4;\n      overflow: hidden; }\n      .aplayer .aplayer-lrc p.aplayer-lrc-current {\n        opacity: 1;\n        overflow: visible;\n        height: initial !important; }\n    .aplayer .aplayer-lrc .aplayer-lrc-contents {\n      width: 100%;\n      -webkit-transition: all 0.5s ease-out;\n      transition: all 0.5s ease-out;\n      -webkit-user-select: text;\n         -moz-user-select: text;\n          -ms-user-select: text;\n              user-select: text;\n      cursor: default; }\n  .aplayer .aplayer-list {\n    overflow: auto;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    will-change: height;\n    display: none; }\n    .aplayer .aplayer-list.aplayer-list-hide {\n      height: 0 !important; }\n    .aplayer .aplayer-list::-webkit-scrollbar {\n      width: 5px; }\n    .aplayer .aplayer-list::-webkit-scrollbar-track {\n      background-color: #f9f9f9; }\n    .aplayer .aplayer-list::-webkit-scrollbar-thumb {\n      border-radius: 3px;\n      background-color: #eee; }\n    .aplayer .aplayer-list::-webkit-scrollbar-thumb:hover {\n      background-color: #ccc; }\n    .aplayer .aplayer-list ol {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n      .aplayer .aplayer-list ol li {\n        position: relative;\n        height: 32px;\n        line-height: 32px;\n        padding: 0 15px;\n        font-size: 12px;\n        border-top: 1px solid #e9e9e9;\n        cursor: pointer;\n        -webkit-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n        overflow: hidden; }\n        .aplayer .aplayer-list ol li:first-child {\n          border-top: none; }\n        .aplayer .aplayer-list ol li:hover {\n          background: #efefef; }\n        .aplayer .aplayer-list ol li.aplayer-list-light {\n          background: #e9e9e9; }\n          .aplayer .aplayer-list ol li.aplayer-list-light .aplayer-list-cur {\n            display: inline-block; }\n        .aplayer .aplayer-list ol li .aplayer-list-cur {\n          display: none;\n          width: 3px;\n          height: 22px;\n          position: absolute;\n          left: 0;\n          top: 5px;\n          cursor: pointer; }\n        .aplayer .aplayer-list ol li .aplayer-list-index {\n          color: #666;\n          margin-right: 12px;\n          cursor: pointer; }\n        .aplayer .aplayer-list ol li .aplayer-list-author {\n          color: #666;\n          float: right;\n          cursor: pointer; }\n\n@-webkit-keyframes aplayer-roll {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n\n@keyframes aplayer-roll {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n", ""])
    }, function (e, t) {
        function a(e, t) {
            var a = e[1] || "", r = e[3];
            if (!r) return a;
            if (t && "function" == typeof btoa) {
                var i = n(r);
                return [a].concat(r.sources.map(function (e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                })).concat([i]).join("\n")
            }
            return [a].join("\n")
        }

        function n(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }

        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var n = a(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function (e, a) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (n[i] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var l = e[r];
                    "number" == typeof l[0] && n[l[0]] || (a && !l[2] ? l[2] = a : a && (l[2] = "(" + l[2] + ") and (" + a + ")"), t.push(l))
                }
            }, t
        }
    }, function (e, t, a) {
        function n(e, t) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a], r = h[n.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) r.parts.push(c(n.parts[i], t))
                } else {
                    for (var l = [], i = 0; i < n.parts.length; i++) l.push(c(n.parts[i], t));
                    h[n.id] = {id: n.id, refs: 1, parts: l}
                }
            }
        }

        function r(e, t) {
            for (var a = [], n = {}, r = 0; r < e.length; r++) {
                var i = e[r], l = t.base ? i[0] + t.base : i[0], o = i[1], s = i[2], p = i[3],
                    c = {css: o, media: s, sourceMap: p};
                n[l] ? n[l].parts.push(c) : a.push(n[l] = {id: l, parts: [c]})
            }
            return a
        }

        function i(e, t) {
            var a = f(e.insertInto);
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = b[b.length - 1];
            if ("top" === e.insertAt) n ? n.nextSibling ? a.insertBefore(t, n.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), b.push(t); else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                a.appendChild(t)
            }
        }

        function l(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }

        function o(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", p(t, e.attrs), i(e, t), t
        }

        function s(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", p(t, e.attrs), i(e, t), t
        }

        function p(e, t) {
            Object.keys(t).forEach(function (a) {
                e.setAttribute(a, t[a])
            })
        }

        function c(e, t) {
            var a, n, r, i;
            if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function () {
                };
                e.css = i
            }
            if (t.singleton) {
                var p = g++;
                a = v || (v = o(t)), n = u.bind(null, a, p, !1), r = u.bind(null, a, p, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = s(t), n = y.bind(null, a, t), r = function () {
                l(a), a.href && URL.revokeObjectURL(a.href)
            }) : (a = o(t), n = d.bind(null, a), r = function () {
                l(a)
            });
            return n(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    n(e = t)
                } else r()
            }
        }

        function u(e, t, a, n) {
            var r = a ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = w(t, r); else {
                var i = document.createTextNode(r), l = e.childNodes;
                l[t] && e.removeChild(l[t]), l.length ? e.insertBefore(i, l[t]) : e.appendChild(i)
            }
        }

        function d(e, t) {
            var a = t.css, n = t.media;
            if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = a; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(a))
            }
        }

        function y(e, t, a) {
            var n = a.css, r = a.sourceMap, i = void 0 === t.convertToAbsoluteUrls && r;
            (t.convertToAbsoluteUrls || i) && (n = x(n)), r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var l = new Blob([n], {type: "text/css"}), o = e.href;
            e.href = URL.createObjectURL(l), o && URL.revokeObjectURL(o)
        }

        var h = {}, m = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        }(function () {
            return window && document && document.all && !window.atob
        }), f = function (e) {
            var t = {};
            return function (a) {
                return void 0 === t[a] && (t[a] = e.call(this, a)), t[a]
            }
        }(function (e) {
            return document.querySelector(e)
        }), v = null, g = 0, b = [], x = a(5);
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = m()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var a = r(e, t);
            return n(a, t), function (e) {
                for (var i = [], l = 0; l < a.length; l++) {
                    var o = a[l], s = h[o.id];
                    s.refs-- , i.push(s)
                }
                if (e) {
                    n(r(e, t), t)
                }
                for (var l = 0; l < i.length; l++) {
                    var s = i[l];
                    if (0 === s.refs) {
                        for (var p = 0; p < s.parts.length; p++) s.parts[p]();
                        delete h[s.id]
                    }
                }
            }
        };
        var w = function () {
            var e = [];
            return function (t, a) {
                return e[t] = a, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var a = t.protocol + "//" + t.host, n = a + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var r = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return e;
                var i;
                return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? a + r : n + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
            })
        }
    }, function (e, t) {
        e.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABkAGQDASIAAhEBAxEB/8QAgwAAAgIDAQAAAAAAAAAAAAAAAAYBBQIDBAcBAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIEBAEJBgMHBQAAAAAAAQIDABEEBSExEgZBUWFxgaGxIhMUkTJCUmIVI0MWwdHh8XKSsvCCojNzEQEBAQEBAQEBAAAAAAAAAAAAAREhMVFBYf/aAAwDAQACEQMRAD8AaJ8vCJEYTjIZxtlIicc40VFZS0idVS6lpP1HE9Aind3dSrWWbdTPVruXgSQn98Awd0SBC+mp3fVYtUjFGk5F5U1S6Me6Mvtu6ncXbo01zNtzl2CJovwZxML/ANl3DwvZn/5fxiPt+72sWbkw/Lg4jTP/AImGhhiYWlXXdlD4q23IqWh7zlOZ/wCGrujpt+7bTWKDTijSvEy0O4CfJqy9sNMXmWMTECRExjzxMUEEEEBxLcbbQXHVBCEialKMgBFBU7jqax/0dmbU64fzJYy+aZwSOcxT7kvdPXVJpU6jTU5IC0HBauKucDhF7tS3ejolVJK51UlJQrCSRkeuJqppdspcV593dNU8cS0kkNjpPvKi8ZaZp2w3TtpabGSUAJHZEgzjXUVdPStebUOBpE5AnieQDieiKjeYyELVVva3ML0IZddI44IHaZxtod52upcDbqV0ylGSVLkUTP1JyibDDBOJxzjTUF8UzqqdIVUBtRZByK9J09seb1lzuKawuIqngRLSorUDMZ6k8DPMSwhaSPTwSDFbd7Bb7s2rzkBupl4KlIksH6vmHTE2GucuNqp6p3/tIKXCOKknST1xYgZDlihPsNxrLTXItFevXTuLU02omZadQZFP9Jw9ohxjz2tfF03GhFKdQXV6kqHINCJ/2tTj0KYJiQow6oIJY5QRR5hYLM5cK9KHkFNO1JbxIImOCeuPREyAAAkAJARyW63s26n8hlSnATqUtZmonnlKOucokhQtxDTa3XTpbbSVrVyJSNRhFq6usvNyap0K0v1JA5mG1YhtPJJOKzxOENG5HS3Yq1ScyhKSOZS0pPZCts8+ZfQtWK/LcUOk/wA4X3FhwoLJbKBgMtMIWZeN1xKVqWecqB9kJm7aKlo7wpulQGm3G0OKbT7qVKmDIcAZTh/LiW0KW4oJQgFS1HAAJEyTHnb6ndxX5XlAgVCwlH0MoEpnoSJwpD5ZFrXZ6JThOtTKJk9GHZCxvZmn9YHkJSh1KGw6QAC4p0uEauUhKIcmW0NNIaQJIbSEp5kpEhHntyqV3q7hlkzFQ/4T9ODSPYhM+uFI7rbZ9zU1EzXWuoGl5Ic9Pq0nH6XPAZ9MY1+6r2hh+3VjKGKojQtwApWlKhjhMjEcYZrzcW7JavMaA1pAZpUn5pSB6EgThT2xaTeLi5U1ZLjLJ8x4qzccUZhJ7zE/g6dlrtNO+t+pfSisUNDKF+EJScyFHCZh5BEpgzB4xR3TaVqr0lTKBR1BEw42JIJ+tvL2ShaZuN62xWejqZuMiRLKjqQtB+JpXD/U4vh69BxnKCK/73Qfa/uus+m0z+rVl5cvmnhBFRsHLyxIkrolGIMhKJSchAcl4pzVWmsYAmtbSijnUjxp7UwibdrEUd4pnlnS2olCycgFjTjHo4VHm9/paeku1QxTKCmtWrSPyyrFTf8AtiX6sW+5dwmtV9st5K2SoJdWnEuqnghP0z9sXe2rCLXTl18A1rwGvj5afkH7YoNov2aneW7WLCK2cmVOYISn6Tlq6Yaau+2mkaLjlU2ogYNtkLWo8JBMJ9GndFzFBanEpMqipmy1ygKHjV1J74odkW4u1blwWPw6ceW0eVxYx9ie+K+oeuG57sA0iXwtozSy1P3lHvh+t1AzbqNqkY9xsYq4qUcVKPSYe0/C9vxp9VPRvAEstqWlZGSVLCdM+mRjn2Xd6KkS9R1K0sqcUFtuKwSrCRSTDg42262pp1CXGljStChqSoHlBigqdk2h5RUyt2mn8CSFo6tePbDO6Ll67W1hOtyrZSn+sHsGMJW6r3S3Z9hukQS3T6gHSJFZXLBIzlhFs3sO3pV+JVPLHIEoR2+KLm32C024hdMwPNGTrh1r6irLqh2pwvfp+4fpPydJ9T5vqfT/ABaJadMvmljKCHLjxnBDDXDPGXGJmTkcogETMshjyxlPhFGqqfVT0b9QMSy2twDnSkkdsJtoomK7cC2KoB1plKtSVfmKT4ST0qUVQ7KbQ62th3xNuJUhY46VDSewwhvqrdvXsPrTqUMZ/C82fCVJP1dhiVYvKjY9vcVqpqhxgH8tQDgHQZpMRT7EokkF+qccHyISlufX4oubddKG5shymWCvNbRwWk84jtBMgeSGRNaKOgo7eyWaNoNIPvEYqUfqUcTHVOMRIxOKscooyBxg5eSIM5T48IkY/vgJOPVBOXOIBM80aKqspaNvzap1LaRlM4noGZgOjVBC5+sqX1ejyj6aUp6vxf6tGUuac4ImwxbAkKlEzBywjHGUgermiRPLhFGYJ48Y01tDSXBg09Y2HG5+E5KSZZoUMo2AgZRkDiBLDiIBQq9n3ClcL9pf80JxSkny3k9fuqjBvcu4bYfLuDBWBh+MgoV/eMDDoMyZ4RIM0kETT8pxETPi6WmN9UKhJ+ncQTnpIUP2R1p3jZCMVOJ5igxYu2q1vmbtGwvn0JB7JRznbthOJoW8eQqHcqHU40K3nZAMFOKllJB/bHI9vuiTMU9M44o/MQkdk4tUbdsaDMUTXXNXeY6maChp5eTTNI5ClCQe6HThWN+3Rc/Bb6UtIV8SUH/NeEZ02zrhWOefdqognNKT5izzajgIbpz7gIkfzhhqs/TFk9J6b0w05+ZM+ZPl1wRay9kEUV4y+qXZGachyc8EEBKeMAnLCf8ACCCAzE5d8ZHMS64IIA7oy+HDqgggIEpYdUZJnpE84IICeScSJYwQQE8IIIID/9k="
    }])
});