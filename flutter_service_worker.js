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
"github.zip": "d022d8d1e455e70607c8148913c23caa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b6369462819770757c4f60a91d7e57cb",
"/": "48fd3cc6209c13d7b4a512da7b796de9",
"jocosgro.github.io/.git/COMMIT_EDITMSG": "c99a46c095d1419230d01542f0178342",
"jocosgro.github.io/.git/config": "7f8376f4ce70832fbba04297572adcf0",
"jocosgro.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jocosgro.github.io/.git/FETCH_HEAD": "6259a3a4c8e081d6d84bdd0cd5a735c6",
"jocosgro.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"jocosgro.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jocosgro.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jocosgro.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"jocosgro.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jocosgro.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jocosgro.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"jocosgro.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"jocosgro.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"jocosgro.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jocosgro.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jocosgro.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jocosgro.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"jocosgro.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"jocosgro.github.io/.git/index": "06d613a63c1bc73187f0658602909219",
"jocosgro.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jocosgro.github.io/.git/logs/HEAD": "bbb827ec472ba0727647ea513c2f74fd",
"jocosgro.github.io/.git/logs/refs/heads/main": "b5a757f3e39a51ab2fd4b15cb2c3bb25",
"jocosgro.github.io/.git/logs/refs/remotes/origin/HEAD": "a66c82a2d0ee4766bd4672c51ba85a39",
"jocosgro.github.io/.git/logs/refs/remotes/origin/main": "b691b93316deae9031ec3447332c44e6",
"jocosgro.github.io/.git/objects/06/0cdd913d8757b3860b9094cce23f021e2cec38": "b8e6eacc8f6648457b05e2db8186cd85",
"jocosgro.github.io/.git/objects/07/ae9733e321b557f844ea98532f32624333bd30": "265c1346d139e5d6b799d936bd01927d",
"jocosgro.github.io/.git/objects/0c/5be7fb26e647f85dce0a8f202263d5dd4e763b": "9027801042242948fb96252a48dbc6ae",
"jocosgro.github.io/.git/objects/0f/4c0a84e51c312d20df438e1cbe368ed77c5866": "ae07fa46afae7281d5936eda88274900",
"jocosgro.github.io/.git/objects/10/ef709a7d02b68a3503fb01d219f78c478f15b7": "2fe6003c457497e532e2c6783cb3df71",
"jocosgro.github.io/.git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
"jocosgro.github.io/.git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
"jocosgro.github.io/.git/objects/14/a21537112bb1c60663f9fe2bcf8194e3dd3d7d": "66d06ac899fa4f1e6981b9301eef48bd",
"jocosgro.github.io/.git/objects/14/e89a53fe236785cca50a8eb8c68066e4ec6571": "80d551d047ecc990207d08f240b0bb82",
"jocosgro.github.io/.git/objects/16/d80cb94dbb8e65d2dfaf767c95c830592a24d8": "dc4cea9090375cd416e02660824ad3ed",
"jocosgro.github.io/.git/objects/17/1aaad202c5c7c9040510042b8ea2715981d557": "578865c61a995427c5d6973feb86bf44",
"jocosgro.github.io/.git/objects/18/0f8707d9085ca1cc656578829955a4b36a62e1": "f4fd3d7dd5a4254d1863c3288e0d1676",
"jocosgro.github.io/.git/objects/20/e122d29b3f7ec71a52e45b5ef107ad6586e672": "fecf800c1bf74c6cf02ce25be0b27912",
"jocosgro.github.io/.git/objects/23/e4c9944f21653557cd7b32e95a57f2917e0913": "df4144cfbe45ebeea7694d546e3b6e3b",
"jocosgro.github.io/.git/objects/2a/f0adcd7930bdffc5ccdd81b7c3218a2e25f373": "258153b30272a61dcaa737b8a47f2388",
"jocosgro.github.io/.git/objects/2a/f97b943a223a7bd1f55d7cdc73d254977f36e2": "45a5161f9c6c82aa749aab031f2f91c8",
"jocosgro.github.io/.git/objects/2b/152d0b092af9b23f7b2ef10d6c13de973d868e": "fbfdaea6eedc37b82b8a3db1ab769b7e",
"jocosgro.github.io/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
"jocosgro.github.io/.git/objects/2d/7b09fcfa3a897ac9ec29068b0b56bfed5382f0": "d3c4779ce058a154c0f8dfac7286a1ce",
"jocosgro.github.io/.git/objects/31/d43afa9864231bc3504eab98a18e478fdbb440": "a64881eb4ce0acbae7a31581d0e9df03",
"jocosgro.github.io/.git/objects/32/6b581c81bf203c9dcd2c6c4ea586957e974316": "19e3a53c3e328618b609ed57db7629c5",
"jocosgro.github.io/.git/objects/35/5e4df58b68f3b8ded161afe8e6dec6992e022d": "135ecd628d4b04ee0a7922f90e6f1572",
"jocosgro.github.io/.git/objects/36/246d60aab4c01493890c70da012cdc8c86b640": "8a32edb3e1613d1d5a2824cf72d25607",
"jocosgro.github.io/.git/objects/36/796f3a3c75ba5c70eb40f4099e1eb03246a02c": "ec08dfcf9697f2c1075241d4d1f2d6eb",
"jocosgro.github.io/.git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
"jocosgro.github.io/.git/objects/3b/94e65363f4c8a0247055755b704e26fc9f5a7d": "e73c11fbf10051d85c41705a71e4921d",
"jocosgro.github.io/.git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
"jocosgro.github.io/.git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
"jocosgro.github.io/.git/objects/3e/414e3b3f652f4bbff71796cd8619d316726291": "a11c3162123df634ed249d12822f71bd",
"jocosgro.github.io/.git/objects/41/5abe1bca4cd685c5b18ef2febdc4f8c87908b0": "4a41e15900f7a7a94c71b4b6969fdbf9",
"jocosgro.github.io/.git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
"jocosgro.github.io/.git/objects/44/1362d0c43ca751c44f3491d8c37750fc9aef9c": "61d1238ae098ed44199621b2a510c5d4",
"jocosgro.github.io/.git/objects/44/bcfe0dc93f83b177cae982d2221dfde5f3bd2c": "57f0350a1201f400eb34e4e2ff880a4c",
"jocosgro.github.io/.git/objects/44/be0bf33ca373fa91a6aeeedb297e6128e7902e": "4919cc06c4072988adb117ae4b7dd1d8",
"jocosgro.github.io/.git/objects/44/d5dd5eb08e13749e5007c0f756b7e221881b30": "0ba5c5c4a666d7b362e75c13ec709d4b",
"jocosgro.github.io/.git/objects/45/5ab968500c2d0633d1a5b20148033b7d718da7": "a688aad859827bd9e4cb5910fc192f4c",
"jocosgro.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"jocosgro.github.io/.git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
"jocosgro.github.io/.git/objects/47/14b2a7c96761bd176662dff68d4a45e458de5b": "43414914fd0fa3f6a3fee3d4574c841a",
"jocosgro.github.io/.git/objects/49/0a0fa5751cd4487ada72ddac674296e3328964": "6fa0a42f2acd9f6975a7971407809643",
"jocosgro.github.io/.git/objects/49/4779f21b160ec2feabf3246190331d30b7efdf": "bfc53b85ca5c3f67e8fbcd8c1e245ebc",
"jocosgro.github.io/.git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
"jocosgro.github.io/.git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
"jocosgro.github.io/.git/objects/4d/7b2aab771c035ae0583f2df73e6bfdc64dc430": "0f44f6bd332aa5a3d08a9df339c488fa",
"jocosgro.github.io/.git/objects/4d/f65ed76f134648e738588848a1567644d5823f": "4a87e49867fc555997b83b4d8567c8c6",
"jocosgro.github.io/.git/objects/50/94f77a12ff7f0b53d8ba57e1f6bd883d3ff863": "9dc136aa26df2b8b4262e8e2f6a19828",
"jocosgro.github.io/.git/objects/54/55e7cb94894524bd070090e9d48e2580eb0712": "c936d3e86fddaa6eb2bbb296569c1d9c",
"jocosgro.github.io/.git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
"jocosgro.github.io/.git/objects/56/6ef6cd5c2d468c270756b83b7f6dc0ff417643": "8478ea9c740a253a6f0087944f09b2be",
"jocosgro.github.io/.git/objects/5d/63c092bf98cd651c0887f17cae763c782cab8c": "b18eeb04c5d27b44da09858815badfea",
"jocosgro.github.io/.git/objects/5e/a85db39423020467440437e7b622c65c89a5f2": "b4d4c5408d86079f259bd9fd27bf31a4",
"jocosgro.github.io/.git/objects/61/026bebc451ee945ef8f8ca5566ccc03d53de1b": "bf7d662b7303a5e816816fada31baf83",
"jocosgro.github.io/.git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
"jocosgro.github.io/.git/objects/65/570de89e6b9391db88ab15146c4ba713dad351": "65bce6e00202b3663d57665fc98a2f8f",
"jocosgro.github.io/.git/objects/68/599bc42c6049832078578bb7dc4061351a3d8f": "767c492475828bbd757df9a0a5acf998",
"jocosgro.github.io/.git/objects/69/1f516abe2e62644f581aef3a6b63306b7622fe": "2ceda83e73ad8c60cef3d8bc2758ca06",
"jocosgro.github.io/.git/objects/69/c4eb280153df31abf7f08ff060e19cc2e83b54": "23441f8fcd8e31dd3c8a0d6dc18909ac",
"jocosgro.github.io/.git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
"jocosgro.github.io/.git/objects/6a/9b7a8468da10bd0d27eb40a201814e1bec4b68": "72c242d7a6ed42c800e621015834522b",
"jocosgro.github.io/.git/objects/6b/35c53da45088547f133c32d49222222e672e34": "7b5d98baa079c7aa6b8559482479582d",
"jocosgro.github.io/.git/objects/6d/444320601474b96b76aa55a61a124e16d2b9e3": "62cdc7e8669c68317f097a70ac81854b",
"jocosgro.github.io/.git/objects/71/b7009e2f092622c4bff6fbf1470977f6050def": "1de52d242b2a18a53089411c5b3a768f",
"jocosgro.github.io/.git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
"jocosgro.github.io/.git/objects/77/167fd828784da119d1ba58a2dfa3a3f7405b9d": "9c86bb0d7f63868d77e0020c1986a5e8",
"jocosgro.github.io/.git/objects/78/3176c1baa3c3217ab3a38a7a7066c1d32603c4": "e1eea64c372bfd32504457c5c1bb19ec",
"jocosgro.github.io/.git/objects/78/4030fb1089cd9e2e48f9648bec80ab1289348d": "af8391223745475e884418238dce796c",
"jocosgro.github.io/.git/objects/79/31d1c2869a6253ee7ad1840423f57274698dff": "34921c6fadf33e9e42a895e941033c62",
"jocosgro.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"jocosgro.github.io/.git/objects/7c/3de8abc91a4fe67119c532ca8660d16f270495": "cbb45666ad0f8146b8c267d966ba14fe",
"jocosgro.github.io/.git/objects/7e/ddfd63c7926ef0c6e0975495dc4ccaad95c83f": "de675db3e9b832316dc62539364e15ca",
"jocosgro.github.io/.git/objects/81/d5f4ad5ea75c748111656476b25022f59977e2": "527dabc8da38801fabdc0d60fb3d3b6d",
"jocosgro.github.io/.git/objects/82/9e617213dddbafa597666a66f532d70e67fc44": "0222744817ca902b8170eae88049f3f3",
"jocosgro.github.io/.git/objects/82/b15a45710322381c80c76e2db9687550e73c9c": "33f095161af045ed69f87707edd66c6f",
"jocosgro.github.io/.git/objects/82/f3da6e326eff388f62b2577259bf0849f1047f": "a33f4d1e2283cf16f4bdc8030fa1a055",
"jocosgro.github.io/.git/objects/85/6deadec71bf480ab382028831cb251c5177085": "11fba76f250a40166d881645bf1a5473",
"jocosgro.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"jocosgro.github.io/.git/objects/8a/1c3726d525eb89ae9a794d694d3d789bcd5bc0": "d4a3dce8617d23860a1de7ae8942aa8b",
"jocosgro.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"jocosgro.github.io/.git/objects/8a/da302508581a920fc5ac0caf4d8934d7641be3": "aa05f917558c66437dea646bd14958ce",
"jocosgro.github.io/.git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
"jocosgro.github.io/.git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
"jocosgro.github.io/.git/objects/8d/37d3bb0b2d16a023da2a4b2badf22f797bc5c8": "e583b4e0525f6533e313a02bdb134582",
"jocosgro.github.io/.git/objects/8f/a9cb3310b608c3107146a5d91b42923ec1a405": "10b127075ac08938805c3f1d29cfb40f",
"jocosgro.github.io/.git/objects/8f/bbc9edae5d09c5216c24d945d63612f9491812": "e1bdb9b7e47cfc2dea6cb83a638bce0e",
"jocosgro.github.io/.git/objects/8f/d19d9c33688679d0f423c7ee713ede197ce3c8": "f5414b5ce498eac1346a56c72f28f1c8",
"jocosgro.github.io/.git/objects/92/12f0b59b18efa84f725e1715b27ab8b614b483": "71fbc6814dadba724debd69e6be6bf8b",
"jocosgro.github.io/.git/objects/92/f8ff33dece115c60a64ae682ca3948edf7e8b7": "a26adef060f78c08138452942097d8d0",
"jocosgro.github.io/.git/objects/95/3e2243c98082eeabcd18c1f3d3830096e45431": "26b0f3a0e6c9c066802dae8385e3ef0b",
"jocosgro.github.io/.git/objects/96/2cd13e576eccf18f9c319047ced06f9dfaf5c3": "7d2afbed6140815f11061f65573044eb",
"jocosgro.github.io/.git/objects/97/109b8644e5f727b16af6c979e19c2f772cc76f": "956002e4e808493485bea23722345e79",
"jocosgro.github.io/.git/objects/97/a6e220654da3a38b190f995b5ca843998da194": "9caee9e62189ef3fef8ef5daef21593a",
"jocosgro.github.io/.git/objects/97/e3e6ce7cc76983661eb97ebe58e36abbd4b016": "f90189c967b0fd4aa199d375346abbce",
"jocosgro.github.io/.git/objects/98/84c0f341db67b6c5cea240def932e0e6baf7f3": "3a1005031a939ef90e5ac7d018105761",
"jocosgro.github.io/.git/objects/99/3cdc32497aeb7d3201890f781b47ef8fbc44ba": "4752b8cbf130d038d35f112641c0487c",
"jocosgro.github.io/.git/objects/99/5ea0e7e2b6004d349e09231ce287800f8a22b3": "7096c790bb52f2e651bb498c224a2ed3",
"jocosgro.github.io/.git/objects/9a/8f94ea3b7dc6a2d66e4b62bee0cab0162e2804": "f7271e9dd093a2d05245ca898dd7568f",
"jocosgro.github.io/.git/objects/9d/50483ac09939100a1111c009a58a1337e6e51f": "26c1f9f981454a876748d758bba86b07",
"jocosgro.github.io/.git/objects/9f/02ac1e198023302ac50f231252da49c225c1a4": "18209550d00f352b68c093a60b7860f0",
"jocosgro.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"jocosgro.github.io/.git/objects/a3/3d2531f96157c2adaef548d50136ac42b4877a": "c2aa1793c952d0df8630be61654af687",
"jocosgro.github.io/.git/objects/a4/7799f107142d71b3df7ea11c0e21fb357f22cb": "b5546412e9d12f8b624481471a5e61df",
"jocosgro.github.io/.git/objects/a7/51cc02f66baac8bdc37969f886b49db53d8e08": "cdc0e9545d6cb17c2bb5664702177b19",
"jocosgro.github.io/.git/objects/a7/c32c6d53ca381f8958b33295ac19d0d39305aa": "10bdaacbf8da761aaf6783371072aa0f",
"jocosgro.github.io/.git/objects/a9/17a66b5113b5c1253a8d5787156d4841b83b6a": "7f7551f10dc3ba0679ad363ec398b28e",
"jocosgro.github.io/.git/objects/a9/8735c46a2653e72057592959edf50dd9f46399": "4102c67a6ce8782c040e3ea8e524972d",
"jocosgro.github.io/.git/objects/ac/717c9e40de6ed6f9f4fba8a7a6dd0cccf1e033": "0cd800919cb99103a850a6099b41608e",
"jocosgro.github.io/.git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
"jocosgro.github.io/.git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
"jocosgro.github.io/.git/objects/ae/7ee43ae0590c7742779431ddd75804d4e18d52": "37a53165ec17498dff1b595eb4febd67",
"jocosgro.github.io/.git/objects/b1/c2a4662f8bb641ac9cb02b7a9415d51f62bb5a": "de8943850e939b4c8321c35d6bfef177",
"jocosgro.github.io/.git/objects/b1/f78e9bdf4b25be92934c553fade96ac97e014d": "8be387674bcdea0d54ba8b55ca2dcb33",
"jocosgro.github.io/.git/objects/b4/399256dff40fddd8a4b254dc47460e56839f60": "673d04e541e3c251445c3daa2f552033",
"jocosgro.github.io/.git/objects/b6/67dece937c03660ac237ddb39a1ebf56beeae4": "70f91ee7118461c663911de32c8b3879",
"jocosgro.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"jocosgro.github.io/.git/objects/b8/5262ed309cb8e3fbbb855098994072a46a2d51": "3b9a7d750ea2c05841b7961c61c22bab",
"jocosgro.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"jocosgro.github.io/.git/objects/bc/ac79b8973e7ce81d0d37c677adb993a125ea58": "f090d0dfa8941e8b201b40802a7e6012",
"jocosgro.github.io/.git/objects/be/858f4b500df12480a1884ca023c565b7aa025e": "6a702877ffc05752b97425cf0ce2da53",
"jocosgro.github.io/.git/objects/c1/d5be8d45853a42e1e55f7bbdf2d477b304c305": "85858ed0bbc67ca117b7cfd0357e29f1",
"jocosgro.github.io/.git/objects/c3/12105357109d811e413710bd4a9d38025d6cbb": "334b2d36095a4d103a8495d345e93fc1",
"jocosgro.github.io/.git/objects/c6/ea2a61dd20e44ce35dc7be7f20a4aafa4c2a07": "09e9785be5dcb5dfc730b6d288b3b09a",
"jocosgro.github.io/.git/objects/cc/4f778faf91542a6eb851df303400c9c63c6d2b": "e99e4297c545e29e7d1c229f1a15f344",
"jocosgro.github.io/.git/objects/cd/8bdb8f32c760e57f11594267300074867fad2c": "6f79b10397e5980320415804bb694699",
"jocosgro.github.io/.git/objects/cf/e65c7e7063d939f97a0b8ea19886a4d9d7e0e7": "ae019ed166521b821761017b005acf54",
"jocosgro.github.io/.git/objects/d0/db9a6d9bda618f93232295ca9a26417f8d3bde": "03c7c5b8fccb72e6fe6c0ce2439fd321",
"jocosgro.github.io/.git/objects/d2/14a3fc14696ff2592636e41122181e2b32aa2d": "6345747cfa2eb49e12cebbe39b14511a",
"jocosgro.github.io/.git/objects/d3/dc5e54471f8fea6e6e6f4ae2fabfbec0f8c1a4": "c19fd312954a34efdba83705870f8c03",
"jocosgro.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"jocosgro.github.io/.git/objects/d7/0e98743ca5dbcd079b444497e7644a423de41c": "29d2db5fb441a57c7b4657f4fa5e5ddb",
"jocosgro.github.io/.git/objects/d8/2fd7477f098337a3b9e47d91517d51cba4797f": "faa75efd957422ad91d4f1e593345355",
"jocosgro.github.io/.git/objects/dc/b99a3807cac5bd8d102991c58a6d75d265ddc3": "68ba7de8214181945697931d8ebdce76",
"jocosgro.github.io/.git/objects/e0/21b5041699bb0d048d136b96f199fb62b45038": "b06b0e1e88ff38ae9e1e5063a5a7817a",
"jocosgro.github.io/.git/objects/e2/7906924a6265a67ec5b48751473d30e9c314e3": "fe6fe68a4fc6fddbd0f170819ae5820f",
"jocosgro.github.io/.git/objects/e4/6f6e4e170ac593f1b92f90ad8c1ae3eb874705": "0f6a0f70b11fd309d16f15ed135b6584",
"jocosgro.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"jocosgro.github.io/.git/objects/e9/1c560529e97e763bacdf6a6a88d64613b76a71": "9c8912adf8f5abc8849723826a458909",
"jocosgro.github.io/.git/objects/e9/7e2c1c1587039112d9d9983b7afb62151f8bae": "06a2e210083e1c07b922afd547267f88",
"jocosgro.github.io/.git/objects/ea/ac73ff6ee21a649a49e1b513fcd61edd48c0e3": "78e2d8ab465c5fc690bff625e9ec3166",
"jocosgro.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"jocosgro.github.io/.git/objects/f0/5b6f69533bf0c41af82997b9319a3a134744c3": "a85c4440f22ca9c148f31923ccf17474",
"jocosgro.github.io/.git/objects/f0/a310bf47b6c33efd80a83162d748691ad4c9cd": "08253dce6d6e20d017c18010799a75c8",
"jocosgro.github.io/.git/objects/f1/11c86bcc66c6322e361585eb9d211aaae71220": "96253532bca56de3bbe7d4906649f8e3",
"jocosgro.github.io/.git/objects/f4/62db6d3d6ebcf74a8f1439e59322d70c6aed16": "793f67df5f88b88f045357013de89a7b",
"jocosgro.github.io/.git/objects/f6/8cf830502d51b97573cca72b43ed786839468f": "23d9d379176ec9f85f8670edcae693f4",
"jocosgro.github.io/.git/objects/f8/c8e6db78880fe1ae27da61bacbaf340647245b": "1b6b542e7cca336aca0a1f10a61b0b16",
"jocosgro.github.io/.git/objects/fa/48af8d945fb98d90150b4e0baacde7aa78b49d": "877ba4f60345133e324feeed4a3011ae",
"jocosgro.github.io/.git/objects/ff/d0997d20af0945abb444a3846f4e8b8f473a95": "e5e07eaef4a908ca04b8bf23e2c90619",
"jocosgro.github.io/.git/ORIG_HEAD": "a299b80ac85387fc4c22ebdcd877f851",
"jocosgro.github.io/.git/refs/heads/main": "436351465e001686c123c427c0b46272",
"jocosgro.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"jocosgro.github.io/.git/refs/remotes/origin/main": "436351465e001686c123c427c0b46272",
"jocosgro.github.io/assets/AssetManifest.json": "14c0299f53fb919c5e024a02585cc550",
"jocosgro.github.io/assets/assets/accomodation.png": "99450d8e0f77e08698d2e14b45233ece",
"jocosgro.github.io/assets/assets/buildings/artResearch.jpg": "40a37965cc2e992ee4aecceb338ab395",
"jocosgro.github.io/assets/assets/buildings/artsBuilding.jpg": "4faa467fa9dc82b8a11b2b5e2eaaeda4",
"jocosgro.github.io/assets/assets/buildings/atrium.jpg": "21784c77c94d23846356663b49dacd1f",
"jocosgro.github.io/assets/assets/buildings/berkeley.jpg": "c234b1dc10b70d3e98ea52f909ccc7e0",
"jocosgro.github.io/assets/assets/buildings/biomed.jpg": "532f4778267b2207b08e3f4ff778d366",
"jocosgro.github.io/assets/assets/buildings/botany.jpg": "8d82bf5b703764e5a053ffb27e315aae",
"jocosgro.github.io/assets/assets/buildings/botanyBay.jpg": "c3a199f13bdd9966c0389436a8b739b3",
"jocosgro.github.io/assets/assets/buildings/business.jpg": "83c0241d2271445d801a6f1c8003fafc",
"jocosgro.github.io/assets/assets/buildings/campanile.JPG": "dcbb663b9e3d0dd8d8f6c5d9539d0991",
"jocosgro.github.io/assets/assets/buildings/chapel.jpg": "c93f208444449299bdd5eab7db847ec0",
"jocosgro.github.io/assets/assets/buildings/chemistry.jpg": "1797bf32bf858ed099612288dc903aae",
"jocosgro.github.io/assets/assets/buildings/civilEng.jpg": "1caf902d2e87059ed99a04bc1ce7b204",
"jocosgro.github.io/assets/assets/buildings/collegePark.JPG": "289d9baabf7eb4f7e9b098d0e17862ba",
"jocosgro.github.io/assets/assets/buildings/dental.jpg": "bff7e978b36f45db914571a9dc8bef59",
"jocosgro.github.io/assets/assets/buildings/dining.jpg": "da6acb177b30fdc31e9a7507325becd6",
"jocosgro.github.io/assets/assets/buildings/douglasHyde.jpg": "b9586c9189f1110601fe1f29adb35f30",
"jocosgro.github.io/assets/assets/buildings/dunlopOriel.jpg": "e343511b4e8eb78e47830ebf054a900f",
"jocosgro.github.io/assets/assets/buildings/fellows.jpg": "5a8454c2343035686ecaace4f5090e67",
"jocosgro.github.io/assets/assets/buildings/fitzgerald.jpg": "2061cd222ce015b4522a8ee8f0f9c85b",
"jocosgro.github.io/assets/assets/buildings/gmb.jpg": "af06d6e62fa75dfca9e4c359f0cd59f1",
"jocosgro.github.io/assets/assets/buildings/goldsmith.jpg": "74c2578ff2d37693537a6e91fd727dfd",
"jocosgro.github.io/assets/assets/buildings/hamilton.jpg": "41da8bd8d81e20fe47c58249e38dc1a6",
"jocosgro.github.io/assets/assets/buildings/lloyd.jpg": "5fdb5eae5e3c9edabf7cb300cf45d2ab",
"jocosgro.github.io/assets/assets/buildings/museum.jpg": "d81ccc2a55ac4b9b5a01aa3e108d5911",
"jocosgro.github.io/assets/assets/buildings/naughton.jpg": "07f269aaa6874ca3b86aebb6631ba899",
"jocosgro.github.io/assets/assets/buildings/nursing.jpg": "aa95c5c64fd5c4401e906cca615cfd3d",
"jocosgro.github.io/assets/assets/buildings/oldLibrary.jpg": "627535f7f164f8013ef36ff5f396edf8",
"jocosgro.github.io/assets/assets/buildings/oReilly.jpg": "b660bef4819b1d8a68cddf40aa5b23f6",
"jocosgro.github.io/assets/assets/buildings/parliamentSquare.jpg": "20b2f941358b5b035b774ec724916031",
"jocosgro.github.io/assets/assets/buildings/pav.jpg": "cddf8ac01cb548783ca88e1c89612079",
"jocosgro.github.io/assets/assets/buildings/phs.jpg": "85efe750ae5135733be3c45a3718edd1",
"jocosgro.github.io/assets/assets/buildings/printingHouse.jpg": "496a3d2ce0ea51ad9e49e2f37a789a3c",
"jocosgro.github.io/assets/assets/buildings/readingRoom.jpg": "53eed32fb10c0fb3d3e2e403806b9f58",
"jocosgro.github.io/assets/assets/buildings/regent.jpg": "1e31773653ff0c7bb1ff50383ce7d0af",
"jocosgro.github.io/assets/assets/buildings/rugby.JPG": "6cb5b0055f4371776aa400187f787731",
"jocosgro.github.io/assets/assets/buildings/samuelBeckett.jpg": "ee93b655bea8209f9f22cdf0e3b1f110",
"jocosgro.github.io/assets/assets/buildings/security.jpg": "a426aad0942c599c761cfa9e6622c1dc",
"jocosgro.github.io/assets/assets/buildings/smurfit.jpg": "8202bcdc5232487d53f46a8b0ddac5a7",
"jocosgro.github.io/assets/assets/buildings/sniam.jpg": "3237768f777d028ff56dc09f1fbd34f1",
"jocosgro.github.io/assets/assets/buildings/sports.jpg": "f2b67b259054a61784dd36c45d47ab0e",
"jocosgro.github.io/assets/assets/buildings/usher.jpg": "83d3abc9ff177c057007943a2cc6d26f",
"jocosgro.github.io/assets/assets/CalendarInfo.png": "bdfb449144c95ec3aaa7b0660df2fc5d",
"jocosgro.github.io/assets/assets/church.png": "6cc06fd3e3cca80af6fe0c95184198da",
"jocosgro.github.io/assets/assets/construction.png": "c035f8d524b29aa5f1cb56906240cafb",
"jocosgro.github.io/assets/assets/constructionEventNotStarted.png": "2fb8e789160a7dcdcc06b62a72d79f94",
"jocosgro.github.io/assets/assets/constructionEventStarted.png": "c56cb060b4ede43ff40d84e4f56c836b",
"jocosgro.github.io/assets/assets/entrance.png": "9544a35f308dfb852e31c1a03c525811",
"jocosgro.github.io/assets/assets/event.png": "04b754c3fd38c8b9d89f75aa02abfe79",
"jocosgro.github.io/assets/assets/eventsScreenInfo.png": "a6f4cf3d915d361cc1dfa5087cd60910",
"jocosgro.github.io/assets/assets/filmingEventNotStarted.png": "4b406cbd6b9702b57498e9b2dee2a558",
"jocosgro.github.io/assets/assets/filmingEventStarted.png": "6d1c80a3ad4ff0249879168ee978b001",
"jocosgro.github.io/assets/assets/folder.png": "9945028cc53d46fbf8053e3b125c6345",
"jocosgro.github.io/assets/assets/greenMarker.png": "bb023d7fe646f29feaa52daf1256caed",
"jocosgro.github.io/assets/assets/help.png": "32d94395d29befdc0fb2474be94e3818",
"jocosgro.github.io/assets/assets/home.png": "6b498843131af2f675316a677f00518b",
"jocosgro.github.io/assets/assets/HomeScreenTabInfo.png": "f6ac957afe68afc8358d40cb0c666b59",
"jocosgro.github.io/assets/assets/labEventNotStarted.png": "933ebf4663c17437d9174ec05f6c2787",
"jocosgro.github.io/assets/assets/labEventStarted.png": "4a200cfcc2e9ede3f3c889b6ddfc5a47",
"jocosgro.github.io/assets/assets/lecture.png": "d2c822e31024f701df61d17297310bd2",
"jocosgro.github.io/assets/assets/lectureEventNotStarted.png": "67d2af5121f68ad52279d43eea76c31d",
"jocosgro.github.io/assets/assets/lectureEventStarted.png": "63587db600b369659e0dd88baba4a3c8",
"jocosgro.github.io/assets/assets/library.png": "149ed7068f4113cc8eb302c1a4fb41ea",
"jocosgro.github.io/assets/assets/logo.png": "59adf21c70811df530e0a84b4bbb6f19",
"jocosgro.github.io/assets/assets/map_style.txt": "7a018e4314966108121030b369c77f09",
"jocosgro.github.io/assets/assets/nav.png": "93a38a49bd64fcf6263bcc1e5ab77a88",
"jocosgro.github.io/assets/assets/ne_logo.png": "344dfc3a672d60d247ac6c6be889298c",
"jocosgro.github.io/assets/assets/no-data.png": "d9b646e3dec6299dd27577b1e4a25fee",
"jocosgro.github.io/assets/assets/otherEventNotStarted.png": "6b6cd5ec4a1aac083fb11cafe26b8ec5",
"jocosgro.github.io/assets/assets/otherEventStarted.png": "f0c944f5fe1e1476824b06b339501983",
"jocosgro.github.io/assets/assets/pvp.png": "af2e5e442fb904ad03234e079c60041b",
"jocosgro.github.io/assets/assets/quiet.png": "c5447d799d930e98debfa321ff91235c",
"jocosgro.github.io/assets/assets/satellite/accomodation.png": "9f21b615d55d9d0f575c1daeeecd8b43",
"jocosgro.github.io/assets/assets/satellite/church.png": "d2932663221ce1c6adbb52906eada436",
"jocosgro.github.io/assets/assets/satellite/construction.png": "793fc85392990fc983b26ea4d7319c49",
"jocosgro.github.io/assets/assets/satellite/entrance.png": "7298d7997dd1e8f819bf0db78db0322d",
"jocosgro.github.io/assets/assets/satellite/event.png": "04b754c3fd38c8b9d89f75aa02abfe79",
"jocosgro.github.io/assets/assets/satellite/home.png": "3cfc85b49207b81c0091a3ee957eb245",
"jocosgro.github.io/assets/assets/satellite/lecture.png": "1fa610f20138eb1e537e7e65b121ae37",
"jocosgro.github.io/assets/assets/satellite/library.png": "6cdf879338661f34098c1ed2dfcffa46",
"jocosgro.github.io/assets/assets/satellite/pvp.png": "60d6949d516524829de518aae4978370",
"jocosgro.github.io/assets/assets/satellite/quiet.png": "f89ed8af0905807565b7b0fd44e41c1d",
"jocosgro.github.io/assets/assets/satellite/society.png": "a6421b9753e7cdea85b803a26c7db781",
"jocosgro.github.io/assets/assets/satellite/sport.png": "7e12a1ab13031c44dc8a93e48357ea91",
"jocosgro.github.io/assets/assets/satellite/staff.png": "6e6e63b83de86c48e001666482144f0d",
"jocosgro.github.io/assets/assets/satellite/tourism.png": "f6f205e38a03bab351f592c91ddd107b",
"jocosgro.github.io/assets/assets/satellite/unknown.png": "3fd6cbf84b211b830baa92783d900d9b",
"jocosgro.github.io/assets/assets/SearchInfo.png": "a0474e9637c930d469174453cc71e598",
"jocosgro.github.io/assets/assets/socialEventNotStarted.png": "5b57bc9962c205e82f0726110d5f90b5",
"jocosgro.github.io/assets/assets/socialEventStarted.png": "bdaa0a9d46128bfcf132919cef06552a",
"jocosgro.github.io/assets/assets/society.png": "0883004a4095e980c1c99b26724973c5",
"jocosgro.github.io/assets/assets/sport.png": "2f5773ef06cf209b9ce170d8867ec28a",
"jocosgro.github.io/assets/assets/staff.png": "efa4843ab4ca8f6435c19634a7c58d79",
"jocosgro.github.io/assets/assets/staffAccountIcon.png": "fe449d0743890aeffad5a5fb5b98843c",
"jocosgro.github.io/assets/assets/teacherAccountIcon.png": "76ebca23f6ff5c26c9fec19d4aa31918",
"jocosgro.github.io/assets/assets/tourism.png": "c62ef39c55b047f26cf8bc62215e594c",
"jocosgro.github.io/assets/assets/tutorialEventNotStarted.png": "b2efaa69b494897fe85488b8555e1b0e",
"jocosgro.github.io/assets/assets/tutorialEventStarted.png": "0f9ebb7948407a77786b33b339df7ab4",
"jocosgro.github.io/assets/assets/unknown.png": "b964cd1d95b5f02e37232fbc7d89fc7f",
"jocosgro.github.io/assets/assets/user.png": "a71a9aac37b382bd8489bfe1f5a0a88d",
"jocosgro.github.io/assets/assets/userAccountIcon.png": "77ba047c053b1bc0b59a9df73ceadadd",
"jocosgro.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"jocosgro.github.io/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"jocosgro.github.io/assets/NOTICES": "aba7afb981a556abb3c79d1349cc8caa",
"jocosgro.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"jocosgro.github.io/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"jocosgro.github.io/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"jocosgro.github.io/assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"jocosgro.github.io/assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"jocosgro.github.io/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"jocosgro.github.io/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"jocosgro.github.io/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"jocosgro.github.io/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"jocosgro.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"jocosgro.github.io/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"jocosgro.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"jocosgro.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"jocosgro.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"jocosgro.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"jocosgro.github.io/index.html": "48fd3cc6209c13d7b4a512da7b796de9",
"jocosgro.github.io/main.dart.js": "692763ca0458973b469014c29b01b4e7",
"jocosgro.github.io/manifest.json": "0824818d2186695fae105c597995676d",
"jocosgro.github.io/version.json": "b83792702083f2263c9444134857c1c7",
"main.dart.js": "747701156772ead1eef47b6fea6f7236",
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
