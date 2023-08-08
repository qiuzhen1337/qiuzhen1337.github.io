import {
  C,
  E
} from "./chunk-64L52JBX.js";
import {
  $x,
  Ax,
  Bx,
  Dx,
  Ex,
  Fx,
  Ix,
  Lx,
  Mx,
  Ox,
  Tn,
  To,
  bo
} from "./chunk-LDFMRODR.js";

// node_modules/.pnpm/mermaid@10.3.0/node_modules/mermaid/dist/arc-da8fd8d8.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, q, E2, h, v, K, a) {
  var s = q - l, n = E2 - x, m = K - h, i = a - v, r = i * s - m * n;
  if (!(r * r < bo))
    return r = (m * (x - v) - i * (l - h)) / r, [l + r * s, x + r * n];
}
function U(l, x, q, E2, h, v, K) {
  var a = l - q, s = x - E2, n = (K ? v : -v) / Ox(a * a + s * s), m = n * s, i = -n * a, r = l + m, f = x + i, c = q + m, w = E2 + i, o = (r + c) / 2, C2 = (f + w) / 2, p = c - r, g = w - f, A = p * p + g * g, F = h - v, P = r * w - c * f, G = (g < 0 ? -1 : 1) * Ox(Ax(0, F * F * A - P * P)), H = (P * g - p * G) / A, d = (-P * p - g * G) / A, R = (P * g + p * G) / A, T = (-P * p + g * G) / A, e = H - o, u = d - C2, L = R - o, M = T - C2;
  return e * e + u * u > L * L + M * M && (H = R, d = T), {
    cx: H,
    cy: d,
    x01: -m,
    y01: -i,
    x11: H * (h / F - 1),
    y11: d * (h / F - 1)
  };
}
function hn() {
  var l = fn, x = cn, q = E(0), E2 = null, h = yn, v = gn, K = mn, a = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), r = +x.apply(this, arguments), f = h.apply(this, arguments) - To, c = v.apply(this, arguments) - To, w = Bx(c - f), o = c > f;
    if (a || (a = n = C()), r < i && (m = r, r = i, i = m), !(r > bo))
      a.moveTo(0, 0);
    else if (w > Ix - bo)
      a.moveTo(r * Lx(f), r * Mx(f)), a.arc(0, 0, r, f, c, !o), i > bo && (a.moveTo(i * Lx(c), i * Mx(c)), a.arc(0, 0, i, c, f, o));
    else {
      var C2 = f, p = c, g = f, A = c, F = w, P = w, G = K.apply(this, arguments) / 2, H = G > bo && (E2 ? +E2.apply(this, arguments) : Ox(i * i + r * r)), d = Ex(Bx(r - i) / 2, +q.apply(this, arguments)), R = d, T = d, e, u;
      if (H > bo) {
        var L = Dx(H / i * Mx(G)), M = Dx(H / r * Mx(G));
        (F -= L * 2) > bo ? (L *= o ? 1 : -1, g += L, A -= L) : (F = 0, g = A = (f + c) / 2), (P -= M * 2) > bo ? (M *= o ? 1 : -1, C2 += M, p -= M) : (P = 0, C2 = p = (f + c) / 2);
      }
      var O = r * Lx(C2), S = r * Mx(C2), j = i * Lx(A), z = i * Mx(A);
      if (d > bo) {
        var B = r * Lx(p), Q = r * Mx(p), W = i * Lx(g), X = i * Mx(g), I;
        if (w < Tn && (I = pn(O, S, W, X, B, Q, j, z))) {
          var Y = O - I[0], Z = S - I[1], $ = B - I[0], k = Q - I[1], _ = 1 / Mx($x((Y * $ + Z * k) / (Ox(Y * Y + Z * Z) * Ox($ * $ + k * k))) / 2), nn = Ox(I[0] * I[0] + I[1] * I[1]);
          R = Ex(d, (i - nn) / (_ - 1)), T = Ex(d, (r - nn) / (_ + 1));
        }
      }
      P > bo ? T > bo ? (e = U(W, X, O, S, r, T, o), u = U(B, Q, j, z, r, T, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? a.arc(e.cx, e.cy, T, Fx(e.y01, e.x01), Fx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, T, Fx(e.y01, e.x01), Fx(e.y11, e.x11), !o), a.arc(0, 0, r, Fx(e.cy + e.y11, e.cx + e.x11), Fx(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, T, Fx(u.y11, u.x11), Fx(u.y01, u.x01), !o))) : (a.moveTo(O, S), a.arc(0, 0, r, C2, p, !o)) : a.moveTo(O, S), !(i > bo) || !(F > bo) ? a.lineTo(j, z) : R > bo ? (e = U(j, z, B, Q, i, -R, o), u = U(O, S, W, X, i, -R, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? a.arc(e.cx, e.cy, R, Fx(e.y01, e.x01), Fx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, R, Fx(e.y01, e.x01), Fx(e.y11, e.x11), !o), a.arc(0, 0, i, Fx(e.cy + e.y11, e.cx + e.x11), Fx(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, R, Fx(u.y11, u.x11), Fx(u.y01, u.x01), !o))) : a.arc(0, 0, i, A, g, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - Tn / 2;
    return [Lx(m) * n, Mx(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (q = typeof n == "function" ? n : E(+n), s) : q;
  }, s.padRadius = function(n) {
    return arguments.length ? (E2 = n == null ? null : typeof n == "function" ? n : E(+n), s) : E2;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (K = typeof n == "function" ? n : E(+n), s) : K;
  }, s.context = function(n) {
    return arguments.length ? (a = n ?? null, s) : a;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-YBXMP4YP.js.map
