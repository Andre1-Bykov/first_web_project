'use strict'

const slides = document.querySelectorAll(".slide")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const dotsContainer = document.getElementById("dots")

let current = 0



/* создаём точки */

slides.forEach((slide, index) => {

    const dot = document.createElement("span")

    dot.classList.add("dot")

    if (index === 0) {
        dot.classList.add("active")
    }

    dot.addEventListener("click", () => {   

        current = index
        showSlide()

    })

    dotsContainer.appendChild(dot)

})


const dots = document.querySelectorAll(".dot")



function showSlide() {

    slides.forEach(slide => {
        slide.classList.remove("active")
    })

    dots.forEach(dot => {
        dot.classList.remove("active")
    })

    slides[current].classList.add("active")
    dots[current].classList.add("active")

}



/* кнопка вперед */

nextBtn.onclick = () => {

    current++

    if (current >= slides.length) {
        current = 0
    }

    showSlide()

}



/* кнопка назад */

prevBtn.onclick = () => {

    current--

    if (current < 0) {
        current = slides.length - 1
    }

    showSlide()

}



/* автослайдер */

setInterval(() => {

    current++

    if (current >= slides.length) {
        current = 0
    }

    showSlide()

}, 6000)

const saleDaysSpan = document.getElementById('saleDays')
const saleHoursSpan = document.getElementById('saleHours')
const saleMinutesSpan = document.getElementById('saleMinutes')
const saleSecondsSpan = document.getElementById('saleSeconds')

const dayMilliseconds = 86400000
const hourMilliseconds = 3600000
const minuteMilliseconds = 60000

const endSaleTime = Date.now() + 3 * dayMilliseconds


function updateSaleDate() {
    let rest = endSaleTime - Date.now()

    let days = Math.floor(rest / dayMilliseconds)
    rest -= days * dayMilliseconds

    let hours = Math.floor(rest / hourMilliseconds)
    rest -= hours * hourMilliseconds

    let minutes = Math.floor(rest / minuteMilliseconds)
    rest -= minutes * minuteMilliseconds

    let seconds = Math.ceil(rest / 1000)

    saleDaysSpan.innerText = days
    saleHoursSpan.innerText = hours
    saleMinutesSpan.innerText = formatTo00(minutes)
    saleSecondsSpan.innerText = formatTo00(seconds)
}

function formatTo00(number){
    if(number < 10) return '0' + number
    return number
}

updateSaleDate()
setInterval(updateSaleDate,1000)