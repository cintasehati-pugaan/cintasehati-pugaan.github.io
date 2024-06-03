'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f05b9e86c83ac237a7fbbb3f01504599",
"assets/AssetManifest.bin.json": "08f226b0c5859fd91fe322210475aba7",
"assets/AssetManifest.json": "d8573eb8f55c4ff403cab5cc148002ac",
"assets/assets/edukasi/balita_apaitustunting.jpg": "23ccd2711f7323f24741436556a79fc3",
"assets/assets/edukasi/balita_cegahstunting.jpg": "b8b635767debb9de73987b33080ec580",
"assets/assets/edukasi/balita_cukupigizi.jpg": "ea48b16bff012ec2f082a5b96807b2a3",
"assets/assets/edukasi/balita_isipiringku.jpg": "90a696430bbef5349b398bdfeac85ce2",
"assets/assets/edukasi/balita_menimbang.jpg": "9afe3a932e79f3933c6bf2f22330b7d9",
"assets/assets/edukasi/bumil_afirmasipositif.jpg": "65981761b9bcd57aa09afb383668b47f",
"assets/assets/edukasi/bumil_bebasanemia.jpg": "fd51eccd43de4b668ce4105252cf7183",
"assets/assets/edukasi/bumil_menjagaibuhamil.jpg": "66872b239fc88c9303ecb93b6a751f44",
"assets/assets/edukasi/bumil_pantauanc.jpg": "27c645e08a553b0d3b3ba1356e8668e7",
"assets/assets/edukasi/bumil_tandabahayakehamilan.jpg": "0442ae8224580a8f0b2e7fb57c431c66",
"assets/assets/edukasi/caten_agartidakanemia.jpg": "2181a339624436914f72379c2d8bb966",
"assets/assets/edukasi/caten_anakcerdas.jpg": "d60879e2e7f21a02721998dcb8156a80",
"assets/assets/edukasi/caten_generasiberencana.jpg": "35b6a15afea9800892a44603395a1560",
"assets/assets/edukasi/caten_pemeriksaan3bulan.jpg": "edf54fe9fc6011799fb2cb722dd5520e",
"assets/assets/edukasi/caten_pemeriksaanpranikah.jpg": "2a4cd8af0818a5857664c0db549498a8",
"assets/assets/edukasi/nifas_giziseimbang.jpg": "24365a536f0507d07d0442ee846e1b57",
"assets/assets/edukasi/nifas_keniskontrasepsi.jpg": "c07be01469fc8219f9568abf05989c47",
"assets/assets/edukasi/nifas_kondisi.jpg": "3703188e4215e69e4306f7205938570e",
"assets/assets/edukasi/nifas_manfaatsenam.jpg": "ead3d57a37dfc2c08779277a4e1e57e6",
"assets/assets/edukasi/nifas_mkjp.jpg": "cacaf78cb9e4aebd2e988f00bf6fbe24",
"assets/assets/edukasi/nifas_tandabahaya.jpg": "171c43846004996ed2daf0211c9ea521",
"assets/assets/images/bg_ibi.jpg": "7d000832266f6faf4b3f3bdaef5eb2e9",
"assets/assets/images/bg_ibi_button.jpg": "6bb3f96e9ff384b4d683e9d91fd28341",
"assets/assets/images/bg_ibi_consult.jpg": "c29a6721cb162a3138701244b54eaf3f",
"assets/assets/images/logo.png": "7e8f5afe680d33e5fa3f66e709d1480d",
"assets/assets/images/logo_ibi.jpg": "6652f5272734a7bff7c726b6df003b52",
"assets/assets/images/logo_ibi.png": "dc6a3d2b3eec8726cbad1f903cb3d890",
"assets/assets/images/logo_ibi_lowres.png": "82d1b57c3aa72bb8a50d05901837f8ae",
"assets/assets/images/logo_puskes.png": "fabfe8bfab77f37b7d051b10bd19112a",
"assets/assets/images/logo_small.png": "a7f975f9a31d09c880e8b3f77c022111",
"assets/assets/privacy_policy.md": "a6281bee2f8613e59b51a0739975a18b",
"assets/assets/templates/balita.xlsx": "0cf4c65d9e487e90a27267b3486d5539",
"assets/assets/templates/bufas.xlsx": "9a9c4d87d104beab8aad74d88ba9afad",
"assets/assets/templates/bumil.xlsx": "3ffe9fe2fb97f87ac8e33e343b2471c5",
"assets/assets/templates/caten.xlsx": "0faf9f29c0ce4715f27cba86101fa149",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dc5e7f7b3dd7148d087a33b6752e88a9",
"assets/NOTICES": "efbbbff4972a6f59266695cbd33cf58e",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3baab4f34b2ab41389c1b87b57a661eb",
"/": "3baab4f34b2ab41389c1b87b57a661eb",
"main.dart.js": "849e2d28e61f531e918608d416d24cc6",
"manifest.json": "cf8b45d3a8a437eb250e18b209c6071d",
"version.json": "3c37105337c6949c94b0c9d22049da95"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
