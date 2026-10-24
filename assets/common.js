// 億り女ちゃん 共通：設定と、背景の星屑
// ▼▼ 設定（リンクを変えるときはここだけ直す） ▼▼
var OKURI = {
  openchat: "https://line.me/ti/g2/4CSjfW9BH1QCDw_Dn0quJ1WoYXeXa9kd5EW2Ww?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  note: "https://note.com/okurijyo/n/n6dae7c4a26d9",
  threads: "https://www.threads.net/@okurijotyan"
};
// ▲▲ 設定ここまで ▲▲

(function () {
  // 背景画像があれば使う（無くても色のグラデーションで表示される）
  var sky = document.querySelector(".sky");
  if (sky) {
    var probe = new Image();
    probe.onload = function () { sky.classList.add("has-img"); };
    probe.src = (document.body.getAttribute("data-root") || "") + "img/sky.jpg";
  }
  // 星屑（動きを減らす設定の人には止めた星だけ）
  var c = document.getElementById("stars");
  if (!c || !c.getContext) return;
  var ctx = c.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2), W, H, S = [];
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function size() {
    W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr;
    c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
    var n = Math.round(innerWidth * innerHeight / 9000);
    S = [];
    for (var i = 0; i < n; i++) S.push({ x: Math.random() * W, y: Math.random() * H, r: (Math.random() * 1.1 + .3) * dpr, p: Math.random() * 6.28, s: Math.random() * .02 + .005 });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < S.length; i++) {
      var s = S[i]; s.p += s.s;
      var a = .25 + .55 * (still ? .6 : (Math.sin(s.p) + 1) / 2);
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.29);
      ctx.fillStyle = "rgba(255,250,235," + a.toFixed(3) + ")"; ctx.fill();
      if (s.r > 1.1 * dpr && a > .7) { ctx.fillStyle = "rgba(245,208,120," + (a * .18).toFixed(3) + ")"; ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 4, 0, 6.29); ctx.fill(); }
    }
    if (!still) requestAnimationFrame(draw);
  }
  size(); draw();
  addEventListener("resize", function () { size(); if (still) draw(); });
})();

function okuriToast(msg) {
  var t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("on");
  clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("on"); }, 1800);
}
function okuriStore(key, val) {
  try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; }
}

// 日本語を文節で折り返す（本体は assets/phrase.js の BudouX）。読み込み前に呼ばれた分は、ためておいて後で処理する。
window.__okuriPhraseQ = [];
function okuriPhrase(el) { if (window.okuriPhrase && window.okuriPhrase !== okuriPhrase) return window.okuriPhrase(el); window.__okuriPhraseQ.push(el); }
