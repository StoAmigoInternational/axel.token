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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_temp/sprites/sprite.css",
    "revision": "911e4c0d2d068b15540e9478879cf5f8"
  },
  {
    "url": "_temp/sprites/sprite.png",
    "revision": "7983515c465f991053f824c55ef34449"
  },
  {
    "url": "_temp/sprites/sprite.svg",
    "revision": "cad98b64ee7952ec7e7f14ec706bb010"
  },
  {
    "url": "_temp/sprites/sprite.webp",
    "revision": "899554785c3ff9c5e9ab3240aaf71a29"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.a4b23b386c.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.a4b23b386c.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.305e5bc934.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.305e5bc934.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.ce4e1da1f2.svg",
    "revision": "ce4e1da1f24283b19f1c62c9d91a376f"
  },
  {
    "url": "assets/blank.da3bf8b8d3.png",
    "revision": "da3bf8b8d321911850ba3a847ad67812"
  },
  {
    "url": "assets/blank.da3bf8b8d3.webp",
    "revision": "d70f227bd3cda1d6ce7e55cc31022dcf"
  },
  {
    "url": "assets/common/big-ideas.9b2446fe34.png",
    "revision": "9b2446fe34142dd9eb118eb8e88466b4"
  },
  {
    "url": "assets/common/big-ideas.9b2446fe34.webp",
    "revision": "548402c2b906a11e2ecbc69abf30b94d"
  },
  {
    "url": "assets/common/big-ideas.f5ee8eead7.svg",
    "revision": "f5ee8eead73fa9894e364798b289a3e9"
  },
  {
    "url": "assets/common/data-01.0f6ff4b6cd.png",
    "revision": "0f6ff4b6cd3bf8572242dbe7b11bb325"
  },
  {
    "url": "assets/common/data-01.0f6ff4b6cd.webp",
    "revision": "35cc1d7101ffb9b36b85272d5bffd573"
  },
  {
    "url": "assets/common/earth.baa8c6fbf7.png",
    "revision": "baa8c6fbf7907a7a131dd68d68e706a8"
  },
  {
    "url": "assets/common/earth.baa8c6fbf7.webp",
    "revision": "79f7186cfa0b9a1d3f313844b135ca31"
  },
  {
    "url": "assets/common/icon-dark.ed4af9ae17.svg",
    "revision": "ed4af9ae17f85f0fed1f7a5ce0d9984c"
  },
  {
    "url": "assets/common/icon-dark.fe1355bfd2.png",
    "revision": "fe1355bfd20bae85040238507c082885"
  },
  {
    "url": "assets/common/icon-dark.fe1355bfd2.webp",
    "revision": "210de88d509847367fc1eb1b8371f146"
  },
  {
    "url": "assets/common/icon-light.27c5a9ac22.svg",
    "revision": "27c5a9ac22335bd2874261ff984ecd61"
  },
  {
    "url": "assets/common/icon-light.d26bfb4f2c.png",
    "revision": "d26bfb4f2c61df1e9b27f157e95d8373"
  },
  {
    "url": "assets/common/icon-light.d26bfb4f2c.webp",
    "revision": "5d5d420833e9995752f3ae4de390c353"
  },
  {
    "url": "assets/common/icon-primary.b639f5f6d1.png",
    "revision": "b639f5f6d1bada426c707177cc4bd2c4"
  },
  {
    "url": "assets/common/icon-primary.b639f5f6d1.webp",
    "revision": "2e7f9d7af2173b9c2f73a6ae133cc55a"
  },
  {
    "url": "assets/common/icon-primary.b73f04234a.svg",
    "revision": "b73f04234a8e3997202c1e793908b708"
  },
  {
    "url": "assets/common/icon-secondary.3bd147c12e.png",
    "revision": "3bd147c12e4e992fdeb80183db008bfb"
  },
  {
    "url": "assets/common/icon-secondary.3bd147c12e.webp",
    "revision": "8425caa15004d52b1d9353706ccdd2f6"
  },
  {
    "url": "assets/common/icon-secondary.90450000e3.svg",
    "revision": "90450000e357fcf6a19884f69c404729"
  },
  {
    "url": "assets/common/join-us.9c504ecfdb.png",
    "revision": "9c504ecfdb4e7ee7379be9ad12e38d8a"
  },
  {
    "url": "assets/common/join-us.9c504ecfdb.webp",
    "revision": "44f362dc6ac217dc5cd6986feb66e362"
  },
  {
    "url": "assets/common/join-us.b222a7eaf9.svg",
    "revision": "b222a7eaf9225a280d73ad29047ee7ab"
  },
  {
    "url": "assets/common/logo-dark.563a50633e.svg",
    "revision": "563a50633e4e23f489866e661475ac5e"
  },
  {
    "url": "assets/common/logo-dark.f4d13cc362.png",
    "revision": "f4d13cc36201459d879bef283865a46d"
  },
  {
    "url": "assets/common/logo-dark.f4d13cc362.webp",
    "revision": "dcd422c8d34c6f5f453f8d2d78a6243d"
  },
  {
    "url": "assets/common/logo-light.23971065a1.png",
    "revision": "23971065a18ba283800d9d0faa5f48a4"
  },
  {
    "url": "assets/common/logo-light.23971065a1.webp",
    "revision": "2eee7ab936f3a07b16d48096b21577f7"
  },
  {
    "url": "assets/common/logo-light.8b6726f118.svg",
    "revision": "8b6726f118340e87200d82e5148b4d37"
  },
  {
    "url": "assets/common/logo-primary.a0ee516096.svg",
    "revision": "a0ee516096295b2ebfeb3bb8e35ddced"
  },
  {
    "url": "assets/common/logo-primary.f4dee0c33e.png",
    "revision": "f4dee0c33ecceb527d01543939c28f24"
  },
  {
    "url": "assets/common/logo-primary.f4dee0c33e.webp",
    "revision": "6b076e00c291c78b0f5823ece6608cbe"
  },
  {
    "url": "assets/common/logo-secondary.380ef183bb.svg",
    "revision": "380ef183bbfd7247ab1454bf686800ab"
  },
  {
    "url": "assets/common/logo-secondary.d8af62962c.png",
    "revision": "d8af62962c8a9da9b2c82d9ed437a2ec"
  },
  {
    "url": "assets/common/logo-secondary.d8af62962c.webp",
    "revision": "bcaa6db7886f94c03aabc04d5d7cbe9f"
  },
  {
    "url": "assets/common/network-01.b8b1004482.png",
    "revision": "b8b100448244d158b0d74a712bc4182a"
  },
  {
    "url": "assets/common/network-01.b8b1004482.webp",
    "revision": "12c8099d762f8501d5134d96bb2bfea8"
  },
  {
    "url": "assets/common/network-02.dda2ddeba5.png",
    "revision": "dda2ddeba5490beeb817915439e9650a"
  },
  {
    "url": "assets/common/network-02.dda2ddeba5.webp",
    "revision": "12919bf925ba4eb7c4b1ea4e83391d75"
  },
  {
    "url": "assets/common/network-03.e31a27722a.png",
    "revision": "e31a27722a2133bc32ba4f2855e75dcb"
  },
  {
    "url": "assets/common/network-03.e31a27722a.webp",
    "revision": "d3954f9f58dd1d2666f65c1869c9e245"
  },
  {
    "url": "assets/common/network-04.6a28e1ebfe.png",
    "revision": "6a28e1ebfe8adcb2b99ef06c1cf48e05"
  },
  {
    "url": "assets/common/network-04.6a28e1ebfe.webp",
    "revision": "bccbd420048dae8a54cafe8f9f0da0cb"
  },
  {
    "url": "assets/common/people.ce0718917a.png",
    "revision": "ce0718917a85d2cc02c0c21bf40fbd13"
  },
  {
    "url": "assets/common/people.ce0718917a.webp",
    "revision": "85fbaf1f395e2a295d963c4018909161"
  },
  {
    "url": "assets/common/scalable.16e3a847b7.svg",
    "revision": "16e3a847b73288490690f7a05eb53bb9"
  },
  {
    "url": "assets/common/scalable.802067c118.png",
    "revision": "802067c118cc2f1ea898c34ea577b1c8"
  },
  {
    "url": "assets/common/scalable.802067c118.webp",
    "revision": "d05c91df7f6de8a906835c631e49a70c"
  },
  {
    "url": "assets/common/shopping.9d8bd05c94.png",
    "revision": "9d8bd05c944ddbe920e4e28640990280"
  },
  {
    "url": "assets/common/shopping.9d8bd05c94.webp",
    "revision": "c6efac855733e357bcc5af57500c7684"
  },
  {
    "url": "assets/common/shopping.e5f22e831f.svg",
    "revision": "e5f22e831f97bca408543da788b200b2"
  },
  {
    "url": "assets/common/teamwork-01.dc73f6a652.png",
    "revision": "dc73f6a652f91623980e9a0907332ed8"
  },
  {
    "url": "assets/common/teamwork-01.dc73f6a652.webp",
    "revision": "51e5e22f57c7780f582d9a225c3ddf1d"
  },
  {
    "url": "assets/common/teamwork-02.5c3e19239f.png",
    "revision": "5c3e19239fb22c1ad0fc0444757a40ec"
  },
  {
    "url": "assets/common/teamwork-02.5c3e19239f.webp",
    "revision": "49a28c728abb45a3f8de7c50cd4a96e2"
  },
  {
    "url": "assets/common/teamwork.849ca8a68c.svg",
    "revision": "849ca8a68c1026799f2c1b9b5524097b"
  },
  {
    "url": "assets/common/teamwork.dbc22788ce.png",
    "revision": "dbc22788ce3643386143f9742ad4c468"
  },
  {
    "url": "assets/common/teamwork.dbc22788ce.webp",
    "revision": "a9ce7c90b30015832bb097f1e1b86fe2"
  },
  {
    "url": "assets/common/tokens.02e860a169.png",
    "revision": "02e860a169317bd6dc7ee751fd193654"
  },
  {
    "url": "assets/common/tokens.02e860a169.webp",
    "revision": "b7a9a296db6ec92d615b03ede9e907d8"
  },
  {
    "url": "assets/common/tokens.fe3ea07fb8.svg",
    "revision": "fe3ea07fb81036e625f339c94c5d19f6"
  },
  {
    "url": "assets/error.6f851662ad.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon-google.ae457f3041.png",
    "revision": "ae457f3041bfb992267fa0218fcc516e"
  },
  {
    "url": "assets/icon-google.ae457f3041.webp",
    "revision": "4ee112eecb2e3c28a8777617b21e4b6c"
  },
  {
    "url": "assets/icon-google.f16ad52d95.svg",
    "revision": "f16ad52d955fc63de49886ff657e88cd"
  },
  {
    "url": "assets/icons-nav.18d63ff72b.png",
    "revision": "18d63ff72b01bedb635efaa3c5edc82e"
  },
  {
    "url": "assets/icons-nav.18d63ff72b.webp",
    "revision": "4f371fb4386a0cc23b844e06c956301c"
  },
  {
    "url": "assets/icons-nav.54c5e42c9b.svg",
    "revision": "54c5e42c9b101ef67753192ca9862933"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "5acabf05159b37279dae5f40fc5e10e3"
  },
  {
    "url": "assets/icons/android-chrome-192x192.webp",
    "revision": "ee425ef03739fa59c953fc95cf519390"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "c4a45986991fda59797af8a415f888d0"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "e6f0fd6422e2edde989443a91197440c"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "8e7f938fc5ad63bb3f688fd732975711"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "269c8179316a5ec5aea200f538069c7e"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "94d86e03c8ded660a8f6be2d985464c9"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "8a94213d1af1ee92d60d74478b12bdb5"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "4d2060a513398adec9128c6763d2d02f"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "a115be365ff6dc5d535d19a3b641a45e"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "787c41b21cfebc0f8408b9670efbbad0"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "e24529be8c7f2663a80ffa267f75a791"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "ca51a917d07e5baef59b245183b4b502"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "7449b58589a56b1878023af0582f0759"
  },
  {
    "url": "assets/icons/safari-pinned-tab.png",
    "revision": "6f8a479668fdb6a0cf028459541f7908"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "4e4288245e34e0ebbba58a7bb7faaddd"
  },
  {
    "url": "assets/icons/safari-pinned-tab.webp",
    "revision": "4603a42a8584f341db3f66111b23490b"
  },
  {
    "url": "assets/index/diagram-how-it-works-ch.4d80d9580b.png",
    "revision": "4d80d9580bbdb40bfd674bb95abf7b77"
  },
  {
    "url": "assets/index/diagram-how-it-works-ch.4d80d9580b.webp",
    "revision": "3ee12592bdd8df947ea0bd6e9a94bf63"
  },
  {
    "url": "assets/index/diagram-how-it-works.c550721c51.png",
    "revision": "c550721c515840318d28b82b2c6da6d5"
  },
  {
    "url": "assets/index/diagram-how-it-works.c550721c51.webp",
    "revision": "1b6b3164a7a98280358e8d2be8d595ad"
  },
  {
    "url": "assets/index/diagram-our-technology-ch.995b82c541.png",
    "revision": "995b82c541e2d6950824d35ea3cacc9f"
  },
  {
    "url": "assets/index/diagram-our-technology-ch.995b82c541.webp",
    "revision": "3d87432511b97c4d939ccdd88c67ab10"
  },
  {
    "url": "assets/index/diagram-our-technology.fe5dd1b527.png",
    "revision": "fe5dd1b527741971833626f25e8dec9c"
  },
  {
    "url": "assets/index/diagram-our-technology.fe5dd1b527.webp",
    "revision": "a98988d8cb7cd450feb04a4f8ae0aa8b"
  },
  {
    "url": "assets/index/screenshot-laptop-paid-link.17a2240025.png",
    "revision": "17a2240025be21f2028d1217215aa9e8"
  },
  {
    "url": "assets/index/screenshot-laptop-paid-link.17a2240025.webp",
    "revision": "7884f4001396aa4246cf3d08a786ccd5"
  },
  {
    "url": "assets/index/screenshot-paid-link.abd8a4d74d.png",
    "revision": "abd8a4d74d7e0d26dcfd93b56c342ca8"
  },
  {
    "url": "assets/index/screenshot-paid-link.abd8a4d74d.webp",
    "revision": "cc618c62b7329ed52b7f26b6f6eb7c07"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "e664a96d29cb996a0debce5d9c61c293"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "45429878b05594382abd680188f60434"
  },
  {
    "url": "assets/social/social.png",
    "revision": "2dea79587f407f002730269dfe3e6be6"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "3436c890b6e5397bb736a83a5495960f"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.17a095ed58.png",
    "revision": "17a095ed580e49e5c920c45bba059fd1"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.17a095ed58.webp",
    "revision": "6d7ea02809802a4e9a977ee6c8c565f1"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.svg",
    "revision": "74ff8527c203d6bedc49fe6b82dbcdad"
  },
  {
    "url": "assets/sprites/press/bitcoininst.569c40f4af.png",
    "revision": "569c40f4af8f14d92ed028b740dbd2a3"
  },
  {
    "url": "assets/sprites/press/bitcoininst.569c40f4af.webp",
    "revision": "ec5da2d0e183fd276889245e8c073b1e"
  },
  {
    "url": "assets/sprites/press/bitcoininst.svg",
    "revision": "f46faa0b2d9697cba95239c355ffff3d"
  },
  {
    "url": "assets/sprites/press/business-insider.fd13da60bc.png",
    "revision": "fd13da60bce79abb3722d6b5bba5afb5"
  },
  {
    "url": "assets/sprites/press/business-insider.fd13da60bc.webp",
    "revision": "f8e1ebeaf2e824eb86ef17a9cc485018"
  },
  {
    "url": "assets/sprites/press/business-insider.svg",
    "revision": "93f02a47909f5e12efed45929013f97b"
  },
  {
    "url": "assets/sprites/press/ccn.04dfd2d298.png",
    "revision": "04dfd2d298fca9fffea8b7d3d864abda"
  },
  {
    "url": "assets/sprites/press/ccn.04dfd2d298.webp",
    "revision": "b1d05578df784adf210c3a90e8e2867e"
  },
  {
    "url": "assets/sprites/press/ccn.svg",
    "revision": "4dc7e24d8152a44eb40dfd10c5d0cbe3"
  },
  {
    "url": "assets/sprites/press/coin-announcer.fc90ec5143.png",
    "revision": "fc90ec514356fd19e2d7be90193d06eb"
  },
  {
    "url": "assets/sprites/press/coin-announcer.fc90ec5143.webp",
    "revision": "5c8e1cfa578bcbfd32f81d5af98cdb9a"
  },
  {
    "url": "assets/sprites/press/coin-announcer.svg",
    "revision": "34b7c3a5b1204096ad4ef3d11267f7f8"
  },
  {
    "url": "assets/sprites/press/coinmercenary.863cc8aa8b.png",
    "revision": "863cc8aa8b780e8bdef81e948c871b47"
  },
  {
    "url": "assets/sprites/press/coinmercenary.863cc8aa8b.webp",
    "revision": "c59da4d64756b31bffd877d2810bc111"
  },
  {
    "url": "assets/sprites/press/coinmercenary.svg",
    "revision": "7961bdf3238b0f52eafe8d4be7f903f2"
  },
  {
    "url": "assets/sprites/press/crains.f67e6bbf64.png",
    "revision": "f67e6bbf645d37cfc63d544defc72ac1"
  },
  {
    "url": "assets/sprites/press/crains.f67e6bbf64.webp",
    "revision": "4eb8d5a82e8b5d22e4887c031f0b69ce"
  },
  {
    "url": "assets/sprites/press/crains.svg",
    "revision": "a2be08b93013c1860e4382fbb30bc131"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.d7be1a94ee.png",
    "revision": "d7be1a94eed76773b1b90e3d5e736745"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.d7be1a94ee.webp",
    "revision": "7da9134bf5b14c07b58c89eb4f0b7190"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.svg",
    "revision": "5bc25a35ce772a5eb5b123b345573867"
  },
  {
    "url": "assets/sprites/press/e27.5b95e5d23e.png",
    "revision": "5b95e5d23ebaa05d102daf5aadcd5722"
  },
  {
    "url": "assets/sprites/press/e27.5b95e5d23e.webp",
    "revision": "5dded4cd8334dd7b1ad7414716941af7"
  },
  {
    "url": "assets/sprites/press/e27.svg",
    "revision": "186fcf7064f1135c927b4b04d642bdb3"
  },
  {
    "url": "assets/sprites/press/forbes.1b3c402e46.png",
    "revision": "1b3c402e46926cad808163ad0b24450b"
  },
  {
    "url": "assets/sprites/press/forbes.1b3c402e46.webp",
    "revision": "c08bcf85e319f05a62603afbc532f66e"
  },
  {
    "url": "assets/sprites/press/forbes.svg",
    "revision": "165047da2ec728088532786ea9fb176d"
  },
  {
    "url": "assets/sprites/press/kabn.7b3af6acd0.png",
    "revision": "7b3af6acd00f3d5f5b281f42b185004b"
  },
  {
    "url": "assets/sprites/press/kabn.7b3af6acd0.webp",
    "revision": "968438e2034066d1989e53f30e32a0d4"
  },
  {
    "url": "assets/sprites/press/kabn.svg",
    "revision": "110e242484a61e2ed78dfea3c6aa25a6"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.fa935c24e5.png",
    "revision": "fa935c24e56f5c98cd351d1b63ec682b"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.fa935c24e5.webp",
    "revision": "4d800fd68d445037c89f2d4bc68083d0"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.svg",
    "revision": "c5df8cc8416bbbfa35c9a899e8d410fc"
  },
  {
    "url": "assets/sprites/press/pcmag.b2b487b919.png",
    "revision": "b2b487b919dfa4ead6780ba90b5fd36a"
  },
  {
    "url": "assets/sprites/press/pcmag.b2b487b919.webp",
    "revision": "0c461d2a7676637e4721fbd3856bb9c5"
  },
  {
    "url": "assets/sprites/press/pcmag.svg",
    "revision": "0a3ed284676eae7d96492184cc5be55f"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.b957a9dc84.png",
    "revision": "b957a9dc84b1d35cc71f2cc0e9c7974d"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.b957a9dc84.webp",
    "revision": "a2e36d0f610e57906cd3945ffba15f30"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.svg",
    "revision": "356f294d785552a5bf3791a0f7cea6e3"
  },
  {
    "url": "assets/sprites/press/tech-bullion.776e87e189.png",
    "revision": "776e87e1896c40ead24a4404473f2292"
  },
  {
    "url": "assets/sprites/press/tech-bullion.776e87e189.webp",
    "revision": "e9a66b88cb5a22079e90a9b0170711be"
  },
  {
    "url": "assets/sprites/press/tech-bullion.svg",
    "revision": "b4cfab08633b2137de3db2cb2c4e04b4"
  },
  {
    "url": "assets/sprites/press/techaeris.f517246ced.png",
    "revision": "f517246ced856f98bf197dca9f532a10"
  },
  {
    "url": "assets/sprites/press/techaeris.f517246ced.webp",
    "revision": "818e3ba9676861d48b27c769cd19fdf2"
  },
  {
    "url": "assets/sprites/press/techaeris.svg",
    "revision": "286a38902b3590b6306331855262e606"
  },
  {
    "url": "assets/sprites/press/vegastech.582011dbb0.png",
    "revision": "582011dbb0cdb39f205b2c2224fe1d8c"
  },
  {
    "url": "assets/sprites/press/vegastech.582011dbb0.webp",
    "revision": "8895342a263801c8f44149f4b9b1e098"
  },
  {
    "url": "assets/sprites/press/vegastech.svg",
    "revision": "9da63b2d5cfda73cda850ae0fb808d16"
  },
  {
    "url": "assets/sprites/press/zcorum.642faf74ed.png",
    "revision": "642faf74ed0e1e7ac79c68aa7a6dd7cb"
  },
  {
    "url": "assets/sprites/press/zcorum.642faf74ed.webp",
    "revision": "abc41b9bee5e3e48cc336dc1801c8f8c"
  },
  {
    "url": "assets/sprites/press/zcorum.svg",
    "revision": "97f337920fbcd0051c12da18bf4488dd"
  },
  {
    "url": "assets/sprites/sprite.7983515c46.png",
    "revision": "7983515c465f991053f824c55ef34449"
  },
  {
    "url": "assets/sprites/sprite.7983515c46.webp",
    "revision": "899554785c3ff9c5e9ab3240aaf71a29"
  },
  {
    "url": "assets/sprites/sprite.svg",
    "revision": "bade42f931c47a354500441a0ea79571"
  },
  {
    "url": "assets/stories/acoustic-guitar.179ab900df.png",
    "revision": "179ab900df589c26a513a1fda289d6d4"
  },
  {
    "url": "assets/stories/acoustic-guitar.179ab900df.webp",
    "revision": "6ef7ed958bc363971b85459c67af1a43"
  },
  {
    "url": "assets/stories/acoustic-guitar.7d4b404819.svg",
    "revision": "7d4b404819982b814e4365ba8bc1faa1"
  },
  {
    "url": "assets/stories/camera.59f2552d79.png",
    "revision": "59f2552d7995f92c70a57fae451f7882"
  },
  {
    "url": "assets/stories/camera.59f2552d79.webp",
    "revision": "da3b1c5607b69ab4919d5675666dc22e"
  },
  {
    "url": "assets/stories/camera.ce9ce86ced.svg",
    "revision": "ce9ce86cedc94dbdae85388bb896191e"
  },
  {
    "url": "assets/stories/gamepad.233ad0451e.svg",
    "revision": "233ad0451e609d4964a0e7cd338075ed"
  },
  {
    "url": "assets/stories/gamepad.bbadcfa84e.png",
    "revision": "bbadcfa84e146456af7ed2de54252379"
  },
  {
    "url": "assets/stories/gamepad.bbadcfa84e.webp",
    "revision": "a894dcd28c3aad380163d00b4a52b75d"
  },
  {
    "url": "assets/stories/large-josh.9b9e536eee.png",
    "revision": "9b9e536eee1f9f671a7b7fdef8a38579"
  },
  {
    "url": "assets/stories/large-josh.9b9e536eee.webp",
    "revision": "083404525b79930427c206138f4e41b1"
  },
  {
    "url": "assets/stories/large-shera.f4e31d9000.png",
    "revision": "f4e31d90005f7ee9008955bdf8e60d35"
  },
  {
    "url": "assets/stories/large-shera.f4e31d9000.webp",
    "revision": "0b46c9c5d3c6f7a051749e593adc0e4b"
  },
  {
    "url": "assets/stories/large-tina.cfc39270c4.png",
    "revision": "cfc39270c4634af6187895d1e7b9b4b3"
  },
  {
    "url": "assets/stories/large-tina.cfc39270c4.webp",
    "revision": "b5f9bc1eafb8af225091ad0b7fe5a81e"
  },
  {
    "url": "assets/stories/small-josh.81cdabe844.png",
    "revision": "81cdabe844a717c63ed23d55c888613a"
  },
  {
    "url": "assets/stories/small-josh.81cdabe844.webp",
    "revision": "e1cc23d88124b977102045e9e2706e31"
  },
  {
    "url": "assets/stories/small-shera.667813a987.png",
    "revision": "667813a98731bac9bb2a830a7749da5e"
  },
  {
    "url": "assets/stories/small-shera.667813a987.webp",
    "revision": "a2b11f211d46337ef777595b3ddec22d"
  },
  {
    "url": "assets/stories/small-tina.62124c9464.png",
    "revision": "62124c9464f750940f347e306c503eaf"
  },
  {
    "url": "assets/stories/small-tina.62124c9464.webp",
    "revision": "392c79a6b08109e06134a3d51647c418"
  },
  {
    "url": "assets/styleguide/hero.a1aaea5c7e.svg",
    "revision": "a1aaea5c7ed6df6c80b5c5a9ccba687e"
  },
  {
    "url": "assets/styleguide/hero.e30a0ba8a7.png",
    "revision": "e30a0ba8a7120cd90be50d3a08525e1b"
  },
  {
    "url": "assets/styleguide/hero.e30a0ba8a7.webp",
    "revision": "9ddd41e90357ef268ea61f63b83f0059"
  },
  {
    "url": "assets/team/large-ben-ow.ed9fdbd0bd.jpg",
    "revision": "ed9fdbd0bd3cf1dd1b9f2bf84d8bf476"
  },
  {
    "url": "assets/team/large-ben-ow.ed9fdbd0bd.webp",
    "revision": "e28596ffcd83efbf1b06ea798e639197"
  },
  {
    "url": "assets/team/large-bruce-macdonald.f0657b7350.jpg",
    "revision": "f0657b73500015cc2ee8cff868abc5cf"
  },
  {
    "url": "assets/team/large-bruce-macdonald.f0657b7350.webp",
    "revision": "a7f3cf9c7ec83dc057b9f78154144d10"
  },
  {
    "url": "assets/team/large-dave-kaplan.f249dad771.jpg",
    "revision": "f249dad771842e4139ffc889253241e2"
  },
  {
    "url": "assets/team/large-dave-kaplan.f249dad771.webp",
    "revision": "75ddf197bc9aa201817ac1e821beeacd"
  },
  {
    "url": "assets/team/large-diana-zhang.c60c315afb.jpg",
    "revision": "c60c315afb1ce574e4b395bd08128fcd"
  },
  {
    "url": "assets/team/large-diana-zhang.c60c315afb.webp",
    "revision": "f9d07aeccbf0019b83c4e86f20330192"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.1a55e4f8b1.jpg",
    "revision": "1a55e4f8b1f28cb93bb23caf163fa69f"
  },
  {
    "url": "assets/team/large-dmitry-kogosov.1a55e4f8b1.webp",
    "revision": "0f8937af1783fc4f46bb33cd567659f0"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.803d0e4bcb.jpg",
    "revision": "803d0e4bcb1298690dcd303a02d97d7d"
  },
  {
    "url": "assets/team/large-dmytro-ashkinazi.803d0e4bcb.webp",
    "revision": "ad1dfbc94d792a2939fbe8ddc214ae09"
  },
  {
    "url": "assets/team/large-jeff-maher.23dedb540b.jpg",
    "revision": "23dedb540b06ecf7fa2c144e57f3d4e4"
  },
  {
    "url": "assets/team/large-jeff-maher.23dedb540b.webp",
    "revision": "5c98e675e74709b45185d63e28881e38"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.64565e8576.jpg",
    "revision": "64565e8576e662cb98b8d15b6b806e73"
  },
  {
    "url": "assets/team/large-jeremy-forsberg.64565e8576.webp",
    "revision": "31752799217348aaec58be7c8cfeb2ac"
  },
  {
    "url": "assets/team/large-lee-eyerman.1cb3f563d8.jpg",
    "revision": "1cb3f563d8d2aa8355c40f57deabb41b"
  },
  {
    "url": "assets/team/large-lee-eyerman.1cb3f563d8.webp",
    "revision": "6d5dbf2392b6fdd7fe5fa32596520928"
  },
  {
    "url": "assets/team/large-michael-conn.428e8a377c.jpg",
    "revision": "428e8a377c1f4f1078aacbc1cc7aa735"
  },
  {
    "url": "assets/team/large-michael-conn.428e8a377c.webp",
    "revision": "4e8d947c234e0c709b7f5a57424b08d5"
  },
  {
    "url": "assets/team/large-rick-stiles.80257a873d.jpg",
    "revision": "80257a873d4bed2c377c7304dfac96d7"
  },
  {
    "url": "assets/team/large-rick-stiles.80257a873d.webp",
    "revision": "838f6e7705e4394dd8961cfb637230df"
  },
  {
    "url": "assets/team/large-sandy-zhou.e43e2085f9.jpg",
    "revision": "e43e2085f99af4fca34f506557120ef6"
  },
  {
    "url": "assets/team/large-sandy-zhou.e43e2085f9.webp",
    "revision": "8562609e57c104ea5fb90cc75d860912"
  },
  {
    "url": "assets/team/large-tony-tan.eea450d9d4.jpg",
    "revision": "eea450d9d4c9c6544c9f21fe1a3f35b5"
  },
  {
    "url": "assets/team/large-tony-tan.eea450d9d4.webp",
    "revision": "d7596a6a44a26a96ba48e2eeca0f9969"
  },
  {
    "url": "assets/team/small-ben-ow.4c2e1cdbdc.jpg",
    "revision": "4c2e1cdbdcfb14b1c76b6bbfd0edc3eb"
  },
  {
    "url": "assets/team/small-ben-ow.4c2e1cdbdc.webp",
    "revision": "1e51a97d88ce3351dca2eb5bf1e179db"
  },
  {
    "url": "assets/team/small-bruce-macdonald.192ddcc7f2.jpg",
    "revision": "192ddcc7f2eb6253a557f20311f15068"
  },
  {
    "url": "assets/team/small-bruce-macdonald.192ddcc7f2.webp",
    "revision": "e259e6b71e507d1016b80b0c1cb48c97"
  },
  {
    "url": "assets/team/small-dave-kaplan.56dcca24df.jpg",
    "revision": "56dcca24dfb7b59a0f28202d141836ea"
  },
  {
    "url": "assets/team/small-dave-kaplan.56dcca24df.webp",
    "revision": "2df79902eb2167dd774f5f33b3c1dfa8"
  },
  {
    "url": "assets/team/small-diana-zhang.41887176cf.jpg",
    "revision": "41887176cf263c04483bcfe6c39e2db7"
  },
  {
    "url": "assets/team/small-diana-zhang.41887176cf.webp",
    "revision": "af223c784d8e38f6016d9fe97a4950b6"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.47389980de.jpg",
    "revision": "47389980de83722078b2115ad54b75d0"
  },
  {
    "url": "assets/team/small-dmitry-kogosov.47389980de.webp",
    "revision": "73de974161051452e96a39fb6588c6a3"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.2d90d84c49.jpg",
    "revision": "2d90d84c498fa9ef75a3f317d8b0d0d4"
  },
  {
    "url": "assets/team/small-dmytro-ashkinazi.2d90d84c49.webp",
    "revision": "f70b1b37568467a6752c686c5f404504"
  },
  {
    "url": "assets/team/small-jeff-maher.9db7f12d55.jpg",
    "revision": "9db7f12d55159279e558885750fcd378"
  },
  {
    "url": "assets/team/small-jeff-maher.9db7f12d55.webp",
    "revision": "9c4860b7bc2f1ca7d21ab814708b47d6"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.006cebf1ed.jpg",
    "revision": "006cebf1ed892f382d78830afa4e096e"
  },
  {
    "url": "assets/team/small-jeremy-forsberg.006cebf1ed.webp",
    "revision": "617838171870fcb8ced5fffe2a27ec59"
  },
  {
    "url": "assets/team/small-lee-eyerman.0aa105bb76.jpg",
    "revision": "0aa105bb76ef716f85212a1c7f13338d"
  },
  {
    "url": "assets/team/small-lee-eyerman.0aa105bb76.webp",
    "revision": "6c13717e621c760d02969fa600151f42"
  },
  {
    "url": "assets/team/small-michael-conn.17a81eaf25.jpg",
    "revision": "17a81eaf252dea7e3c11a67905095d3e"
  },
  {
    "url": "assets/team/small-michael-conn.17a81eaf25.webp",
    "revision": "d2b721bdf177249300fc261dddfad0ce"
  },
  {
    "url": "assets/team/small-rick-stiles.397d387c7d.jpg",
    "revision": "397d387c7dc2659770ced946ebba8691"
  },
  {
    "url": "assets/team/small-rick-stiles.397d387c7d.webp",
    "revision": "a36183fd0d4b259a07b95938031f5b6d"
  },
  {
    "url": "assets/team/small-sandy-zhou.49d499784a.jpg",
    "revision": "49d499784a9237d4083b3fd651bedc29"
  },
  {
    "url": "assets/team/small-sandy-zhou.49d499784a.webp",
    "revision": "573d0ca1323d955149c2d1e19ec1505a"
  },
  {
    "url": "assets/team/small-tony-tan.ad60e8ace3.jpg",
    "revision": "ad60e8ace3edd92a6f782f0e6b4251b1"
  },
  {
    "url": "assets/team/small-tony-tan.ad60e8ace3.webp",
    "revision": "33204e7fb12b75033f026fa7be848279"
  },
  {
    "url": "dialog/press.html",
    "revision": "230a84f5355244d91e3528cd19f2c35b"
  },
  {
    "url": "dialog/privacy-policy.html",
    "revision": "69545a1524bcee260da802bc58d93939"
  },
  {
    "url": "dialog/sample.html",
    "revision": "81719032b7bb1e8c32d0f7a55488d4ab"
  },
  {
    "url": "dialog/stories.html",
    "revision": "882478b4f4f7e506bd7b8f8ab8cd7f40"
  },
  {
    "url": "dialog/team.html",
    "revision": "fa0b8873d3b7b5a016d5cbb30d39c870"
  },
  {
    "url": "dialog/whitepaper.html",
    "revision": "f48cc8ddfbe344615ee678591acba100"
  },
  {
    "url": "error.html",
    "revision": "b468ed0f97309c505bf514f7c3e8e663"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.png",
    "revision": "da3bf8b8d321911850ba3a847ad67812"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/fontawesome-webfont.webp",
    "revision": "d70f227bd3cda1d6ce7e55cc31022dcf"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fonts/fontawesome.css",
    "revision": "bc475e82b8a88fdcc4b1f9f3a0bf8919"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "index.html",
    "revision": "46d018af7c48b21ed1bda2588e16f4cb"
  },
  {
    "url": "sample.html",
    "revision": "8cc9de5ec3146f6b47f78a09afd5a943"
  },
  {
    "url": "scripts/app.2b63df8c28.min.css",
    "revision": "bc93945e328ea27aec3a900de843a2e8"
  },
  {
    "url": "scripts/app.a734594b3d.min.js",
    "revision": "a734594b3dc2885f7a4daec0aa016d98"
  },
  {
    "url": "scripts/styleguide.1fed2643ad.min.css",
    "revision": "fe78b991eea8a258e2f92835214d1dba"
  },
  {
    "url": "scripts/styleguide.be24a257be.min.js",
    "revision": "be24a257be4e8458e806c4a35f0f4e98"
  },
  {
    "url": "styleguide.html",
    "revision": "be89ec6f1593b96424aa154e9ca243f7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
