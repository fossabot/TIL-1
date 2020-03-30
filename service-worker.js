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
    "url": "assets/css/0.styles.929f1c28.css",
    "revision": "1eeefadb55724b6e76a5255e995d3cf1"
  },
  {
    "url": "assets/img/cors-001.edb76f88.png",
    "revision": "edb76f885c827e34428cca3ef7b62134"
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
    "url": "assets/img/web-server-was-diff-001.a5c023cb.png",
    "revision": "a5c023cbb9feba29cdd51cf071c86c54"
  },
  {
    "url": "assets/js/10.a491670a.js",
    "revision": "c1b611c0764899759821432fc1518e75"
  },
  {
    "url": "assets/js/11.a6d3348f.js",
    "revision": "0b5154ea3f3e13913d7cf838a27a6ec8"
  },
  {
    "url": "assets/js/12.18a50759.js",
    "revision": "73cf3c5c6943a7c63483a90ca6fc212f"
  },
  {
    "url": "assets/js/13.04461ab6.js",
    "revision": "08eaa20b4d37c25fa6b6d67c255af6ea"
  },
  {
    "url": "assets/js/14.9a568ef8.js",
    "revision": "a91cdef23959f0169f21e9b8973d05db"
  },
  {
    "url": "assets/js/15.d784f6a3.js",
    "revision": "7256b4890d52a7d2d4a7d48f4de6cc36"
  },
  {
    "url": "assets/js/16.93c3eb24.js",
    "revision": "4ca176afd2bab841f5901df0ff7c3b53"
  },
  {
    "url": "assets/js/17.3e108388.js",
    "revision": "c4840429ac38e0781b9d7daec3c7879f"
  },
  {
    "url": "assets/js/18.4f26ff3d.js",
    "revision": "067ed4d0414351f7ae3f921c57b241c3"
  },
  {
    "url": "assets/js/19.815d6fc5.js",
    "revision": "f22ae894e13615103b11d30d1e0b24e0"
  },
  {
    "url": "assets/js/2.39697f1d.js",
    "revision": "240a9d6a108c382eff1fb23d9c1f546c"
  },
  {
    "url": "assets/js/20.a3fa081e.js",
    "revision": "45322a002eb3f44ec124cb5fac8cf619"
  },
  {
    "url": "assets/js/21.662484ab.js",
    "revision": "7558f2f8032073f958fdba98d4d60954"
  },
  {
    "url": "assets/js/22.ed2dea52.js",
    "revision": "f4737241027b8810dbe6badd611d8b9d"
  },
  {
    "url": "assets/js/23.537021f1.js",
    "revision": "6cbb3092d3d05514709df923116008b1"
  },
  {
    "url": "assets/js/3.80b0d811.js",
    "revision": "cc6284f94c91e7bbb9ab0b250c7351dd"
  },
  {
    "url": "assets/js/4.b6c376fc.js",
    "revision": "caab60d6f607af24fe93aebedf2788a7"
  },
  {
    "url": "assets/js/5.21bfba68.js",
    "revision": "0975914b86e28ef44628f2757cfd67d5"
  },
  {
    "url": "assets/js/6.a0b0095f.js",
    "revision": "73e482bd58dd30204cc1a47862cc8791"
  },
  {
    "url": "assets/js/7.6cc0ac77.js",
    "revision": "6382d9546dcb7af288d58f5e8fe0053b"
  },
  {
    "url": "assets/js/8.a529a4ca.js",
    "revision": "cff36ee1a4b710676d1116ea47bf53c9"
  },
  {
    "url": "assets/js/9.c2e84958.js",
    "revision": "ed71893893da524064e19ca680575ef5"
  },
  {
    "url": "assets/js/app.b2ace50b.js",
    "revision": "18329a887e8fcbec45d3b1715e87ce3f"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "5dd99673947043c6ddee547bc13cc478"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "03e394aa01fe1ec209c07290ae0878e0"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "ff7d11b769e89d9a7e706de8dc1092bc"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "3542f86e8ebbe4967c304507931253cd"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "50ede22d49bbf8e31239936f28cdb736"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "5a7d62befc866a63e87a3c98bd40cbc9"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "b65015acbbdd2867c0b368597e2f1637"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "bf5052d10d15dae4e9e70fd71273df70"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "2d91c61138f38c884bd545c0ddbd42ae"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "605a385e904dd9929162041e6e0c05b4"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "d35e2cf1d818ed487146d1a68631473d"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "6670f4043afb9a83742dbc6f6829b18f"
  },
  {
    "url": "web/HTTP 상태 코드.html",
    "revision": "49211f1e18ca5fa8609876fea819e006"
  },
  {
    "url": "web/Web Server와 WAS.html",
    "revision": "ec554e2c19ad51776107a890395805e3"
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
