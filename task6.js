const pear = document.querySelector("#pear")
const apple = document.querySelector("#apple")
const orange = document.querySelector("#orange")
const chik = document.querySelector("#chik")
const meattt = document.querySelector("#meattt")
const bigImage = document.querySelector("#big-image")

pear.addEventListener("click", () => {
    bigImage.src = pear.scr
})
apple.addEventListener("click", () => {
    bigImage.src = apple.src
})
orange.addEventListener("click", () => {
    bigImage.src = orange.src
})
chik.addEventListener("click", () => {
    bigImage.src = chik.src
})
