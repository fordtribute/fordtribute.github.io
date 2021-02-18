const FordWebApp = "Ford WebApp-site-v1"
const assets = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/app.js",
    "./images/01.jpg",
    "./images/02.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/05.jpg",
    "./images/06.jpg",
    "./images/07.jpg",
    "./images/08.jpg",
    "./images/09.jpg",

    ]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticFordWebApp).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})