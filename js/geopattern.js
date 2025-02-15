!(function (t) {
  if ("object" == typeof exports) module.exports = t();
  else if ("function" == typeof define && define.amd) define(t);
  else {
    var r;
    "undefined" != typeof window
      ? (r = window)
      : "undefined" != typeof global
      ? (r = global)
      : "undefined" != typeof self && (r = self),
      (r.GeoPattern = t());
  }
})(function () {
  return (function t(r, s, e) {
    function i(o, a) {
      if (!s[o]) {
        if (!r[o]) {
          var h = "function" == typeof require && require;
          if (!a && h) return h(o, !0);
          if (n) return n(o, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        var l = (s[o] = { exports: {} });
        r[o][0].call(
          l.exports,
          function (t) {
            var s = r[o][1][t];
            return i(s ? s : t);
          },
          l,
          l.exports,
          t,
          r,
          s,
          e
        );
      }
      return s[o].exports;
    }
    for (
      var n = "function" == typeof require && require, o = 0;
      o < e.length;
      o++
    )
      i(e[o]);
    return i;
  })(
    {
      1: [
        function (t, r) {
          r.exports = t("./lib/");
        },
        { "./lib/": 3 },
      ],
      2: [
        function (t, r) {
          "use strict";
          function s(t) {
            var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            t = t.replace(r, function (t, r, s, e) {
              return r + r + s + s + e + e;
            });
            var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return s
              ? {
                  r: parseInt(s[1], 16),
                  g: parseInt(s[2], 16),
                  b: parseInt(s[3], 16),
                }
              : null;
          }
          function e(t) {
            return (
              "#" +
              ["r", "g", "b"]
                .map(function (r) {
                  return ("0" + t[r].toString(16)).slice(-2);
                })
                .join("")
            );
          }
          function i(t) {
            var r = t.r,
              s = t.g,
              e = t.b;
            (r /= 255), (s /= 255), (e /= 255);
            var i,
              n,
              o = Math.max(r, s, e),
              a = Math.min(r, s, e),
              h = (o + a) / 2;
            if (o === a) i = n = 0;
            else {
              var l = o - a;
              switch (((n = h > 0.5 ? l / (2 - o - a) : l / (o + a)), o)) {
                case r:
                  i = (s - e) / l + (e > s ? 6 : 0);
                  break;
                case s:
                  i = (e - r) / l + 2;
                  break;
                case e:
                  i = (r - s) / l + 4;
              }
              i /= 6;
            }
            return { h: i, s: n, l: h };
          }
          function n(t) {
            function r(t, r, s) {
              return (
                0 > s && (s += 1),
                s > 1 && (s -= 1),
                1 / 6 > s
                  ? t + 6 * (r - t) * s
                  : 0.5 > s
                  ? r
                  : 2 / 3 > s
                  ? t + (r - t) * (2 / 3 - s) * 6
                  : t
              );
            }
            var s,
              e,
              i,
              n = t.h,
              o = t.s,
              a = t.l;
            if (0 === o) s = e = i = a;
            else {
              var h = 0.5 > a ? a * (1 + o) : a + o - a * o,
                l = 2 * a - h;
              (s = r(l, h, n + 1 / 3)),
                (e = r(l, h, n)),
                (i = r(l, h, n - 1 / 3));
            }
            return {
              r: Math.round(255 * s),
              g: Math.round(255 * e),
              b: Math.round(255 * i),
            };
          }
          r.exports = {
            hex2rgb: s,
            rgb2hex: e,
            rgb2hsl: i,
            hsl2rgb: n,
            rgb2rgbString: function (t) {
              return "rgb(" + [t.r, t.g, t.b].join(",") + ")";
            },
          };
        },
        {},
      ],
      3: [
        function (t, r) {
          !(function (s) {
            "use strict";
            function e(t) {
              return function (r, s) {
                return (
                  "object" == typeof r && ((s = r), (r = null)),
                  (null === r || void 0 === r) && (r = new Date().toString()),
                  s || (s = {}),
                  t.call(this, r, s)
                );
              };
            }
            var i = t("./pattern"),
              n = (r.exports = {
                generate: e(function (t, r) {
                  return new i(t, r);
                }),
              });
            s &&
              (s.fn.geopattern = e(function (t, r) {
                return this.each(function () {
                  var e = s(this).attr("data-title-sha");
                  e && (r = s.extend({ hash: e }, r));
                  var i = n.generate(t, r);
                //   s(this).css("background-image", i.toDataUrl());
                });
              }));
          })("undefined" != typeof jQuery ? jQuery : null);
        },
        { "./pattern": 4 },
      ],
      4: [
        function (t, r) {
          (function (s) {
            "use strict";
            function e(t, r, s) {
              return parseInt(t.substr(r, s || 1), 16);
            }
            function i(t, r, s, e, i) {
              var n = parseFloat(t),
                o = s - r,
                a = i - e;
              return ((n - r) * a) / o + e;
            }
            function n(t) {
              return t % 2 === 0 ? C : j;
            }
            function o(t) {
              return i(t, 0, 15, M, W);
            }
            function a(t) {
              var r = t,
                s = r / 2,
                e = Math.sin((60 * Math.PI) / 180) * r;
              return [
                0,
                e,
                s,
                0,
                s + r,
                0,
                2 * r,
                e,
                s + r,
                2 * e,
                s,
                2 * e,
                0,
                e,
              ].join(",");
            }
            function h(t, r) {
              var s = 0.66 * r;
              return [
                [0, 0, t / 2, r - s, t / 2, r, 0, s, 0, 0],
                [t / 2, r - s, t, 0, t, s, t / 2, r, t / 2, r - s],
              ].map(function (t) {
                return t.join(",");
              });
            }
            function l(t) {
              return [
                [t, 0, t, 3 * t],
                [0, t, 3 * t, t],
              ];
            }
            function c(t) {
              var r = t,
                s = 0.33 * r;
              return [
                s,
                0,
                r - s,
                0,
                r,
                s,
                r,
                r - s,
                r - s,
                r,
                s,
                r,
                0,
                r - s,
                0,
                s,
                s,
                0,
              ].join(",");
            }
            function f(t, r) {
              var s = t / 2;
              return [s, 0, t, r, 0, r, s, 0].join(",");
            }
            function u(t, r) {
              return [t / 2, 0, t, r / 2, t / 2, r, 0, r / 2].join(",");
            }
            function p(t) {
              return [0, 0, t, t, 0, t, 0, 0].join(",");
            }
            function g(t, r, s, e, i) {
              var a = p(e),
                h = o(i[0]),
                l = n(i[0]),
                c = {
                  stroke: S,
                  "stroke-opacity": A,
                  "fill-opacity": h,
                  fill: l,
                };
              t
                .polyline(a, c)
                .transform({ translate: [r + e, s], scale: [-1, 1] }),
                t
                  .polyline(a, c)
                  .transform({ translate: [r + e, s + 2 * e], scale: [1, -1] }),
                (h = o(i[1])),
                (l = n(i[1])),
                (c = {
                  stroke: S,
                  "stroke-opacity": A,
                  "fill-opacity": h,
                  fill: l,
                }),
                t
                  .polyline(a, c)
                  .transform({
                    translate: [r + e, s + 2 * e],
                    scale: [-1, -1],
                  }),
                t
                  .polyline(a, c)
                  .transform({ translate: [r + e, s], scale: [1, 1] });
            }
            function v(t, r, s, e, i) {
              var a = o(i),
                h = n(i),
                l = p(e),
                c = {
                  stroke: S,
                  "stroke-opacity": A,
                  "fill-opacity": a,
                  fill: h,
                };
              t
                .polyline(l, c)
                .transform({ translate: [r, s + e], scale: [1, -1] }),
                t
                  .polyline(l, c)
                  .transform({
                    translate: [r + 2 * e, s + e],
                    scale: [-1, -1],
                  }),
                t
                  .polyline(l, c)
                  .transform({ translate: [r, s + e], scale: [1, 1] }),
                t
                  .polyline(l, c)
                  .transform({ translate: [r + 2 * e, s + e], scale: [-1, 1] });
            }
            function y(t, r) {
              var s = t / 2;
              return [0, 0, r, s, 0, t, 0, 0].join(",");
            }
            var d = t("extend"),
              b = t("./color"),
              m = t("./sha1"),
              k = t("./svg"),
              x = { baseColor: "#933c3c" },
              w = [
                "octogons",
                "overlappingCircles",
                "plusSigns",
                "xes",
                "sineWaves",
                "hexagons",
                "overlappingRings",
                "plaid",
                "triangles",
                "squares",
                "concentricCircles",
                "diamonds",
                "tessellation",
                "nestedSquares",
                "mosaicSquares",
                "chevrons",
              ],
              j = "#222",
              C = "#ddd",
              S = "#000",
              A = 0.02,
              M = 0.02,
              W = 0.15,
              H = (r.exports = function (t, r) {
                return (
                  (this.opts = d({}, x, r)),
                  (this.hash = r.hash || m(t)),
                  (this.svg = new k()),
                  this.generateBackground(),
                  this.generatePattern(),
                  this
                );
              });
            (H.prototype.toSvg = function () {
              return this.svg.toString();
            }),
              (H.prototype.toString = function () {
                return this.toSvg();
              }),
              (H.prototype.toBase64 = function () {
                var t,
                  r = this.toSvg();
                return (t =
                  "undefined" != typeof window &&
                  "function" == typeof window.btoa
                    ? window.btoa(r)
                    : new s(r).toString("base64"));
              }),
            //   (H.prototype.toDataUri = function () {
            //     return "data:image/svg+xml;base64," + this.toBase64();
            //   }),
              (H.prototype.toDataUrl = function () {
                return 'url("' + this.toDataUri() + '")';
              }),
              (H.prototype.generateBackground = function () {
                var t, r, s, n;
                this.opts.color
                  ? (s = b.hex2rgb(this.opts.color))
                  : ((r = i(e(this.hash, 14, 3), 0, 4095, 0, 359)),
                    (n = e(this.hash, 17)),
                    (t = b.rgb2hsl(b.hex2rgb(this.opts.baseColor))),
                    (t.h = ((360 * t.h - r + 360) % 360) / 360),
                    (t.s =
                      n % 2 === 0
                        ? Math.min(1, (100 * t.s + n) / 100)
                        : Math.max(0, (100 * t.s - n) / 100)),
                    (s = b.hsl2rgb(t))),
                  (this.color = b.rgb2hex(s)),
                  this.svg.rect(0, 0, "100%", "100%", {
                    fill: b.rgb2rgbString(s),
                  });
              }),
              (H.prototype.generatePattern = function () {
                var t = this.opts.generator;
                if (t) {
                  if (w.indexOf(t) < 0)
                    throw new Error("The generator " + t + " does not exist.");
                } else t = w[e(this.hash, 20)];
                return this["geo" + t.slice(0, 1).toUpperCase() + t.slice(1)]();
              }),
              (H.prototype.geoHexagons = function () {
                var t,
                  r,
                  s,
                  h,
                  l,
                  c,
                  f,
                  u,
                  p = e(this.hash, 0),
                  g = i(p, 0, 15, 8, 60),
                  v = g * Math.sqrt(3),
                  y = 2 * g,
                  d = a(g);
                for (
                  this.svg.setWidth(3 * y + 3 * g),
                    this.svg.setHeight(6 * v),
                    s = 0,
                    u = 0;
                  6 > u;
                  u++
                )
                  for (f = 0; 6 > f; f++)
                    (c = e(this.hash, s)),
                      (t = f % 2 === 0 ? u * v : u * v + v / 2),
                      (h = o(c)),
                      (r = n(c)),
                      (l = {
                        fill: r,
                        "fill-opacity": h,
                        stroke: S,
                        "stroke-opacity": A,
                      }),
                      this.svg
                        .polyline(d, l)
                        .transform({
                          translate: [f * g * 1.5 - y / 2, t - v / 2],
                        }),
                      0 === f &&
                        this.svg
                          .polyline(d, l)
                          .transform({
                            translate: [6 * g * 1.5 - y / 2, t - v / 2],
                          }),
                      0 === u &&
                        ((t = f % 2 === 0 ? 6 * v : 6 * v + v / 2),
                        this.svg
                          .polyline(d, l)
                          .transform({
                            translate: [f * g * 1.5 - y / 2, t - v / 2],
                          })),
                      0 === f &&
                        0 === u &&
                        this.svg
                          .polyline(d, l)
                          .transform({
                            translate: [6 * g * 1.5 - y / 2, 5 * v + v / 2],
                          }),
                      s++;
              }),
              (H.prototype.geoSineWaves = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  f = Math.floor(i(e(this.hash, 0), 0, 15, 100, 400)),
                  u = Math.floor(i(e(this.hash, 1), 0, 15, 30, 100)),
                  p = Math.floor(i(e(this.hash, 2), 0, 15, 3, 30));
                for (
                  this.svg.setWidth(f), this.svg.setHeight(36 * p), r = 0;
                  36 > r;
                  r++
                )
                  (l = e(this.hash, r)),
                    (s = o(l)),
                    (t = n(l)),
                    (c = (f / 4) * 0.7),
                    (h = {
                      fill: "none",
                      stroke: t,
                      opacity: s,
                      "stroke-width": "" + p + "px",
                    }),
                    (a =
                      "M0 " +
                      u +
                      " C " +
                      c +
                      " 0, " +
                      (f / 2 - c) +
                      " 0, " +
                      f / 2 +
                      " " +
                      u +
                      " S " +
                      (f - c) +
                      " " +
                      2 * u +
                      ", " +
                      f +
                      " " +
                      u +
                      " S " +
                      (1.5 * f - c) +
                      " 0, " +
                      1.5 * f +
                      ", " +
                      u),
                    this.svg
                      .path(a, h)
                      .transform({ translate: [-f / 4, p * r - 1.5 * u] }),
                    this.svg
                      .path(a, h)
                      .transform({
                        translate: [-f / 4, p * r - 1.5 * u + 36 * p],
                      });
              }),
              (H.prototype.geoChevrons = function () {
                var t,
                  r,
                  s,
                  a,
                  l,
                  c,
                  f,
                  u = i(e(this.hash, 0), 0, 15, 30, 80),
                  p = i(e(this.hash, 0), 0, 15, 30, 80),
                  g = h(u, p);
                for (
                  this.svg.setWidth(6 * u),
                    this.svg.setHeight(6 * p * 0.66),
                    r = 0,
                    f = 0;
                  6 > f;
                  f++
                )
                  for (c = 0; 6 > c; c++)
                    (l = e(this.hash, r)),
                      (s = o(l)),
                      (t = n(l)),
                      (a = {
                        stroke: S,
                        "stroke-opacity": A,
                        fill: t,
                        "fill-opacity": s,
                        "stroke-width": 1,
                      }),
                      this.svg
                        .group(a)
                        .transform({ translate: [c * u, f * p * 0.66 - p / 2] })
                        .polyline(g)
                        .end(),
                      0 === f &&
                        this.svg
                          .group(a)
                          .transform({
                            translate: [c * u, 6 * p * 0.66 - p / 2],
                          })
                          .polyline(g)
                          .end(),
                      (r += 1);
              }),
              (H.prototype.geoPlusSigns = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  c,
                  f,
                  u,
                  p = i(e(this.hash, 0), 0, 15, 10, 25),
                  g = 3 * p,
                  v = l(p);
                for (
                  this.svg.setWidth(12 * p),
                    this.svg.setHeight(12 * p),
                    s = 0,
                    u = 0;
                  6 > u;
                  u++
                )
                  for (f = 0; 6 > f; f++)
                    (c = e(this.hash, s)),
                      (a = o(c)),
                      (r = n(c)),
                      (t = u % 2 === 0 ? 0 : 1),
                      (h = {
                        fill: r,
                        stroke: S,
                        "stroke-opacity": A,
                        "fill-opacity": a,
                      }),
                      this.svg
                        .group(h)
                        .transform({
                          translate: [
                            f * g - f * p + t * p - p,
                            u * g - u * p - g / 2,
                          ],
                        })
                        .rect(v)
                        .end(),
                      0 === f &&
                        this.svg
                          .group(h)
                          .transform({
                            translate: [
                              4 * g - f * p + t * p - p,
                              u * g - u * p - g / 2,
                            ],
                          })
                          .rect(v)
                          .end(),
                      0 === u &&
                        this.svg
                          .group(h)
                          .transform({
                            translate: [
                              f * g - f * p + t * p - p,
                              4 * g - u * p - g / 2,
                            ],
                          })
                          .rect(v)
                          .end(),
                      0 === f &&
                        0 === u &&
                        this.svg
                          .group(h)
                          .transform({
                            translate: [
                              4 * g - f * p + t * p - p,
                              4 * g - u * p - g / 2,
                            ],
                          })
                          .rect(v)
                          .end(),
                      s++;
              }),
              (H.prototype.geoXes = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  c,
                  f,
                  u,
                  p = i(e(this.hash, 0), 0, 15, 10, 25),
                  g = l(p),
                  v = 3 * p * 0.943;
                for (
                  this.svg.setWidth(3 * v),
                    this.svg.setHeight(3 * v),
                    s = 0,
                    u = 0;
                  6 > u;
                  u++
                )
                  for (f = 0; 6 > f; f++)
                    (c = e(this.hash, s)),
                      (a = o(c)),
                      (t =
                        f % 2 === 0
                          ? u * v - 0.5 * v
                          : u * v - 0.5 * v + v / 4),
                      (r = n(c)),
                      (h = { fill: r, opacity: a }),
                      this.svg
                        .group(h)
                        .transform({
                          translate: [(f * v) / 2 - v / 2, t - (u * v) / 2],
                          rotate: [45, v / 2, v / 2],
                        })
                        .rect(g)
                        .end(),
                      0 === f &&
                        this.svg
                          .group(h)
                          .transform({
                            translate: [(6 * v) / 2 - v / 2, t - (u * v) / 2],
                            rotate: [45, v / 2, v / 2],
                          })
                          .rect(g)
                          .end(),
                      0 === u &&
                        ((t =
                          f % 2 === 0 ? 6 * v - v / 2 : 6 * v - v / 2 + v / 4),
                        this.svg
                          .group(h)
                          .transform({
                            translate: [(f * v) / 2 - v / 2, t - (6 * v) / 2],
                            rotate: [45, v / 2, v / 2],
                          })
                          .rect(g)
                          .end()),
                      5 === u &&
                        this.svg
                          .group(h)
                          .transform({
                            translate: [(f * v) / 2 - v / 2, t - (11 * v) / 2],
                            rotate: [45, v / 2, v / 2],
                          })
                          .rect(g)
                          .end(),
                      0 === f &&
                        0 === u &&
                        this.svg
                          .group(h)
                          .transform({
                            translate: [(6 * v) / 2 - v / 2, t - (6 * v) / 2],
                            rotate: [45, v / 2, v / 2],
                          })
                          .rect(g)
                          .end(),
                      s++;
              }),
              (H.prototype.geoOverlappingCircles = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  f = e(this.hash, 0),
                  u = i(f, 0, 15, 25, 200),
                  p = u / 2;
                for (
                  this.svg.setWidth(6 * p),
                    this.svg.setHeight(6 * p),
                    r = 0,
                    c = 0;
                  6 > c;
                  c++
                )
                  for (l = 0; 6 > l; l++)
                    (h = e(this.hash, r)),
                      (s = o(h)),
                      (t = n(h)),
                      (a = { fill: t, opacity: s }),
                      this.svg.circle(l * p, c * p, p, a),
                      0 === l && this.svg.circle(6 * p, c * p, p, a),
                      0 === c && this.svg.circle(l * p, 6 * p, p, a),
                      0 === l && 0 === c && this.svg.circle(6 * p, 6 * p, p, a),
                      r++;
              }),
              (H.prototype.geoOctogons = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  f = i(e(this.hash, 0), 0, 15, 10, 60),
                  u = c(f);
                for (
                  this.svg.setWidth(6 * f),
                    this.svg.setHeight(6 * f),
                    r = 0,
                    l = 0;
                  6 > l;
                  l++
                )
                  for (h = 0; 6 > h; h++)
                    (a = e(this.hash, r)),
                      (s = o(a)),
                      (t = n(a)),
                      this.svg
                        .polyline(u, {
                          fill: t,
                          "fill-opacity": s,
                          stroke: S,
                          "stroke-opacity": A,
                        })
                        .transform({ translate: [h * f, l * f] }),
                      (r += 1);
              }),
              (H.prototype.geoSquares = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c = i(e(this.hash, 0), 0, 15, 10, 60);
                for (
                  this.svg.setWidth(6 * c),
                    this.svg.setHeight(6 * c),
                    r = 0,
                    l = 0;
                  6 > l;
                  l++
                )
                  for (h = 0; 6 > h; h++)
                    (a = e(this.hash, r)),
                      (s = o(a)),
                      (t = n(a)),
                      this.svg.rect(h * c, l * c, c, c, {
                        fill: t,
                        "fill-opacity": s,
                        stroke: S,
                        "stroke-opacity": A,
                      }),
                      (r += 1);
              }),
              (H.prototype.geoConcentricCircles = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c = e(this.hash, 0),
                  f = i(c, 0, 15, 10, 60),
                  u = f / 5;
                for (
                  this.svg.setWidth(6 * (f + u)),
                    this.svg.setHeight(6 * (f + u)),
                    r = 0,
                    l = 0;
                  6 > l;
                  l++
                )
                  for (h = 0; 6 > h; h++)
                    (a = e(this.hash, r)),
                      (s = o(a)),
                      (t = n(a)),
                      this.svg.circle(
                        h * f + h * u + (f + u) / 2,
                        l * f + l * u + (f + u) / 2,
                        f / 2,
                        {
                          fill: "none",
                          stroke: t,
                          opacity: s,
                          "stroke-width": u + "px",
                        }
                      ),
                      (a = e(this.hash, 39 - r)),
                      (s = o(a)),
                      (t = n(a)),
                      this.svg.circle(
                        h * f + h * u + (f + u) / 2,
                        l * f + l * u + (f + u) / 2,
                        f / 4,
                        { fill: t, "fill-opacity": s }
                      ),
                      (r += 1);
              }),
              (H.prototype.geoOverlappingRings = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  f = e(this.hash, 0),
                  u = i(f, 0, 15, 10, 60),
                  p = u / 4;
                for (
                  this.svg.setWidth(6 * u),
                    this.svg.setHeight(6 * u),
                    r = 0,
                    c = 0;
                  6 > c;
                  c++
                )
                  for (l = 0; 6 > l; l++)
                    (h = e(this.hash, r)),
                      (s = o(h)),
                      (t = n(h)),
                      (a = {
                        fill: "none",
                        stroke: t,
                        opacity: s,
                        "stroke-width": p + "px",
                      }),
                      this.svg.circle(l * u, c * u, u - p / 2, a),
                      0 === l && this.svg.circle(6 * u, c * u, u - p / 2, a),
                      0 === c && this.svg.circle(l * u, 6 * u, u - p / 2, a),
                      0 === l &&
                        0 === c &&
                        this.svg.circle(6 * u, 6 * u, u - p / 2, a),
                      (r += 1);
              }),
              (H.prototype.geoTriangles = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  u,
                  p = e(this.hash, 0),
                  g = i(p, 0, 15, 15, 80),
                  v = (g / 2) * Math.sqrt(3),
                  y = f(g, v);
                for (
                  this.svg.setWidth(3 * g),
                    this.svg.setHeight(6 * v),
                    r = 0,
                    u = 0;
                  6 > u;
                  u++
                )
                  for (c = 0; 6 > c; c++)
                    (l = e(this.hash, r)),
                      (s = o(l)),
                      (t = n(l)),
                      (h = {
                        fill: t,
                        "fill-opacity": s,
                        stroke: S,
                        "stroke-opacity": A,
                      }),
                      (a =
                        u % 2 === 0
                          ? c % 2 === 0
                            ? 180
                            : 0
                          : c % 2 !== 0
                          ? 180
                          : 0),
                      this.svg
                        .polyline(y, h)
                        .transform({
                          translate: [c * g * 0.5 - g / 2, v * u],
                          rotate: [a, g / 2, v / 2],
                        }),
                      0 === c &&
                        this.svg
                          .polyline(y, h)
                          .transform({
                            translate: [6 * g * 0.5 - g / 2, v * u],
                            rotate: [a, g / 2, v / 2],
                          }),
                      (r += 1);
              }),
              (H.prototype.geoDiamonds = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  f,
                  p = i(e(this.hash, 0), 0, 15, 10, 50),
                  g = i(e(this.hash, 1), 0, 15, 10, 50),
                  v = u(p, g);
                for (
                  this.svg.setWidth(6 * p),
                    this.svg.setHeight(3 * g),
                    s = 0,
                    f = 0;
                  6 > f;
                  f++
                )
                  for (c = 0; 6 > c; c++)
                    (l = e(this.hash, s)),
                      (a = o(l)),
                      (r = n(l)),
                      (h = {
                        fill: r,
                        "fill-opacity": a,
                        stroke: S,
                        "stroke-opacity": A,
                      }),
                      (t = f % 2 === 0 ? 0 : p / 2),
                      this.svg
                        .polyline(v, h)
                        .transform({
                          translate: [c * p - p / 2 + t, (g / 2) * f - g / 2],
                        }),
                      0 === c &&
                        this.svg
                          .polyline(v, h)
                          .transform({
                            translate: [6 * p - p / 2 + t, (g / 2) * f - g / 2],
                          }),
                      0 === f &&
                        this.svg
                          .polyline(v, h)
                          .transform({
                            translate: [c * p - p / 2 + t, (g / 2) * 6 - g / 2],
                          }),
                      0 === c &&
                        0 === f &&
                        this.svg
                          .polyline(v, h)
                          .transform({
                            translate: [6 * p - p / 2 + t, (g / 2) * 6 - g / 2],
                          }),
                      (s += 1);
              }),
              (H.prototype.geoNestedSquares = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l,
                  c,
                  f = i(e(this.hash, 0), 0, 15, 4, 12),
                  u = 7 * f;
                for (
                  this.svg.setWidth(6 * (u + f) + 6 * f),
                    this.svg.setHeight(6 * (u + f) + 6 * f),
                    r = 0,
                    c = 0;
                  6 > c;
                  c++
                )
                  for (l = 0; 6 > l; l++)
                    (h = e(this.hash, r)),
                      (s = o(h)),
                      (t = n(h)),
                      (a = {
                        fill: "none",
                        stroke: t,
                        opacity: s,
                        "stroke-width": f + "px",
                      }),
                      this.svg.rect(
                        l * u + l * f * 2 + f / 2,
                        c * u + c * f * 2 + f / 2,
                        u,
                        u,
                        a
                      ),
                      (h = e(this.hash, 39 - r)),
                      (s = o(h)),
                      (t = n(h)),
                      (a = {
                        fill: "none",
                        stroke: t,
                        opacity: s,
                        "stroke-width": f + "px",
                      }),
                      this.svg.rect(
                        l * u + l * f * 2 + f / 2 + 2 * f,
                        c * u + c * f * 2 + f / 2 + 2 * f,
                        3 * f,
                        3 * f,
                        a
                      ),
                      (r += 1);
              }),
              (H.prototype.geoMosaicSquares = function () {
                var t,
                  r,
                  s,
                  n = i(e(this.hash, 0), 0, 15, 15, 50);
                for (
                  this.svg.setWidth(8 * n),
                    this.svg.setHeight(8 * n),
                    t = 0,
                    s = 0;
                  4 > s;
                  s++
                )
                  for (r = 0; 4 > r; r++)
                    r % 2 === 0
                      ? s % 2 === 0
                        ? v(this.svg, r * n * 2, s * n * 2, n, e(this.hash, t))
                        : g(this.svg, r * n * 2, s * n * 2, n, [
                            e(this.hash, t),
                            e(this.hash, t + 1),
                          ])
                      : s % 2 === 0
                      ? g(this.svg, r * n * 2, s * n * 2, n, [
                          e(this.hash, t),
                          e(this.hash, t + 1),
                        ])
                      : v(this.svg, r * n * 2, s * n * 2, n, e(this.hash, t)),
                      (t += 1);
              }),
              (H.prototype.geoPlaid = function () {
                var t,
                  r,
                  s,
                  i,
                  a,
                  h,
                  l,
                  c = 0,
                  f = 0;
                for (r = 0; 36 > r; )
                  (i = e(this.hash, r)),
                    (c += i + 5),
                    (l = e(this.hash, r + 1)),
                    (s = o(l)),
                    (t = n(l)),
                    (a = l + 5),
                    this.svg.rect(0, c, "100%", a, { opacity: s, fill: t }),
                    (c += a),
                    (r += 2);
                for (r = 0; 36 > r; )
                  (i = e(this.hash, r)),
                    (f += i + 5),
                    (l = e(this.hash, r + 1)),
                    (s = o(l)),
                    (t = n(l)),
                    (h = l + 5),
                    this.svg.rect(f, 0, h, "100%", { opacity: s, fill: t }),
                    (f += h),
                    (r += 2);
                this.svg.setWidth(f), this.svg.setHeight(c);
              }),
              (H.prototype.geoTessellation = function () {
                var t,
                  r,
                  s,
                  a,
                  h,
                  l = i(e(this.hash, 0), 0, 15, 5, 40),
                  c = l * Math.sqrt(3),
                  f = 2 * l,
                  u = (l / 2) * Math.sqrt(3),
                  p = y(l, u),
                  g = 3 * l + 2 * u,
                  v = 2 * c + 2 * l;
                for (
                  this.svg.setWidth(g), this.svg.setHeight(v), r = 0;
                  20 > r;
                  r++
                )
                  switch (
                    ((h = e(this.hash, r)),
                    (s = o(h)),
                    (t = n(h)),
                    (a = {
                      stroke: S,
                      "stroke-opacity": A,
                      fill: t,
                      "fill-opacity": s,
                      "stroke-width": 1,
                    }),
                    r)
                  ) {
                    case 0:
                      this.svg.rect(-l / 2, -l / 2, l, l, a),
                        this.svg.rect(g - l / 2, -l / 2, l, l, a),
                        this.svg.rect(-l / 2, v - l / 2, l, l, a),
                        this.svg.rect(g - l / 2, v - l / 2, l, l, a);
                      break;
                    case 1:
                      this.svg.rect(f / 2 + u, c / 2, l, l, a);
                      break;
                    case 2:
                      this.svg.rect(-l / 2, v / 2 - l / 2, l, l, a),
                        this.svg.rect(g - l / 2, v / 2 - l / 2, l, l, a);
                      break;
                    case 3:
                      this.svg.rect(f / 2 + u, 1.5 * c + l, l, l, a);
                      break;
                    case 4:
                      this.svg
                        .polyline(p, a)
                        .transform({
                          translate: [l / 2, -l / 2],
                          rotate: [0, l / 2, u / 2],
                        }),
                        this.svg
                          .polyline(p, a)
                          .transform({
                            translate: [l / 2, v - -l / 2],
                            rotate: [0, l / 2, u / 2],
                            scale: [1, -1],
                          });
                      break;
                    case 5:
                      this.svg
                        .polyline(p, a)
                        .transform({
                          translate: [g - l / 2, -l / 2],
                          rotate: [0, l / 2, u / 2],
                          scale: [-1, 1],
                        }),
                        this.svg
                          .polyline(p, a)
                          .transform({
                            translate: [g - l / 2, v + l / 2],
                            rotate: [0, l / 2, u / 2],
                            scale: [-1, -1],
                          });
                      break;
                    case 6:
                      this.svg
                        .polyline(p, a)
                        .transform({ translate: [g / 2 + l / 2, c / 2] });
                      break;
                    case 7:
                      this.svg
                        .polyline(p, a)
                        .transform({
                          translate: [g - g / 2 - l / 2, c / 2],
                          scale: [-1, 1],
                        });
                      break;
                    case 8:
                      this.svg
                        .polyline(p, a)
                        .transform({
                          translate: [g / 2 + l / 2, v - c / 2],
                          scale: [1, -1],
                        });
                      break;
                    case 9:
                      this.svg
                        .polyline(p, a)
                        .transform({
                          translate: [g - g / 2 - l / 2, v - c / 2],
                          scale: [-1, -1],
                        });
                      break;
                    case 10:
                      this.svg
                        .polyline(p, a)
                        .transform({ translate: [l / 2, v / 2 - l / 2] });
                      break;
                    case 11:
                      this.svg
                        .polyline(p, a)
                        .transform({
                          translate: [g - l / 2, v / 2 - l / 2],
                          scale: [-1, 1],
                        });
                      break;
                    case 12:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          translate: [l / 2, l / 2],
                          rotate: [-30, 0, 0],
                        });
                      break;
                    case 13:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          scale: [-1, 1],
                          translate: [-g + l / 2, l / 2],
                          rotate: [-30, 0, 0],
                        });
                      break;
                    case 14:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          translate: [l / 2, v / 2 - l / 2 - l],
                          rotate: [30, 0, l],
                        });
                      break;
                    case 15:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          scale: [-1, 1],
                          translate: [-g + l / 2, v / 2 - l / 2 - l],
                          rotate: [30, 0, l],
                        });
                      break;
                    case 16:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          scale: [1, -1],
                          translate: [l / 2, -v + v / 2 - l / 2 - l],
                          rotate: [30, 0, l],
                        });
                      break;
                    case 17:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          scale: [-1, -1],
                          translate: [-g + l / 2, -v + v / 2 - l / 2 - l],
                          rotate: [30, 0, l],
                        });
                      break;
                    case 18:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          scale: [1, -1],
                          translate: [l / 2, -v + l / 2],
                          rotate: [-30, 0, 0],
                        });
                      break;
                    case 19:
                      this.svg
                        .rect(0, 0, l, l, a)
                        .transform({
                          scale: [-1, -1],
                          translate: [-g + l / 2, -v + l / 2],
                          rotate: [-30, 0, 0],
                        });
                  }
              });
          }).call(this, t("buffer").Buffer);
        },
        { "./color": 2, "./sha1": 5, "./svg": 6, buffer: 8, extend: 9 },
      ],
      5: [
        function (t, r) {
          "use strict";
          function s() {
            function t() {
              for (var t = 16; 80 > t; t++) {
                var r = f[t - 3] ^ f[t - 8] ^ f[t - 14] ^ f[t - 16];
                f[t] = (r << 1) | (r >>> 31);
              }
              var s,
                e,
                i = o,
                n = a,
                p = h,
                g = l,
                v = c;
              for (t = 0; 80 > t; t++) {
                20 > t
                  ? ((s = g ^ (n & (p ^ g))), (e = 1518500249))
                  : 40 > t
                  ? ((s = n ^ p ^ g), (e = 1859775393))
                  : 60 > t
                  ? ((s = (n & p) | (g & (n | p))), (e = 2400959708))
                  : ((s = n ^ p ^ g), (e = 3395469782));
                var y = ((i << 5) | (i >>> 27)) + s + v + e + (0 | f[t]);
                (v = g), (g = p), (p = (n << 30) | (n >>> 2)), (n = i), (i = y);
              }
              for (
                o = (o + i) | 0,
                  a = (a + n) | 0,
                  h = (h + p) | 0,
                  l = (l + g) | 0,
                  c = (c + v) | 0,
                  u = 0,
                  t = 0;
                16 > t;
                t++
              )
                f[t] = 0;
            }
            function r(r) {
              (f[u] |= (255 & r) << p),
                p ? (p -= 8) : (u++, (p = 24)),
                16 === u && t();
            }
            function s(t) {
              var s = t.length;
              g += 8 * s;
              for (var e = 0; s > e; e++) r(t.charCodeAt(e));
            }
            function e(t) {
              if ("string" == typeof t) return s(t);
              var e = t.length;
              g += 8 * e;
              for (var i = 0; e > i; i++) r(t[i]);
            }
            function i(t) {
              for (var r = "", s = 28; s >= 0; s -= 4)
                r += ((t >> s) & 15).toString(16);
              return r;
            }
            function n() {
              r(128),
                (u > 14 || (14 === u && 24 > p)) && t(),
                (u = 14),
                (p = 24),
                r(0),
                r(0),
                r(g > 0xffffffffff ? g / 1099511627776 : 0),
                r(g > 4294967295 ? g / 4294967296 : 0);
              for (var s = 24; s >= 0; s -= 8) r(g >> s);
              return i(o) + i(a) + i(h) + i(l) + i(c);
            }
            var o = 1732584193,
              a = 4023233417,
              h = 2562383102,
              l = 271733878,
              c = 3285377520,
              f = new Uint32Array(80),
              u = 0,
              p = 24,
              g = 0;
            return { update: e, digest: n };
          }
          r.exports = function (t) {
            if (void 0 === t) return s();
            var r = s();
            return r.update(t), r.digest();
          };
        },
        {},
      ],
      6: [
        function (t, r) {
          "use strict";
          function s() {
            return (
              (this.width = 100),
              (this.height = 100),
              (this.svg = new i("svg")),
              (this.context = []),
              this.setAttributes(this.svg, {
                xmlns: "http://www.w3.org/2000/svg",
                width: this.width,
                height: this.height,
              }),
              this
            );
          }
          var e = t("extend"),
            i = t("./xml");
          (r.exports = s),
            (s.prototype.currentContext = function () {
              return this.context[this.context.length - 1] || this.svg;
            }),
            (s.prototype.end = function () {
              return this.context.pop(), this;
            }),
            (s.prototype.currentNode = function () {
              var t = this.currentContext();
              return t.lastChild || t;
            }),
            (s.prototype.transform = function (t) {
              return (
                this.currentNode().setAttribute(
                  "transform",
                  Object.keys(t)
                    .map(function (r) {
                      return r + "(" + t[r].join(",") + ")";
                    })
                    .join(" ")
                ),
                this
              );
            }),
            (s.prototype.setAttributes = function (t, r) {
              Object.keys(r).forEach(function (s) {
                t.setAttribute(s, r[s]);
              });
            }),
            (s.prototype.setWidth = function (t) {
              this.svg.setAttribute("width", Math.floor(t));
            }),
            (s.prototype.setHeight = function (t) {
              this.svg.setAttribute("height", Math.floor(t));
            }),
            (s.prototype.toString = function () {
              return this.svg.toString();
            }),
            (s.prototype.rect = function (t, r, s, n, o) {
              var a = this;
              if (Array.isArray(t))
                return (
                  t.forEach(function (t) {
                    a.rect.apply(a, t.concat(o));
                  }),
                  this
                );
              var h = new i("rect");
              return (
                this.currentContext().appendChild(h),
                this.setAttributes(
                  h,
                  e({ x: t, y: r, width: s, height: n }, o)
                ),
                this
              );
            }),
            (s.prototype.circle = function (t, r, s, n) {
              var o = new i("circle");
              return (
                this.currentContext().appendChild(o),
                this.setAttributes(o, e({ cx: t, cy: r, r: s }, n)),
                this
              );
            }),
            (s.prototype.path = function (t, r) {
              var s = new i("path");
              return (
                this.currentContext().appendChild(s),
                this.setAttributes(s, e({ d: t }, r)),
                this
              );
            }),
            (s.prototype.polyline = function (t, r) {
              var s = this;
              if (Array.isArray(t))
                return (
                  t.forEach(function (t) {
                    s.polyline(t, r);
                  }),
                  this
                );
              var n = new i("polyline");
              return (
                this.currentContext().appendChild(n),
                this.setAttributes(n, e({ points: t }, r)),
                this
              );
            }),
            (s.prototype.group = function (t) {
              var r = new i("g");
              return (
                this.currentContext().appendChild(r),
                this.context.push(r),
                this.setAttributes(r, e({}, t)),
                this
              );
            });
        },
        { "./xml": 7, extend: 9 },
      ],
      7: [
        function (t, r) {
          "use strict";
          var s = (r.exports = function (t) {
            return this instanceof s
              ? ((this.tagName = t),
                (this.attributes = Object.create(null)),
                (this.children = []),
                (this.lastChild = null),
                this)
              : new s(t);
          });
          (s.prototype.appendChild = function (t) {
            return this.children.push(t), (this.lastChild = t), this;
          }),
            (s.prototype.setAttribute = function (t, r) {
              return (this.attributes[t] = r), this;
            }),
            (s.prototype.toString = function () {
              var t = this;
              return [
                "<",
                t.tagName,
                Object.keys(t.attributes)
                  .map(function (r) {
                    return [" ", r, '="', t.attributes[r], '"'].join("");
                  })
                  .join(""),
                ">",
                t.children
                  .map(function (t) {
                    return t.toString();
                  })
                  .join(""),
                "</",
                t.tagName,
                ">",
              ].join("");
            });
        },
        {},
      ],
      8: [function () {}, {}],
      9: [
        function (t, r) {
          function s(t) {
            if (
              !t ||
              "[object Object]" !== i.call(t) ||
              t.nodeType ||
              t.setInterval
            )
              return !1;
            var r = e.call(t, "constructor"),
              s = e.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !r && !s) return !1;
            var n;
            for (n in t);
            return void 0 === n || e.call(t, n);
          }
          var e = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString;
          r.exports = function n() {
            var t,
              r,
              e,
              i,
              o,
              a,
              h = arguments[0] || {},
              l = 1,
              c = arguments.length,
              f = !1;
            for (
              "boolean" == typeof h &&
                ((f = h), (h = arguments[1] || {}), (l = 2)),
                "object" != typeof h && "function" != typeof h && (h = {});
              c > l;
              l++
            )
              if (null != (t = arguments[l]))
                for (r in t)
                  (e = h[r]),
                    (i = t[r]),
                    h !== i &&
                      (f && i && (s(i) || (o = Array.isArray(i)))
                        ? (o
                            ? ((o = !1), (a = e && Array.isArray(e) ? e : []))
                            : (a = e && s(e) ? e : {}),
                          (h[r] = n(f, a, i)))
                        : void 0 !== i && (h[r] = i));
            return h;
          };
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
