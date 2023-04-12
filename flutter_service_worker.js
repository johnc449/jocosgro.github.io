'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "14c0299f53fb919c5e024a02585cc550",
"assets/assets/accomodation.png": "99450d8e0f77e08698d2e14b45233ece",
"assets/assets/buildings/artResearch.jpg": "40a37965cc2e992ee4aecceb338ab395",
"assets/assets/buildings/artsBuilding.jpg": "4faa467fa9dc82b8a11b2b5e2eaaeda4",
"assets/assets/buildings/atrium.jpg": "21784c77c94d23846356663b49dacd1f",
"assets/assets/buildings/berkeley.jpg": "c234b1dc10b70d3e98ea52f909ccc7e0",
"assets/assets/buildings/biomed.jpg": "532f4778267b2207b08e3f4ff778d366",
"assets/assets/buildings/botany.jpg": "8d82bf5b703764e5a053ffb27e315aae",
"assets/assets/buildings/botanyBay.jpg": "c3a199f13bdd9966c0389436a8b739b3",
"assets/assets/buildings/business.jpg": "83c0241d2271445d801a6f1c8003fafc",
"assets/assets/buildings/campanile.JPG": "dcbb663b9e3d0dd8d8f6c5d9539d0991",
"assets/assets/buildings/chapel.jpg": "c93f208444449299bdd5eab7db847ec0",
"assets/assets/buildings/chemistry.jpg": "1797bf32bf858ed099612288dc903aae",
"assets/assets/buildings/civilEng.jpg": "1caf902d2e87059ed99a04bc1ce7b204",
"assets/assets/buildings/collegePark.JPG": "289d9baabf7eb4f7e9b098d0e17862ba",
"assets/assets/buildings/dental.jpg": "bff7e978b36f45db914571a9dc8bef59",
"assets/assets/buildings/dining.jpg": "da6acb177b30fdc31e9a7507325becd6",
"assets/assets/buildings/douglasHyde.jpg": "b9586c9189f1110601fe1f29adb35f30",
"assets/assets/buildings/dunlopOriel.jpg": "e343511b4e8eb78e47830ebf054a900f",
"assets/assets/buildings/fellows.jpg": "5a8454c2343035686ecaace4f5090e67",
"assets/assets/buildings/fitzgerald.jpg": "2061cd222ce015b4522a8ee8f0f9c85b",
"assets/assets/buildings/gmb.jpg": "af06d6e62fa75dfca9e4c359f0cd59f1",
"assets/assets/buildings/goldsmith.jpg": "74c2578ff2d37693537a6e91fd727dfd",
"assets/assets/buildings/hamilton.jpg": "41da8bd8d81e20fe47c58249e38dc1a6",
"assets/assets/buildings/lloyd.jpg": "5fdb5eae5e3c9edabf7cb300cf45d2ab",
"assets/assets/buildings/museum.jpg": "d81ccc2a55ac4b9b5a01aa3e108d5911",
"assets/assets/buildings/naughton.jpg": "07f269aaa6874ca3b86aebb6631ba899",
"assets/assets/buildings/nursing.jpg": "aa95c5c64fd5c4401e906cca615cfd3d",
"assets/assets/buildings/oldLibrary.jpg": "627535f7f164f8013ef36ff5f396edf8",
"assets/assets/buildings/oReilly.jpg": "b660bef4819b1d8a68cddf40aa5b23f6",
"assets/assets/buildings/parliamentSquare.jpg": "20b2f941358b5b035b774ec724916031",
"assets/assets/buildings/pav.jpg": "cddf8ac01cb548783ca88e1c89612079",
"assets/assets/buildings/phs.jpg": "85efe750ae5135733be3c45a3718edd1",
"assets/assets/buildings/printingHouse.jpg": "496a3d2ce0ea51ad9e49e2f37a789a3c",
"assets/assets/buildings/readingRoom.jpg": "53eed32fb10c0fb3d3e2e403806b9f58",
"assets/assets/buildings/regent.jpg": "1e31773653ff0c7bb1ff50383ce7d0af",
"assets/assets/buildings/rugby.JPG": "6cb5b0055f4371776aa400187f787731",
"assets/assets/buildings/samuelBeckett.jpg": "ee93b655bea8209f9f22cdf0e3b1f110",
"assets/assets/buildings/security.jpg": "a426aad0942c599c761cfa9e6622c1dc",
"assets/assets/buildings/smurfit.jpg": "8202bcdc5232487d53f46a8b0ddac5a7",
"assets/assets/buildings/sniam.jpg": "3237768f777d028ff56dc09f1fbd34f1",
"assets/assets/buildings/sports.jpg": "f2b67b259054a61784dd36c45d47ab0e",
"assets/assets/buildings/usher.jpg": "83d3abc9ff177c057007943a2cc6d26f",
"assets/assets/CalendarInfo.png": "bdfb449144c95ec3aaa7b0660df2fc5d",
"assets/assets/church.png": "6cc06fd3e3cca80af6fe0c95184198da",
"assets/assets/construction.png": "c035f8d524b29aa5f1cb56906240cafb",
"assets/assets/constructionEventNotStarted.png": "2fb8e789160a7dcdcc06b62a72d79f94",
"assets/assets/constructionEventStarted.png": "c56cb060b4ede43ff40d84e4f56c836b",
"assets/assets/entrance.png": "9544a35f308dfb852e31c1a03c525811",
"assets/assets/event.png": "04b754c3fd38c8b9d89f75aa02abfe79",
"assets/assets/eventsScreenInfo.png": "a6f4cf3d915d361cc1dfa5087cd60910",
"assets/assets/filmingEventNotStarted.png": "4b406cbd6b9702b57498e9b2dee2a558",
"assets/assets/filmingEventStarted.png": "6d1c80a3ad4ff0249879168ee978b001",
"assets/assets/folder.png": "9945028cc53d46fbf8053e3b125c6345",
"assets/assets/greenMarker.png": "bb023d7fe646f29feaa52daf1256caed",
"assets/assets/help.png": "32d94395d29befdc0fb2474be94e3818",
"assets/assets/home.png": "6b498843131af2f675316a677f00518b",
"assets/assets/HomeScreenTabInfo.png": "f6ac957afe68afc8358d40cb0c666b59",
"assets/assets/labEventNotStarted.png": "933ebf4663c17437d9174ec05f6c2787",
"assets/assets/labEventStarted.png": "4a200cfcc2e9ede3f3c889b6ddfc5a47",
"assets/assets/lecture.png": "d2c822e31024f701df61d17297310bd2",
"assets/assets/lectureEventNotStarted.png": "67d2af5121f68ad52279d43eea76c31d",
"assets/assets/lectureEventStarted.png": "63587db600b369659e0dd88baba4a3c8",
"assets/assets/library.png": "149ed7068f4113cc8eb302c1a4fb41ea",
"assets/assets/logo.png": "59adf21c70811df530e0a84b4bbb6f19",
"assets/assets/map_style.txt": "7a018e4314966108121030b369c77f09",
"assets/assets/nav.png": "93a38a49bd64fcf6263bcc1e5ab77a88",
"assets/assets/ne_logo.png": "344dfc3a672d60d247ac6c6be889298c",
"assets/assets/no-data.png": "d9b646e3dec6299dd27577b1e4a25fee",
"assets/assets/otherEventNotStarted.png": "6b6cd5ec4a1aac083fb11cafe26b8ec5",
"assets/assets/otherEventStarted.png": "f0c944f5fe1e1476824b06b339501983",
"assets/assets/pvp.png": "af2e5e442fb904ad03234e079c60041b",
"assets/assets/quiet.png": "c5447d799d930e98debfa321ff91235c",
"assets/assets/satellite/accomodation.png": "9f21b615d55d9d0f575c1daeeecd8b43",
"assets/assets/satellite/church.png": "d2932663221ce1c6adbb52906eada436",
"assets/assets/satellite/construction.png": "793fc85392990fc983b26ea4d7319c49",
"assets/assets/satellite/entrance.png": "7298d7997dd1e8f819bf0db78db0322d",
"assets/assets/satellite/event.png": "04b754c3fd38c8b9d89f75aa02abfe79",
"assets/assets/satellite/home.png": "3cfc85b49207b81c0091a3ee957eb245",
"assets/assets/satellite/lecture.png": "1fa610f20138eb1e537e7e65b121ae37",
"assets/assets/satellite/library.png": "6cdf879338661f34098c1ed2dfcffa46",
"assets/assets/satellite/pvp.png": "60d6949d516524829de518aae4978370",
"assets/assets/satellite/quiet.png": "f89ed8af0905807565b7b0fd44e41c1d",
"assets/assets/satellite/society.png": "a6421b9753e7cdea85b803a26c7db781",
"assets/assets/satellite/sport.png": "7e12a1ab13031c44dc8a93e48357ea91",
"assets/assets/satellite/staff.png": "6e6e63b83de86c48e001666482144f0d",
"assets/assets/satellite/tourism.png": "f6f205e38a03bab351f592c91ddd107b",
"assets/assets/satellite/unknown.png": "3fd6cbf84b211b830baa92783d900d9b",
"assets/assets/SearchInfo.png": "a0474e9637c930d469174453cc71e598",
"assets/assets/socialEventNotStarted.png": "5b57bc9962c205e82f0726110d5f90b5",
"assets/assets/socialEventStarted.png": "bdaa0a9d46128bfcf132919cef06552a",
"assets/assets/society.png": "0883004a4095e980c1c99b26724973c5",
"assets/assets/sport.png": "2f5773ef06cf209b9ce170d8867ec28a",
"assets/assets/staff.png": "efa4843ab4ca8f6435c19634a7c58d79",
"assets/assets/staffAccountIcon.png": "fe449d0743890aeffad5a5fb5b98843c",
"assets/assets/teacherAccountIcon.png": "76ebca23f6ff5c26c9fec19d4aa31918",
"assets/assets/tourism.png": "c62ef39c55b047f26cf8bc62215e594c",
"assets/assets/tutorialEventNotStarted.png": "b2efaa69b494897fe85488b8555e1b0e",
"assets/assets/tutorialEventStarted.png": "0f9ebb7948407a77786b33b339df7ab4",
"assets/assets/unknown.png": "b964cd1d95b5f02e37232fbc7d89fc7f",
"assets/assets/user.png": "a71a9aac37b382bd8489bfe1f5a0a88d",
"assets/assets/userAccountIcon.png": "77ba047c053b1bc0b59a9df73ceadadd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "aba7afb981a556abb3c79d1349cc8caa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48fd3cc6209c13d7b4a512da7b796de9",
"/": "48fd3cc6209c13d7b4a512da7b796de9",
"main.dart.js": "692763ca0458973b469014c29b01b4e7",
"manifest.json": "0824818d2186695fae105c597995676d",
"version.json": "b83792702083f2263c9444134857c1c7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
