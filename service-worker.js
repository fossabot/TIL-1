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
    "url": "assets/css/0.styles.107bf7fb.css",
    "revision": "3a73cc8d60d82da4000ce14137ce0b5d"
  },
  {
    "url": "assets/img/cors-001.c274d3ad.png",
    "revision": "c274d3ad68f9b67e9509024793d3c729"
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
    "url": "assets/js/10.902b24b0.js",
    "revision": "c6eb04bca482d868a1c6ea14f800ec30"
  },
  {
    "url": "assets/js/11.b2bf1fed.js",
    "revision": "d991e75c4aecb2995d16aebe2498f9d2"
  },
  {
    "url": "assets/js/12.f80b59ac.js",
    "revision": "6e1a19bdfa3e3772d2d4352eb9c7509c"
  },
  {
    "url": "assets/js/13.81d6c0ea.js",
    "revision": "89f7c01650b3db64e6f293197d431836"
  },
  {
    "url": "assets/js/14.3cc9f935.js",
    "revision": "e7d7d2a8b7801ac2ea80275060b75128"
  },
  {
    "url": "assets/js/15.64a3ecd6.js",
    "revision": "d283785876de19b75f9df531100ba78f"
  },
  {
    "url": "assets/js/16.33014eaf.js",
    "revision": "24721fe12eb6298b19d3579e3afe50aa"
  },
  {
    "url": "assets/js/17.9ca03ad8.js",
    "revision": "4ba2a93e8202ee207de2a36d07a71001"
  },
  {
    "url": "assets/js/18.d073338c.js",
    "revision": "1935d75a3d180cd9de7fdb4eca8aaad8"
  },
  {
    "url": "assets/js/19.8902b94b.js",
    "revision": "08e2b86be5f0741c464b16d964faf843"
  },
  {
    "url": "assets/js/2.784b533f.js",
    "revision": "279c5564c483cd4eedf9e9e826a507f3"
  },
  {
    "url": "assets/js/20.bedb9757.js",
    "revision": "3be3aecad7cad39906f7270f4c06ab25"
  },
  {
    "url": "assets/js/21.a1350be0.js",
    "revision": "d5cec9901457b496287898028585d574"
  },
  {
    "url": "assets/js/3.5b1cca46.js",
    "revision": "78867990fc2edfea351d42380e388f4a"
  },
  {
    "url": "assets/js/4.3e136df7.js",
    "revision": "3bf77f8c83e512f166397c67e19395a0"
  },
  {
    "url": "assets/js/5.3ee587e1.js",
    "revision": "cfe01efd1b3465e046c8d166e53cf79f"
  },
  {
    "url": "assets/js/6.3c808f01.js",
    "revision": "73ba0ab4823c7b9592bd02b51b23dcd2"
  },
  {
    "url": "assets/js/7.e54561d7.js",
    "revision": "fbd50cc77814072ce85462ecf9b0e5cd"
  },
  {
    "url": "assets/js/8.83a53dae.js",
    "revision": "21cae26296176f823cb0380af06800d4"
  },
  {
    "url": "assets/js/9.ce5f5ff3.js",
    "revision": "21a1ae3c73566c21c614869b02383099"
  },
  {
    "url": "assets/js/app.6f2678a4.js",
    "revision": "6487a673ac14925304c20535c746e5c7"
  },
  {
    "url": "book-head-first-design-patterns/FP1 Factory Method Pattern.html",
    "revision": "1bb0307cfebdd3902de1c2e4bb55e252"
  },
  {
    "url": "book-head-first-design-patterns/FP2 Abstract Factory Pattern.html",
    "revision": "409325a23820543f02a050c7ba0a82a5"
  },
  {
    "url": "book-head-first-design-patterns/Strategy Pattern.html",
    "revision": "e06c7d162cf4db3950a3920533e08592"
  },
  {
    "url": "book-head-first-design-patterns/Template Method Pattern.html",
    "revision": "42885ad49055cb6adc7bee14f8547898"
  },
  {
    "url": "book-object/01장 객체, 설계.html",
    "revision": "d1cdf65f779b69d78c54d5977ab93afa"
  },
  {
    "url": "book-object/03장 역할, 책임, 협력.html",
    "revision": "15f87acf247b850c1da085ee3c519787"
  },
  {
    "url": "book-object/04장 설계 품질과 트레이드오프.html",
    "revision": "5f4f3e1a6df8ddd5633c7a58b083d989"
  },
  {
    "url": "book-object/05장 책임 할당하기.html",
    "revision": "30932659a6b3fa2c1cc03e0ae55bcb3b"
  },
  {
    "url": "etc/Quick Start Guide to TIL.html",
    "revision": "828ef3e4a11594618abff13d894595d8"
  },
  {
    "url": "goals-for/2020.html",
    "revision": "1aeb51cb5524d9c3e8e9eea71f629510"
  },
  {
    "url": "images/logo-144.png",
    "revision": "32e3f1d2ed6e2f2c59c391a430861f16"
  },
  {
    "url": "index.html",
    "revision": "4a8c08a431151203b4172e0f7659575f"
  },
  {
    "url": "web/Cross-Origin Resource Sharing.html",
    "revision": "efafdf295e1adc28393fe754c05ae850"
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
