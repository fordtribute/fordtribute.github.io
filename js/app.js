const container = document.querySelector(".container")
const cars = [
    { name: "Car1", image: "./images/01.jpg"},
    { name: "Car2", image: "./images/02.jpg"},
    { name: "Car3", image: "./images/03.jpg"},
    { name: "Car4", image: "./images/04.jpg"},
    { name: "Car5", image: "./images/05.jpg"},
    { name: "Car6", image: "./images/06.jpg"},
    { name: "Car7", image: "./images/07.jpg"},
    { name: "Car8", image: "./images/08.jpg"},
    { name: "Car9", image: "./images/09.jpg"},
]

const showcars = () => {
    let output = ""
    cars.forEach(
        ({ name, image}) =>
        (output += `
            <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">Model</a>
            </div>
            `)
    )
    container.innerHTML = output
}
  
document.addEventListener("DOMContentLoaded", showcars)

  if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
          navigator.serviceWorker
          .register("/serviceWorker.js")
          .then(res => console.log("service worker registered"))
          .catch(err => console.log("service worker not registered", err))
      })
  }