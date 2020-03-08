/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ad0d35d11aa249b3ed54eba3366f7711"
  },
  {
    "url": "assets/css/0.styles.579c7813.css",
    "revision": "07e411f573607a4158100e470b88694e"
  },
  {
    "url": "assets/img/factory-pattern-01-001.3a74ceb4.png",
    "revision": "3a74ceb46eb89dc6b111b2ad1711127a"
  },
  {
    "url": "assets/img/factory-pattern-01-002.9b373c60.png",
    "revision": "9b373c60455528c409f5e7f91a0784f9"
  },
  {
    "url": "assets/img/factory-pattern-01-003.bd304546.png",
    "revision": "bd304546bd06bffe3b36b3653be814e8"
  },
  {
    "url": "assets/img/factory-pattern-01-004.1968920c.png",
    "revision": "1968920c102ac10d4d116a425f2ec58f"
  },
  {
    "url": "assets/img/factory-pattern-01-005.87c4dbb9.png",
    "revision": "87c4dbb9cde7b3fc545c8506b4fb7504"
  },
  {
    "url": "assets/img/factory-pattern-02-001.73190c2f.png",
    "revision": "73190c2fc2fa736a803f9051c0542112"
  },
  {
    "url": "assets/img/factory-pattern-02-002.8b506d9f.png",
    "revision": "8b506d9fc45945b9a5db6de2ae1b1f33"
  },
  {
    "url": "assets/img/factory-pattern-02-004.25842e1e.png",
    "revision": "25842e1e90e54cb815510ad5689149dd"
  },
  {
    "url": "assets/img/factory-pattern-02-005.36fc4ce3.png",
    "revision": "36fc4ce3144aa910febca19b3245acad"
  },
  {
    "url": "assets/img/object-01-001.80ae796e.png",
    "revision": "80ae796eca46133c5f002cf4ca8be82b"
  },
  {
    "url": "assets/img/object-01-002.93ff0c51.png",
    "revision": "93ff0c51c4dfd089d6edd08077f5e177"
  },
  {
    "url": "assets/img/object-01-003.58f1ad81.png",
    "revision": "58f1ad81a80723e61e0775a37d1be563"
  },
  {
    "url": "assets/img/object-01-005.39ecb1fc.png",
    "revision": "39ecb1fce87070d2fc4894230bec95c7"
  },
  {
    "url": "assets/img/quickstart-guide to-til-001.97e4e39a.png",
    "revision": "97e4e39a3bcb6c17f917f1494c3c31fa"
  },
  {
    "url": "assets/img/quickstart-guide to-til-002.1f723723.png",
    "revision": "1f72372396e1607b45860a89fb05bc08"
  },
  {
    "url": "assets/img/quickstart-guide to-til-003.22955794.png",
    "revision": "2295579439a9b79bb8576e60fa7324bf"
  },
  {
    "url": "assets/img/quickstart-guide to-til-004.a8803f33.png",
    "revision": "a8803f3367558fc9b64ea5cae65b7cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/strategy-pattern-001.7defefca.png",
    "revision": "7defefca3aaec34b7f7879c82b537676"
  },
  {
    "url": "assets/img/strategy-pattern-002.5cfd4112.png",
    "revision": "5cfd4112ac0318cb13ffcc604f526469"
  },
  {
    "url": "assets/img/strategy-pattern-003.8db9d810.png",
    "revision": "8db9d8102e84582da7c96d1909dfee8e"
  },
  {
    "url": "assets/img/strategy-pattern-004.3b988949.png",
    "revision": "3b9889491f7482be0d67c34e870cbddb"
  },
  {
    "url": "assets/img/strategy-pattern-005.691c75a6.png",
    "revision": "691c75a61299ee00d849b8eb73c85743"
  },
  {
    "url": "assets/img/strategy-pattern-006.aac7845a.png",
    "revision": "aac7845a74389d40d509f958455a55fe"
  },
  {
    "url": "assets/img/strategy-pattern-007.ba81840b.png",
    "revision": "ba81840bda45e473ef03c311dbcc2b8a"
  },
  {
    "url": "assets/img/strategy-pattern-008.8bece458.png",
    "revision": "8bece4588baab71ec16c8ac46be0d331"
  },
  {
    "url": "assets/img/strategy-pattern-009.295ac917.png",
    "revision": "295ac91716c048bf4c007cdfa520d5df"
  },
  {
    "url": "assets/img/strategy-pattern-010.a595cb02.png",
    "revision": "a595cb0288dfb0f072ddf34074f513a0"
  },
  {
    "url": "assets/img/template-method-pattern-001.b98898f2.png",
    "revision": "b98898f2caa98b24a6b0bade97de1008"
  },
  {
    "url": "assets/js/10.bdc76c8d.js",
    "revision": "31b0ee93ab6f632f087eb360136677e9"
  },
  {
    "url": "assets/js/11.8df4cd23.js",
    "revision": "c461158ae53ea085867a35c26ccadf8a"
  },
  {
    "url": "assets/js/12.23e972f7.js",
    "revision": "e64e98fb248b1b5d60aed59504056f75"
  },
  {
    "url": "assets/js/13.58f3679d.js",
    "revision": "c07a0a76c4e8243d80c4ebd068c5f759"
  },
  {
    "url": "assets/js/14.cb7e34fb.js",
    "revision": "dad7fe004a6338955d33fd74d9902c57"
  },
  {
    "url": "assets/js/15.1f9eaba3.js",
    "revision": "3494c0f2fb08f44e0170194ec1a173f1"
  },
  {
    "url": "assets/js/16.512cd0b3.js",
    "revision": "983100e2d996ccaa14598ea9cc3109c6"
  },
  {
    "url": "assets/js/17.8e128ac9.js",
    "revision": "9d4cd2399fbcd047b1f83845ecec2c75"
  },
  {
    "url": "assets/js/18.c1daf446.js",
    "revision": "df852cf8e9141cdb9074f6d8bf3f9b9e"
  },
  {
    "url": "assets/js/19.78c0de15.js",
    "revision": "a6524b38b57159a47273ca42d06ba20f"
  },
  {
    "url": "assets/js/2.4aaa2fa9.js",
    "revision": "58ecf84cd96fe828522b815f3b7da2bb"
  },
  {
    "url": "assets/js/3.c0b17930.js",
    "revision": "5734fb89a35a33dfe366c21ce4a86e3c"
  },
  {
    "url": "assets/js/4.98068aee.js",
    "revision": "a48b88da4b1e97741ee963d7a403e4e0"
  },
  {
    "url": "assets/js/5.dc20e91a.js",
    "revision": "3cd81cb88985784636fa4eb885c81236"
  },
  {
    "url": "assets/js/6.482e4e55.js",
    "revision": "503022b43d7bff0d43c35bfb20aebdca"
  },
  {
    "url": "assets/js/7.ef571876.js",
    "revision": "acc5e1ecf5527d3236b6e6dff169ff62"
  },
  {
    "url": "assets/js/8.f4676a85.js",
    "revision": "8419e2eac2069464f4fbb7d15c81bdf1"
  },
  {
    "url": "assets/js/9.9dfb2b84.js",
    "revision": "2758aa597853038a2ac54a85d985cb86"
  },
  {
    "url": "assets/js/app.2ccf7f2c.js",
    "revision": "9d2b1ffb6a8931db5d8b1c7be5756628"
  },
  {
    "url": "book-head-first-design-patterns/Factory Pattern (1) - Factory Method Pattern.html",
    "revision": "a05eab45ebd3b188581f58cffe28f9bb"
  },
  {
    "url": "book-head-first-design-patterns/Factory Pattern (2) - Abstract Factory Pattern.html",
    "revision": "54404e27fd17a4aea4fa8d3c10517cbe"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "474443d41481a1f457aed6582c23daaa"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "0c4e832a7b868143bcd1c33c5c1803b3"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "b9a84f8041a6eedf38f5a0f1d3c398c0"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "d076620e2edbca1687e477777ab9dced"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "d01f7318194cdbc2b49362bba1700e18"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "fa94fb41b2528e31f74ea0aac281e6bc"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "62eb6b103d5795e72d9217d2ad7e50c7"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "30b2c6a322acb0e76efedc4a9a7d08e1"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "83bc9a5914f7213f8bc84acadd5f0aac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
